document.addEventListener("DOMContentLoaded", () => {

    const carrusel = document.querySelector(".galeria, .galeria-trabajos, .carrusel");
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


// Agregar botones de cotización a todas las fotos de muebles
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('img[src*="catalogo"]').forEach(function (foto) {
    const contenedor = foto.parentElement;

    // Evitar botones duplicados
    if (contenedor.querySelector('button[onclick*="cotizarProducto"]')) {
      return;
    }

    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "🟢 Cotizar este producto";

    boton.style.cssText =
      "display:block;margin:12px auto;padding:12px 18px;" +
      "background:#16803c;color:white;border:0;" +
      "border-radius:8px;font-weight:bold;cursor:pointer;";

    boton.addEventListener("click", function () {
      cotizarProducto(foto.src.split("/").pop());
    });

    foto.insertAdjacentElement("afterend", boton);
  });
});
