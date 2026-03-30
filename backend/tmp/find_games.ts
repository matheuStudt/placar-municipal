import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const teamId = 18; // Odonto Excellence
    const campId = 7;

    const jogos = await prisma.jogo.findMany({
        where: {
            OR: [
                { mandanteId: teamId },
                { visitanteId: teamId }
            ],
            rodada: { campeonatoId: campId },
            status: 'Finalizado'
        },
        include: {
            rodada: true
        }
    });

    console.log('--- JOGOS DA ODONTO EXCELLENCE ---');
    jogos.forEach(j => {
        const gols = j.mandanteId === teamId ? j.golsMandante : j.golsVisitante;
        console.log(`Jogo ID: ${j.id} | ${j.mandanteNome} ${j.golsMandante} x ${j.golsVisitante} ${j.visitanteNome} | Gols Odonto: ${gols}`);
    });

    await prisma.$disconnect();
}

main();
