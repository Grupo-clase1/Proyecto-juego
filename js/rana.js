class Rana {
    //Atributos
    constructor(nombre,postionX,positionY,imagenParado,imagenMovimiento,imagenMuerto) {
        this.nombre = nombre;
        this.positionX = postionX;
        this.positionY = positionY;
        this.imagenParado = imagenParado;
        this.imagenMovimiento = imagenMovimiento;
        this.imagenMuerto = imagenMuerto;

        // carril en el que está
        this.carril = 2;
    }
    //Aqui meteriamos los métodos que queremos aplicar

    // metodo para cambiar de carril

}

let Pepe = new Rana('Pepe','postionX','positionY','imagenParado','imagenMovimiento','imagenMuerto'); //Creamos el objeto con los parametros que queremos meterle
//Aquí ejecutariamos los metodos que hemos creado arriba


// Agregar un evento "keydown" al documento
document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {
      if (Pepe.carril < 3) { // Si la rana no está en el carril 3
        Pepe.carril++; // Aumentar la propiedad "carril"
      }
    } else if (event.key === "s" || event.key === "S") {
      if (Pepe.carril > 1) { // Si la rana no está en el carril 1
        Pepe.carril--; // Disminuir la propiedad "carril"
      }
    }
  });
  