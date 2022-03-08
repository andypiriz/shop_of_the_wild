const formularioContacto = document.getElementById("formulario-contacto");
let msjExito = document.getElementById("mensaje-exito");
let msjError = document.getElementById("mensaje-error");


let btnEnviar = document.getElementById("btn-enviar");
btnEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (formularioContacto.usuario.value && formularioContacto.email.value && formularioContacto.mensaje.value) {
        formularioContacto.reset();

        msjExito.classList.add("exito-activo");
        setTimeout(() => {
            msjExito.classList.remove("exito-activo");
        }, 5000);

    } else {
        msjError.classList.add("error-activo");
        setTimeout(() => {
            msjError.classList.remove("error-activo");
        }, 2000);


    }
});