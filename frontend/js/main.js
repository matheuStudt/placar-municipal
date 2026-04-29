const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.');
const API = isLocal ? 'http://localhost:3001/api' : 'https://placar-api-qvva.onrender.com/api';

// 1. Sidebar Toggle
function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    document.body.classList.toggle('sidebar-show');
}

// 2. Retorna os headers de autenticação JWT para chamadas protegidas
function getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
}

// 3. Logout — limpa sessão e token
function logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}

// 4. Session Check & Personalization
function checkSession() {
    const session = localStorage.getItem('usuario');
    const token = localStorage.getItem('authToken');

    const publicPages = ['login.html', 'portal.html', 'equipe.html', 'detalhes-jogo.html', 'atleta.html', 'atletas.html'];
    const currentUrl = window.location.href;
    const isPublic = publicPages.some(page => currentUrl.includes(page));

    if (!session || !token) {
        if (!isPublic) {
            window.location.href = 'login.html';
        }
        return null;
    }

    const user = JSON.parse(session);

    // Atualiza nomes da prefeitura se os elementos existirem
    const nomeParaExibir = user.prefeituraNome || "Sua Prefeitura";

    document.querySelectorAll('.prefeitura-nome').forEach(el => {
        el.textContent = nomeParaExibir;
    });

    const titulo = document.getElementById('titulo-painel-header');
    if (titulo) {
        titulo.textContent = nomeParaExibir;
    }

    // Especial para dashboard index.html
    const tituloDashboard = document.getElementById('titulo-painel');
    if (tituloDashboard) {
        tituloDashboard.textContent = `Painel de ${nomeParaExibir}`;
    }

    return user;
}
/*
// 5. Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Garante modo claro
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.setAttribute('data-bs-theme', 'light');

    // Sessão - apenas se não for login
    if (!window.location.href.includes('login.html')) {
        checkSession();
    }

    // Cria o container de toasts se ainda não existir
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }
});*/

// 3. Initialize
document.addEventListener('DOMContentLoaded', () => {
    // NOTA: O tema (dark/light) é gerenciado exclusivamente pelo theme.js.
    // Não sobrescrever data-bs-theme aqui para preservar a preferência do usuário.

    // Verifica se a página atual é pública
    const publicPages = ['login.html', 'portal.html', 'equipe.html', 'detalhes-jogo.html', 'atleta.html', 'atletas.html'];
    const currentUrl = window.location.href;
    const isPublic = publicPages.some(page => currentUrl.includes(page));

    // Sessão - verifica login apenas para telas protegidas
    const user = checkSession();

    // Se for página pública e não tiver usuário, não faz mais nada de personalização de admin
    if (isPublic && !user) return;

    // Se tiver usuário (mesmo em página pública), o checkSession já cuidou da personalização básica
});

/**
 * Exibe uma notificação Toast Bootstrap.
 * @param {string} mensagem  - Texto da mensagem.
 * @param {'success'|'danger'|'warning'|'info'} tipo - Cor do toast.
 */
function showToast(mensagem, tipo = 'success') {
    if (tipo === 'error') tipo = 'danger';
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = {
        success: 'bi-check-circle-fill',
        danger: 'bi-x-circle-fill',
        warning: 'bi-exclamation-triangle-fill',
        info: 'bi-info-circle-fill'
    };

    const id = 'toast-' + Date.now();
    const toastEl = document.createElement('div');
    toastEl.id = id;
    toastEl.className = `toast align-items-center text-bg-${tipo} border-0 shadow`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body fw-semibold d-flex align-items-center gap-2">
                <i class="bi ${icons[tipo] || 'bi-bell-fill'}"></i>
                ${mensagem}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
        </div>`;

    container.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

// 5. Retorno Inteligente Publico
function voltarPaginaAnterior() {
    if (window.history.length > 1 && document.referrer.includes(window.location.hostname)) {
        window.history.back();
    } else {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug') || params.get('p');
        window.location.href = slug ? `portal.html?slug=${slug}` : 'portal.html';
    }
}

// 6. Registro do Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registrado com sucesso.'))
      .catch(err => console.error('Erro ao registrar Service Worker:', err));
  });
}

/**
 * Formata o nome completo do campeonato: Nome + Categoria + Ano
 * Aplica abreviações na categoria se o nome final ficar muito longo (> limite).
 * @param {Object} c - Objeto do campeonato contendo nome, categoria e ano
 * @param {number} limit - Limite de caracteres antes de abreviar (default: 40)
 */
function formatarNomeCampeonato(c, limit = 40) {
    if (!c) return '';
    const nome = c.nome || '';
    const categoria = c.categoria || '';
    const ano = c.ano || '';

    // Primeira tentativa de formatação (nome + categoria + ano)
    let formatado = `${nome}`;
    if (categoria) formatado += ` ${categoria}`;
    if (ano) formatado += ` ${ano}`;

    // Se estiver dentro do limite, retorna
    if (formatado.length <= limit) {
        return formatado.trim();
    }

    // Se passar do limite, vamos abreviar a categoria
    if (categoria) {
        const abrev = {
            'Masculino': 'Masc.',
            'Feminino': 'Fem.',
            'Adulto': 'Ad.',
            'Veterano': 'Vet.',
            'Principal': 'Princ.',
            'Master': 'Mast.',
            'Infantil': 'Inf.',
            'Juvenil': 'Juv.',
            'Aspirante': 'Asp.',
            'Amador': 'Amad.',
            'Sub': 'Sub'
        };
        
        let categoriaAbreviada = categoria;
        for (const [key, value] of Object.entries(abrev)) {
            // Regex ignorando case, pegando palavra inteira
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            categoriaAbreviada = categoriaAbreviada.replace(regex, value);
        }
        
        formatado = `${nome} ${categoriaAbreviada}`;
        if (ano) formatado += ` ${ano}`;
    }

    return formatado.trim();
}
