
function tienda() {
  let botonTienda = document.getElementById('tiendaBoton');
  let divTienda = document.getElementById('divTienda');
  let divAjustes = document.getElementById('divAjustes');

  if (divAjustes.hidden == false) { // si el menú de ajustes está abierto, ciérralo
    divAjustes.hidden = true;
  }

  if (divTienda.hidden == true) {
      divTienda.hidden = false; // mostrar el div de la tienda
      pausa = true; // pausar el juego
  } else {
      divTienda.hidden = true; // ocultar el div de la tienda
      pausa = false; // reanudar el juego
      animacion(); // reiniciar el bucle de animación
  }
}
  
function ajustesSup() {
  let botonAjustes = document.getElementById('ajustesBoton');
  let divAjustes = document.getElementById('divAjustes');
  let divTienda = document.getElementById('divTienda');

  if (divTienda.hidden == false) { // si el menú de la tienda está abierto, ciérralo
    divTienda.hidden = true;
  }

  if (divAjustes.hidden == true) {
    divAjustes.hidden = false; // mostrar el menú de ajustes
    pausa = true; // pausar el juego
  } else {
    divAjustes.hidden = true; // ocultar el menú de ajustes
    pausa = false; // reanudar el juego
    animacion(); // reiniciar el bucle de animación
  }
}

function mueve1(){
 var skin1 = document.getElementById('skin1')
 skin1.src='media/ovni1.gif'
}

function mueve2(){
  var skin2 = document.getElementById('skin2')
  skin2.src='media/ovni2.gif'
 }

 function mueve3(){
  var skin3 = document.getElementById('skin3')
  skin3.src='media/nave1.gif'
 }

 function mueve4(){
  var skin4 = document.getElementById('skin4')
  skin4.src='media/nave2.gif'
 }

 function mueve5(){
  var skin5 = document.getElementById('skin5')
  skin5.src='media/nave4.gif'
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