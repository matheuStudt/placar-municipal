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

// 4. Personalização de sessão (sem redirect — use requireAuth() de auth-guard.js para rotas protegidas)
function checkSession() {
    const session = localStorage.getItem('usuario');
    const token   = localStorage.getItem('authToken');

    if (!session || !token) return null;

    let user;
    try { user = JSON.parse(session); } catch { return null; }

    // Injeta nome da prefeitura nos elementos marcados
    const nomeParaExibir = user.prefeituraNome || 'Sua Prefeitura';

    document.querySelectorAll('.prefeitura-nome').forEach(el => {
        el.textContent = nomeParaExibir;
    });

    const titulo = document.getElementById('titulo-painel-header');
    if (titulo) titulo.textContent = nomeParaExibir;

    const tituloDashboard = document.getElementById('titulo-painel');
    if (tituloDashboard) tituloDashboard.textContent = `Painel de ${nomeParaExibir}`;

    return user;
}
// NOTA: A proteção de rotas foi centralizada em auth-guard.js (requireAuth).
// main.js não faz mais redirect automático — cada página protegida chama requireAuth() no seu init().

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

/**
 * Exibe um modal de confirmação no padrão Bootstrap (Ação Destrutiva).
 * @param {string} mensagem - O texto de confirmação a ser exibido.
 * @returns {Promise<boolean>} - Resolve com true se o usuário confirmar, false se cancelar.
 */
function confirmAction(mensagem) {
    return new Promise((resolve) => {
        const id = 'confirm-modal-' + Date.now();
        const modalHtml = `
            <div class="modal fade" id="${id}" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 shadow">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title fw-bold">
                                <i class="bi bi-exclamation-triangle-fill me-2"></i>Atenção
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4 text-center">
                            <p class="mb-0 fs-5">${mensagem}</p>
                        </div>
                        <div class="modal-footer border-0 d-flex justify-content-center gap-2 pb-4">
                            <button type="button" class="btn btn-light fw-bold px-4 shadow-sm" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger fw-bold px-4 shadow-sm btn-confirmar">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modalEl = document.getElementById(id);
        const modalBS = new bootstrap.Modal(modalEl);
        
        let confirmado = false;
        
        modalEl.querySelector('.btn-confirmar').addEventListener('click', () => {
            confirmado = true;
            modalBS.hide();
        });
        
        modalEl.addEventListener('hidden.bs.modal', () => {
            modalEl.remove();
            resolve(confirmado);
        });
        
        modalBS.show();
    });
}

// ─── FETCH COM TIMEOUT E TRATAMENTO DE ERRO ───────────────────────────────
/**
 * Wrapper sobre fetch que adiciona timeout e converte erros HTTP em exceções.
 * @param {string} url
 * @param {RequestInit} [options]
 * @param {number} [timeoutMs=10000]
 * @returns {Promise<Response>}
 */
async function fetchAPI(url, options = {}, timeoutMs = 10000) {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(tid);
        if (!res.ok) {
            const err = new Error(`HTTP ${res.status}`);
            err.status = res.status;
            throw err;
        }
        return res;
    } catch (e) {
        clearTimeout(tid);
        if (e.name === 'AbortError') {
            const te = new Error('Timeout: o servidor demorou demais para responder.');
            te.isTimeout = true;
            throw te;
        }
        throw e;
    }
}

/**
 * Renderiza uma linha de erro com botão "Tentar novamente" dentro de um <tbody>.
 * @param {string} tbodyId     ID do elemento <tbody>
 * @param {number} colspan     Número de colunas da tabela
 * @param {string} retryFnCall Chamada de função como string, ex: 'carregarAtletas()'
 */
function renderErroTabela(tbodyId, colspan, retryFnCall) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = `
        <tr>
            <td colspan="${colspan}" class="text-center py-5">
                <div class="d-flex flex-column align-items-center gap-2">
                    <i class="bi bi-wifi-off fs-2 text-danger opacity-75"></i>
                    <span class="fw-bold text-danger">Falha ao carregar os dados</span>
                    <span class="text-muted small">Verifique a conexão com o servidor ou tente novamente.</span>
                    <button class="btn btn-outline-primary btn-sm mt-1" onclick="${retryFnCall}">
                        <i class="bi bi-arrow-clockwise me-1"></i> Tentar novamente
                    </button>
                </div>
            </td>
        </tr>`;
}

/**
 * Renderiza um estado de erro com botão "Tentar novamente" dentro de um <div> container.
 * Usado em páginas que exibem cards em vez de tabelas (ex: lista-jogos em jogos.html).
 * @param {string} containerId ID do elemento container
 * @param {string} retryFnCall Chamada de função como string
 */
function renderErroContainer(containerId, retryFnCall) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="d-flex flex-column align-items-center gap-2">
                <i class="bi bi-wifi-off fs-2 text-danger opacity-75"></i>
                <span class="fw-bold text-danger">Falha ao carregar os dados</span>
                <span class="text-muted small">Verifique a conexão com o servidor ou tente novamente.</span>
                <button class="btn btn-outline-primary btn-sm mt-1" onclick="${retryFnCall}">
                    <i class="bi bi-arrow-clockwise me-1"></i> Tentar novamente
                </button>
            </div>
        </div>`;
}
