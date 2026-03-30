import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    datasources: { db: { url: 'file:C:/Users/sistemas1/Desktop/Particular/Projeto_Web/placar-municipal/backend/prisma/multi.db' } }
});

async function main() {
    const users = await prisma.usuario.findMany();
    console.log("=== USUARIOS ===");
    users.forEach(u => console.log(`ID: ${u.id}, Email: ${u.email}, Senha: ${u.senha}, PrefId: ${u.prefeituraId}`));
    const prefs = await prisma.prefeitura.findMany();
    console.log("=== PREFEITURAS ===");
    prefs.forEach(p => console.log(`ID: ${p.id}, Nome: ${p.nome}, Slug: ${p.slug}`));
}

main().catch(console.error).finally(() => prisma.$disconnect());
