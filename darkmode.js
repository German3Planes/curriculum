// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Crear botón si no existe
    if (!darkModeToggle) {
        const btn = document.createElement('button');
        btn.id = 'darkModeToggle';
        btn.className = 'fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition';
        btn.innerHTML = '<i class="fas fa-moon mr-1"></i> Modo Oscuro';
        document.body.appendChild(btn);
    }
    const toggle = document.getElementById('darkModeToggle');

    // Estado inicial
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun mr-1"></i> Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        toggle.innerHTML = '<i class="fas fa-moon mr-1"></i> Modo Oscuro';
    }

    toggle.onclick = function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggle.innerHTML = '<i class="fas fa-sun mr-1"></i> Modo Claro';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggle.innerHTML = '<i class="fas fa-moon mr-1"></i> Modo Oscuro';
            localStorage.setItem('darkMode', 'disabled');
        }
    };
});
