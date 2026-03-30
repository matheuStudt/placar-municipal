import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const teamId = 18;
  const jogos = await prisma.jogo.findMany({
    where: {
      OR: [{ mandanteId: teamId }, { visitanteId: teamId }],
      status: 'Finalizado'
    }
  });

  console.log('--- JOGOS DA ODONTO EXCELLENCE ---');
  jogos.forEach(j => {
    console.log(`ID: ${j.id} | ${j.mandanteNome} ${j.golsMandante} x ${j.golsVisitante} ${j.visitanteNome}`);
  });

  await prisma.$disconnect();
}

main().catch(console.error);
