let vida3
let vida2 
let vida1

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
        this.vidas=3
        this.restarVida=restarVida
        this.monedas=100
        this.masDinero=masDinero

        // carril en el que está
        this.carril = 3;
    }

    actualizarPosicion(){
      this.positionY = `${(5 - this.carril) * 20}%`;
    }
    //Aqui meteriamos los métodos que queremos aplicar

    // metodo para cambiar de carril


    animacionOvni(){    //animacion que hace avanzar la nave en el cambio de nivel
 
    
  }
}
  //esta funcion hay que unirla a las colisiones
  function restarVida(){
    vida3 = document.getElementById('vida3')
    vida2 = document.getElementById('vida2')
    vida1 = document.getElementById('vida1')

    this.vidas --;

    if (this.vidas==2){
      vida3.style.visibility = 'hidden';
    }else if (this.vidas == 1){
      vida3.style.visibility = 'hidden';
      vida2.style.visibility = 'hidden';
    }else if (this.vidas <= 0){           //aviso cuando se gastan las vidas
      vida1.style.visibility = 'hidden';
      pausa=true;
      var texto=''
      texto+='<div id="mensaje">';
      texto+='<br /><br /><br />GAME OVER';
      texto+='<br /><br /><input type="button" value="Reiniciar" onclick="reiniciar();" style="font-size: 25px;"/>';
      texto+='</div>';
      document.getElementById('aviso').innerHTML+=texto;
    }
}

function masDinero(){
  //  var dinero = document.getElementById('contadorDinero')

  this.monedas +=50
  
}


//Solo puede haber un objeto nave y desde este cambiar las propiedades.
let Pepe = new nave('Pepe','5%','40%','./media/ovni1p.png','./media/ovni1.gif','./media/muerto.gif', "rana");
let Pepe1 = new nave('Pepe1','5%','40%','./media/ovni2p.png','./media/ovni2.gif','./media/muerto.gif', "rana");
let Pepe2 = new nave('Pepe2','5%','40%','./media/nave1p.png','./media/nave1.gif','./media/muerto.gif', "rana");
let Pepe3 = new nave('Pepe3','5%','40%','./media/naave2p.png','./media/nave2.gif','./media/muerto.gif', "rana");
let Pepe4 = new nave('Pepe4','5%','40%','./media/nave4p.png','./media/nave4.gif','./media/muerto.gif', "rana");

 //Creamos el objeto con los parametros que queremos meterle

//Aquí ejecutariamos los metodos que hemos creado arriba

function reiniciar(){  //boton dentro del game over (cuando pierdes todas las vidas)
  document.getElementById('aviso').innerHTML=''
  pausa=false;
  jugar()
  Pepe.vidas=3
  vida1.style.visibility = 'visible';
  vida2.style.visibility = 'visible';
  vida3.style.visibility = 'visible';
}


