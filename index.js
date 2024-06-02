let precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const incrementarBtn = document.querySelectorAll("button")[0];
const decrementarBtn = document.querySelectorAll("button")[1];

precioSpan.innerHTML = precio;

let cantidad = 0;

function actualizarTotal() {
    const total = precio * cantidad;
    valorTotalSpan.innerHTML = total;
}

incrementarBtn.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
});

decrementarBtn.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
});

actualizarTotal();
