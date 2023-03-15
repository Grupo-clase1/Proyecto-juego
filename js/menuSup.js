
function tienda() {
    let botonTienda = document.getElementById('tiendaBoton');
    let divTienda = document.getElementById('divTienda');

    divTienda.hidden=false;
    pausa=true;
  }
  
function ajustesSup() {
  let botonAjustes = document.getElementById('ajustesBoton');
  let divAjustes = document.getElementById('divAjustes');

  divAjustes.hidden=false;
  pausa=true;
}

function mueve(){
 var skin1 = document.getElementById('skin1')
 skin1.src='media/ovni1.gif'
}

function para(){
  var skin1 = document.getElementById('skin1')
  skin1.src='media/ovni1P.png'
}