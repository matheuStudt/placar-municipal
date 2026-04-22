CREATE TABLE "PerfilAcesso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "permissoes" JSONB NOT NULL,
    "prefeituraId" INTEGER NOT NULL,

    CONSTRAINT "PerfilAcesso_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Usuario" ADD COLUMN "perfilId" INTEGER;

ALTER TABLE "PerfilAcesso" ADD CONSTRAINT "PerfilAcesso_prefeituraId_fkey" FOREIGN KEY ("prefeituraId") REFERENCES "Prefeitura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "PerfilAcesso"("id") ON DELETE SET NULL ON UPDATE CASCADE;
