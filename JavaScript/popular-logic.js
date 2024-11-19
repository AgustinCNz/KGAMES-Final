// Arreglo para almacenar los productos del carrito
let cart = [];

// Función para añadir un juego al carrito
function addToCart(productName, price) {
    // Crear un objeto para el producto
    const product = { name: productName, price: price };

    // Añadir el producto al carrito
    cart.push(product);

    // Actualizar la visualización del carrito
    updateCart();
}

// Función para actualizar la lista del carrito y el total
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    
    // Limpiar la lista de productos del carrito
    cartList.innerHTML = '';

    // Variable para el total
    let total = 0;

    // Mostrar productos en el carrito
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        // Crear un botón de eliminar para cada producto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        li.appendChild(removeButton);
        cartList.appendChild(li);

        // Actualizar el total
        total += product.price;
    });

    // Mostrar el total
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    // Eliminar el producto del carrito
    cart.splice(index, 1);

    // Actualizar la visualización del carrito
    updateCart();
}

// Función para limpiar el carrito por completo
function clearCart() {
    // Vaciar el carrito
    cart = [];

    // Actualizar la visualización del carrito
    updateCart();
}

/*boton hamburguesa*/
function toggleMenu() {
    const nav = document.querySelector('.inicio');
    nav.classList.toggle('active');
}
