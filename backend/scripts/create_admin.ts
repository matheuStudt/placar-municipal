import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    console.log("Verificando existencia de super admin...");
    let admin = await prisma.usuario.findFirst({ where: { prefeituraId: null } });
    if (!admin) {
        admin = await prisma.usuario.create({
            data: {
                email: "admin@master.com",
                senha: "admin"
            }
        });
        console.log("Super admin criado: admin@master.com / admin");
    } else {
        console.log("Admin encontrado:", admin.email);
        await prisma.usuario.update({
            where: { id: admin.id },
            data: { senha: "admin" } // reset pass just in case
        });
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
