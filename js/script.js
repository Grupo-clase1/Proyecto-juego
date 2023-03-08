class Nivel {
    constructor(numero, velocidad) {
      this.numero = numero;
      this.velocidad = velocidad;
    }
  }

var nivel1 = new Nivel(1, 10);
var nivel2 = new Nivel(2, 15);
var nivel3 = new Nivel(3, 20);

// Cuando la rana llegue al final del nivel 1, cambia al nivel 2
if (rana.llegaAlFinal(nivel1)) {
  mostrarNivel(nivel2);
}

// Cuando la rana llegue al final del nivel 2, cambia al nivel 3
if (rana.llegaAlFinal(nivel2)) {
  mostrarNivel(nivel3);
}

function mostrarNivel(nivel) {
  // Código para mostrar el nivel en la pantalla
}
  