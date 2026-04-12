document.addEventListener('DOMContentLoaded', () => {
    const sidebarHTML = `
    <nav class="sidebar p-3 shadow">
        <div class="d-flex align-items-center mb-4 px-2">
            <i class="bi bi-trophy-fill me-2 fs-4 text-warning"></i>
            <span class="prefeitura-nome branding-name">Placar Municipal</span>
        </div>
        <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="index.html" class="nav-link p-2"><i class="bi bi-house-door me-2"></i> Início</a></li>
            <li class="nav-item mb-2"><a href="campeonatos.html" class="nav-link p-2"><i class="bi bi-award me-2"></i> Campeonatos</a></li>
            <li class="nav-item mb-2"><a href="equipes.html" class="nav-link p-2"><i class="bi bi-shield-shaded me-2"></i> Equipes</a></li>
            <li class="nav-item mb-2"><a href="atletas.html" class="nav-link p-2"><i class="bi bi-people me-2"></i> Atletas</a></li>
            <li class="nav-item mb-2"><a href="jogos.html" class="nav-link p-2"><i class="bi bi-calendar3 me-2"></i> Tabela de Jogos</a></li>
            <li class="nav-item mb-2"><a href="sumula.html" class="nav-link p-2"><i class="bi bi-file-earmark-text me-2"></i> Súmula</a></li>
            <li class="nav-item mb-2"><a href="relatorios.html" class="nav-link p-2"><i class="bi bi-file-pdf me-2"></i> Relatórios</a></li>
            <hr class="text-white-50">
            <li class="nav-item"><a href="login.html" class="nav-link p-2 text-danger-emphasis text-white"><i class="bi bi-box-arrow-left me-2"></i> Sair</a></li>
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
            } else {
                link.classList.remove('active');
            }
        });
    }
});
