var enAjustesOTienda = false;

function tienda() {
  let divTienda = document.getElementById('divTienda');
  let divAjustes = document.getElementById('divAjustes');
  let pantallaPausa = document.getElementById('pantallaPausa');

  if (divAjustes.hidden == false) { // si el menú de ajustes está abierto, ciérralo
    divAjustes.hidden = true;
  }

  if (divTienda.hidden == true) {
    pantallaPausa.hidden = true; // ocultar la pantalla de pausa
    divTienda.hidden = false; // mostrar el div de la tienda
    jugando = false; // pausar el juego
    enAjustesOTienda = true; // Indicar que estamos en la tienda
    pausa=true;
    jugar1()
  } else {
    divTienda.hidden = true; // ocultar el div de la tienda
    jugando = true; // reanudar el juego
    enAjustesOTienda = false; // Indicar que ya no estamos en la tienda
    pausa=false;
    cuentaAtras() ; // reiniciar el bucle de animación
  }
}

function ajustesSup() {
  let divAjustes = document.getElementById('divAjustes');
  let divTienda = document.getElementById('divTienda');
  let pantallaPausa = document.getElementById('pantallaPausa');

  if (divTienda.hidden == false) { // si el menú de la tienda está abierto, ciérralo
    divTienda.hidden = true;
  }

  if (divAjustes.hidden == true) {
    pantallaPausa.hidden = true; // ocultar la pantalla de pausa
    divAjustes.hidden = false; // mostrar el menú de ajustes
    jugando = false; // pausar el juego
    enAjustesOTienda = true; // Indicar que estamos en el menú de ajustes
    pausa=true;
    jugar1()
  } else {
    divAjustes.hidden = true; // ocultar el menú de ajustes
    jugando = true; // reanudar el juego
    enAjustesOTienda = false; // Indicar que ya no estamos en el menú de ajustes
    pausa=false;
    cuentaAtras() ; // reiniciar el bucle de animación
  }
}

function hoverSkin(num) {
  var skin = document.getElementById('skin' + num);
  switch(num) {
    case 1:
      skin.src = 'media/ovni1.gif';
      break;
    case 2:
      skin.src = 'media/ovni2.gif';
      break;
    case 3:
      skin.src = 'media/nave1.gif';
      break;
    case 4:
      skin.src = 'media/nave2.gif';
      break;
    case 5:
      skin.src = 'media/nave4.gif';
      break;
    default:
      break;
  }
}

function para(){
  var skin1 = document.getElementById('skin1')
  var skin2 = document.getElementById('skin2')
  var skin3 = document.getElementById('skin3')
  var skin4 = document.getElementById('skin4')
  var skin5 = document.getElementById('skin5')
  skin1.src='media/ovni1P.png'
  skin2.src='media/ovni2P.png'
  skin3.src='media/nave1P.png'
  skin4.src='media/nave2P.png'
  skin5.src='media/nave4P.png'
}

//esta funcion es para cambiar la skin desde la tienda
function equipar(num){
  var imagenOvni = document.getElementById("imagen")
   switch(num) {
     case 1:
      pjActivo.imagenMovimiento = skin1.src;
       break;

     case 2:
      if (monedas>400){
        pjActivo.imagenMovimiento = skin2.src;
        skin2.style.opacity=1
        alert('aaaaa')
        monedas-=400
      }else{}
       break;

     case 3:
      if (monedas>=600){
      pjActivo.imagenMovimiento = skin3.src;
      skin3.style.opacity=1
      alert('aaaaa')
      monedas-=600
    }else{}
       break;

     case 4:
      if (monedas>=800){
      pjActivo.imagenMovimiento = skin4.src;
      skin4.style.opacity=1
      alert('aaaaa')
      monedas-=800
    }else{}
       break;

     case 5:
      if (monedas>=1000){
      pjActivo.imagenMovimiento = skin5.src;
      skin5.style.opacity=1
      alert('aaaaa')
      monedas-=1000
    }else{}
       break;

     default:
      pjActivo.imagenMovimiento = skin1.src;
       break;
   }

   imagenOvni.src = pjActivo.imagenMovimiento;      

 }



//las dos funciones de las cruces para cerrar tienda y ajustes
function cerrarDivTienda() {
  divTienda.hidden = true; 
    jugando = true; 
    enAjustesOTienda = false; 
    pausa=false;
    pantallaPausa.hidden = true;
    cuentaAtras() ; 
}

function cerrarDivAjustes() {
  divAjustes.hidden = true; 
    jugando = true; 
    enAjustesOTienda = false;
    pausa=false;
    pantallaPausa.hidden = true;
    cuentaAtras() ; 
}


