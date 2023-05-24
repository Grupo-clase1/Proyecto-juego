document.addEventListener("DOMContentLoaded", function(event) { 
  var myElement = document.body;

  var mc = new Hammer(myElement);

  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

  mc.on("swipeup swipedown tap", function(ev) {
    if (jugando && !enAjustesOTienda) { 
        if(jugando){
            if (ev.type == "swipeup") {
                if (pjActivo.carril < 5) {
                    pjActivo.carril++;
                }
            } else if (ev.type == "swipedown") {
                if (pjActivo.carril > 1) {
                    pjActivo.carril--;
                }
            } else if (ev.type == "tap"){
                if (pausa){
                    pausa=false;
                    jugar()
                }else{
                    pausa=true;
                    jugar1()
                }
            }
        }
    }
  });
});

// Agregar un evento "keydown" al documento
document.addEventListener("keydown", function(event) {
  if (jugando && !enAjustesOTienda) { 

  // si "jugando" es == a "true"
  if(jugando){

      if (event.key === "w" || event.key === "W" || event.key === "ArrowUp") {
        if (pjActivo.carril < 5) { // Si la rana no está en el carril 5
          pjActivo.carril++; // Aumentar la propiedad "carril"
          // console.log(pjActivo.carril)

        }

      } else if (event.key === "s" || event.key === "S" || event.key === "ArrowDown") {

        if (pjActivo.carril > 1) { // Si la rana no está en el carril 1
          pjActivo.carril--; // Disminuir la propiedad "carril"
          // console.log(pjActivo.carril)

        }

      } else if (event.key === " "){
        if (pausa){
          pausa=false;
          jugar()
        }else{
          pausa=true;
          jugar1()
        }
      } else if (event.key === "g" || event.key === "G"){
        if(godMode){
          godMode = false;
          document.getElementById("imagen").style.opacity = 1;
        }else{
          godMode = true;
          document.getElementById("imagen").style.opacity = 0.5;
        }
      } else if (event.key === "e" || event.key === "E"){
        pjActivo.habilidadEspecial();
      }
    

    }
  }});

  function disableZoom() {
    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });
  
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
            e.preventDefault();
        }
    });
  }
  
  window.addEventListener('load', function () {
    disableZoom();
  });
  