// const URL = `http://${window.location.hostname}:8080`;
// let socket = io(URL, { path: '/real-time' });

const container = document.getElementById("container")
container.scrollTop = 852;

function setup() {
  let canva = createCanvas(393, 1530);
  canva.parent('container')
}

class Ficha {
  constructor(imagen, posicion, turno = false, movimiento = false) {
    this.imagen = imagen;
    this.posicion = posicion;
    this.arrastre = false;
    // this.turno = turno; 
    // this.movimiento = movimiento; 
  }

  // cambiarTurnoYMovimiento() {
  //   this.turno = !this.turno;
  //   this.movimiento = !this.movimiento;
  }

  // establecerPosicion(posicion) {
  //   this.posicion = posicion;
  // }
//}
let amarillaImgs = [];
let azulImgs = [];
let moradaImgs = [];
let rosaImgs = [];

let amarillaURL = []
let azulURL = []
let moradaURL = []
let rosaURL = []

let backgroundImage;
function preload() {
  backgroundImage = loadImage('./img/Tablero.jpg');
  for (let i = 0; i <= 19; i++) {
    amarillaImgs.push(loadImage(`img/Amarillas/${i}.png`));
    amarillaURL.push(`img/Amarillas/${i}.png`);
  }
  for (let i = 0; i <= 19; i++) {
    azulImgs.push(loadImage(`img/Azules/${i}.png`));
    azulURL.push(`img/Azules/${i}.png`);
  }
  for (let i = 0; i <= 19; i++) {
    moradaImgs.push(loadImage(`img/Moradas/${i}.png`));
    moradaURL.push(`img/Moradas/${i}.png`);
  }
  for (let i = 0; i <= 19; i++) {
    rosaImgs.push(loadImage(`img/Rosas/${i}.png`));
    rosaURL.push(`img/Rosas/${i}.png`);
  }

  jugador1 = new Ficha(loadImage('img/ficha1.png'), createVector(320, 1440));
  jugador2 = new Ficha(loadImage('img/ficha3.png'), createVector(260, 1440));
}

let casillas = [
  { id: 1, tipo: "Rosa", x: 280, y: 1390, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 2, tipo: "Azul", x: 240, y: 1360, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 3, tipo: "Amarillo", x: 200, y: 1350, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 4, tipo: "Morado", x: 150, y: 1355, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 5, tipo: "Rosa", x: 105, y: 1350, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 6, tipo: "Amarillo", x: 70, y: 1320, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 7, tipo: "Azul", x: 58, y: 1275, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 8, tipo: "Portal", x: 70, y: 1235, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 9, tipo: "Rosa", x: 100, y: 1205, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 10, tipo: "Morado", x: 145, y: 1200, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 11, tipo: "Amarillo", x: 190, y: 1205, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 12, tipo: "Azul", x: 235, y: 1230, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 13, tipo: "Morado", x: 280, y: 1235, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 14, tipo: "Amarillo", x: 315, y: 1210, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 15, tipo: "Azul", x: 325, y: 1165, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 16, tipo: "Portal", x: 300, y: 1125, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 17, tipo: "Amarillo", x: 265, y: 1100, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 18, tipo: "Morado", x: 220, y: 1095, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 19, tipo: "Rosa", x: 180, y: 1100, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 20, tipo: "Azul", x: 135, y: 1100, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 21, tipo: "Rosa", x: 100, y: 1080, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 22, tipo: "Morado", x: 90, y: 1035, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 23, tipo: "Amarillo", x: 110, y: 1000, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 24, tipo: "Azul", x: 150, y: 980, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 25, tipo: "Rosa", x: 195, y: 980, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 26, tipo: "Morado", x: 240, y: 980, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 27, tipo: "Amarillo", x: 285, y: 960, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 28, tipo: "Azul", x: 310, y: 925, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 29, tipo: "Amarillo", x: 300, y: 880, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 30, tipo: "Rosa", x: 260, y: 860, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 31, tipo: "Morado", x: 215, y: 860, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 32, tipo: "Portal", x: 170, y: 865, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 33, tipo: "Rosa", x: 125, y: 865, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 34, tipo: "Amarillo", x: 90, y: 840, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 35, tipo: "Azul", x: 80, y: 790, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 36, tipo: "Morado", x: 105, y: 760, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 37, tipo: "Rosa", x: 145, y: 740, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 38, tipo: "Azul", x: 185, y: 740, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 39, tipo: "Rosa", x: 228, y: 740, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 40, tipo: "Azul", x: 275, y: 725, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 41, tipo: "Amarillo", x: 300, y: 690, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 42, tipo: "Morado", x: 300, y: 650, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 43, tipo: "Amarillo", x: 280, y: 610, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 44, tipo: "Morado", x: 235, y: 610, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 45, tipo: "Portal", x: 190, y: 610, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 46, tipo: "Amarillo", x: 145, y: 620, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 47, tipo: "Rosa", x: 100, y: 620, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 48, tipo: "Morado", x: 60, y: 595, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 49, tipo: "Azul", x: 45, y: 560, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 50, tipo: "Amarillo", x: 55, y: 515, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 51, tipo: "Azul", x: 100, y: 495, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 52, tipo: "Amarillo", x: 145, y: 495, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 53, tipo: "Azul", x: 190, y: 495, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 54, tipo: "Rosa", x: 235, y: 485, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 55, tipo: "Portal", x: 270, y: 465, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 56, tipo: "Morado", x: 285, y: 425, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 57, tipo: "Amarillo", x: 265, y: 385, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 58, tipo: "Rosa", x: 225, y: 365, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 59, tipo: "Amarillo", x: 180, y: 385, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 60, tipo: "Morado", x: 130, y: 385, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 61, tipo: "Amarillo", x: 100, y: 355, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 62, tipo: "Azul", x: 90, y: 315, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 63, tipo: "Amarillo", x: 110, y: 280, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 64, tipo: "Rosa", x: 145, y: 260, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 65, tipo: "Morado", x: 195, y: 260, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 66, tipo: "Portal", x: 240, y: 275, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 67, tipo: "Morado", x: 285, y: 275, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 68, tipo: "Azul", x: 305, y: 235, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 69, tipo: "Amarillo", x: 285, y: 190, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 70, tipo: "Morado", x: 240, y: 180, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 71, tipo: "Rosa", x: 195, y: 180, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 72, tipo: "Amarillo", x: 155, y: 180, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 73, tipo: "Azul", x: 105, y: 180, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 74, tipo: "Morado", x: 65, y: 150, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },

];

function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
}

document.getElementById('dado').addEventListener('click', function resultado() {
  const resultadoLanzamiento = lanzarDado();
  document.getElementById('dado').innerText = resultadoLanzamiento;
})

function mousePressed() {

  let areaArrastre = 70; 

  if (mouseX > jugador1.posicion.x - areaArrastre / 2 && mouseX < jugador1.posicion.x + areaArrastre / 2 &&
      mouseY > jugador1.posicion.y - areaArrastre / 2 && mouseY < jugador1.posicion.y + areaArrastre / 2) {
    jugador1.arrastre = true;
    jugador1.offsetX = mouseX - jugador1.posicion.x;
    jugador1.offsetY = mouseY - jugador1.posicion.y;
  }

  if (mouseX > jugador2.posicion.x - areaArrastre / 2 && mouseX < jugador2.posicion.x + areaArrastre / 2 &&
      mouseY > jugador2.posicion.y - areaArrastre / 2 && mouseY < jugador2.posicion.y + areaArrastre / 2) {
    jugador2.arrastre = true;
    jugador2.offsetX = mouseX - jugador2.posicion.x;
    jugador2.offsetY = mouseY - jugador2.posicion.y;
  }

  for (let i = 0; i < casillas.length; i++) {
    let casilla = casillas[i];
    if (mouseX > casilla.x && mouseX < casilla.x + casilla.ancho && mouseY > casilla.y && mouseY < casilla.y + casilla.alto) {
      let tipo = casilla.tipo.toLowerCase();

      let img;
      switch (tipo) {
        case "amarillo":
          img = random(amarillaURL);
          console.log(img);
          break;
        case "azul":
          img = random(azulURL);
          break;
        case "morado":
          img = random(moradaURL);
          break;
        case "rosa":
          img = random(rosaURL);
          break;
        default:
          console.error("Tipo de casilla no válido:", tipo);
          return;
      }

      let popupImg = createImg(img);
      popupImg.size(350, 525);
      popupImg.position(30, 150);

      document.getElementById('Screen').style.display = 'block';

      popupImg.mousePressed(() => {
        popupImg.remove();
        document.getElementById('Screen').style.display = 'none';
      });
    }
  }
}

function draw() {
background(backgroundImage);
  for (let i = 0; i < casillas.length; i++) {
    let casilla = casillas[i];
    noFill(casilla);
    stroke(0, 0, 0, 0);
    rect(casilla.x, casilla.y, casilla.ancho, casilla.alto);
  }

  image(jugador1.imagen, jugador1.posicion.x, jugador1.posicion.y, 50, 50);
  image(jugador2.imagen, jugador2.posicion.x, jugador2.posicion.y, 50, 50);
  
}

function mouseDragged() {
  if (jugador1.arrastre) {
    jugador1.posicion.x = mouseX - jugador1.offsetX;
    jugador1.posicion.y = mouseY - jugador1.offsetY;
  }

  if (jugador2.arrastre) {
    jugador2.posicion.x = mouseX - jugador2.offsetX;
    jugador2.posicion.y = mouseY - jugador2.offsetY;
  }
}

function mouseReleased() {
  jugador1.arrastre = false;
  jugador2.arrastre = false;
}