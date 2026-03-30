import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const id = 7;

async function check() {
    try {
        const participacoes = await prisma.participacao.findMany({
            where: { campeonatoId: id, chave: 'A' },
            include: { equipe: true }
        });

        const jogos = await prisma.jogo.findMany({
            where: { 
                rodada: { campeonatoId: id },
                status: 'Finalizado' 
            }
        });

        const tabela = {};
        participacoes.forEach(p => {
            if (p.equipe) {
                tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 };
            }
        });

        jogos.forEach(j => {
            if (j.mandanteId !== null && j.visitanteId !== null) {
                const mId = j.mandanteId;
                const vId = j.visitanteId;
                if (tabela[mId] && tabela[vId] && j.chave === 'A') {
                    tabela[mId].j++; tabela[vId].j++;
                    tabela[mId].gp += j.golsMandante; tabela[mId].gc += j.golsVisitante;
                    tabela[vId].gp += j.golsVisitante; tabela[vId].gc += j.golsMandante;
                    if (j.golsMandante > j.golsVisitante) { tabela[mId].p += 3; tabela[mId].v++; }
                    else if (j.golsMandante < j.golsVisitante) { tabela[vId].p += 3; tabela[vId].v++; }
                    else { tabela[mId].p += 1; tabela[vId].p += 1; }
                }
            }
        });

        const resultado = Object.values(tabela);
        
        console.log('--- GRUPO A ---');
        resultado.forEach(r => {
            console.log(`${r.nome.padEnd(25)} | P: ${String(r.p).padStart(2)} | V: ${r.v} | GS: ${String(r.gc).padStart(2)} | GP: ${String(r.gp).padStart(2)}`);
        });

        resultado.sort((a, b) => (b.p - a.p) || (b.v - a.v) || (a.gc - b.gc) || (b.gp - a.gp));

        console.log('\n--- ORDEM ESPERADA (BACKEND ATUAL) ---');
        resultado.forEach((r, i) => {
            console.log(`${i+1}º: ${r.nome.padEnd(25)} | P: ${r.p} | V: ${r.v} | GS: ${r.gc} | GP: ${r.gp}`);
        });

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

check();
