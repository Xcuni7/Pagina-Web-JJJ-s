// Archivo: script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Simulación de credenciales correctas
    const correctEmail = 'usuario@example.com';
    const correctPassword = '1234';

    // Verificación básica
    if (email === correctEmail && password === correctPassword) {
        message.style.color = 'green';
        message.textContent = 'Inicio de sesión exitoso. ¡Bienvenido!';
        // Aquí podrías redirigir a otra página si lo deseas:
        // window.location.href = 'paginaPrincipal.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Correo o contraseña geys. Intenta nuevamente.';
    }
});
