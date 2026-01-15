const texto = [
  "Inicializando sistema Garfild...",
  "Conectando satélites...",
  "Escaneando espaço profundo...",
  "Missão 2031 pronta 🚀"
];

let i = 0;
let j = 0;
const terminal = document.getElementById("terminal");

function escrever() {
  if (!terminal) return;

  if (i < texto.length) {
    if (j < texto[i].length) {
      terminal.innerHTML += texto[i][j];
      j++;
    } else {
      terminal.innerHTML += "<br>";
      i++;
      j = 0;
    }
    setTimeout(escrever, 60);
  }
}

escrever();

