// Obtener la referencia del contenedor flotante
const floatingContainer = document.getElementById("contenedorFlotante");

// Obtener la referencia del elemento que sigue el contenedor flotante
const productContainer = document.getElementById("destacados");

// Obtener la posición del elemento de producto en la página
const productPosition = productContainer.getBoundingClientRect();

// Asignar un evento scroll al elemento window
window.onscroll = function() {
    // Calcular la posición del scroll en la página
    const scrollPosition = window.scrollY;

    // Comprobar si el scroll ha llegado al elemento de producto
    if (scrollPosition >= productPosition.top) {
        // Asignar la posición fija al contenedor flotante
        floatingContainer.style.position = "fixed";
        floatingContainer.style.top = "20px";
    } else {
        // Eliminar la posición fija del contenedor flotante
        floatingContainer.style.position = "relative";
        floatingContainer.style.top = "3rem";
    }
};



