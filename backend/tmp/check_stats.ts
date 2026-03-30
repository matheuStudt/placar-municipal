import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const id = 7;

    const eventos = await prisma.evento.findMany({
        where: { jogo: { rodada: { campeonatoId: id } } }
    });
    const jogos = await prisma.jogo.findMany({
        where: { rodada: { campeonatoId: id }, status: 'Finalizado' }
    });
    const parts = await prisma.participacao.findMany({ where: { campeonatoId: id } });

    const atletasComGols = new Set(eventos.filter(e => e.gols > 0).map(e => e.atletaId));
    const timesComCartao = new Set(
        eventos.filter(e => e.am > 0 || e.vm > 0).map(e => e.atletaId)
    );

    console.log('=== DIAGNOSTICO ESTATISTICAS ===');
    console.log('Total eventos no DB:', eventos.length);
    console.log('Atletas com gols (artilharia):', atletasComGols.size);
    console.log('Eventos com cartoes:', eventos.filter(e => e.am > 0 || e.vm > 0).length);
    console.log('Jogos finalizados (defesa):', jogos.length);
    console.log('Times inscritos no campeonato:', parts.length);
    console.log('Times unicos nos jogos:', new Set([
        ...jogos.filter(j => j.mandanteId).map(j => j.mandanteId),
        ...jogos.filter(j => j.visitanteId).map(j => j.visitanteId)
    ]).size);

    await prisma.$disconnect();
}

main().catch(console.error);
