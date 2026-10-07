document.addEventListener("DOMContentLoaded", () => {

    const carrusel = document.querySelector(".carrusel");
    const botonIzquierda = document.querySelector(".control.izquierda");
    const botonDerecha = document.querySelector(".control.derecha");

    if (!carrusel) return;

    // Botón hacia la izquierda
    if (botonIzquierda) {
        botonIzquierda.addEventListener("click", () => {
            carrusel.scrollBy({
                left: -380,
                behavior: "smooth"
            });
        });
    }

    // Botón hacia la derecha
    if (botonDerecha) {
        botonDerecha.addEventListener("click", () => {
            carrusel.scrollBy({
                left: 380,
                behavior: "smooth"
            });
        });
    }

    // Permite arrastrar las fotografías con el mouse
    let presionado = false;
    let inicioX = 0;
    let scrollInicial = 0;

    carrusel.addEventListener("mousedown", (e) => {
        presionado = true;
        inicioX = e.pageX - carrusel.offsetLeft;
        scrollInicial = carrusel.scrollLeft;
    });

    carrusel.addEventListener("mouseup", () => {
        presionado = false;
    });

    carrusel.addEventListener("mouseleave", () => {
        presionado = false;
    });

    carrusel.addEventListener("mousemove", (e) => {
        if (!presionado) return;

        e.preventDefault();

        const x = e.pageX - carrusel.offsetLeft;
        const movimiento = (x - inicioX) * 1.5;

        carrusel.scrollLeft = scrollInicial - movimiento;
    });

});
