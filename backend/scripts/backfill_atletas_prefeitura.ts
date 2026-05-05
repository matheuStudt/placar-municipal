import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Verificar duplicatas de CPF não-nulo por prefeitura
    const duplicatas = await prisma.$queryRawUnsafe<any[]>(`
        SELECT cpf, "prefeituraId", COUNT(*) as total
        FROM "Atleta"
        WHERE cpf IS NOT NULL
        GROUP BY cpf, "prefeituraId"
        HAVING COUNT(*) > 1
        ORDER BY total DESC
        LIMIT 20
    `);

    if (duplicatas.length === 0) {
        console.log('✅ Nenhuma duplicata de CPF por prefeitura. Seguro aplicar o unique.');
    } else {
        console.log(`⚠️  ${duplicatas.length} grupo(s) com CPF duplicado na mesma prefeitura:`);
        console.log(JSON.stringify(duplicatas, null, 2));

        // Resolver: manter apenas o atleta de maior ID em cada grupo duplicado
        for (const dup of duplicatas) {
            const registros = await prisma.atleta.findMany({
                where: { cpf: dup.cpf, prefeituraId: Number(dup.prefeituraId) },
                orderBy: { id: 'desc' }
            });
            // Mantém o primeiro (maior id), nulifica cpf dos demais
            const [, ...extras] = registros;
            for (const extra of extras) {
                await prisma.atleta.update({ where: { id: extra.id }, data: { cpf: null } });
                console.log(`  → Atleta ID=${extra.id} (${extra.nome}): CPF ${extra.cpf} → null (duplicata removida)`);
            }
        }
        console.log('\n✅ Duplicatas resolvidas. Pode aplicar o db push agora.');
    }
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
