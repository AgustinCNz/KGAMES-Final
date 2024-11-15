document.getElementById('loginForm').addEventListener('submit', function(event){
event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const loginmessage = document.getElementById('loginMessage');

if (username === 'admin' && password === 'admin') {
    loginmessage.textContent= 'Inicio Exitoso';
    loginmessage.style.color= 'Green';
    window.location.href= '/Inicio/Index.html';
}else {
    loginmessage.textContent= 'Usuario o contraseña incorrectas';
}
});