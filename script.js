const sobre = document.getElementById("sobre");
const invitacion = document.getElementById("invitacion");

sobre.addEventListener("click", () => {
  invitacion.style.display = "block";
  sobre.style.display = "none";
  document.querySelector(".lechuza").style.display = "none";
});

function actualizarContador() {

  const boda = new Date("April 3, 2027 00:00:00").getTime();
  const ahora = new Date().getTime();

  const diferencia = boda - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML =
    `⏳ ${dias} días · ${horas} horas · ${minutos} minutos · ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
function createStars() {
  const numStars = 80;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";

    document.body.appendChild(star);
  }
}

createStars();
