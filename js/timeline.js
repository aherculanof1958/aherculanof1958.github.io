const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = 75;
const LARGURA_SELETOR = 10;

const linhas = {
  historia: document.getElementById("linha-historia"),
  vida: document.getElementById("linha-vida"),
  obra: document.getElementById("linha-obra")
};

const seletor = document.getElementById("seletor");
const listaEventos = document.getElementById("lista-eventos");

let larguraCelula = 0;
let posicao = 0;
let startX = 0;

function criarLinhas() {
  Object.entries(linhas).forEach(([tipo, linha]) => {
    linha.innerHTML = "";
    for (let i = 0; i < TOTAL_ANOS; i++) {
      const c = document.createElement("div");
      c.className = "celula";
      linha.appendChild(c);
    }
  });
}

function marcarEventos() {
  Object.entries(eventos).forEach(([tipo, lista]) => {
    lista.forEach(ev => {
      const idx = ev["ano civil"] - ANO_INICIAL;
      if (idx >= 0 && idx < TOTAL_ANOS) {
        linhas[tipo].children[idx].classList.add("com-evento", tipo);
      }
    });
  });
}

function atualizarEventos() {
  listaEventos.innerHTML = `
    <div class="colunas-eventos">
      <div class="coluna-evento"></div>
      <div class="coluna-evento"></div>
      <div class="coluna-evento"></div>
    </div>`;
}

function iniciar(e) {
  const container = document.querySelector(".linha-tempo-container");
  larguraCelula = container.clientWidth / TOTAL_ANOS;
  seletor.style.width = larguraCelula * LARGURA_SELETOR + "px";

  criarLinhas();
  marcarEventos();
  atualizarEventos();
}

window.addEventListener("load", iniciar);
