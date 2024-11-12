// Importa los módulos de Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// Configuración de Firebase (usa la configuración de tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyBA-EyLkSMvRmOduHUgL4VEuCxTt234JEo",
  authDomain: "paginajjjs.firebaseapp.com",
  projectId: "paginajjjs",
  storageBucket: "paginajjjs.appspot.com",
  messagingSenderId: "920307732962",
  appId: "1:920307732962:web:fb4f3f20eabdc6fa2429bb"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configura el proveedor de Google
const provider = new GoogleAuthProvider();

// Agrega el evento de clic al botón de Google
document.getElementById("googleSignInButton").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Inicio de sesión exitoso
      const user = result.user;
      console.log("Usuario autenticado:", user);
      alert(`Bienvenido ${user.displayName}`);
    })
    .catch((error) => {
      // Manejo de errores
      console.error("Error en la autenticación:", error);
      alert("Error al iniciar sesión con Google.");
    });
});
