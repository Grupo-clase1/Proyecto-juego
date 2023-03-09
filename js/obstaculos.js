class ObstaculoHorizontal {
    constructor(posicionX, posicionY, longitud, velocidad, imagen) {
      this.posicionX = posicionX;
      this.posicionY = posicionY;
      this.longitud = longitud;
      this.velocidad = velocidad;
      this.imagen = imagen;
    }
  
    mover() {
      this.posicionX -= this.velocidad;
    }
  }
  
  class ObstaculoVertical {
    constructor(posicionX, posicionY, longitud, velocidad, imagen) {
      this.posicionX = posicionX;
      this.posicionY = posicionY;
      this.longitud = longitud;
      this.velocidad = velocidad;
      this.imagen = imagen;
    }
  
    mover() {
      this.posicionY += this.velocidad;
    }
  }
  
  const nivel1Obstaculos = [
    new ObstaculoHorizontal(800, 400, 100, 5, "obstaculo1.png"),
    new ObstaculoHorizontal(1000, 200, 200, 7, "obstaculo2.png"),
    new ObstaculoVertical(500, 0, 100, 3, "obstaculo3.png"),
    new ObstaculoVertical(700, -100, 150, 4, "obstaculo4.png"),
  ];
  
  const nivel2Obstaculos = [
    new ObstaculoHorizontal(800, 400, 150, 7, "obstaculo1.png"),
    new ObstaculoHorizontal(1000, 200, 250, 9, "obstaculo2.png"),
    new ObstaculoVertical(500, 0, 200, 4, "obstaculo3.png"),
    new ObstaculoVertical(700, -100, 250, 5, "obstaculo4.png"),
  ];
    