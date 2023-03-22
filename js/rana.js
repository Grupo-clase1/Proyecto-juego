class nave {
    //Atributos
    constructor(nombre,postionX,positionY,imagenParado,imagenMovimiento,imagenMuerto, id) {
      //Creamos el constructor del objeto nave
        this.nombre = nombre;
        this.positionX = postionX;
        this.positionY = positionY;
        this.imagenParado = imagenParado;
        this.imagenMovimiento = imagenMovimiento;
        this.imagenMuerto = imagenMuerto;
        this.id = id

        // carril en el que está
        this.carril = 3;
    }

    actualizarPosicion(){
      this.positionY = `${(5 - this.carril) * 20}%`;
    }
    //Aqui meteriamos los métodos que queremos aplicar

    // metodo para cambiar de carril


    animacionOvni(){
 
      var ovni = document.getElementById(this.id)

      // setInterval(() => {
        ovni.classList.add('animacion');
        setTimeout(() => {
          ovni.classList.remove('animacion');
        }, 1000); 
      // }, 5000);
      
  }
}

let Pepe = new nave('Pepe','5%','40%','./media/ovni1p.png','./media/ovni1.gif','./media/muerto.gif', "rana");
 //Creamos el objeto con los parametros que queremos meterle



//Aquí ejecutariamos los metodos que hemos creado arriba




