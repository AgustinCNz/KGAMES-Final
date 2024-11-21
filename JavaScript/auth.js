function ShowModalCuenta() {
    const modal = document.getElementById('myModalCuenta');
    modal.classList.add('show'); // Agregar clase 'show' para abrir el modal
  }
  
  function closeModalCuenta() {
    const modal = document.getElementById('myModalCuenta');
    modal.classList.remove('show'); // Quitar clase 'show' para cerrar el modal
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
        window.location.href = '/html/admin.html'
        // Ocultar el botón de iniciar sesión

        
    } else {
        loginmessage.textContent = 'Usuario o contraseña incorrectas';
        loginmessage.style.color = 'Red';
    }
}