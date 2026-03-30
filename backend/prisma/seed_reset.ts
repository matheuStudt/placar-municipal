import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Iniciando limpeza completa do banco de dados...');

  // Limpar todas as tabelas em ordem reversa de dependência
  try {
    await prisma.evento.deleteMany({});
    await prisma.jogo.deleteMany({});
    await prisma.rodada.deleteMany({});
    await prisma.vinculo.deleteMany({});
    await prisma.atleta.deleteMany({});
    await prisma.participacao.deleteMany({});
    await prisma.campeonato.deleteMany({});
    await prisma.equipe.deleteMany({});
    await prisma.usuario.deleteMany({});
    await prisma.prefeitura.deleteMany({});
    
    console.log('✅ Banco de dados limpo.');

    // Criar o Super Administrador solicitado
    const admin = await prisma.usuario.create({
      data: {
        email: 'admin@master.com',
        senha: 'admin',
        prefeituraId: null // Super Admin
      }
    });

    console.log('👤 Usuário Admin criado:', admin.email);
    console.log('🚀 Operação concluída com sucesso!');
  } catch (e) {
    console.error('❌ Erro durante o reset:', e);
    throw e;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
