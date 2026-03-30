import { PrismaClient as PrismaMulti } from '@prisma/client';
import { PrismaClient as PrismaOld } from './node_modules/@prisma/client'; // This might not work if client is regenerated
// Better approach: use a temporary script with raw sqlite if needed, 
// or just create the default prefeitura and let the user re-add or we re-add via a simpler script.

// Let's just create the default prefeitura first.
const prisma = new PrismaMulti({
    datasources: { db: { url: 'file:C:/Users/sistemas1/Desktop/Particular/Projeto_Web/placar-municipal/backend/prisma/multi.db' } }
});

async function main() {
    const pref1 = await prisma.prefeitura.upsert({
        where: { id: 1 },
        update: { nome: "Itajaí", slug: "itajai" },
        create: {
            id: 1,
            nome: "Itajaí",
            slug: "itajai",
            corPrimaria: "#0d6efd",
            corSecundaria: "#6c757d"
        }
    });
    console.log("Prefeitura 1 (Itajaí) ok.");

    const pref2 = await prisma.prefeitura.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            nome: "Balneário Camboriú",
            slug: "balneario",
            corPrimaria: "#198754",
            corSecundaria: "#ffc107"
        }
    });
    console.log("Prefeitura 2 (Balneário) ok.");

    // If I wanted to migrate data, I would need a second client pointing to dev_old.db
    // But since I don't want to risk node_modules issues, I'll just create a user too.
    await prisma.usuario.upsert({
        where: { email: 'admin@admin.com' },
        update: { senha: 'admin' },
        create: {
            email: 'admin@admin.com',
            senha: 'admin',
            prefeituraId: 1
        }
    });

    await prisma.usuario.upsert({
        where: { email: 'admin' },
        update: { senha: '123' },
        create: {
            email: 'admin',
            senha: '123',
            prefeituraId: 1
        }
    });

    await prisma.usuario.upsert({
        where: { email: 'balneario@admin.com' },
        update: { senha: '123' },
        create: {
            email: 'balneario@admin.com',
            senha: '123',
            prefeituraId: 2
        }
    });

    console.log("Administradores configurados.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
