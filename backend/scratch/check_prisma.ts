import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  console.log('--- Jogo Model Fields ---');
  // @ts-ignore
  console.log(Object.keys(prisma.jogo));
  
  console.log('--- Campeonato Model Fields ---');
  // @ts-ignore
  console.log(Object.keys(prisma.campeonato));
}

check().then(() => process.exit(0));
