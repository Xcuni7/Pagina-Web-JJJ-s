// Elementos del DOM
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Alternar entre formularios
function showForm(formToShow) {
    if (formToShow === "register") {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

// Enlace para mostrar el formulario de registro desde el de inicio de sesión
document.getElementById("registerLink").addEventListener("click", function(event) {
    event.preventDefault();
    showForm("register");
});

// Enlace para mostrar el formulario de inicio de sesión desde el de registro
document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault();
    showForm("login");
});

// Maneja el envío del formulario de registro
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Almacena los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("celular", celular);
    localStorage.setItem("correo", correo);
    localStorage.setItem("contrasena", contrasena);

    // Redirige a VCode.html
    window.location.href = "VCode.html";
});

// Validación de inicio de sesión
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    if (!validateEmail(emailInput.value)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    if (passwordInput.value.length < 6) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        const storedEmail = localStorage.getItem("correo");
        const storedPassword = localStorage.getItem("contrasena");

        if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
            alert("Inicio de sesión exitoso!");
            window.location.href = "pagina_deseada.html";
        } else {
            alert("Credenciales incorrectas. Intenta de nuevo.");
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
