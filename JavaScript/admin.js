// admin.js - CRUD de juegos
const adminJuegos = document.getElementById("admin-juegos");
const modal = document.getElementById("task-modal");
const modalTitle = document.getElementById("modal-title");
let editId = null; // Para editar productos existentes

// Mostrar modal para agregar producto
function openModal() {
  modal.classList.add("show");
  modalTitle.textContent = "Agregar Producto";
  document.getElementById("titulo").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("categoria").value = "";
  editId = null;
}

// Cerrar modal
function closeModal() {
  modal.classList.remove("show");
}

// Mostrar productos
async function showProducts() {
  await cargarJuegos();
}

// Cargar productos desde JSON
async function cargarJuegos() {
  try {
    const res = await fetch("/api/juegos");
    const juegos = await res.json();
    adminJuegos.innerHTML = "";

   juegos.forEach(juego => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${juego.imagen}" alt="${juego.titulo}">
  <h3>${juego.titulo}</h3>
  <p><strong>Precio:</strong> $${juego.precio}</p>
  <p><strong>Categoría:</strong> ${juego.categoria}</p>
  <p><strong>Descripción:</strong> ${juego.descripcion}</p>
  <button onclick="editJuego(${juego.id})">✏️ Editar</button>
  <button onclick="eliminarJuego(${juego.id})">🗑️ Eliminar</button>
`;

 
  adminJuegos.appendChild(div);
});

  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

// Guardar producto (nuevo o editado)
async function saveProduct() {
  const titulo = document.getElementById("titulo").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const categoria = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;
  const imagen = document.getElementById("imagen").value;

  if (!titulo || !precio || !categoria || !descripcion || !imagen) {
    alert("Completa todos los campos");
    return;
  }

  const productoData = { titulo, precio, categoria, descripcion, imagen };

  if (editId) {
    // Editar producto existente
    await fetch(`/api/juegos/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoData)
    });
  } else {
    // Crear nuevo producto
    await fetch("/api/juegos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoData)
    });
  }

  closeModal();
  cargarJuegos();
}


// Editar producto
async function editJuego(id) {
  const res = await fetch("/api/juegos");
  const juegos = await res.json();
  const juego = juegos.find(j => j.id === id);
  if (!juego) return alert("Producto no encontrado");

  editId = id;
  modalTitle.textContent = "Editar Producto";

  document.getElementById("titulo").value = juego.titulo;
  document.getElementById("precio").value = juego.precio;
  document.getElementById("categoria").value = juego.categoria;
  document.getElementById("descripcion").value = juego.descripcion;
  document.getElementById("imagen").value = juego.imagen;

  openModal();
}


// Eliminar producto
async function eliminarJuego(id) {
  if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
  await fetch(`/api/juegos/${id}`, { method: "DELETE" });
  cargarJuegos();
}

// Inicializar
cargarJuegos();
