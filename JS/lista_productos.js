let divProductos = document.querySelector('.productos__grid');

function htmlProducto(producto, divProductos) {
            let maxPalabras = 11; let palabras = producto.descripcion.split(' '); 
            let descripcionCorta = palabras.length > maxPalabras ? palabras.slice(0, maxPalabras).join(' ') + '...': producto.descripcion;  
            
      const formatoMoneda = new Intl.NumberFormat('es-CO', {
        style: 'currency', 
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      
       return divProductos.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto__imagen">
            <h2 class="producto__nombre">${producto.nombre}</h2>
            <p class="producto__precio">${formatoMoneda.format(producto.precio)}</p>
            <p class="producto__stock"> Stock: ${producto.stock} und.</p>
            <p class="producto__descripcion">${descripcionCorta}</p>
            <button class="boton" ${producto.stock === 0 ? 'disabled' : ''} onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
        `
}
function mostrarProductos(categoria= "todos", divProductos) {
    productos
      .filter(producto => categoria === "todos" || producto.categoria === categoria)
      .forEach(producto => {
        htmlProducto(producto, divProductos);
      })
  }
  
  mostrarProductos(divProductos);

  function mostrarProductosSeleccionados (){
   let categoriasSelecionados = document.getElementById('filtro-producto');
   
   let categorias = Array.from(categoriasSelecionados.selectedOptions).map(option => option.value);
   console.log(categorias);
   divProductos.innerHTML = "";
   productos
        .filter(producto => categoriasSelecionados.value === "todos" || categorias.includes(producto.categoria))
        .forEach(producto => {
            htmlProducto(producto, divProductos);
        })
  }

  mostrarProductosSeleccionados(divProductos);