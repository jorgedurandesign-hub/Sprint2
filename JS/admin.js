document.addEventListener('DOMContentLoaded', () => {
                
    const logueado = localStorage.getItem('logueado');
    if (logueado !== 'true') {
        window.location.href = 'login.html';
    }
});

const usuario = JSON.parse(localStorage.getItem('usuario'));
const orden = JSON.parse(localStorage.getItem('orden'));
let idOrden = document.getElementById('id-orden');
let fechaOrden = document.getElementById('fecha-orden');
document.getElementById('nombre').textContent = usuario ? usuario.nombre : 'Invitado';
document.getElementById('email').textContent = usuario ? usuario.email : 'No disponible';

const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

orden.items.forEach(element => {
    const contenedorOrdern = document.getElementById('detalles-orden');
    idOrden.textContent = orden.id;

    const nuevaFecha = new Date(orden.fecha);
    fechaOrden.textContent = nuevaFecha.toLocaleDateString();
    let trOrden = document.createElement('tr');
    trOrden.innerHTML = `
        <td>${element.nombre}</td>
        <td>${element.cantidad}</td>
        <td>${formatoMoneda.format(element.precio)}</td>
    `;
    contenedorOrdern.appendChild(trOrden);
});