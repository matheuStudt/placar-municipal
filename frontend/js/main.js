//const API_BASE_SHARED = 'http://localhost:3001/api';
//const API_BASE_SHARED = "https://placar-api-qvva.onrender.com/api";

// O sistema detecta sozinho se você está testando no PC ou se está no site oficial
const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3001/api'
    : 'https://placar-api-qvva.onrender.com/api';

// 1. Sidebar Toggle
function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    document.body.classList.toggle('sidebar-show');
}

// 2. Session Check & Personalization
function checkSession() {
    const session = localStorage.getItem('usuario');
    if (!session) {
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

// 3. Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Garante modo claro
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.setAttribute('data-bs-theme', 'light');

    // Sessão - apenas se não for login
    if (!window.location.href.includes('login.html')) {
        checkSession();
    }
});
