class nave {
    //Atributos
    constructor(nombre,postionX,positionY,imagenParado,imagenMovimiento,imagenMuerto) {
      //Creamos el constructor del objeto nave
        this.nombre = nombre;
        this.positionX = postionX;
        this.positionY = positionY;
        this.imagenParado = imagenParado;
        this.imagenMovimiento = imagenMovimiento;
        this.imagenMuerto = imagenMuerto;

        // carril en el que está
        this.carril = 3;
    }

    actualizarPosicion(){

        switch (this.carril) {
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
        
            default:
                break;
        }

    }
    //Aqui meteriamos los métodos que queremos aplicar

    // metodo para cambiar de carril

}

let Pepe = new nave('Pepe','5%','33%','./media/ovni1p.png','./media/ovni1.gif','./media/muerto.gif');
 //Creamos el objeto con los parametros que queremos meterle



//Aquí ejecutariamos los metodos que hemos creado arriba


// Agregar un evento "keydown" al documento
document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {
      if (Pepe.carril < 5) { // Si la rana no está en el carril 5
        Pepe.carril++; // Aumentar la propiedad "carril"
        // console.log(Pepe.carril)
      }
    } else if (event.key === "s" || event.key === "S") {
      if (Pepe.carril > 1) { // Si la rana no está en el carril 1
        Pepe.carril--; // Disminuir la propiedad "carril"
        // console.log(Pepe.carril)
      }
    }
  });

