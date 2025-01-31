const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

// Configuración de evento en cada input para manejar la entrada del código de verificación
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
              nextInput = input.nextElementSibling,
              prevInput = input.previousElementSibling;

        // Limitar la longitud del input a 1 carácter
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        // Habilitar el siguiente input si el actual tiene un valor
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        // Mover el foco hacia atrás y deshabilitar los inputs siguientes en caso de retroceso
        if (e.key === "Backspace") {
            inputs.forEach((input, index2) => {
                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                }
            });
        }

        // Activar el botón solo si todos los campos están completos
        if (Array.from(inputs).every(input => input.value !== "")) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});

// Enfocar el primer input al cargar la página
window.addEventListener("load", () => inputs[0].focus());

// Manejo del evento del botón de verificación
button.addEventListener("click", (event) => {
    event.preventDefault();

    // Concatenar los valores de los cuatro campos para formar el código completo
    const enteredCode = Array.from(inputs).map(input => input.value).join("");
    const storedCode = localStorage.getItem("verificationCode"); // Código guardado en localStorage

    // Validar el código
    if (enteredCode === storedCode) {
        alert("Código verificado exitosamente!");
        localStorage.removeItem("verificationCode");  // Eliminar el código después de la verificación
        window.location.href = "pagina_deseada.html"; // Redirigir a la página principal
    } else {
        alert("Código incorrecto. Intenta de nuevo.");
        inputs.forEach(input => input.value = "");  // Limpiar los campos de entrada
        inputs[0].focus();  // Volver a enfocar el primer campo
    }
});
