class Rana {
    //Atributos
    constructor(nombre,postionX,positionY,imagenParado,imagenMovimiento,imagenMuerto) {
        this.nombre = nombre;
        this.positionX = postionX;
        this.positionY = positionY;
        this.imagenParado = imagenParado;
        this.imagenMovimiento = imagenMovimiento;
        this.imagenMuerto = imagenMuerto;
        //añado una propiedad llamada "velocidad", simula la gravedad, es cuánto baja el personaje
        this.velocidad = -5 //número orientativo, indicará la cantidad de píxeles que baja
    }

    //Aqui meteriamos los métodos que queremos aplicar
    saltar(){

        var contador=0

        //subimos el contador a 1000 y lo bajamos a 0
        function calcular(){

            if(contador!=1000){
                contador++
            }else{
                contador++
                if(contador==2000){contador=0}
            }

        }

        if(contador!=0 /*Orientativo*/){
            calcular()
        }

    }

}
     let Pepe = new Rana('Pepe','postionX','positionY','imagenParado','imagenMovimiento','imagenMuerto'); //Creamos el objeto con los parametros que queremos meterle
    //Aquí ejecutariamos los metodos que hemos creado arriba