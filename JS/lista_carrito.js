let itemsCarrito = document.querySelector(".carrito__productos");
            let subtotal = document.getElementById("subtotal");
            let iva = document.getElementById("iva");
            let total = document.getElementById("total");
            let btonPagos = document.getElementById("boton_carrito__pagar");
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
            function mostrarCarrito() {
                console.log('   carrito:', carrito);
                let suma = 0;
                itemsCarrito.innerHTML="";
                carrito.forEach((producto, index) => {
                    suma += producto.precio * producto.cantidad;
                    itemsCarrito.innerHTML += `
                        <div class="carrito__item">
                            <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito__item-imagen">
                            <div class="carrito__item-info">
                                <span>${producto.nombre}</span>
                                <span>$${producto.precio}</span>
                                <span>Total: $${(producto.precio * producto.cantidad).toFixed(2)}</span>
                            </div>
                            <div class="carrito__item-cantidad">
                                <button onclick="cambiarCantidad(${index}, ${producto.cantidad - 1})">-</button>
                                <span>${producto.cantidad}</span>
                                <button onclick="cambiarCantidad(${index}, ${producto.cantidad + 1})">+</button>
                            </div>
                            <button class="carrito__item-eliminar" onclick="eliminarProducto(${index})">Eliminar Producto</button>
                        </div>
                    `;
                });

                subtotal.textContent = `$${suma.toFixed(2)}`;
                iva.textContent = `$${(suma * 0.19).toFixed(2)}`;
                total.textContent = `$${(suma * 1.19).toFixed(2)}`;
                localStorage.setItem("totales", JSON.stringify({subtotal: suma, iva: suma * 0.19, total: suma * 1.19}));
            }

            if (carrito.length === 0) {
                itemsCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
                btonPagos.disabled = true;
                btonPagos.classList.remove("carrito_pagar_habilitado");
                btonPagos.classList.add("carrito_pagar_deshabilitado");
            } else {
                mostrarCarrito();
            }


            function cambiarCantidad(index, cantidad) {
                if (cantidad < 1) {
                    eliminarProducto(index);
                } else {
                    carrito[index].cantidad = cantidad;
                }
                    
                localStorage.setItem("carrito", JSON.stringify(carrito));
                mostrarCarrito();
            }

            function eliminarProducto(index){
                let conformacion = confirm("¿Estás seguro de que deseas eliminar este producto del carrito?");
                    if (conformacion) {
                        carrito.splice(index, 1);
                        let mensajeEliminar = document.getElementById("mensaje");
                        mensajeEliminar.textContent = "Producto eliminado del carrito.";
                        mensajeEliminar.style.display = "block";
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        mostrarCarrito();
                        setTimeout(() => {
                            mensajeEliminar.style.display = "none";
                        }, 8000);

                    }
            }