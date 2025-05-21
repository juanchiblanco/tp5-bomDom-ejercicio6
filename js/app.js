const inputNumero = document.querySelector("#inputNumero");

let contador;
let idSetInterval = null;

const iniciarCronometro = () => {
  if (idSetInterval !== null) return;
  contador = parseInt(inputNumero.value);
  idSetInterval = setInterval(() => {
    const cronometro = document.querySelector(".display-4");

    if (contador < 0) {
      clearInterval(idSetInterval);
      idSetInterval = null;
      return;
    }

    const minuto = Math.floor(contador / 60);
    const segundo = contador % 60;

    let minutos;
    if (minuto < 10) {
      minutos = `0${minuto}`;
    } else {
      minutos = minuto;
    }

    let segundos;
    if (segundo < 10) {
      segundos = `0${segundo}`;
    } else {
      segundos = segundo;
    }

    cronometro.textContent = `${minutos}:${segundos}`;
    contador--;
  }, 1000);
};

const pausarCronometro = () => {
  clearInterval(idSetInterval);
  idSetInterval = null;
};

const reiniciarCronometro = () => {
  const cronometro = document.querySelector(".display-4");
  cronometro.textContent = "00:00";
  clearInterval(idSetInterval);
  idSetInterval = null;
  contador = 1;
};

const btnIniciar = document.querySelector(".btn-success");
const btnPausar = document.querySelector(".btn-primary");
const btnReiniciar = document.querySelector(".btn-danger");

btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", pausarCronometro);
btnReiniciar.addEventListener("click", reiniciarCronometro);
