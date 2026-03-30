/// <reference types="node" />
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o seed do banco de dados...');

  // 1. Campeonatos
  const campeonato1 = await prisma.campeonato.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Campeonato Municipal Amador',
      ano: 2026,
      formato: 'Grupo + Mata-Mata',
    },
  });

  // 2. Equipes
  const equipe1 = await prisma.equipe.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Vila Nova F.C.',
      responsavel: 'Carlos Silva',
      telefone: '(19) 99888-7766',
    },
  });

  const equipe2 = await prisma.equipe.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: 'Atlético Municipal',
      responsavel: 'João Ricardo',
      telefone: '(19) 98765-4321',
    },
  });

  // 3. Participações
  await prisma.participacao.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, equipeId: equipe1.id, campeonatoId: campeonato1.id },
  });

  await prisma.participacao.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, equipeId: equipe2.id, campeonatoId: campeonato1.id },
  });

  // 4. Atletas
  const atleta1 = await prisma.atleta.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, nome: 'João Silva', cpf: '123.456.789-00', numero: '10' },
  });

  const atleta2 = await prisma.atleta.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, nome: 'Ricardo G.', cpf: '234.567.890-11', numero: '01' },
  });

  const atleta3 = await prisma.atleta.upsert({
    where: { id: 3 },
    update: {},
    create: { id: 3, nome: 'Mateus Lima', cpf: '345.678.901-22', numero: '07' },
  });

  // 5. Vínculos
  await prisma.vinculo.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, atletaId: atleta1.id, equipeId: equipe1.id, tipo: 'Jogador de Linha' },
  });

  await prisma.vinculo.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, atletaId: atleta2.id, equipeId: equipe1.id, tipo: 'Goleiro' },
  });

  await prisma.vinculo.upsert({
    where: { id: 3 },
    update: {},
    create: { id: 3, atletaId: atleta3.id, equipeId: equipe2.id, tipo: 'Jogador de Linha' },
  });

  // 6. Jogos
  await prisma.jogo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      numero: 1,
      campeonatoId: campeonato1.id,
      mandanteId: equipe1.id,
      mandanteNome: equipe1.nome,
      visitanteId: equipe2.id,
      visitanteNome: equipe2.nome,
      golsMandante: 0,
      golsVisitante: 0,
      status: 'Agendado',
    },
  });

  console.log('Seed do banco de dados concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
