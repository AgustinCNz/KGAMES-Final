// modal-loader.js
async function loadLoginModal() {
  try {
    const response = await fetch("/html/login-modal.html");
    const modalHTML = await response.text();

    // Insertamos el modal al final del body
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  } catch (error) {
    console.error("Error al cargar el modal de login:", error);
  }
}

// Llamamos la función apenas cargue la página
document.addEventListener("DOMContentLoaded", loadLoginModal);
