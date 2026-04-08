// O sistema detecta sozinho se você está testando no PC ou se está no site oficial
const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3001/api'
    : 'https://placar-api-qvva.onrender.com/api';

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

    if (!session || !token) {
        if (!window.location.href.includes('login.html')) {
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
    // Garante modo claro
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.setAttribute('data-bs-theme', 'light');

    // Sessão - NÃO exige login nas telas de login e portal
    const currentUrl = window.location.href;
    if (!currentUrl.includes('login.html') && !currentUrl.includes('portal.html')) {
        checkSession();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.setAttribute('data-bs-theme', 'light');

    const currentUrl = window.location.href;
    // Adicionamos 'detalhes-jogo.html' na lista de exceções
    if (!currentUrl.includes('login.html') &&
        !currentUrl.includes('portal.html') &&
        !currentUrl.includes('detalhes-jogo.html')) {
        checkSession();
    }
});

/**
 * Exibe uma notificação Toast Bootstrap.
 * @param {string} mensagem  - Texto da mensagem.
 * @param {'success'|'danger'|'warning'|'info'} tipo - Cor do toast.
 */
function showToast(mensagem, tipo = 'success') {
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
