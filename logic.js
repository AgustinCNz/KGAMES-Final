/*juego 1*/
const games = {
    'baldurs' : 'https://images.g2a.com/300x400/1x1x1/baldurs-gate-3-pc-steam-account-account-global-i10000206664009/5f1edcea7e696c555533dfa2',
    'sonic':'https://images.g2a.com/300x400/1x1x1/sonic-x-shadow-generations-pc-steam-account-global-i10000507672002/22290998e8d9421ea1481823', 
    'sparking':'https://images.g2a.com/300x400/1x1x1/dragon-ball-sparking-zero-pc-steam-account-global-i10000506157007/302aae41117241c89dc0c949',
    'silent hill': 'https://images.g2a.com/300x400/1x1x1/silent-hill-2-pc-steam-key-global-i10000506161001/9a54fc95bde246389705df2d',
    'god of war': 'img2/Modal2/godmodal2.png',
    'assasinscreed': 'img2/Modal2/assassinscreed.png',
    'gtav' : 'img2/Modal2/gtav.png', 
    'tomb raider' : 'img2/Modal2/tombraider.png',

};
/*juego 2*/
const sinopsis = {
    'baldurs': 'Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.',
    'sonic': 'Shadow the Hedgehog vuelve junto al Sonic clásico y moderno en SONIC X SHADOW GENERATIONS, ¡una nueva colección con dos experiencias únicas!',
    'sparking': 'DRAGON BALL: Sparking! ZERO lleva a un nuevo nivel el legendario estilo de juego de la serie Budokai Tenkaichi. ¡Domina el poder destructivo de los luchadores más fuertes que han aparecido en Dragon Ball!',
    'silent hill': '«Me llamo... Maria», dice la mujer, sonriendo. Su rostro, su voz... Es igual que ella.',
    'god of war': 'Kratos god',
    'assasinscreed': 'Assasin Creed Valhalla',
    'gtav' : 'gta v juegazo', 
    'tomb raider' : 'tomb raider',
}
/* reqiosotps de los 4 juegos */
const requisitos = {
    'sparking': {
        min: ['SO: Windows 10', 'Procesador: Intel Core i5-9600K / AMD Ryzen 5 2600', 'Gráficos: Nvidia GeForce GTX 980 / AMD Radeon RX 590 / Intel Arc A750'],
        rec: ['SO: Windows 10 / Windows 11', 'Procesador: Intel Core i7-9700K / AMD Ryzen 5 3600', 'Gráficos: Nvidia GeForce RTX 2060 / AMD Radeon RX Vega 64']
    },
    'baldurs': {
        min: ['SO: Windows 10 64-bit', 'Procesador: Intel I5 4690 / AMD FX 8350', 'Gráficos: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)'],
        rec: ['SO: Windows 10 64-bit', 'Procesador: Intel i7 8700K / AMD r5 3600', 'Gráficos: Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)']
    },
    'sonic': {
        min: ['SO: Windows 10', 'Procesador: Intel Core i3-2120 or FX-6300', 'Gráficos: NVIDIA GeForce GTX 550 Ti, 1GB or AMD Radeon HD 5770, 1GB'],
        rec: ['SO: Windows 10', 'Procesador: Intel Core i7-2600 or AMD Ryzen 5 1400', 'Gráficos: NVIDIA GeForce GTX 780, 3GB or AMD Radeon RX 470, 4GB or Intel Arc A310, 4GB']
    },
    'silent hill': {
        min: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-6700K | AMD Ryzen 5 3600', 'Gráficos: NVIDIA® GeForce® GTX 1070 Ti or AMD Radeon™ RX 5700 or Intel® Arc™ A750'],
        rec: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-8700K | AMD Ryzen 5 3600X', 'Gráficos: NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT']
    },
    'god of war': {
        min: ['SO: Windows 10 64-bit', 'Procesador: Intel I5 4690 / AMD FX 8350', 'Gráficos: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)'],
        rec: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-8700K | AMD Ryzen 5 3600X', 'Gráficos: NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT']
    },
    'assasinscreed': {
        min: ['SO: Windows 10 64-bit', 'Procesador: Intel I5 4690 / AMD FX 8350', 'Gráficos: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)'],
        rec: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-8700K | AMD Ryzen 5 3600X', 'Gráficos: NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT']
    },
    'gtav': {
        min: ['SO: Windows 10 64-bit', 'Procesador: Intel I5 4690 / AMD FX 8350', 'Gráficos: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)'],
        rec: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-8700K | AMD Ryzen 5 3600X', 'Gráficos: NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT']
    },
    'tomb raider': {
        min: ['SO: Windows 10 64-bit', 'Procesador: Intel I5 4690 / AMD FX 8350', 'Gráficos: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)'],
        rec: ['SO: Windows 10 x64', 'Procesador: Intel Core i7-8700K | AMD Ryzen 5 3600X', 'Gráficos: NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT']
    },

};
/*imagenes de los juegos*/
const gameImage = {
    'sonic': [
        '/img2/sonic1.jpg',
        '/img2/sonic2.jpg',
        '/img2/sonic3.jpg'
    ],
    'sparking': [
        '/img2/dragon-ball.jpg',
        '/img2/dragon-ball2.jpg',
        '/img2/dragon-ball3.jpg'
    ],
    'baldurs': [
        '/img2/bg1.jpg',
        '/img2/Bg2.jpg',
        '/img2/bg3.jpg'
    ],
    'silent hill': [
        '/img2/sh1.jpg',
        '/img2/sh2.jpg',
        '/img2/sh3.jpg'
    ],
    'god of war': [
        '/img2/Modal2fotos/god1.jpg',
        '/img2/Modal2fotos/God2.png',
        '/img2/Modal2fotos/god3.jpg'
    ],
    'assasinscreed': [
        '/img2/Modal2fotos/AC1.jpg',
        '/img2/Modal2fotos/AC2.jpg',
        '/img2/Modal2fotos/AC3.jpg'
    ],
    'gtav': [
        '/img2/Modal2fotos/gta1.jpg',
        '/img2/Modal2fotos/gta2.jpg',
        '/img2/Modal2fotos/gta3.jpg'
    ],
    'tomb raider': [
        '/img2/Modal2fotos/tombraider1.jpg',
        '/img2/Modal2fotos/tombraider2.jpg',
        '/img2/Modal2fotos/tombraider3.jpg'
    ],
}
/* fin de las imagenes de los juegos*/

let index = 0;

function showNextImage() {
    const slides = document.querySelectorAll('.carousel-slide img');
    index = (index + 1) % slides.length; 
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * 500}px)`; 
}
setInterval(showNextImage, 3000); 

let sumar = 0;
function showNextImage2() {
    const slides = document.querySelectorAll('.carousel-slide-oferta img');
    const slideWidth = slides[0].clientWidth; // Obtener el ancho de la primera imagen
    sumar = (sumar + 1) % slides.length;
    document.querySelector('.carousel-slide-oferta').style.transform = `translateX(${-sumar * slideWidth}px)`;
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos
/*Inicio del modal game */
function showModal(game)  {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalSinopsis = document.getElementById('resumen');
    const modalRequisitosMin = document.getElementById('requisitos-min-list');
    const modalRequisitosRec = document.getElementById('requisitos-rec-list');
    const carouselContainer = document.querySelector('.carousel-slide')
    
    game = game.toLowerCase();

    modalImage.src = games[game];
    modalSinopsis.innerHTML = sinopsis[game];

    modalRequisitosMin.innerHTML = '';
    modalRequisitosRec.innerHTML = '';

    requisitos[game].min.forEach(requisito => {
        const li = document.createElement('li');
        li.textContent = requisito;
        modalRequisitosMin.appendChild(li);
    });

    requisitos[game].rec.forEach(requisito => {
        const li = document.createElement('li');
        li.textContent = requisito;
        modalRequisitosRec.appendChild(li);
    });

    carouselContainer.innerHTML= ''

    gameImage[game].forEach(imageUrl => {
        const imgElement = document.createElement('img')
        imgElement.src = imageUrl;
        imgElement.alt = `${game} image`;
        carouselContainer.appendChild(imgElement);
    });
    modal.style.display = 'block';

    index = 0;
    showNextImage();
}

/*fin del modal game */


/*Funcion de busqueda  */
function searchGame(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    if (games[input]) {
        showModal(input);
    }else {
        alert('Juego no encontrado.')
    }
}

function closeModal(){
    document.getElementById('myModal').style.display = 'none';
}
/*fin de la funcion de busqueda y cierre del modal */

/*Inicio de la funcion para mostrar el modal del boton cuenta*/
function ShowModalCuenta(){
    const modal = document.getElementById('myModalCuenta')
    modal.style.display = 'block';
}
function closeModalCuenta(){
    const modal = document.getElementById('myModalCuenta')
    modal.style.display = 'none';
}

function ShowmodalCalculadora(){
    const modal = document.getElementById('ModalCalculadora')
    modal.style.display = 'block';
    document.addEventListener('keydown', manejarTeclado);
}
function closeModalCalculadora(){
    const modal = document.getElementById('ModalCalculadora')
    modal.style.display = 'none';
    document.removeEventListener('keydown', manejarTeclado);
}

function iniciarSesion(event){
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginmessage = document.getElementById('loginMessage');
    const iniciarButton = document.getElementById('iniciar');
    
    if (username === 'admin' && password === 'admin') {
        loginmessage.textContent = 'Inicio Exitoso';
        loginmessage.style.color = 'Green';
        closeModalCuenta()
        // Ocultar el botón de iniciar sesión
        document.getElementById('iniciarusuario').style.display = 'none';
        document.getElementById('calculadora').style.display = 'inline-block';
        document.getElementById('tarea').style.display = 'inline-block';
        
    } else {
        loginmessage.textContent = 'Usuario o contraseña incorrectas';
        loginmessage.style.color = 'Red';
    }
}

//CALCULADORA 
const botonBorrar = document.getElementById('borrar')
const ingreso = document.getElementById('text')


// Obtener el campo de texto y el formulario de la calculadora
const input = document.getElementById('text');
const form = document.forms['calculadora'];

// Función para agregar el valor al campo de texto
function agregarValor(valor) {
    input.value += valor;
}

// Función para manejar el evento de teclas
// Modificar la función manejarTeclado para evitar duplicación
function manejarTeclado(event) {
    const tecla = event.key;
    
    // Comprobamos si la tecla es un número o un operador
    if ('0123456789'.includes(tecla)) {
        agregarValor(tecla);
    } else if (tecla === '+') {
        agregarValor('+');
    } else if (tecla === '-') {
        agregarValor('-');
    } else if (tecla === '*') {
        agregarValor('*');
    } else if (tecla === '/') {
        agregarValor('/');
    } else if (tecla === '.') {
        agregarValor('.');
    } else if (tecla === 'Backspace') {
        input.value = input.value.slice(0, -1);
    } else if (tecla === 'Enter') {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    } else if (tecla === 'Escape') {
        input.value = '';
    }
    
}


function toggleMenu() {
    const nav = document.querySelector('.inicio');
    nav.classList.toggle('active');
}

/*TAREAS */
document.addEventListener("DOMContentLoaded", () => {
    const tareaForm = document.getElementById("tareaForm");
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");

    // Función para agregar una nueva tarea
    tareaForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nuevaTareaText = nuevaTareaInput.value.trim();
        if (nuevaTareaText) {
            const tareaItem = document.createElement("div");
            tareaItem.classList.add("tarea-item");
            tareaItem.innerHTML = `
                <a href="#">${nuevaTareaText}</a>
                <input type="checkbox" class="tarea-checkbox">
            `;
            listaTareas.appendChild(tareaItem);
            nuevaTareaInput.value = "";
            agregarEventListeners();
        }
    });

    // Función para agregar event listeners a las casillas de verificación
    function agregarEventListeners() {
        const checkboxes = document.querySelectorAll('.tarea-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.removeEventListener('click', eliminarTarea); // Eliminar event listeners anteriores para evitar duplicados
            checkbox.addEventListener('click', eliminarTarea);
        });
    }

    // Función para eliminar una tarea completada
    function eliminarTarea(event) {
        const tareaItem = event.target.closest('.tarea-item');
        if (event.target.checked) {
            listaTareas.removeChild(tareaItem);
        }
    }

    // Agregar event listeners a las casillas de verificación existentes
    agregarEventListeners();
});
/*FIN TAREAS*/