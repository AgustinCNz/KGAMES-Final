/*// login.js - Validación de usuario
const formLogin = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/productos.json");
  const db = await res.json();

  const user = db.usuarios.find(
    u => u.usuario === usuario && u.password === password
  );

  if (user) {
    mensaje.textContent = `Bienvenido ${user.usuario}`;
    if (user.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
  }
});*/
