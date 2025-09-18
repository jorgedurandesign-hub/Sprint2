 const formulario = document.getElementById('registro__form');

            formulario.addEventListener('submit', (event) => {
                event.preventDefault();
            
                const nombre = document.getElementById('nombre').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                const expresionEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
                
                if (!expresionEmail.test(email)) {
                    const resultadoDiv = document.getElementById('registro__resultado');
                    resultadoDiv.innerHTML = `<p class="error">Por favor, ingresa un correo electrónico válido.</p>`;
                    return;
                }

                const usuario = {   
                    nombre: nombre,
                    email: email,
                    password: password
                };

                localStorage.setItem('usuario', JSON.stringify(usuario));

                const resultadoDiv = document.getElementById('registro__resultado');
                resultadoDiv.innerHTML = `<p>Registro exitoso. ¡Bienvenido, ${nombre}!</p>`;
                formulario.reset();


            })