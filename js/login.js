const formLogin = document.querySelector("#contenedor-login form");
const inputNombre = document.getElementById("id-usuario");
const inputContrasena = document.getElementById("id-contrasena");
const btnIngresar = document.getElementById("btn-ingresar");
const usuarioCuenta = document.getElementById("usuario-cuenta");
const usuarioIcono = document.querySelector("#usuario-cuenta svg");
const saludoLogin = document.getElementById("saludo-login");

// ----- Evitar el envío del formulario 
formLogin.addEventListener('submit', function (evento) {
    evento.preventDefault();
    validarCampos();

});


btnIngresar.addEventListener('click', function () {
    sessionStorage.setItem('nombre', inputNombre.value);
    guardarNombre();

});

// ----- Guardar el nombre de usuario en el session storage
function guardarNombre() {
    let nombreGuardado = sessionStorage.getItem('nombre');
    if (sessionStorage.getItem('nombre')) {
        saludoLogin.classList.add('saludo-login-activo');
        let parrafoSaludo = document.querySelector("#saludo-login #segundo-parrafo");
        parrafoSaludo.innerHTML = `${nombreGuardado}!`;
        let contenedorLogin = document.getElementById("contenedor-login");
        contenedorLogin.style.display = "none";
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    }

}

// ----- Validar que los inputs no queden vacíos
function validarCampos() {
    if (!inputNombre.value || !inputContrasena.value) {
        let msjError = document.querySelector(".error");
        msjError.classList.add("error-activo");
        setTimeout(() => {
            msjError.classList.remove("error-activo");
        }, 2000);
    }
}