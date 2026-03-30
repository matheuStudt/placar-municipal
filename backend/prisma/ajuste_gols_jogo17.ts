import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const JOGO_ID = 17;

const retirar = ['DANRLEI BECKER', 'LEANDRO TERHORST', 'MARCIEL HEISER'];

const adicionar = [
  { nome: 'DIONATAN GOLDBECK', gols: 1 },
  { nome: 'LEONARDO KLUNK', gols: 2 },
  { nome: 'MARCOS GREGORY', gols: 1 },
];

async function main() {
  console.log(`🔄 Ajustando gols do Jogo ${JOGO_ID}...`);

  // --- RETIRAR GOLS ---
  for (const nome of retirar) {
    const atleta = await prisma.atleta.findFirst({ where: { nome } });
    if (!atleta) {
      console.warn(`⚠️  Atleta não encontrado: ${nome}`);
      continue;
    }

    const evento = await prisma.evento.findFirst({
      where: { jogoId: JOGO_ID, atletaId: atleta.id },
    });

    if (!evento) {
      console.warn(`⚠️  Evento não encontrado para ${nome} no jogo ${JOGO_ID}`);
      continue;
    }

    const novosGols = Math.max(0, evento.gols - evento.gols); // zerar gols
    if (evento.gols === 0 && evento.gc === 0 && evento.am === 0 && evento.vm === 0) {
      // Evento vazio, remover
      await prisma.evento.delete({ where: { id: evento.id } });
      console.log(`🗑️  Evento removido para ${nome}`);
    } else {
      await prisma.evento.update({
        where: { id: evento.id },
        data: { gols: 0 },
      });
      console.log(`✅ Gols zerados para ${nome}`);
    }
  }

  // --- ADICIONAR GOLS ---
  for (const { nome, gols } of adicionar) {
    const atleta = await prisma.atleta.findFirst({ where: { nome } });
    if (!atleta) {
      console.warn(`⚠️  Atleta não encontrado: ${nome}`);
      continue;
    }

    const eventoExistente = await prisma.evento.findFirst({
      where: { jogoId: JOGO_ID, atletaId: atleta.id },
    });

    if (eventoExistente) {
      await prisma.evento.update({
        where: { id: eventoExistente.id },
        data: { gols: eventoExistente.gols + gols },
      });
      console.log(`⚽ ${nome}: ${eventoExistente.gols} → ${eventoExistente.gols + gols} gols`);
    } else {
      await prisma.evento.create({
        data: {
          jogoId: JOGO_ID,
          atletaId: atleta.id,
          gols,
        },
      });
      console.log(`⚽ ${nome}: +${gols} gol(s) (evento criado)`);
    }
  }

  console.log('🚀 Ajuste concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
