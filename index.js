const container = document.getElementById("container")
container.scrollTop = 852;

function setup() {
  let canva = createCanvas(393, 852);
  canva.parent('container')
}

function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
}

document.getElementById('dado').addEventListener('click', function resultado() {
  const resultadoLanzamiento = lanzarDado();
  alert("El resultado del lanzamiento es: " + resultadoLanzamiento);
})

let casillas = [
  { id: 1, tipo: "Rosa", x: 280, y: 710, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 2, tipo: "Azul", x: 240, y: 680, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 3, tipo: "Amarillo", x: 200, y: 670, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 4, tipo: "Morado", x: 150, y: 675, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 5, tipo: "Rosa", x: 105, y: 665, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 6, tipo: "Amarillo", x: 70, y: 640, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 7, tipo: "Azul", x: 58, y: 595, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 8, tipo: "Portal", x: 70, y: 555, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 9, tipo: "Rosa", x: 100, y: 525, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 10, tipo: "Morado", x: 145, y: 520, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 11, tipo: "Amarillo", x: 190, y: 530, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 12, tipo: "Azul", x: 235, y: 545, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 13, tipo: "Morado", x: 280, y: 550, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 14, tipo: "Amarillo", x: 315, y: 525, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 15, tipo: "Azul", x: 325, y: 480, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 16, tipo: "Portal", x: 300, y: 445, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 17, tipo: "Amarillo", x: 265, y: 420, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 18, tipo: "Morado", x: 220, y: 415, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 19, tipo: "Rosa", x: 180, y: 425, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 20, tipo: "Azul", x: 135, y: 425, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 21, tipo: "Rosa", x: 100, y: 400, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },
  { id: 22, tipo: "Morado", x: 90, y: 355, ancho: 30, alto: 30, hitbox: { x: 30, y: 30, ancho: 30, alto: 30 } },

];

function draw() {
  for (let i = 0; i < casillas.length; i++) {
    let casilla = casillas[i];
    rect(casilla.x, casilla.y, casilla.ancho, casilla.alto);
  }
  background();
}