import { PrismaClient } from '@prisma/client';

// Usa a mesma config do servidor (via .env)
const prisma = new PrismaClient();

async function main() {
    // Criar/atualizar prefeituras
    await prisma.prefeitura.upsert({
        where: { slug: 'itajai' },
        update: { nome: 'Itajaí' },
        create: { nome: 'Itajaí', slug: 'itajai', corPrimaria: '#0d6efd', corSecundaria: '#6c757d' }
    });

    await prisma.prefeitura.upsert({
        where: { slug: 'balneario' },
        update: { nome: 'Balneário Camboriú' },
        create: { nome: 'Balneário Camboriú', slug: 'balneario', corPrimaria: '#198754', corSecundaria: '#ffc107' }
    });

    const pref1 = await prisma.prefeitura.findUnique({ where: { slug: 'itajai' } });
    const pref2 = await prisma.prefeitura.findUnique({ where: { slug: 'balneario' } });

    console.log('Prefeituras:', pref1?.id, pref2?.id);

    // Criar/atualizar usuários
    await prisma.usuario.upsert({
        where: { email: 'admin@admin.com' },
        update: { senha: 'admin', prefeituraId: pref1!.id },
        create: { email: 'admin@admin.com', senha: 'admin', prefeituraId: pref1!.id }
    });

    await prisma.usuario.upsert({
        where: { email: 'admin' },
        update: { senha: '123', prefeituraId: pref1!.id },
        create: { email: 'admin', senha: '123', prefeituraId: pref1!.id }
    });

    await prisma.usuario.upsert({
        where: { email: 'balneario@admin.com' },
        update: { senha: '123', prefeituraId: pref2!.id },
        create: { email: 'balneario@admin.com', senha: '123', prefeituraId: pref2!.id }
    });

    // Verificar
    const users = await prisma.usuario.findMany({ include: { prefeitura: true } });
    console.log('Usuários criados:');
    users.forEach(u => console.log(` - ${u.email} / ${u.senha} → Prefeitura: ${u.prefeitura?.nome} (slug: ${u.prefeitura?.slug})`));
}

main()
    .catch(e => console.error('ERRO:', e.message))
    .finally(() => prisma.$disconnect());
