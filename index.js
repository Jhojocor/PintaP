const container = document.getElementById("container")
container.scrollTop = 852;

function setup() {
  let canva = createCanvas(393, 852);
  canva.parent('container')
}

function draw() {
  background();
  ellipse(mouseX, mouseY, 50, 50);
}

const tablero = [
    { id: 1, tipo: "Pink", posicion: [0, 0] },
    { id: 2, tipo: "Blue", posicion: [0, 1] },
    { id: 3, tipo: "Yellow", posicion: [0, 2] },
    { id: 4, tipo: "Purple", posicion: [0, 3] },
    { id: 5, tipo: "Purple", posicion: [0, 4] },
    { id: 6, tipo: "Yellow", posicion: [0, 5] },
    { id: 7, tipo: "Blue", posicion: [0, 6] },
    { id: 8, tipo: "Pink", posicion: [0, 7] },
    { id: 9, tipo: "Blue", posicion: [0, 8] },
    { id: 10, tipo: "purple", posicion: [0, 9] },
    { id: 11, tipo: "Yellow", posicion: [0, 10] },
    { id: 12, tipo: "Blue", posicion: [0, 11] },
    { id: 13, tipo: "Pink", posicion: [0, 12] },
    { id: 14, tipo: "purple", posicion: [0, 13] },
    { id: 15, tipo: "Pink", posicion: [0, 14] },
    { id: 16, tipo: "Yellow", posicion: [0, 15] },
    { id: 16, tipo: "Yellow", posicion: [0, 15] },
];

console.log(tablero);

function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
  }
  
const resultadoLanzamiento = lanzarDado();
console.log("El resultado del lanzamiento es: " + resultadoLanzamiento);