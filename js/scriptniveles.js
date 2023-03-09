class Nivel {
  constructor(numero, velocidad, fondo) {
    this.numero = numero;
    this.velocidad = velocidad;
    this.fondo = fondo;
  }
}

var nivel1 = new Nivel(1, 10, "fondo1.jpg");
var nivel2 = new Nivel(2, 15, "fondo2.jpg");
var nivel3 = new Nivel(3, 20, "fondo3.jpg");

// Cuando la rana llegue al final del nivel 1, cambia al nivel 2
if (Pepe.llegaAlFinal(nivel1)) {
  mostrarNivel(nivel2);
}

// Cuando la rana llegue al final del nivel 2, cambia al nivel 3
if (Pepe.llegaAlFinal(nivel2)) {
  mostrarNivel(nivel3);
}

function mostrarNivel(nivel) {
  // Código para mostrar el nivel en la pantalla
}
  