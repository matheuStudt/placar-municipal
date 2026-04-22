-- Migration cirúrgica: adiciona role em Usuario e cria HistoricoEdicaoSumula
-- Seguro para produção — não remove nem altera dados existentes

-- 1. Adicionar campo role na tabela Usuario (se ainda não existir)
ALTER TABLE "Usuario"
  ADD COLUMN IF NOT EXISTS "role" TEXT NOT NULL DEFAULT 'COMUM';

-- 2. Criar tabela HistoricoEdicaoSumula (se ainda não existir)
CREATE TABLE IF NOT EXISTS "HistoricoEdicaoSumula" (
  "id"         SERIAL PRIMARY KEY,
  "usuarioId"  INTEGER NOT NULL REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  "jogoId"     INTEGER NOT NULL REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  "dataEdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "motivo"     TEXT
);
