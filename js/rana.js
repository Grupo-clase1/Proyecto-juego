let vida4
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
var vidasHTML
  //esta se une a las colisiones
  function restarVida() {
     vidasHTML = {
      3: document.getElementById('vida4'),
      2: document.getElementById('vida3'),
      1: document.getElementById('vida2'),
      0: document.getElementById('vida1')
    };
  
    vidas--;
  
    console.log("Vidas restantes: " + vidas)
    var vidasRestantes = vidas;
    if (vidasRestantes >= 1) {  
        vidasHTML[vidas].style.visibility = 'hidden';
      hit();
    } else if(vidasRestantes == 0){ //aviso cuando se gastan las vidas
      enAjustesOTienda = true;
      muerte();
      const tiendaBoton = document.getElementById('tiendaBoton');
      const ajustesBoton = document.getElementById('ajustesBoton');
      tiendaBoton.disabled = true;
      ajustesBoton.disabled = true;
      vidasHTML[vidas].style.visibility = 'hidden';
      const imagenOvni = document.getElementById('imagen');
      imagenOvni.src = pjActivo.imagenMuerto;
      const texto = `
        <div id="mensaje">
          GAME OVER<br /><br />
          <input id="botonmensaje" type="button" value="Reiniciar" onclick="reiniciar();" />
        </div>
      `;
      document.getElementById('aviso').innerHTML += texto;
      pausa = true;
    }
  }
  

  function sumarVida() {
    
    const vidasHTML = {
      3: document.getElementById('vida4'),
      2: document.getElementById('vida3'),
      1: document.getElementById('vida2'),
      0: document.getElementById('vida1')
    };

    if (pjActivo==Pepe2 && vidas < 4) {
      vidas++;
      vidasHTML[vidas - 1].style.visibility = 'visible';
      return
    }

    if (vidas < 3) {
      vidas++;
      vidasHTML[vidas - 1].style.visibility = 'visible';
    }

  }


function masDinero(){
  var dinero = document.getElementById('contadorDinero');
  monedas += contadorDeNiveles;
  dinero.innerHTML= '<img src="media/monedas.png" id="monedas">'+ monedas +'<img src="media/billetes.png" id="billetes"></img>'
  
}

function reiniciar(){  //boton dentro del game over (cuando pierdes todas las vidas)
  document.getElementById('aviso').innerHTML='';
  cuentaAtras() ;
  pjActivo.vidas=3;
  vidas = 3;
  contadorDeNiveles=1;
  contadorEnemigos=0;
  contadorPowerUps=0;


  vida3 = document.getElementById('vida3')
  vida2 = document.getElementById('vida2')
  vida1 = document.getElementById('vida1')

  // borramos tods los enemigos
  for(i=0; i!=arrayEnemigos.length; i++){
    if (arrayEnemigos[i]) arrayEnemigos[i].borrarEnemigo()
  }

  idEnemigos = 0
  arrayEnemigos = []

  indiceEnemigo = 0

  pjActivo.carril=3;

  monedas=0;

  var imagenOvni = document.getElementById("imagen")
      imagenOvni.src = pjActivo.imagenMovimiento;  
  vida1.style.visibility = 'visible';
  vida2.style.visibility = 'visible';
  vida3.style.visibility = 'visible';

  document.getElementById("contadorBackground").innerHTML ="Nivel" + contadorDeNiveles;
  document.getElementById('pantalla').style.backgroundImage = `url(${niveles[0].fondo})`;


  fondos = document.getElementById('pantalla');

  posicion = 0;
  fondos.style.backgroundPosition=posicion+'vh';

  pjActivo.actualizarPosicion();

}


