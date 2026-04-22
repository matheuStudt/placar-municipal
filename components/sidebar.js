document.addEventListener('DOMContentLoaded', () => {
    const userStr = localStorage.getItem('usuario');
    const user = userStr ? JSON.parse(userStr) : null;
    const permissoes = user?.permissoes || [];

    const hasPermission = (mod) => {
        if (!permissoes) return false;
        return permissoes.includes('ALL') || permissoes.includes(mod);
    };

    const menuItems = [
        { label: 'Início', href: 'index.html', icon: 'bi-house-door', public: true },
        { label: 'Campeonatos', href: 'campeonatos.html', icon: 'bi-award', module: 'campeonatos' },
        { label: 'Equipes', href: 'equipes.html', icon: 'bi-shield-shaded', module: 'equipes' },
        { label: 'Atletas', href: 'atletas.html', icon: 'bi-people', module: 'atletas' },
        { label: 'Tabela de Jogos', href: 'jogos.html', icon: 'bi-calendar3', module: 'jogos' },
        { label: 'Súmula', href: 'sumula.html', icon: 'bi-file-earmark-text', module: 'sumulas' },
        { label: 'Relatórios', href: 'relatorios.html', icon: 'bi-file-pdf', module: 'relatorios' },
        { label: 'Usuários', href: 'usuarios.html', icon: 'bi-person-gear', module: 'gestao_usuarios' },
        { label: 'Perfis de Acesso', href: 'perfis.html', icon: 'bi-shield-lock', module: 'gestao_usuarios' },
    ];

    let sidebarHTML = `
    <nav class="sidebar p-3 shadow">
        <div class="d-flex align-items-center mb-4 px-2">
            <i class="bi bi-trophy-fill me-2 fs-4 text-warning"></i>
            <span class="prefeitura-nome branding-name">Súmula Digital</span>
        </div>
        <ul class="nav flex-column">`;

    menuItems.forEach(item => {
        if (item.public || hasPermission(item.module)) {
            sidebarHTML += `<li class="nav-item mb-2"><a href="${item.href}" class="nav-link p-2"><i class="bi ${item.icon} me-2"></i> ${item.label}</a></li>`;
        }
    });

    sidebarHTML += `
            <hr class="text-white-50">
            <li class="nav-item"><a href="#" onclick="logout(); return false;" class="nav-link p-2 text-danger-emphasis text-white"><i class="bi bi-box-arrow-left me-2"></i> Sair</a></li>
        </ul>
    </nav>
    `;

    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuContainer.innerHTML = sidebarHTML;

        // Ativar o link correspondente à página atual
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = menuContainer.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

        // Aplicar nome da prefeitura se disponível
        const prefNome = user?.prefeituraNome;
        if (prefNome) {
            const el = menuContainer.querySelector('.prefeitura-nome');
            if (el) el.textContent = prefNome;
        }
    }
});

function logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}
