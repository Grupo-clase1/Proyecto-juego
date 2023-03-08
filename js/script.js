var menuDiv 

function jugar(){
    var menuDiv = document.getElementById('menuDiv');

    menuDiv.style.visibility='hidden';
}

function ajustes(){
    var texto='';
    document.write('<div id="inAjustes" class="inAjustes"></div>')

    texto+='hola caracola';
    document.getElementById('inAjustes').innerHTML=texto
}

function salir(){

   window.close();
}