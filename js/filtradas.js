//------ Mostrar prendas fltradas según Nav
function mostrarFiltroNav(lista) {
    let filtradasNav = document.getElementById("filtradas-nav");
    filtradasNav.innerHTML = "";

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

        filtradasNav.appendChild(figurePrenda);

    }

    if (lista.length === 0) {
        let vacioMsj = document.createElement("h3");
        vacioMsj.innerHTML = "No se encontró ninguna prenda";
        filtradasNav.appendChild(vacioMsj);
    }

    let portada = document.getElementById("portada");
    let contenedor = document.getElementById("contenedor");
    let contenedorFiltradas = document.getElementById("filtro-nav-contenedor");
    portada.style.display = "none";
    contenedor.style.display = "none";
    contenedorFiltradas.classList.add("categorias-filtradas-visible");


}

// ----- Filtrar según los links del Nav
function filtrarPorNav(evento) {
    let linkSeleccionado = evento.target;
    let catSeleccionada = linkSeleccionado.id;

    let arrayFiltro = [];

    for (let i = 0; i < prendas.length; i++) {
        const prenda = prendas[i];

        if (prenda.categoria === catSeleccionada) {
            arrayFiltro.push(prenda);
        }
    }
    mostrarFiltroNav(arrayFiltro);
}

let filtroNav = document.querySelectorAll(".categorias-nav");

for (let i = 0; i < filtroNav.length; i++) {
    filtroNav[i].addEventListener("click", filtrarPorNav);

}