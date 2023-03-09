class Rana {
    //Atributos
    constructor(nombre,postionX,positionY,imagenParado,imagenMovimiento,imagenMuerto) {
        this.nombre = nombre;
        this.positionX = postionX;
        this.positionY = positionY;
        this.imagenParado = imagenParado;
        this.imagenMovimiento = imagenMovimiento;
        this.imagenMuerto = imagenMuerto;
        //velocidad, simula la gravedad, bajando constantemente una velocidad
        this.velocidad = -5;
        this.contadorSalto = 0;

    }
    //Aqui meteriamos los métodos que queremos aplicar

    //método que ejecuta el bucle que "salta"
    saltar(){

        this.contadorSalto = 0;

        this.bucle()

    }

    bucle(){
        //cuando la variable sea undefined acaba la ejecución del bucle
        //no estoy seguro de que pueda leer la variable
        if(this.contadorSalto = undefined){
            return
        }else if(this.contadorSalto<1e3){//1e3  Es como decir 1*10³
            this.contadorSalto++;
            this.velocidad = 5
            setTimeout(bucle, 50)
        }else{
            this.velocidad = -5
            if (this.contadorSalto = 2e3) {this.contadorSalto = undefined}
            setTimeout(bucle, 50)
        }
    }
}

    let Pepe = new Rana('Pepe','postionX','positionY','imagenParado','imagenMovimiento','imagenMuerto'); //Creamos el objeto con los parametros que queremos meterle
    //Aquí ejecutariamos los metodos que hemos creado arriba