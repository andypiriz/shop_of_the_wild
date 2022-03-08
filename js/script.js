$(document).ready(function () {

    // ----- Agregarle estilos a los links del Nav
    $('.categorias-nav').addClass('link-nav');

    //----- Acordeón características 
    $('#lista-caracteristicas p').slideUp();

    //----- Precio
    $('#div-precio').click(function () {
        $('#parrafo-precio').slideDown();
    });

    $('#div-precio').mouseleave(function () {
        $('#parrafo-precio').slideUp();
    });
    //----- Defensa
    $('#div-defensa').click(function () {
        $('#parrafo-defensa').slideDown();
    });

    $('#div-defensa').mouseleave(function () {
        $('#parrafo-defensa').slideUp();
    });
    //----- Efecto
    $('#div-efecto').click(function () {
        $('#parrafo-efecto').slideDown();
    });

    $('#div-efecto').mouseleave(function () {
        $('#parrafo-efecto').slideUp();
    });
    //----- Bonificación
    $('#div-bonificacion').click(function () {
        $('#parrafo-bonificacion').slideDown();
    });

    $('#div-bonificacion').mouseleave(function () {
        $('#parrafo-bonificacion').slideUp();
    });
    //----- Obtención
    $('#div-obtencion').click(function () {
        $('#parrafo-obtencion').slideDown();
    });

    $('#div-obtencion').mouseleave(function () {
        $('#parrafo-obtencion').slideUp();
    });
    //----- Mejoras
    $('#div-mejoras').click(function () {
        $('#parrafo-mejoras').slideDown();
    });

    $('#div-mejoras').mouseleave(function () {
        $('#parrafo-mejoras').slideUp();
    });


    // ----- Cargar comentarios de usuarios desde JSON
    const JSONUSERS = "json/datos-usuario.json";

    let comentarios = [];

    $.getJSON(JSONUSERS, function (respuesta, estado) {
        if (estado === "success") {
            comentarios = respuesta;
            for (const comentario of comentarios) {
                $("#comentarios").append(
                    ` <article>
                        <div>
                            <img src="img/perfil.png" alt="Ícono usuario">
                            <h4>${comentario.nombre}</h4>
                        </div>
                        <p>${comentario.comentario}</p>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#36BBEB">
                                    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
                                </svg>
                                <p>${comentario.likes}</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#36BBEB">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                                </svg>
                                <p>${comentario.respuestas}</p>
                            </div>
                        </div>
                    </article>`
                )
            }
        }
    });

});


// ----- Mostrar los artículos filtrados en Index
function mostrarPrendas(lista) {
    let prendasFiltradas = document.getElementById("prendas-filtradas");
    prendasFiltradas.innerHTML = " ";


    for (let i = 0; i < lista.length; i++) {
        const prenda = lista[i];

        let linkPrenda = document.createElement("a");
        linkPrenda.setAttribute("href", `pages/detalle.html?id=${prenda.id}`);
        linkPrenda.classList.add("link-prenda");

        let figurePrenda = document.createElement("figure");

        let imgPrenda = document.createElement("img");
        imgPrenda.setAttribute("src", `${prenda.icono}`);
        figurePrenda.appendChild(imgPrenda);

        let figcaptionPrenda = document.createElement("figcaption");
        figcaptionPrenda.innerHTML = `${prenda.nombre}`;
        linkPrenda.appendChild(figcaptionPrenda);
        figurePrenda.appendChild(linkPrenda);

        prendasFiltradas.appendChild(figurePrenda);

    }

    if (lista.length === 0) {
        let vacioMsj = document.createElement("h3");
        vacioMsj.innerHTML = "No se encontró ninguna prenda";
        prendasFiltradas.appendChild(vacioMsj);
    }


}

mostrarPrendas(prendas);



// ----- Filtrar según los imgs con categorías
function filtrarPrendas(evento) {
    let imgSeleccionada = evento.target;
    let categoriaSeleccionada = imgSeleccionada.alt;

    let arrayFiltradas = [];

    for (let i = 0; i < prendas.length; i++) {
        const prenda = prendas[i];

        if (prenda.categoria === categoriaSeleccionada) {
            arrayFiltradas.push(prenda);
        }
    }
    mostrarPrendas(arrayFiltradas);

    if (categoriaSeleccionada === "todo") {
        mostrarPrendas(prendas);
    }
}



// ----- Eventos en los figure
let filtroImgs = document.querySelectorAll("#filtro-prendas img");

for (let i = 0; i < filtroImgs.length; i++) {
    filtroImgs[i].addEventListener("click", filtrarPrendas);

}

// ----- Filtrar prendas según buscador
function buscadorPrendas() {
    let contenidoInput = buscador.value;
    contenidoInput.toLowerCase();

    let prendaEncontrada = [];

    for (let i = 0; i < prendas.length; i++) {
        const prenda = prendas[i];

        if (
            prenda.nombre.toLowerCase().includes(contenidoInput) ||
            prenda.categoria.toLowerCase().includes(contenidoInput)
        ) {
            prendaEncontrada.push(prenda);
        }
    }


    mostrarPrendas(prendaEncontrada);
}

let buscador = document.getElementById("campo-buscador");
buscador.addEventListener("keyup", buscadorPrendas);


// ----- Mostrar nombre del usuario ingresado en el formulario de Login
function mostrarNombre() {
    if (sessionStorage.getItem('nombre')) {
        let traerNombre = sessionStorage.getItem('nombre');
        let cardUsuario = document.getElementById("card-usuario");
        cardUsuario.style.display = "flex";
        let nombreIndex = document.querySelector("#card-usuario p");
        nombreIndex.innerHTML = `Usuario: ${traerNombre}`;
    }

}
mostrarNombre();