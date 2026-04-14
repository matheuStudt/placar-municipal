import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || '';

// Se as variáveis não estiverem setadas, evita quebrar a subida do servidor, mas falhará na hora da chamada.
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const BUCKET_NAME = 'logos';
const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

// Garante que o bucket existe e é público ao iniciar (roda uma vez)
async function ensureBucketExists() {
    if (!supabase) return;
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some(b => b.name === BUCKET_NAME);
    if (!exists) {
        const { error } = await supabase.storage.createBucket(BUCKET_NAME, { public: true });
        if (error) {
            console.error(`[UPLOAD] Falha ao criar bucket "${BUCKET_NAME}":`, error.message);
        } else {
            console.log(`[UPLOAD] Bucket "${BUCKET_NAME}" criado com sucesso e definido como público.`);
        }
    }
}

ensureBucketExists();

export const uploadLogo = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!supabase) {
            res.status(500).json({ error: 'Integração com Supabase Storage não configurada no .env (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY).' });
            return;
        }

        if (!req.file) {
            res.status(400).json({ error: 'Nenhum arquivo enviado.' });
            return;
        }

        const file = req.file;

        // Validação de tipo
        if (!ALLOWED_TYPES.includes(file.mimetype)) {
            res.status(400).json({ error: `Tipo de arquivo não permitido. Use: JPG, PNG, WEBP, GIF ou SVG.` });
            return;
        }

        // Validação de tamanho (máx. 5MB)
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            res.status(400).json({ error: `O arquivo é muito grande. Tamanho máximo: ${MAX_FILE_SIZE_MB}MB.` });
            return;
        }

        const fileExt = file.originalname.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;

        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(fileName, file.buffer, {
                contentType: file.mimetype,
                upsert: false
            });

        if (error) {
            console.error('[UPLOAD] Erro no Supabase Storage:', error);
            res.status(500).json({ error: 'Erro ao salvar a imagem no Storage. Tente novamente.' });
            return;
        }

        const { data: publicUrlData } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(fileName);

        res.json({ url: publicUrlData.publicUrl });
    } catch (e) {
        console.error('[UPLOAD] Erro interno:', e);
        res.status(500).json({ error: 'Erro interno ao processar upload.' });
    }
};
