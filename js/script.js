const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');

menuBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('active');
});

const piezas = {
  A1: {
    nombre: 'Mesa escritorio',
    autor: 'Anónimo',
    datacion: 'Siglo XIX',
    tipologia: 'Mobiliario',
    materiales: 'Madera',
    dimensiones: '120x80 cm'
  }
};

document.getElementById('searchBtn').addEventListener('click', () => {
  const code = document.getElementById('pieceCode').value;
  const pieza = piezas[code];

  if (pieza) {
    document.getElementById('nombre').textContent = pieza.nombre;
    document.getElementById('autor').textContent = pieza.autor;
    document.getElementById('datacion').textContent = pieza.datacion;
    document.getElementById('tipologia').textContent = pieza.tipologia;
    document.getElementById('materiales').textContent = pieza.materiales;
    document.getElementById('dimensiones').textContent = pieza.dimensiones;
  } else {
    alert('Pieza no encontrada');
       }
});

document.getElementById('exportBtn').addEventListener('click', () => {
  alert('Exportación preparada');
});

document.getElementById('resetView').addEventListener('click', () => {
  alert('Vista reseteada');
});
