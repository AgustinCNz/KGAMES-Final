// Función para cargar juegos desde el JSON (API)
async function cargarJuegos(filtro = null) {
  try {
    const res = await fetch("/api/juegos"); 
    const juegos = await res.json();

    const container = document.getElementById("juegos-container");
    if (!container) return; // seguridad, si no existe no hacemos nada

    container.innerHTML = ""; 

    juegos.forEach(juego => {
      // Si hay filtro, solo mostrar coincidencias
      if (!filtro || juego.categoria.toLowerCase() === filtro.toLowerCase()) {
        const article = document.createElement("article");
        article.classList.add("game");

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${juego.imagen}" alt="${juego.titulo}">
          <h2>${juego.titulo}</h2>
          <p>${juego.descripcion}</p>
          <p class="price" data-price="${juego.precio}">$${juego.precio.toFixed(2)}</p>
          <button onclick="addToCart('${juego.titulo}', ${juego.precio})">
            Añadir al carrito
          </button>
        `;

        article.appendChild(card);
        container.appendChild(article);
      }
    });
  } catch (error) {
    console.error("Error al cargar los juegos:", error);
  }
}

// Detectar en qué página estamos
const path = window.location.pathname;

// 👉 Si estamos en popular.html → mostrar todos los juegos por defecto
if (path.includes("popular.html")) {
  cargarJuegos();
}

// 👉 Si estamos en index.html → NO cargar nada al inicio
// (solo se mostrarán al filtrar)

// Escuchar clicks en categorías
document.querySelectorAll(".filter-category").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const categoria = link.dataset.category;

    if (categoria === "Todos") {
      cargarJuegos(); // muestra todos
    } else {
      cargarJuegos(categoria);
    }
  });
});
