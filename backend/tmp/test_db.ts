import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import dotenv from 'dotenv';
dotenv.config({ path: new URL('../../.env', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });

async function check() {
    console.log('[DEBUG SCRIPT] DATABASE_URL:', process.env.DATABASE_URL);
    const slug = 'mondai';
    const pref = await (prisma as any).prefeitura.findFirst({ where: { slug } });
    if (!pref) {
        console.log('Prefeitura not found for slug:', slug);
        return;
    }
    console.log('Prefeitura ID:', pref.id);

    const camps = await (prisma as any).campeonato.findMany({ where: { prefeituraId: pref.id } });
    
    for (const c of camps) {
        const eventos = await (prisma as any).evento.findMany({
            where: { jogo: { rodada: { campeonatoId: c.id } } },
            include: { atleta: true }
        });

        const artMap: Record<number, {nome: string, gols: number}> = {};
        eventos.forEach((e: any) => {
            if (e.gols > 0) {
                if (!artMap[e.atletaId!]) artMap[e.atletaId!] = { nome: e.atleta.nome, gols: 0 };
                artMap[e.atletaId!].gols += e.gols;
            }
        });

        const lista = Object.values(artMap).sort((a, b) => b.gols - a.gols);
        console.log(`\nCampeonato ${c.id} (${c.nome}): ${lista.length} atletas com gols`);
        console.log('Top 15:', JSON.stringify(lista.slice(0, 15), null, 2));
    }
}

check().then(() => prisma.$disconnect());
