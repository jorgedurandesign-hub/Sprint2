    let grid = document.querySelector ('.destacados__grid');
    productos.slice(0, 15).forEach (producto => {
      let maxPalabras = 11; let palabras = producto.descripcion.split(' '); 
      let descripcionCorta = palabras.length > maxPalabras ? palabras.slice(0, maxPalabras).join(' ') + '...': producto.descripcion;      
      grid.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__imagen">
            <h2 class="producto__nombre">${producto.nombre}</h2>
            <p class="producto__precio">$${producto.precio}</p>
            <p class="producto__stock"> Stock: ${producto.stock} und.</p>
            <p class="producto__descripcion">${descripcionCorta}</p>
            <button class="boton" ${producto.stock === 0 ? 'disabled' : ''} onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>

      `;
    });