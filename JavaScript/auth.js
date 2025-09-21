function ShowModalCuenta() {
  console.log("ShowModalCuenta ejecutada");
    const modal = document.getElementById('myModalCuenta');
    modal.classList.add('show'); 
   
}

function closeModalCuenta() {
    const modal = document.getElementById('myModalCuenta');
    modal.classList.remove('show'); 
   
}

function iniciarSesion(event){
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginmessage = document.getElementById('loginMessage');

    // Usuarios hardcodeados
    const usuarios = [
        { usuario: "admin", password: "admin", rol: "admin" },
        { usuario: "cliente", password: "1234", rol: "cliente" }
    ];

    const user = usuarios.find(u => u.usuario === username && u.password === password);

    if(user){
        loginmessage.textContent = 'Inicio Exitoso';
        loginmessage.style.color = 'green';

        // Guardar sesión
        sessionStorage.setItem('usuario', user.usuario);
        sessionStorage.setItem('rol', user.rol);

        if(user.rol === 'admin'){
            window.location.href = '/html/admin.html';
        } else {
            window.location.href = '/html/popular.html';
        }
    } else {
        loginmessage.textContent = 'Usuario o contraseña incorrectas';
        loginmessage.style.color = 'red';
    }
}
