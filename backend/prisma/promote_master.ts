import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function promoteToMaster() {
  const email = process.argv[2];

  if (!email) {
    console.error("Uso: npx tsx prisma/promote_master.ts <email_do_usuario>");
    process.exit(1);
  }

  try {
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      console.error(`Usuário com email '${email}' não encontrado.`);
      process.exit(1);
    }

    const updatedUser = await prisma.usuario.update({
      where: { email },
      data: { role: 'MASTER' },
    });

    console.log(`✅ Sucesso! Usuário '${updatedUser.email}' promovido para MASTER.`);
  } catch (error) {
    console.error("Erro ao promover usuário:", error);
  } finally {
    await prisma.$disconnect();
  }
}

promoteToMaster();
