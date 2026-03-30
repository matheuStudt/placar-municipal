import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const jogo = await prisma.jogo.findUnique({
    where: { id: 2 },
    include: { rodada: true }
  });
  console.log("JOGO:", jogo);
  console.dir(jogo?.rodada);
  console.log("campeonatoId:", jogo?.rodada?.campeonatoId);
}
main().finally(() => prisma.$disconnect());
