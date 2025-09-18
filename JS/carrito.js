let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
function mostrarMensaje(mensaje) {
    let mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.innerText = mensaje;
    mensajeElemento.style.display = 'block';
    setTimeout(() => {
        mensajeElemento.style.display = 'none';
    }, 3000);
}

function agregarAlCarrito(id) {
    let producto = productos.find(p => p.id === id);
    if (producto.stock > 0) {
        console.log(`Producto agregado al carrito: ${producto.nombre}`);
        let itemAgregar = { ...producto, cantidad: 1};
        let existente = carrito.find(item => item.id === id);
        mostrarMensaje(`Producto agregado al carrito: ${producto.nombre}`);
        if(existente) {
            existente.cantidad++;
        } else {
            carrito.push(itemAgregar);
        }
        producto.stock--; // Disminuir el stock
        console.log(`Stock disponible: ${producto.stock}`);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        console.log(`Producto agotado: ${producto.nombre}`);
    }
}