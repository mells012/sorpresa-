const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar imagen del auto
const carImage = new Image();
carImage.src = 'Aston_Martin_Valkyrie.png'; // Asegúrate de que la ruta sea correcta

let carX = canvas.width / 2 - 50; // Posición inicial del auto (ajústalo si es necesario)
let carY = canvas.height - 200; // Posición vertical del auto
let roadSpeed = 2; // Velocidad de las líneas de la carretera

// Variables para líneas de la carretera
let lineY = 0;
const lineHeight = 20;
const lineSpacing = 40;

// Función para animar la carretera y el auto
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar las líneas de la carretera
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  for (let i = 0; i < canvas.height / (lineHeight + lineSpacing); i++) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, lineY + i * (lineHeight + lineSpacing));
    ctx.lineTo(canvas.width / 2, lineY + i * (lineHeight + lineSpacing) + lineHeight);
    ctx.stroke();
  }

  // Actualizar posición de las líneas para crear el efecto de movimiento
  lineY += roadSpeed;
  if (lineY >= lineHeight + lineSpacing) {
    lineY = 0;
  }

  // Dibujar el auto
  ctx.drawImage(carImage, carX, carY, 100, 200); // Ajusta el tamaño según sea necesario

  requestAnimationFrame(animate);
}

// Iniciar la animación cuando la imagen esté cargada
carImage.onload = () => {
  animate();
};

// Ajustar el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  carX = canvas.width / 2 - 50; // Reposicionar el auto en el centro
  carY = canvas.height - 200;
});
