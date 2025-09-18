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

//tabla de orden
orden.items.forEach(element => {
    const contenedorOrdern = document.getElementById('detalles-orden');
    idOrden.textContent = orden.id;

    const nuevaFecha = new Date(orden.fecha);
    fechaOrden.textContent = nuevaFecha.toLocaleDateString();
    // fechaOrden.textContent = nuevaFecha.toISOString().split('T')[0];
    let trOrden = document.createElement('tr');
    trOrden.innerHTML = `
        <td>${element.nombre}</td>
        <td>${element.cantidad}</td>
        <td>$${element.precio.toFixed(2)}</td>
    `;
    contenedorOrdern.appendChild(trOrden);
});