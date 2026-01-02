// ======================================================
// CONFIGURAÇÕES GERAIS
// ======================================================
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

// ======================================================
// DADOS — EVENTOS (EXEMPLO REDUZIDO)
// (mantém aqui os teus eventos completos)
// ======================================================
const eventos = {
  historia: [
    { idade: "0", "ano civil": 1886, "dia-mês": "", titulo: "Início da atividade anarquista em Portugal" },
    { idade: "24", "ano civil": 1910, "dia-mês": "5.OUT.", titulo: "Implantação da República" }
  ],
  vida: [
    {
      idade: "30",
      "ano civil": 1916,
      "dia-mês": "5.MAR.",
      titulo: "Comício à saída da missa",
      descricao: `
        <div class="imagem-evento">
          <img src="docs/oficios/informacao-do-regedor-mar1916.png" style="max-width:100px;">
        </div>`
    },
    {
      idade: "35",
      "ano civil": 1922,
      "dia-mês": "",
      titulo: "Fotografia publicada em A Lira do Povo",
      descricao: `
        <div class="imagem-evento">
          <img src="docs/fotos/jms-aos-36-anos-2.jpeg" style="max-width:100px;">
        </div>`
    }
  ],
  obra: [
    {
      idade: "28",
      "ano civil": 1914,
      "dia-mês": "27.JAN.",
      titulo: "Grupo Anticlerical IV",
      descricao: `
        <div class="imagem-evento">
          <img src="docs/obras/grupo-anti-clerical-iv.png" style="max-width:100px;">
        </div>`
    }
  ]
};

// ======================================================
// ELEMENTOS DOM
// ======================================================
const linhaHistoria = document.getElementById("linha-historia");
const linhaVida = document.getElementById("linha-vida");
const linhaObra = document.getElementById("linha-obra");

const seletor = document.getElementById("seletor");
const seletorAnoInicio = document.getElementById("seletor-ano-inicio");
const seletorAnoFim = document.getElementById("seletor-ano-fim");
const seletorIdadeInicio = document.getElementById("seletor-idade-inicio");
const seletorIdadeFim = document.getElementById("seletor-idade-fim");

const listaEventos = document.getElementById("lista-eventos");

// ======================================================
// ESTADO
// ======================================================
let larguraUtil = 0;
let larguraCelula = 0;
let posicaoSeletor = 0;
let startX = 0;
let startLeft = 0;

// ======================================================
// MAPA GLOBAL DE EVENTOS POR ANO (CHAVE DO PROBLEMA)
// ======================================================
const mapaEventos = {};

["historia", "vida", "obra"].forEach(tipo => {
  eventos[tipo].forEach(e => {
    const ano = e["ano civil"];
    if (!mapaEventos[ano]) {
      mapaEventos[ano] = { historia: 0, vida: 0, obra: 0 };
    }
    mapaEventos[ano][tipo]++;
  });
});

// ======================================================
// INICIALIZAÇÃO
// ======================================================
function inicializar() {
  const container = document.querySelector(".linha-tempo-container");
  if (!container) return;

  criarLinhas();
  container.offsetHeight; // força reflow

  larguraUtil = container.clientWidth;
  larguraCelula = larguraUtil / TOTAL_ANOS;

  posicaoSeletor =
    larguraUtil / 2 - (larguraCelula * LARGURA_SELETOR) / 2;

  posicionarSeletor();
  criarColunas();
  atualizarEventos();
  ligarEventos();
}

// ======================================================
// LINHAS DO TEMPO (BARRA SUPERIOR)
// ======================================================
function criarLinhas() {
  criarLinha(linhaHistoria, "historia");
  criarLinha(linhaVida, "vida");
  criarLinha(linhaObra, "obra");
}

function criarLinha(container, tipo) {
  container.innerHTML = "";

  for (let i = 0; i < TOTAL_ANOS; i++) {
    const ano = ANO_INICIAL + i;
    const celula = document.createElement("div");
    celula.className = `celula ${tipo}`;

    if (mapaEventos[ano] && mapaEventos[ano][tipo] > 0) {
      celula.classList.add("com-evento");
    }

    container.appendChild(celula);
  }
}

// ======================================================
// COLUNAS DE EVENTOS
// ======================================================
function criarColunas() {
  listaEventos.innerHTML = `
    <div class="colunas-eventos">
      <div class="coluna-evento" id="coluna-historia"></div>
      <div class="coluna-evento" id="coluna-vida"></div>
      <div class="coluna-evento" id="coluna-obra"></div>
    </div>
  `;
}

// ======================================================
// SELETOR
// ======================================================
function posicionarSeletor() {
  const larguraSeletor = larguraCelula * LARGURA_SELETOR;
  seletor.style.width = `${larguraSeletor}px`;

  const max = larguraUtil - larguraSeletor;
  posicaoSeletor = Math.max(0, Math.min(posicaoSeletor, max));
  seletor.style.left = `${posicaoSeletor}px`;

  atualizarRotulos();
}

function atualizarRotulos() {
  const anoInicio =
    ANO_INICIAL + Math.floor(posicaoSeletor / larguraCelula);
  const anoFim = Math.min(
    anoInicio + LARGURA_SELETOR - 1,
    ANO_FINAL
  );

  seletorAnoInicio.textContent = anoInicio;
  seletorAnoFim.textContent = anoFim;
  seletorIdadeInicio.textContent = anoInicio - ANO_INICIAL;
  seletorIdadeFim.textContent = anoFim - ANO_INICIAL;
}

// ======================================================
// EVENTOS DO SELETOR
// ======================================================
function ligarEventos() {
  seletor.addEventListener("mousedown", iniciarArrasto);
  window.addEventListener("resize", () => setTimeout(inicializar, 100));
}

function iniciarArrasto(e) {
  startX = e.clientX;
  startLeft = posicaoSeletor;

  document.addEventListener("mousemove", moverSeletor);
  document.addEventListener("mouseup", terminarArrasto);
}

function moverSeletor(e) {
  posicaoSeletor = startLeft + (e.clientX - startX);
  posicionarSeletor();
  atualizarEventos();
}

function terminarArrasto() {
  document.removeEventListener("mousemove", moverSeletor);
  document.removeEventListener("mouseup", terminarArrasto);
}

// ======================================================
// LISTA DE EVENTOS (ÚNICA PARTE DINÂMICA)
// ======================================================
function criarDivEvento(evento, tipo) {
  const div = document.createElement("div");
  div.className = `evento ${tipo}`;

  const data = evento["dia-mês"]
    ? `${evento["dia-mês"]} ${evento["ano civil"]}`
    : evento["ano civil"];

  div.innerHTML = `
    <div class="evento-cabecalho">
      <span class="evento-idade">${evento.idade} anos</span>
      <span class="evento-data">${data}</span>
    </div>
    <h4 class="evento-titulo">${evento.titulo}</h4>
    ${evento.descricao ? `<div class="evento-descricao">${evento.descricao}</div>` : ""}
  `;

  return div;
}

function atualizarEventos() {
  const anoInicio = parseInt(seletorAnoInicio.textContent, 10);
  const anoFim = parseInt(seletorAnoFim.textContent, 10);

  const colHistoria = document.getElementById("coluna-historia");
  const colVida = document.getElementById("coluna-vida");
  const colObra = document.getElementById("coluna-obra");

  colHistoria.innerHTML = "";
  colVida.innerHTML = "";
  colObra.innerHTML = "";

  eventos.historia
    .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
    .forEach(e => colHistoria.appendChild(criarDivEvento(e, "historia")));

  eventos.vida
    .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
    .forEach(e => colVida.appendChild(criarDivEvento(e, "vida")));

  eventos.obra
    .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
    .forEach(e => colObra.appendChild(criarDivEvento(e, "obra")));
}

// ======================================================
// ARRANQUE
// ======================================================
window.addEventListener("load", () => {
  inicializar();
});
