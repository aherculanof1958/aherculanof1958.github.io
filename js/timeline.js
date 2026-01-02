// ==================================================
// CONFIGURAÇÕES
// ==================================================
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

// ==================================================
// EVENTOS (TESTE REAL – GARANTE VISUALIZAÇÃO)
// ==================================================
const eventos = {
  historia: [
    {
      idade: "24",
      "ano civil": 1910,
      "dia-mês": "5.OUT.",
      titulo: "Implantação da República",
      descricao: "Proclamação da República Portuguesa."
    }
  ],
  vida: [
    {
      idade: "30",
      "ano civil": 1916,
      "dia-mês": "5.MAR.",
      titulo: "Comício à saída da missa",
      descricao: "Protesto público contra a distribuição do milho."
    }
  ],
  obra: [
    {
      idade: "34",
      "ano civil": 1920,
      "dia-mês": "15.FEV.",
      titulo: "A Alma dum Caloteiro",
      descricao: `
        <div class="imagem-evento">
          <img src="docs/poemas/a-alma-dum-caloteiro.png" style="max-width:100px;">
        </div>`
    }
  ]
};

// ==================================================
// ELEMENTOS DOM
// ==================================================
const linhaHistoria = document.getElementById("linha-historia");
const linhaVida = document.getElementById("linha-vida");
const linhaObra = document.getElementById("linha-obra");

const seletor = document.getElementById("seletor");
const seletorAnoInicio = document.getElementById("seletor-ano-inicio");
const seletorAnoFim = document.getElementById("seletor-ano-fim");
const seletorIdadeInicio = document.getElementById("seletor-idade-inicio");
const seletorIdadeFim = document.getElementById("seletor-idade-fim");

const listaEventos = document.getElementById("lista-eventos");

// ==================================================
// ESTADO
// ==================================================
let larguraUtil = 0;
let larguraCelula = 0;
let posicaoSeletor = 0;
let startX = 0;
let startLeft = 0;

// ==================================================
// INICIALIZAÇÃO
// ==================================================
function inicializar() {
  const container = document.querySelector(".linha-tempo-container");
  if (!container) return;

  criarLinhas();
  container.offsetHeight; // força reflow

  larguraUtil = container.clientWidth;
  if (larguraUtil === 0) return;

  larguraCelula = larguraUtil / TOTAL_ANOS;
  posicaoSeletor =
    larguraUtil / 2 - (larguraCelula * LARGURA_SELETOR) / 2;

  posicionarSeletor();
  criarColunas();
  atualizarEventos();
  ligarEventos();
}

// ==================================================
// LINHAS
// ==================================================
function criarLinhas() {
  criarLinha(linhaHistoria, "historia");
  criarLinha(linhaVida, "vida");
  criarLinha(linhaObra, "obra");
}

function criarLinha(container, tipo) {
  container.innerHTML = "";
  for (let i = 0; i < TOTAL_ANOS; i++) {
    const d = document.createElement("div");
    d.className = `celula ${tipo}`;
    container.appendChild(d);
  }
}

// ==================================================
// COLUNAS
// ==================================================
function criarColunas() {
  listaEventos.innerHTML = `
    <div class="colunas-eventos">
      <div class="coluna-evento" id="coluna-historia"></div>
      <div class="coluna-evento" id="coluna-vida"></div>
      <div class="coluna-evento" id="coluna-obra"></div>
    </div>`;
}

// ==================================================
// SELETOR
// ==================================================
function posicionarSeletor() {
  const w = larguraCelula * LARGURA_SELETOR;
  seletor.style.width = `${w}px`;

  posicaoSeletor = Math.max(0, Math.min(posicaoSeletor, larguraUtil - w));
  seletor.style.left = `${posicaoSeletor}px`;

  atualizarRotulos();
}

function atualizarRotulos() {
  const inicio = ANO_INICIAL + Math.floor(posicaoSeletor / larguraCelula);
  const fim = Math.min(inicio + LARGURA_SELETOR - 1, ANO_FINAL);

  seletorAnoInicio.textContent = inicio;
  seletorAnoFim.textContent = fim;
  seletorIdadeInicio.textContent = inicio - ANO_INICIAL;
  seletorIdadeFim.textContent = fim - ANO_INICIAL;
}

// ==================================================
// EVENTOS
// ==================================================
function ligarEventos() {
  seletor.addEventListener("mousedown", e => {
    startX = e.clientX;
    startLeft = posicaoSeletor;
    document.onmousemove = m => {
      posicaoSeletor = startLeft + (m.clientX - startX);
      posicionarSeletor();
      atualizarEventos();
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  });
}

function criarDivEvento(e, tipo) {
  const d = document.createElement("div");
  d.className = `evento ${tipo}`;
  d.innerHTML = `
    <strong>${e.titulo}</strong><br>
    <small>${e["dia-mês"] || ""} ${e["ano civil"]}</small>
    ${e.descricao || ""}`;
  return d;
}

function atualizarEventos() {
  const ini = +seletorAnoInicio.textContent;
  const fim = +seletorAnoFim.textContent;

  const h = document.getElementById("coluna-historia");
  const v = document.getElementById("coluna-vida");
  const o = document.getElementById("coluna-obra");

  h.innerHTML = "";
  v.innerHTML = "";
  o.innerHTML = "";

  eventos.historia.filter(e => e["ano civil"] >= ini && e["ano civil"] <= fim)
    .forEach(e => h.appendChild(criarDivEvento(e, "historia")));

  eventos.vida.filter(e => e["ano civil"] >= ini && e["ano civil"] <= fim)
    .forEach(e => v.appendChild(criarDivEvento(e, "vida")));

  eventos.obra.filter(e => e["ano civil"] >= ini && e["ano civil"] <= fim)
    .forEach(e => o.appendChild(criarDivEvento(e, "obra")));
}

// ==================================================
// ARRANQUE
// ==================================================
window.addEventListener("load", inicializar);
