/**
 * auth-guard.js — Módulo centralizado de proteção de rotas
 *
 * Uso em páginas PROTEGIDAS:
 *   const user = requireAuth();
 *   if (!user) return;
 *
 * Uso em páginas de SUPER ADMIN:
 *   const user = requireAuth({ adminOnly: true });
 *   if (!user) return;
 *
 * Páginas PÚBLICAS (portal, detalhes-jogo, equipe) não incluem este script.
 */

/**
 * Verifica sessão e redireciona para login se não autenticado.
 *
 * @param {Object}  [options]
 * @param {boolean} [options.adminOnly=false]  Se true, exige email admin@admin.com.
 * @returns {Object|null} Objeto do usuário ou null (já redirecionou).
 */
function requireAuth(options = {}) {
    const { adminOnly = false } = options;

    const session = localStorage.getItem('usuario');
    const token   = localStorage.getItem('authToken');

    if (!session || !token) {
        window.location.replace('login.html');
        return null;
    }

    let user;
    try {
        user = JSON.parse(session);
    } catch {
        localStorage.removeItem('usuario');
        localStorage.removeItem('authToken');
        window.location.replace('login.html');
        return null;
    }

    if (adminOnly && user.email !== 'admin@admin.com') {
        window.location.replace('index.html');
        return null;
    }

    // Personalização comum: injeta o nome da prefeitura nos elementos marcados
    const nomeParaExibir = user.prefeituraNome || 'Sua Prefeitura';

    document.querySelectorAll('.prefeitura-nome').forEach(el => {
        el.textContent = nomeParaExibir;
    });

    const header = document.getElementById('titulo-painel-header');
    if (header) header.textContent = nomeParaExibir;

    const dashboard = document.getElementById('titulo-painel');
    if (dashboard) dashboard.textContent = `Painel de ${nomeParaExibir}`;

    return user;
}
