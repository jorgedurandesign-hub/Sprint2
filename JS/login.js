 const formularioLogin = document.getElementById('login__form');
            const mensajeDiv = document.getElementById('login__mensaje');

            // traer lo usuarios del localStorage
            

            formularioLogin.addEventListener('submit', function (e) {
                e.preventDefault();

                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                const usuarios = JSON.parse(localStorage.getItem('usuario')) || []; 
                console.log(usuarios);
                console.log(usuarios.email);
                if (!usuarios) {
                    mensajeDiv.innerHTML = '<p>No hay usuarios registrados. Por favor, <a href="registro.html">regístrese primero.</a></p>';
                    return;
                }

                if (email === usuarios.email && password === usuarios.password) {
                    mensajeDiv.style.color = 'green';
                    mensajeDiv.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
                    localStorage.setItem('logueado', 'true');
                    setTimeout(() => {
                        window.location.href = 'admin.html';
                    }, 2000);
                } else {
                    mensajeDiv.style.color = '#c0392b';
                    mensajeDiv.textContent = 'Email o contraseña incorrectos. Inténtelo de nuevo.';
                }
            })