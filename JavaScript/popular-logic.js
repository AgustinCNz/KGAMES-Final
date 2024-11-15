
// Función para eliminar un juego del carrito
function removeFromCart(gameName) {
    cart = cart.filter((card) => card !== gameName); //elimina juego del carrito
    updateCart(); 
}

// Función para limpiar todo el carrito
function clearCart() {
    cart = []; 
    updateCart(); 
}

// Función para manejar el click en el botón "COMPRAR"
function setupPurchaseButtons() {
    const buyButtons = document.querySelectorAll('.boton-comprar');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const gameName = event.target.closest('.JuegosPopulares2').querySelector('img').alt;
            addToCart(gameName); // Agregar el juego al carrito
        });
    });
}

// Llamamos a esta función al cargar la página para asignar el evento a todos los botones
window.onload = setupPurchaseButtons;