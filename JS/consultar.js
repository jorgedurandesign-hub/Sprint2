 const resultadoOrdenes = document.getElementById("ordenes__resultado");
            const formOrdenes = document.getElementById("ordenes__form");
            formOrdenes.addEventListener("submit", function (e) {
                e.preventDefault();
                const orderId = parseInt(document.getElementById("ordenId").value);
                const listOrdenes = JSON.parse(localStorage.getItem("orden")) || [];
                console.log(typeof listOrdenes.id);
                console.log(typeof orderId);
                const orden =  listOrdenes.id === orderId;
                console.log(orden);
                if (orden) {
                    resultadoOrdenes.style.display = "block";
                    resultadoOrdenes.innerHTML = `
                        <p>Orden encontrada: ID ${listOrdenes.id}</p>
                        <p>Fecha de la compra: ${listOrdenes.fecha}</p>
                        <p>Productos en la orden:</p>
                        <table border="1" style="width:100%;text-align:left;">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${listOrdenes.items.map(producto => `
                                    <tr>
                                        <td>${producto.nombre}</td>
                                        <td>$${producto.precio}</td>
                                        <td>${producto.cantidad}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    `;
                } else {
                    resultadoOrdenes.innerHTML = `<p>Número de orden no encontrado.</p>`;
                }
                
            })