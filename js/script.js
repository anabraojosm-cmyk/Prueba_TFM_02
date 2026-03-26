// --- MENÚ HAMBURGUESA ---
const menuBtn = document.getElementById("menuBtn");
const menuDesplegable = document.getElementById("menuDesplegable");

menuBtn.addEventListener("click", () => {
    menuDesplegable.classList.toggle("oculto");
});


// --- BASE DE DATOS SIMPLIFICADA ---
const piezas = {
    5: {
        nombre: "Pieza de ejemplo",
        autor: "Autor desconocido",
        datacion: "Siglo XX",
        tipologia: "3",
        materiales: "3",
        dimensiones: "3",
        imagen: "https://via.placeholder.com/200"
    }
};


// --- BUSCADOR ---
const btnBuscar = document.getElementById("btnBuscar");
const codigoInput = document.getElementById("codigoInput");

btnBuscar.addEventListener("click", () => {
    const codigo = codigoInput.value.trim();
    const pieza = piezas[codigo];

    if (pieza) {
        document.getElementById("nombre").textContent = pieza.nombre;
        document.getElementById("autor").textContent = pieza.autor;
        document.getElementById("datacion").textContent = pieza.datacion;

        document.getElementById("tipologia").textContent = pieza.tipologia;
        document.getElementById("materiales").textContent = pieza.materiales;
        document.getElementById("dimensiones").textContent = pieza.dimensiones;

        document.getElementById("piezaImg").src = pieza.imagen;
    } else {
        alert("Código no encontrado.");
    }
});


// --- EXPORTAR DATOS (solo ejemplo de función) ---
document.getElementById("btnExportar").addEventListener("click", () => {
    alert("Función de exportar activada (a completar según tu necesidad)");
});
