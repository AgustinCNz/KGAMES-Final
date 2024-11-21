// Mostrar la calculadora
function ShowmodalCalculadora() {
    const taskSection = document.getElementById('tasks');
    const calculatorSection = document.getElementById('calculator');
    const createButton = document.querySelector('button.crear-tarea');

    calculatorSection.classList.add('active'); // Mostrar calculadora
    taskSection.classList.remove('active'); // Ocultar tareas
    createButton.classList.remove('active'); // Ocultar botón Crear Tarea
}


// Función para añadir caracteres al display
function appendToDisplay(value) {
    const display = document.getElementById('calc-display');
    if (display.value === "0" || display.value === "Error") {
        display.value = value; // Reemplazar si el valor es "0" o "Error"
    } else {
        display.value += value; // Añadir al display
    }
}

// Función para borrar el display
function clearDisplay() {
    const display = document.getElementById('calc-display');
    display.value = "0";
}

// Función para calcular el resultado
function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value); // Evalúa la expresión
    } catch (error) {
        display.value = "Error"; // Muestra error si la expresión no es válida
    }
}


//Eventos para el teclado de la caculadora

// Mapear teclas del teclado con botones de la calculadora
const keyMap = {
    '7': '7', '8': '8', '9': '9', '/': '/',
    '4': '4', '5': '5', '6': '6', '*': '*',
    '1': '1', '2': '2', '3': '3', '-': '-',
    '0': '0', '.': '.', '+': '+', 'Enter': '=',
    'Backspace': 'C'
};

// Detectar teclas presionadas
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (keyMap[key]) {
        simulateButtonClick(keyMap[key]);
    }
});

// Simular clic en el botón correspondiente
function simulateButtonClick(value) {
    const button = Array.from(document.querySelectorAll('.calc-buttons button'))
        .find(btn => btn.textContent === value || (value === '=' && btn.textContent === '=') || (value === 'C' && btn.textContent === 'C'));
    
    if (button) {
        button.classList.add('active'); // Iluminar tecla
        setTimeout(() => button.classList.remove('active'), 200); // Desiluminar después de un tiempo

        // Ejecutar la función correspondiente
        if (value === 'C') clearDisplay();
        else if (value === '=') calculateResult();
        else appendToDisplay(value);
    }
}
// Borrar el último carácter del display
function deleteLast() {
    const display = document.getElementById('calc-display');
    if (display.value !== "0" && display.value !== "Error") {
        display.value = display.value.slice(0, -1) || "0"; // Quitar el último carácter
    }
}
