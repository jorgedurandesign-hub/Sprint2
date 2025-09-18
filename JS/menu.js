document.addEventListener('DOMContentLoaded', () => {
                
    const menuResponsive = document.querySelector('.header__nav-toggle');
    const navList = document.querySelector('.header__nav-list');

    const cerrarSesion = document.getElementById('cerrar-sesion');
    const login = document.getElementById('login');
    const admin = document.getElementById('admin');
    const registro = document.getElementById('registro');
    const logueado = localStorage.getItem('logueado');

    if (logueado === 'true') {
        cerrarSesion.style.display = 'block';
        login.style.display = 'none';
        admin.style.display = 'block';
        registro.style.display = 'none';
    } else {
        cerrarSesion.style.display = 'none';
        login.style.display = 'block';
        admin.style.display = 'none';
        registro.style.display = 'block';
    }

    menuResponsive.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    cerrarSesion.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('logueado');
        window.location.href = 'index.html';
    });
});