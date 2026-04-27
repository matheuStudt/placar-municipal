/**
 * theme.js — Gerenciamento de tema Claro/Escuro
 * Usa data-bs-theme nativo do Bootstrap 5.3+
 * Executa imediatamente para evitar flash (FOUC)
 */

(function () {
    const STORAGE_KEY = 'tema-portal';

    /** Verifica se é página pública */
    function isPublicPage() {
        const publicPages = ['login.html', 'portal.html', 'equipe.html', 'detalhes-jogo.html', 'atleta.html', 'atletas.html', 'campeonatos.html'];
        const currentUrl = window.location.href;
        return publicPages.some(page => currentUrl.includes(page)) || 
               (currentUrl.endsWith('/') === false && currentUrl.indexOf('.html') === -1 && currentUrl.includes('localhost'));
    }

    /** Lê o tema salvo ou detecta preferência do SO */
    function getTemaInicial() {
        if (isPublicPage()) return 'light';
        const salvo = localStorage.getItem(STORAGE_KEY);
        if (salvo === 'dark' || salvo === 'light') return salvo;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    /** Aplica o tema na tag <html> */
    function aplicarTema(tema) {
        document.documentElement.setAttribute('data-bs-theme', tema);
    }

    /** Atualiza o ícone do botão conforme o tema ativo */
    function atualizarIcone(tema) {
        const btn = document.getElementById('btn-tema');
        if (!btn) return;
        const icon = btn.querySelector('i');
        if (!icon) return;
        if (tema === 'dark') {
            icon.className = 'bi bi-sun-fill';
            btn.setAttribute('title', 'Alternar para tema Claro');
        } else {
            icon.className = 'bi bi-moon-stars-fill';
            btn.setAttribute('title', 'Alternar para tema Escuro');
        }
    }

    /** Alterna entre claro e escuro */
    function toggleTema() {
        const atual = document.documentElement.getAttribute('data-bs-theme') || 'light';
        const novo = atual === 'dark' ? 'light' : 'dark';
        aplicarTema(novo);
        localStorage.setItem(STORAGE_KEY, novo);
        atualizarIcone(novo);
    }

    // ── Aplica o tema IMEDIATAMENTE (sem esperar DOMContentLoaded) para evitar flash
    const temaInicial = getTemaInicial();
    aplicarTema(temaInicial);

    // ── Configura o botão quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function () {
        atualizarIcone(temaInicial);
        const btn = document.getElementById('btn-tema');
        if (btn) {
            btn.addEventListener('click', toggleTema);
        }
    });
})();
