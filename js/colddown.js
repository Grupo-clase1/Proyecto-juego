var duracionColdDown = 2000
var barra=document.getElementById("barra")
var incremento = 100 / (duracionColdDown / 50);
var anchoActual = 100;

var duracionColdDown2 = 3000
var barra2=document.getElementById("barra2")
var incremento2 = 100 / (duracionColdDown2 / 50);
var anchoActual2 = 100;

function coldDown(){

  if(document.getElementById("barra")){
    barra=document.getElementById("barra")
    if (anchoActual >= 100) {
      barra.style.opacity = 0;
      return
    } else {
        barra.style.opacity = 1;
        anchoActual += incremento
      barra.style.width = `${anchoActual + incremento}%`;}
  }
}


function coldDown2(){

    if(document.getElementById("barra2")){
      barra2=document.getElementById("barra2")
      if (anchoActual2 >= 100) {
        barra2.style.opacity = 0;
        return
      } else {
        barra2.style.opacity = 1;
        anchoActual2 += incremento2
        barra2.style.width = `${anchoActual2 + incremento2}%`;}
    }
  }

function cargarBarras(){
  var barra2=document.getElementById("barra2")
  var barra=document.getElementById("barra")
  barra.style.top = 0+"px"
  barra2.style.top = barra.clientHeight+"px";

}

  addEventListener("resize", (event) => {
    barra2=document.getElementById("barra2")
    barra=document.getElementById("barra")

    barra2.style.top = barra.clientHeight+"px"  });