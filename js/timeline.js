// ==============================
// Configurações
// ==============================
const ANO_INICIAL = 1886;
const ANO_FINAL = 1960;
const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
const LARGURA_SELETOR = 10;

// ==============================
// Dados
// ==============================
const eventos = {
  historia: [
    {
      idade: "0",
      "ano civil": 1886,
      "dia-mês": "",
      titulo: "Início da atividade anarquista em Portugal",
      zoomExtra: true,
      descricao:
        'Em Lisboa, Antero de Quental formou (com Eça de Queirós, Guerra Junqueiro e Ramalho Ortigão) "O Cenáculo".<br>Mais na <a href="https://fr.wikipedia.org/wiki/Anarchisme_au_Portugal" target="_blank">Wikipedia</a>.'
    },
    {
      idade: "5",
      "ano civil": 1891,
      "dia-mês": "",
      titulo: "Revolta do 31 de Janeiro no Porto",
      zoomExtra: true,
      descricao:
        'Mais na <a href="https://pt.wikipedia.org/wiki/Revolta_de_31_de_janeiro_de_1891" target="_blank">Wikipedia</a>.'
    },
    {
      idade: "10",
      "ano civil": 1896,
      "dia-mês": "13.FEV.",
      titulo: "'Lei da Bomba' contra os anarquistas",
      zoomExtra: true,
      descricao:
        'Mais na <a href="https://app.parlamento.pt/comunicar/V1/201905/57/artigos/art9.html" target="_blank">Assembleia da República</a>.'
    },
    {
      idade: "22",
      "ano civil": 1908,
      "dia-mês": "28.JAN.",
      titulo: "Regicídio",
      zoomExtra: true,
      descricao:
        'Mais na <a href="https://ensina.rtp.pt/artigo/regicidio-em-lisboa-1908/" target="_blank">RTP Ensina</a>.'
    },
    {
      idade: "24",
      "ano civil": 1910,
      "dia-mês": "5.OUT.",
      titulo: "Implantação da República",
      zoomExtra: true,
      descricao:
        'Mais na <a href="https://ensina.rtp.pt/artigo/5-de-outubro-1910/" target="_blank">RTP Ensina</a>.'
    },
    {
      idade: "25",
      "ano civil": 1911,
      "dia-mês": "20.ABR.",
      titulo: "Separação da Igreja do Estado",
      zoomExtra: true,
      descricao:
        'Mais na <a href="https://pt.wikipedia.org/wiki/Lei_da_Separa%C3%A7%C3%A3o_do_Estado_das_Igrejas" target="_blank">Wikipedia</a>.'
    }
  ],

  vida: [
    {
      idade: "30",
      "ano civil": 1916,
      "dia-mês": "5.MAR.",
      titulo: "Comício após a missa criticando a distribuição do milho",
      zoomExtra: true,
      descricao: `
        <div class="imagem-evento">
          <img src="docs/oficios/informacao-do-regedor-mar1916.png"
               alt="Informação do regedor ao administrador do concelho"
               style="max-width:100px;">
        </div>`
    },
    {
      idade: "35",
      "ano civil": 1921,
      "dia-mês": "4.SET.",
      titulo: "Eleição para a Comissão do barateamento do milho",
      zoomExtra: true,
      descricao: `
        <div class="imagem-evento">
          <img src="docs/oficios/oficio-ao-administrador-set1921.png"
               alt="Ofício da Comissão Popular ao Administrador"
               style="max-width:100px;">
        </div>`
    },
    {
      idade: "35",
      "ano civil": 1922,
      "dia-mês": "",
      titulo: "Retrato publicado em 'A Lira do Povo'",
      zoomExtra: true,
      descricao: `
        <div class="imagem-evento">
          <img src="docs/fotos/jms-aos-36-anos-2.jpeg"
               alt="Joaquim Moreira da Silva aos 36 anos"
               style="max-width:100px;">
        </div>`
    }
  ],

  obra: [
    {
      idade: "28",
      "ano civil": 1914,
      "dia-mês": "27.JAN.",
      titulo: "Grupo Anticlerical IV",
      zoomExtra: true,
      descricao:
        `<div class="imagem-evento"><img src="docs/poemas/grupo-anti-clerical-iv.png" style="max-width:100px;"></div>`
    },
    {
      idade: "28",
      "ano civil": 1914,
      "dia-mês": "28.JAN.",
      titulo: "Grupo Anticlerical I",
      zoomExtra: true,
      descricao:
        `<div class="imagem-evento"><img src="docs/poemas/grupo-anti-clerical-i.png" style="max-width:100px;"></div>`
    },
    {
      idade: "30",
      "ano civil": 1916,
      "dia-mês": "23.ABR.",
      titulo: "À memória de Cristo",
      zoomExtra: true,
      descricao:
        `<div class="imagem-evento"><img src="docs/poemas/a-memoria-de-cristo.png" style="max-width:100px;"></div>`
    },
    {
      idade: "32",
      "ano civil": 1918,
      "dia-mês": "15.AGO.",
      titulo: "O Milho a 30 Réis",
      zoomExtra: true,
      descricao:
        `<div class="imagem-evento"><img src="docs/poemas/o-milho-a-30-reis.png" style="max-width:100px;"></div>`
    },
    {
      idade: "34",
      "ano civil": 1920,
      "dia-mês": "15.FEV.",
      titulo: "A Alma dum Caloteiro",
      zoomExtra: true,
      descricao:
        `<div class="imagem-evento"><img src="docs/poemas/a-alma-dum-caloteiro.png" style="max-width:100px;"></div>`
    }
  ]
};

// ==============================
// Elementos DOM
// ==============================
const linhaHistoria = document.getElementById("linha-historia");
const linhaVida = document.getElementById("linha-vida");
const linhaObra = document.getElementById("linha-obra");
const seletor = document.getElementById("seletor");
const seletorAnoInicio = document.getElementById("seletor-ano-inicio");
const seletorAnoFim = document.getElementById("seletor-ano-fim");
const listaEventos = document.getElementById("lista-eventos");

// ==============================
// Estado
// ==============================
let posicaoSeletor = 0;
let larguraUtil = 0;
let larguraCelula = 0;

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
  larguraCelula = larguraUtil / TOTAL_ANOS;

  criarLinhasTempo();
  criarEstruturaColunas();

  posicaoSeletor =
    larguraUtil / 2 - (larguraCelula * LARGURA_SELETOR) / 2;

  posicionarSeletor();
  atualizarEventos();
}

// ==============================
// Arranque após LOAD (crítico)
// ==============================
window.addEventListener("load", () => {
  inicializar();
});
