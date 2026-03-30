import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const id = 7;

async function check() {
    try {
        const participacoes = await prisma.participacao.findMany({
            where: { campeonatoId: id },
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
                tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, chave: p.chave, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
            }
        });

        jogos.forEach(j => {
            if (j.mandanteId !== null && j.visitanteId !== null) {
                const mId = j.mandanteId;
                const vId = j.visitanteId;
                if (tabela[mId] && tabela[vId]) {
                    tabela[mId].j++; tabela[vId].j++;
                    tabela[mId].gp += j.golsMandante; tabela[mId].gc += j.golsVisitante;
                    tabela[vId].gp += j.golsVisitante; tabela[vId].gc += j.golsMandante;
                    if (j.golsMandante > j.golsVisitante) { tabela[mId].p += 3; tabela[mId].v++; tabela[vId].d++; }
                    else if (j.golsMandante < j.golsVisitante) { tabela[vId].p += 3; tabela[vId].v++; tabela[mId].d++; }
                    else { tabela[mId].p += 1; tabela[vId].p += 1; tabela[mId].e++; tabela[vId].e++; }
                }
            }
        });

        const resultado = Object.values(tabela).filter(r => r.chave === 'A');
        
        console.log('--- DADOS BRUTOS (GRUPO A) ---');
        resultado.forEach(r => {
            console.log(`Time: ${r.nome}, P: ${r.p}, V: ${r.v}, GS: ${r.gc}, GP: ${r.gp}`);
        });

        resultado.sort((a, b) => (b.p - a.p) || (b.v - a.v) || (a.gc - b.gc) || (b.gp - a.gp));

        console.log('\n--- CLASSIFICACAO FINAL ---');
        resultado.forEach((r, i) => {
            console.log(`${i+1}º: ${r.nome}, P: ${r.p}, V: ${r.v}, GS: ${r.gc}, GP: ${r.gp}`);
        });

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

check();
