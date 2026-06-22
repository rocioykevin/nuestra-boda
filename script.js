const sobre = document.getElementById("sobre");
const invitacion = document.getElementById("invitacion");

sobre.addEventListener("click", () => {
  document.querySelector(".pantalla-inicial").style.display = "none";
  invitacion.style.display = "block";
});

function actualizarContador() {
  const boda = new Date("April 3, 2027 00:00:00").getTime();
  const ahora = new Date().getTime();

  const diferencia = boda - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );
  const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60)) /
    (1000 * 60)
  );
  const segundos = Math.floor(
    (diferencia % (1000 * 60)) /
    1000
  );

  document.getElementById("contador").innerHTML =
    `${dias} días · ${horas} horas · ${minutos} minutos · ${segundos} segundos`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
