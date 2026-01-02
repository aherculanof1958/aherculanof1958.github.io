// ==============================
// Configurações
// ==============================
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

// ==============================
// Elementos DOM
// ==============================
const linhaHistoria = document.getElementById("linha-historia");
const linhaVida = document.getElementById("linha-vida");
const linhaObra = document.getElementById("linha-obra");

const seletor = document.getElementById("seletor");
const seletorAnoInicio = document.getElementById("seletor-ano-inicio");
const seletorAnoFim = document.getElementById("seletor-ano-fim");
const seletorIdadeInicio = document.getElementById("seletor-idade-inicio");
const seletorIdadeFim = document.getElementById("seletor-idade-fim");

const listaEventos = document.getElementById("lista-eventos");

// ==============================
// Estado
// ==============================
let larguraUtil = 0;
let larguraCelula = 0;
let posicaoSeletor = 0;
let startX = 0;
let startLeft = 0;

// ==============================
// Inicialização ROBUSTA
// ==============================
function inicializar() {
  const container = document.querySelector(".linha-tempo-container");
  if (!container) return;

  // 1️⃣ criar linhas primeiro
  criarLinhas();

  // 2️⃣ forçar reflow (CRÍTICO)
  container.offsetHeight;

  // 3️⃣ medir larguras reais
  larguraUtil = container.clientWidth;
  if (larguraUtil === 0) {
    setTimeout(inicializar, 50);
    return;
  }

  larguraCelula = larguraUtil / TOTAL_ANOS;

  // 4️⃣ posição inicial do seletor
  posicaoSeletor =
    larguraUtil / 2 - (larguraCelula * LARGURA_SELETOR) / 2;

  posicionarSeletor();
  criarColunas();
  atualizarEventos();
  ligarEventos();
}

// ==============================
// Linhas do tempo
// ==============================
function criarLinhas() {
  criarLinha(linhaHistoria, "historia");
  criarLinha(linhaVida, "vida");
  criarLinha(linhaObra, "obra");
}

function criarLinha(container, tipo) {
  container.innerHTML = "";
  for (let i = 0; i < TOTAL_ANOS; i++) {
    const celula = document.createElement("div");
    celula.className = `celula ${tipo}`;
    container.appendChild(celula);
  }
}

// ==============================
// Colunas de eventos
// ==============================
function criarColunas() {
  listaEventos.innerHTML = `
    <div class="colunas-eventos">
      <div class="coluna-evento" id="coluna-historia"></div>
      <div class="coluna-evento" id="coluna-vida"></div>
      <div class="coluna-evento" id="coluna-obra"></div>
    </div>
  `;
}

// ==============================
// Seletor
// ==============================
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

// ==============================
// Eventos do seletor
// ==============================
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

function criarDivEvento(evento, tipo) {
  const div = document.createElement("div");
  div.className = `evento ${tipo}`;

  const data =
    evento["dia-mês"]
      ? `${evento["dia-mês"]} ${evento["ano civil"]}`
      : evento["ano civil"];

  div.innerHTML = `
    <div class="evento-cabecalho">
      <span class="evento-idade">${evento.idade} anos</span>
      <span class="evento-data">${data}</span>
    </div>
    <h4 class="evento-titulo">${evento.titulo}</h4>
    ${
      evento.descricao
        ? `<div class="evento-descricao">${evento.descricao}</div>`
        : ""
    }
  `;

  return div;
}


// ==============================
// Eventos (placeholder)
// ==============================
function atualizarEventos() {
  const anoInicio = parseInt(seletorAnoInicio.textContent, 10);
  const anoFim = parseInt(seletorAnoFim.textContent, 10);

  const colHistoria = document.getElementById("coluna-historia");
  const colVida = document.getElementById("coluna-vida");
  const colObra = document.getElementById("coluna-obra");

  colHistoria.innerHTML = "";
  colVida.innerHTML = "";
  colObra.innerHTML = "";

  // HISTÓRIA
  if (document.getElementById("filtro-historia")?.checked !== false) {
    eventos.historia
      .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
      .forEach(e => colHistoria.appendChild(criarDivEvento(e, "historia")));
  }

  // VIDA
  if (document.getElementById("filtro-vida")?.checked !== false) {
    eventos.vida
      .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
      .forEach(e => colVida.appendChild(criarDivEvento(e, "vida")));
  }

  // OBRA
  if (document.getElementById("filtro-obra")?.checked !== false) {
    eventos.obra
      .filter(e => e["ano civil"] >= anoInicio && e["ano civil"] <= anoFim)
      .forEach(e => colObra.appendChild(criarDivEvento(e, "obra")));
  }
}


// ==============================
// Arranque
// ==============================
window.addEventListener("load", () => {
  setTimeout(inicializar, 50);
});
