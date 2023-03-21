class enemigo {
    constructor(carril, imagen, velocidad) {
      this.carril = carril;
      this.imagen = imagen;
      switch(carril) {
        case 5:
            this.positionY = "0%"
            break;

          case 4:
            this.positionY = "20%"
            break;

          case 3:
              this.positionY = "40%"
              break;

          case 2:
              this.positionY = "60%"
              break;

          case 1:
              this.positionY = "80%"
              break;
      }
      this.posicionX = "-100%"; // posición inicial fuera de la pantalla
      this.velocidad = velocidad; // velocidad del enemigo
    }
  
    // Método para actualizar la posición del enemigo
    actualizar() {
      this.posicionY += this.velocidad;
    }
  }

var enemigo1 = new enemigo(3, "./media/enemigo.gif", 10);