import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
const BUCKET_NAME = 'logos';
const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
// Lazy initialization: lê as vars no momento da chamada (após dotenv.config rodar)
function getClient() {
    const url = process.env.SUPABASE_URL || '';
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
    if (!url || !key)
        return null;
    return createClient(url, key);
}
// Exportada para ser chamada no server.ts DEPOIS do dotenv.config()
export async function initStorage() {
    const client = getClient();
    if (!client) {
        console.warn('[UPLOAD] ⚠️  SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configurados - upload de logos desativado.');
        return;
    }
    try {
        const { data: buckets, error: listError } = await client.storage.listBuckets();
        if (listError)
            throw listError;
        const exists = buckets?.some(b => b.name === BUCKET_NAME);
        if (!exists) {
            const { error } = await client.storage.createBucket(BUCKET_NAME, { public: true });
            if (error) {
                console.error(`[UPLOAD] Falha ao criar bucket "${BUCKET_NAME}":`, error.message);
            }
            else {
                console.log(`[UPLOAD] ✅ Bucket "${BUCKET_NAME}" criado e definido como público.`);
            }
        }
        else {
            console.log(`[UPLOAD] ✅ Bucket "${BUCKET_NAME}" já existe.`);
        }
    }
    catch (e) {
        console.error('[UPLOAD] Erro ao inicializar Storage:', e?.message || e);
    }
}
export const uploadLogo = async (req, res) => {
    const supabase = getClient();
    try {
        if (!supabase) {
            res.status(500).json({ error: 'Upload não configurado no servidor. Contate o administrador.' });
            return;
        }
        if (!req.file) {
            res.status(400).json({ error: 'Nenhum arquivo enviado.' });
            return;
        }
        const file = req.file;
        if (!ALLOWED_TYPES.includes(file.mimetype)) {
            res.status(400).json({ error: 'Tipo de arquivo não permitido. Use: JPG, PNG, WEBP, GIF ou SVG.' });
            return;
        }
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            res.status(400).json({ error: `Arquivo muito grande. Tamanho máximo: ${MAX_FILE_SIZE_MB}MB.` });
            return;
        }
        const fileExt = file.originalname.split('.').pop() || 'png';
        const fileName = `${uuidv4()}.${fileExt}`;
        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: false
        });
        if (error) {
            console.error('[UPLOAD] Erro no Supabase Storage:', error);
            res.status(500).json({ error: 'Erro ao salvar imagem. Tente novamente.' });
            return;
        }
        const { data: publicUrlData } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(fileName);
        res.json({ url: publicUrlData.publicUrl });
    }
    catch (e) {
        console.error('[UPLOAD] Erro interno:', e?.message || e);
        res.status(500).json({ error: 'Erro interno ao processar upload.' });
    }
};
