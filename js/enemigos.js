class enemigo {
    constructor(carril, imagen, velocidad, id) {
      this.carril = carril;
      this.imagen = imagen;
      switch(carril) {
        case 5:
            this.positionY = 0
            break;

          case 4:
            this.positionY = 20
            break;

          case 3:
              this.positionY = 40
              break;

          case 2:
              this.positionY = 60
              break;

          case 1:
              this.positionY = 80
              break;
      }
      this.positionX = -10; // posición inicial fuera de la pantalla
      this.velocidad = velocidad; // velocidad del enemigo
      this.id = id
    }
  

  // Función para actualizar la posición del enemigo en cada frame
  actualizarPosicion() {
    // Actualizar la posición vertical del enemigo

    this.positionX += this.velocidad;

    document.getElementById(`enemigo${this.id}`).style.top = `${this.positionY}%`;

    // console.log(`${this.positionX}%;`);

    document.getElementById(`enemigo${this.id}`).style.right = `${this.positionX}%`;

    // Verificar si el enemigo ha llegado al final de la pantalla
    if (this.positionX > 110) {
      document.getElementById(`enemigo${this.id}`).remove();
      this.borrarEnemigo()
    }
  }

  anadirEnemigo(){
    // Añadir el enemigo al DOM
    let pantalla = document.getElementById("pantalla");
    pantalla.innerHTML += `<div class="enemigo" id="enemigo${this.id}"><img class="imagen" id="imagen${this.id}" src="./media/enemigo${parseInt(Math.floor((Math.random() * 6) + 0))}.gif"></div>`
  }


  borrarEnemigo() {
    arrayEnemigos[this.id]=undefined;
  }


}





// -----------La wea de añadir enemigos


var idEnemigos = 0
var arrayEnemigos = []

// crea el enemigo pero no lo muestra
function nuevoEnemigo(){
  let posicionAleatoria = parseInt(Math.floor((Math.random() * 5) + 0.05));
  arrayEnemigos.push(new enemigo(posicionAleatoria, "../media/enemigo.gif", 2, idEnemigos));

  // añade el enemigo
  arrayEnemigos[idEnemigos].anadirEnemigo()

  idEnemigos++;

}
