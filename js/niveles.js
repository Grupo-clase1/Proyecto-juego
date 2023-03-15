class Nivel {
   //Atributos
  constructor(numero, velocidad, fondo) {
    this.numero = numero;
    this.velocidad = velocidad;
    this.fondo = fondo;
  }
     //Aqui meteriamos los métodos que queremos aplicar
}

var nivel1 = new Nivel(1, 10, "media/fondo1.jpg");
var nivel2 = new Nivel(2, 15, "media/fondo2.jpg");
var nivel3 = new Nivel(3, 20, "media/fondo3.jpg");
var nivel4 = new Nivel(4, 25, "media/fondo2.gif");

// Cuando la rana llegue al final del nivel 1, cambia al nivel 2
if (Pepe.llegaAlFinal(nivel1)) {
  mostrarNivel(nivel2);
}

// Cuando la rana llegue al final del nivel 2, cambia al nivel 3
if (Pepe.llegaAlFinal(nivel2)) {
  mostrarNivel(nivel3);
}

// Cuando la rana llegue al final del nivel 3, cambia al nivel 4
if (Pepe.llegaAlFinal(nivel3)) {
  mostrarNivel(nivel4);
}

function mostrarNivel(nivel) {
  // Código para mostrar el nivel en la pantalla
}
  


