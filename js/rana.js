let vida3
let vida2 
let vida1

var vidas = 3;

var monedas = 0;

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
        this.vidas=vidas
        this.restarVida=restarVida
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

//Solo puede haber un objeto nave y desde este cambiar las propiedades.
const Pepe = new nave('Pepe','5%','40%','./media/ovni1p.png','./media/ovni1.gif','./media/muerto.gif', "rana");
const Pepe2 = new nave('Pepe','5%','40%','./media/ovni2p.png','./media/ovni2.gif','./media/muerto.gif', "rana");
const Pepe3 = new nave('Pepe','5%','40%','./media/nave1p.png','./media/nave1.gif','./media/muerto.gif', "rana");
const Pepe4 = new nave('Pepe','5%','40%','./media/nave2p.png','./media/nave2.gif','./media/muerto.gif', "rana");
const Pepe5 = new nave('Pepe','5%','40%','./media/nave4p.png','./media/nave4.gif','./media/muerto.gif', "rana");


//Aquí ejecutariamos los metodos que hemos creado arriba

  //esta se une a las colisiones
  function restarVida(){
    vida3 = document.getElementById('vida3')
    vida2 = document.getElementById('vida2')
    vida1 = document.getElementById('vida1')

    this.vidas --;
    vidas--;

    if (this.vidas==2){
      vida3.style.visibility = 'hidden';
      hit()
    }else if (this.vidas == 1){
      vida3.style.visibility = 'hidden';
      vida2.style.visibility = 'hidden';
      hit()
    }else if (this.vidas == 0){           //aviso cuando se gastan las vidas
      enAjustesOTienda=true;
      muerte()
      var tiendaBoton = document.getElementById('tiendaBoton');
      var ajustesBoton = document.getElementById('ajustesBoton');
      tiendaBoton.disabled = true;
      ajustesBoton.disabled = true;
      vida1.style.visibility = 'hidden';
      var imagenOvni = document.getElementById("imagen")
      imagenOvni.src = pjActivo.imagenMuerto;      
      var texto=''
      texto+='<div id="mensaje">';
      texto+='GAME OVER';
      texto+='<br /><br /><input id="botonmensaje" type="button" value="Reiniciar" onclick="reiniciar();" />';
      texto+='</div>';
      document.getElementById('aviso').innerHTML+=texto;
      pausa=true;
    }
  }

function masDinero(){
  var dinero = document.getElementById('contadorDinero');
  monedas += contadorDeNiveles;
  dinero.innerHTML= '<img src="media/monedas.png" id="monedas">'+ monedas +'<img src="media/billetes.png" id="billetes"></img>'
  
}

function reiniciar(){  //boton dentro del game over (cuando pierdes todas las vidas)
  document.getElementById('aviso').innerHTML=''
  cuentaAtras() 
  pjActivo.vidas=3
  vidas = 3
  var imagenOvni = document.getElementById("imagen")
      imagenOvni.src = pjActivo.imagenMovimiento;  
  vida1.style.visibility = 'visible';
  vida2.style.visibility = 'visible';
  vida3.style.visibility = 'visible';
}


