import { Request, Response } from 'express';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const ALLOWED_TYPES = [
    'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml',
    'application/pdf'
];
// Lazy initialization: lê as vars no momento da chamada (após dotenv.config rodar)
function getClient(): SupabaseClient | null {
    const url = process.env.SUPABASE_URL || '';
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
    if (!url || !key) return null;
    return createClient(url, key);
}

// Exportada para ser chamada no server.ts DEPOIS do dotenv.config()
export async function initStorage(): Promise<void> {
    const client = getClient();
    if (!client) {
        console.warn('[UPLOAD] ⚠️  SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configurados - upload de logos desativado.');
        return;
    }
    try {
        const requiredBuckets = ['logos', 'documentos', 'sumulas'];
        const { data: buckets, error: listError } = await client.storage.listBuckets();
        if (listError) throw listError;

        for (const bName of requiredBuckets) {
            const exists = buckets?.some(b => b.name === bName);
            if (!exists) {
                const { error } = await client.storage.createBucket(bName, { public: true });
                if (error) {
                    console.error(`[UPLOAD] Falha ao criar bucket "${bName}":`, error.message);
                } else {
                    console.log(`[UPLOAD] ✅ Bucket "${bName}" criado e definido como público.`);
                }
            } else {
                console.log(`[UPLOAD] ✅ Bucket "${bName}" já existe.`);
            }
        }
    } catch (e: any) {
        console.error('[UPLOAD] Erro ao inicializar Storage:', e?.message || e);
    }
}

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
    const supabase = getClient();
    const bucket = String(req.body.bucket || 'logos');

    try {
        if (!supabase) {
            res.status(500).json({ error: 'Upload não configurado no servidor.' });
            return;
        }

        if (!req.file) {
            res.status(400).json({ error: 'Nenhum arquivo enviado.' });
            return;
        }

        const file = req.file;

        if (!ALLOWED_TYPES.includes(file.mimetype)) {
            res.status(400).json({ error: 'Tipo de arquivo não permitido.' });
            return;
        }

        const fileExt = file.originalname.split('.').pop() || 'tmp';
        const fileName = `${uuidv4()}.${fileExt}`;

        const { error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file.buffer, {
                contentType: file.mimetype,
                upsert: false
            });

        if (error) {
            console.error('[UPLOAD] Erro no Supabase Storage:', error);
            res.status(500).json({ error: 'Erro ao salvar arquivo.' });
            return;
        }

        const { data: publicUrlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(fileName);

        res.json({ url: publicUrlData.publicUrl });

    } catch (e: any) {
        console.error('[UPLOAD] Erro interno:', e);
        res.status(500).json({ error: 'Erro interno ao processar upload.' });
    }
};
