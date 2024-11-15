document.getElementById('cuenta').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const usuario = document.getElementById('usuario');
    const confirmpassword = document.getElementById('confirm-password').value;
    const registro = document.getElementById('registro').value;
    const mensaje = document.getElementById('mensaje');


    if (password == confirmpassword) {
        mensaje.textContent = 'Cuenta creada exitosamente'
        mensaje.style.color = 'green'
        window.location.href = '/Inicio/index.html'

    }else {
        mensaje.textContent = 'Las Contraseñas No Coinciden'
        mensaje.style.color = 'red'
    }
});