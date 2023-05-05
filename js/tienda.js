function cambioDeImagen(){
    document.getElementById("imagen").src = pjActivo.imagenMovimiento;
    if(pjActivo==Pepe2){
        document.getElementById('vida4').hidden=false;
        document.getElementById('vida4').style.visibility = 'hidden';
    }else{
        document.getElementById('vida4').hidden=true;
    }
}