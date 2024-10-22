
// Obtener el nombre de la cuenta del almacenamiento local
const userDB = JSON.parse(localStorage.getItem('usersDB')) || {};
const email = localStorage.getItem('loggedInUser');

const loginButton = document.getElementById('login-button');
const userNameSpan = document.getElementById('user-name');

if (email && userDB[email]) {
    const accountName = userDB[email].accountName;
    
    // Mostrar el nombre de la cuenta con una coma
    userNameSpan.innerText = `, ${accountName}`;

    // Cambiar el texto del botón a "Cerrar sesión"
    loginButton.innerText = 'Cerrar sesión';

    // Agregar evento para cerrar sesión
    loginButton.addEventListener('click', function() {
        // Elimina el usuario autenticado
        localStorage.removeItem('loggedInUser');
        
        // Cambia el texto del botón a "Iniciar sesión"
        loginButton.innerText = 'Iniciar sesión';
        
        // Limpiar el nombre del usuario
        userNameSpan.innerText = '';

        // Redirigir a la página de inicio
        window.location.href = 'Paginaweb.html'; // Redirigir a la página de inicio
    });
} else {
    // Si no hay usuario autenticado, quitar el espacio y la coma
    userNameSpan.innerText = '';

    // Cambiar el texto del botón a "Iniciar sesión"
    loginButton.innerText = 'Iniciar sesión';
    loginButton.addEventListener('click', function() {
        window.location.href = 'iniciar_sesìon.html'; // Redirigir a la página de inicio de sesión
    });
}
