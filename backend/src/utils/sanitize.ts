/**
 * sanitize.ts — Utilitários de sanitização de dados de entrada.
 *
 * Centraliza a validação de URLs de logo/imagem para prevenir XSS via
 * injeção de esquemas maliciosos (javascript:, data:, vbscript:, etc.)
 * em campos <img src> ou CSS background-image.
 */

/** Protocolos explicitamente permitidos para URLs de imagem. */
const ALLOWED_IMAGE_PROTOCOLS = ['https:', 'http:'];

/**
 * Valida e sanitiza uma URL de logo/imagem recebida do cliente.
 *
 * - Retorna `null` para valores ausentes ou vazios.
 * - Retorna `null` para qualquer URL cujo protocolo não seja http: ou https:.
 * - Retorna a URL original (sem modificação) quando passa na validação.
 *
 * @param raw - Valor bruto recebido do body/query.
 * @returns URL segura como string, ou null.
 */
export function sanitizeLogoUrl(raw: unknown): string | null {
    if (!raw || typeof raw !== 'string') return null;

    const trimmed = raw.trim();
    if (!trimmed) return null;

    try {
        const parsed = new URL(trimmed);
        if (!ALLOWED_IMAGE_PROTOCOLS.includes(parsed.protocol)) {
            return null; // Rejeita javascript:, data:, vbscript:, file:, etc.
        }
        return trimmed;
    } catch {
        // URL malformada — rejeita silenciosamente
        return null;
    }
}
