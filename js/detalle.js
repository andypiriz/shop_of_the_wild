// ----------- Obtener la ruta de la prenda
let rutaPrenda = window.location.href;
let separarRuta = rutaPrenda.split("=");

let idPrenda = separarRuta[1];
idPrenda = parseInt(idPrenda);

let prenda;

for (let i = 0; i < prendas.length; i++) {
    if (prendas[i].id === idPrenda) {
        prenda = prendas[i];
        break;
    }
}

// ---------- Mostrar detalle de la prenda seleccionada
function mostrarPrendaElegida() {
    let divInterior1 = document.getElementById("div-interior1");
    // ---------- Div que contiene el ícono
    let iconoPrenda = document.createElement("img");
    iconoPrenda.setAttribute("src", `../${prenda.icono}`);
    divInterior1.appendChild(iconoPrenda);

    // --------- Div que contiene el texto
    let divInterior2 = document.getElementById("div-interior2");
    // ----- Nombre
    let tituloPrenda = document.createElement("h2");
    tituloPrenda.innerHTML = prenda.nombre;
    divInterior2.appendChild(tituloPrenda);

    // ----- Descripción
    let descripcionPrenda = document.createElement("h4");
    descripcionPrenda.innerHTML = `${prenda.descripcion}`;
    divInterior2.appendChild(descripcionPrenda);

    // ----- Defensa
    let defensaPrenda = document.createElement("p");
    defensaPrenda.innerHTML = `<b>Puntos de defensa:</b> ${prenda.defensa}`;
    divInterior2.appendChild(defensaPrenda);

    // ----- Efecto
    let efectoPrenda = document.createElement("p");
    efectoPrenda.innerHTML = `<b>Efecto añadido:</b> ${prenda.efecto}`;
    divInterior2.appendChild(efectoPrenda);

    // ----- Bonificación
    let bonificacionPrenda = document.createElement("p");
    bonificacionPrenda.innerHTML = `<b>Bonificación de conjunto:</b> ${prenda.bonificacion}`;
    divInterior2.appendChild(bonificacionPrenda);

    // ----- Obtención
    let obtencionPrenda = document.createElement("p");
    obtencionPrenda.innerHTML = `<b>Obtención:</b> ${prenda.obtencion}`;
    divInterior2.appendChild(obtencionPrenda);

    // ----- Mejoras
    let divMejoras = document.createElement("div");

    let mejorasTitulo = document.createElement("h4");
    mejorasTitulo.innerHTML = "Mejoras:";
    divMejoras.appendChild(mejorasTitulo);

    let listaMejoras = document.createElement("ul");
    let liNivel1 = document.createElement("li");
    liNivel1.innerHTML = `Nivel 1: ${prenda.mejoras[0]}`;
    listaMejoras.appendChild(liNivel1);

    let liNivel2 = document.createElement("li");
    liNivel2.innerHTML = `Nivel 2: ${prenda.mejoras[1]}`;
    listaMejoras.appendChild(liNivel2);

    let liNivel3 = document.createElement("li");
    liNivel3.innerHTML = `Nivel 3: ${prenda.mejoras[2]}`;
    listaMejoras.appendChild(liNivel3);

    let liNivel4 = document.createElement("li");
    liNivel4.innerHTML = `Nivel 4: ${prenda.mejoras[3]}`;
    listaMejoras.appendChild(liNivel4);

    if (prenda.mejoras === "No tiene") {
        listaMejoras.style.display = "none";
        let sinMejoras = document.createElement("p");
        sinMejoras.innerHTML = "No tiene";
        divMejoras.appendChild(sinMejoras);
    }

    divMejoras.appendChild(listaMejoras);
    divInterior2.appendChild(divMejoras);

    // ---------- Div que contiene la imagen de la prenda
    let divInterior3 = document.getElementById("div-interior3");

    // ----- Imagen
    let imagenPrenda = document.createElement("img");
    imagenPrenda.setAttribute("src", `../${prenda.imagen}`);
    imagenPrenda.setAttribute("alt", `Imagen de ${prenda.nombre}`);
    divInterior3.appendChild(imagenPrenda);


}
mostrarPrendaElegida();