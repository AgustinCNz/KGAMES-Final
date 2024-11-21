// function showCalculator() {
//     document.getElementById('tasks').classList.remove('active');
//     document.getElementById('calculator').classList.add('active');
// }

// Aquí irá la lógica completa de la calculadora más adelante.
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