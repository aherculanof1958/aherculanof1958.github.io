// ==============================
// Configurações
// ==============================
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const ANOS_TOTAL = ANO_FINAL - ANO_INICIAL + 1;
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

const filtros = {
  historia: document.getElementById("filtro-historia"),
  vida: document.getElementById("filtro-vida"),
  obra: document.getElementById("filtro-obra")
};

// ==============================
// Estado
// ==============================
let larguraUtil = 0;
let larguraCelula = 0;
let posicaoSeletor = 0;
let startX = 0;
let startLeft = 0;

// ==============================
// Inicialização segura
// ==============================
function inicializar() {
  const container = document.querySelector(".linha-tempo-container");

  if (!container || container.offsetWidth === 0) {
    requestAnimationFrame(inicializar);
    return;
  }

  larguraUtil = container.offsetWidth;
  larguraCelula = larguraUtil / ANOS_TOTAL;

  criarLinhas();
  criarColunas();

  posicaoSeletor =
    larguraUtil / 2 - (larguraCelula * LARGURA_SELETOR) / 2;

  posicionarSeletor();
  atualizarEventos();
  adicionarEventos();
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
  for (let i = 0; i < ANOS_TOTAL; i++) {
    const celula = document.createElement("div");
    celula.className = `celula ${tipo}`;
    container.appendChild(celula);
  }
}

// ==============================
// Estrutura de colunas
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
  const largura = larguraCelula * LARGURA_SELETOR;
  seletor.style.width = `${largura}px`;

  const max = larguraUtil - largura;
  posicaoSeletor = Math.max(0, Math.min(posicaoSeletor, max));
  seletor.style.left = `${posicaoSeletor}px`;

  atualizarRotulos();
}

function atualizarRotulos() {
  const anoInicio =
    ANO_INICIAL + Math.round(posicaoSeletor / larguraCelula);
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
// Eventos
// ==============================
function adicionarEventos() {
  seletor.onmousedown = iniciarArrasto;
  window.onresize = () => inicializar();

  Object.values(filtros).forEach(cb =>
    cb.addEventListener("change", atualizarEventos)
  );
}

function iniciarArrasto(e) {
  startX = e.clientX;
  startLeft = posicaoSeletor;

  document.onmousemove = moverSeletor;
  document.onmouseup = pararArrasto;
}

function moverSeletor(e) {
  posicaoSeletor = startLeft + (e.clientX - startX);
  posicionarSeletor();
  atualizarEventos();
}

function pararArrasto() {
  document.onmousemove = null;
  document.onmouseup = null;
}

// ==============================
// Atualização de eventos
// ==============================
function atualizarEventos() {
  document.getElementById("coluna-historia").innerHTML = "";
  document.getElementById("coluna-vida").innerHTML = "";
  document.getElementById("coluna-obra").innerHTML = "";
}

// ==============================
// Arranque
// ==============================
window.addEventListener("load", inicializar);
