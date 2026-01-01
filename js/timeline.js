
// Configurações principais
const CONFIG = {
  ANO_INICIAL: 1886,
  ANO_FINAL: 1960,
  LARGURA_SELETOR: 10,
  EVENTOS: {
    historia: [
      { idade: "0", "ano civil": 1886, "dia-mês": "", titulo: "início da atividade anarquista em Portugal.", descricao: 'em Lisboa, Antero de Quental formou (com Eça de Queirós, Guerra Junqueiro e Ramalho Ortigão), "O Cenáculo", um grupo de intelectuais anarquistas em revolta contra as convenções políticas, sociais e intelectuais de seu tempo. <br>mais na <a href="https://fr.wikipedia.org/wiki/Anarchisme_au_Portugal" target="_blank">wikipedia</a>.' },
      // ... (insira todos os outros eventos aqui, conforme sua lista original)
    ],
    vida: [
      // ... (seus eventos de vida)
    ],
    obra: [
      // ... (seus eventos de obra)
    ]
  }
};

// Estado global
const ESTADO = {
  posicaoSeletor: 0,
  larguraUtil: 0,
  larguraCelula: 0,
  filtrosAtivos: { historia: true, vida: true, obra: true },
  arrastando: false
};

// Elementos DOM
const ELEMENTOS = {
  seletor: document.getElementById('seletor'),
  linhaHistoria: document.getElementById('linha-historia'),
  linhaVida: document.getElementById('linha-vida'),
  linhaObra: document.getElementById('linha-obra'),
  listaEventos: document.getElementById('lista-eventos'),
  filtros: {
    historia: document.getElementById('filtro-historia'),
    vida: document.getElementById('filtro-vida'),
    obra: document.getElementById('filtro-obra')
  },
  btnReset: document.getElementById('btn-reset'),
  modal: document.getElementById('modal-imagem'),
  modalImg: document.getElementById('modal-img'),
  modalLegenda: document.getElementById('modal-legenda'),
  modalFechar: document.querySelector('.modal-fechar')
};

// Inicialização
function inicializar() {
  criarLinhasTempo();
  calcularDimensoes();
  posicionarSeletorCentral();
  criarEstruturaEventos();
  configurarEventos();
  atualizarExibicao();
  configurarModal();
}

// Criar células da linha do tempo
function criarLinhasTempo() {
  criarLinha(ELEMENTOS.linhaHistoria, 'historia');
  criarLinha(ELEMENTOS.linhaVida, 'vida');
  criarLinha(ELEMENTOS.linhaObra, 'obra');
}

function criarLinha(container, tipo) {
  const totalAnos = CONFIG.ANO_FINAL - CONFIG.ANO_INICIAL + 1;
  
  for (let i = 0; i < totalAnos; i++) {
    const anoAtual = CONFIG.ANO_INICIAL + i;
    const celula = document.createElement('div');
    celula.className = `celula ${tipo}`;
    celula.dataset.ano = anoAtual;
    celula.dataset.tipo = tipo;
    
    // Verificar se há eventos neste ano
    const eventosAno = CONFIG.EVENTOS[tipo].filter(e => e["ano civil"] == anoAtual);
    if (eventosAno.length > 0) {
      celula.classList.add('com-evento');
      
      // Tooltip
      let tooltipText = `${anoAtual}:\n`;
      eventosAno.forEach(evento => {
        tooltipText += `- ${evento["dia-mês"] ? evento["dia-mês"] + ' ' : ''}${evento.titulo}\n`;
      });
      celula.title = tooltipText;
      
      // Evento de clique para focar no ano
      celula.addEventListener('click', () => focarNoAno(anoAtual));
    }
    
    container.appendChild(celula);
  }
}

// Calcular dimensões
function calcularDimensoes() {
  const container = document.querySelector('.linha-tempo-container');
  ESTADO.larguraUtil = container.offsetWidth;
  ESTADO.larguraCelula = ESTADO.larguraUtil / (CONFIG.ANO_FINAL - CONFIG.ANO_INICIAL + 1);
}

// Posicionar seletor
function posicionarSeletorCentral() {
  const larguraSeletor = ESTADO.larguraCelula * CONFIG.LARGURA_SELETOR;
  ESTADO.posicaoSeletor = (ESTADO.larguraUtil / 2) - (larguraSeletor / 2);
  atualizarSeletor();
}

function atualizarSeletor() {
  const larguraSeletor = ESTADO.larguraCelula * CONFIG.LARGURA_SELETOR;
  const posicaoMaxima = ESTADO.larguraUtil - larguraSeletor;
  
  ESTADO.posicaoSeletor = Math.max(0, Math.min(ESTADO.posicaoSeletor, posicaoMaxima));
  
  ELEMENTOS.seletor.style.width = `${larguraSeletor}px`;
  ELEMENTOS.seletor.style.left = `${ESTADO.posicaoSeletor}px`;
  
  atualizarRotulosSeletor();
}

function atualizarRotulosSeletor() {
  const anoInicio = CONFIG.ANO_INICIAL + Math.floor(ESTADO.posicaoSeletor / ESTADO.larguraCelula);
  let anoFim = anoInicio + CONFIG.LARGURA_SELETOR - 1;
  
  // Ajustar limites
  if (anoFim > CONFIG.ANO_FINAL) {
    anoFim = CONFIG.ANO_FINAL;
  }
  
  document.getElementById('seletor-ano-inicio').textContent = anoInicio;
  document.getElementById('seletor-ano-fim').textContent = anoFim;
  document.getElementById('seletor-idade-inicio').textContent = anoInicio - CONFIG.ANO_INICIAL;
  document.getElementById('seletor-idade-fim').textContent = anoFim - CONFIG.ANO_INICIAL;
}

// Estrutura de eventos
function criarEstruturaEventos() {
  const container = document.createElement('div');
  container.className = 'colunas-eventos';
  
  ['historia', 'vida', 'obra'].forEach(tipo => {
    const coluna = document.createElement('div');
    coluna.className = 'coluna-evento';
    coluna.id = `coluna-${tipo}`;
    container.appendChild(coluna);
  });
  
  ELEMENTOS.listaEventos.innerHTML = '';
  ELEMENTOS.listaEventos.appendChild(container);
}

// Atualizar exibição
function atualizarExibicao() {
  const anoInicio = parseInt(document.getElementById('seletor-ano-inicio').textContent);
  const anoFim = parseInt(document.getElementById('seletor-ano-fim').textContent);
  
  // Atualizar visibilidade das colunas
  Object.keys(ESTADO.filtrosAtivos).forEach(tipo => {
    const coluna = document.getElementById(`coluna-${tipo}`);
    coluna.style.display = ESTADO.filtrosAtivos[tipo] ? 'block' : 'none';
    coluna.innerHTML = '';
    
    if (ESTADO.filtrosAtivos[tipo]) {
      const eventosFiltrados = CONFIG.EVENTOS[tipo]
        .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
        .sort((a, b) => a["ano civil"] - b["ano civil"]);
      
      eventosFiltrados.forEach(evento => {
        coluna.appendChild(criarElementoEvento(evento, tipo));
      });
    }
  });
}

function criarElementoEvento(evento, tipo) {
  const div = document.createElement('div');
  div.className = `evento ${tipo}`;
  
  const dataFormatada = evento["dia-mês"] ? 
    `${evento["dia-mês"]} ${evento["ano civil"]}` : 
    evento["ano civil"].toString();
  
  let descricaoHTML = '';
  if (evento.descricao) {
    if (evento.descricao.includes('imagem-evento')) {
      descricaoHTML = `<div class="descricao-com-imagem">${evento.descricao}</div>`;
    } else {
      descricaoHTML = `<p class="evento-descricao">${evento.descricao}</p>`;
    }
  }
  
  div.innerHTML = `
    <div class="evento-cabecalho">
      <span class="evento-idade">${evento.idade} anos</span>
      <span class="evento-data">${dataFormatada}</span>
    </div>
    <h4 class="evento-titulo">${evento.titulo}</h4>
    ${descricaoHTML}
  `;
  
  // Configurar zoom de imagens
  div.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirModal(img.src, img.alt);
    });
  });
  
  return div;
}

// Função para focar em um ano específico
function focarNoAno(ano) {
  const posicao = (ano - CONFIG.ANO_INICIAL) * ESTADO.larguraCelula - (ESTADO.larguraCelula * CONFIG.LARGURA_SELETOR / 2);
  ESTADO.posicaoSeletor = Math.max(0, Math.min(posicao, ESTADO.larguraUtil - (ESTADO.larguraCelula * CONFIG.LARGURA_SELETOR)));
  atualizarSeletor();
  atualizarExibicao();
  
  // Rolagem suave para eventos
  document.querySelector('.eventos-container').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

// Configurar eventos
function configurarEventos() {
  // Arraste do seletor
  ELEMENTOS.seletor.addEventListener('mousedown', iniciarArraste);
  ELEMENTOS.seletor.addEventListener('touchstart', iniciarArraste, { passive: false });
  
  // Filtros
  Object.keys(ELEMENTOS.filtros).forEach(tipo => {
    ELEMENTOS.filtros[tipo].addEventListener('change', () => {
      ESTADO.filtrosAtivos[tipo] = ELEMENTOS.filtros[tipo].checked;
      atualizarExibicao();
    });
  });
  
  // Botão reset
  ELEMENTOS.btnReset.addEventListener('click', posicionarSeletorCentral);
  
  // Redimensionamento
  window.addEventListener('resize', () => {
    calcularDimensoes();
    atualizarSeletor();
    atualizarExibicao();
  });
  
  // Acessibilidade - teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      ESTADO.posicaoSeletor -= ESTADO.larguraCelula;
      atualizarSeletor();
      atualizarExibicao();
    } else if (e.key === 'ArrowRight') {
      ESTADO.posicaoSeletor += ESTADO.larguraCelula;
      atualizarSeletor();
      atualizarExibicao();
    }
  });
}

// Arraste do seletor
function iniciarArraste(e) {
  e.preventDefault();
  ESTADO.arrastando = true;
  ELEMENTOS.seletor.classList.add('arrastando');
  
  const startX = e.clientX || e.touches[0].clientX;
  const startLeft = ESTADO.posicaoSeletor;
  
  function mover(e) {
    if (!ESTADO.arrastando) return;
    e.preventDefault();
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX;
    ESTADO.posicaoSeletor = startLeft + deltaX;
    atualizarSeletor();
    atualizarExibicao();
  }
  
  function parar() {
    ESTADO.arrastando = false;
    ELEMENTOS.seletor.classList.remove('arrastando');
    document.removeEventListener('mousemove', mover);
    document.removeEventListener('touchmove', mover);
    document.removeEventListener('mouseup', parar);
    document.removeEventListener('touchend', parar);
  }
  
  document.addEventListener('mousemove', mover);
  document.addEventListener('touchmove', mover, { passive: false });
  document.addEventListener('mouseup', parar);
  document.addEventListener('touchend', parar);
}

// Modal para imagens
function configurarModal() {
  ELEMENTOS.modalFechar.addEventListener('click', fecharModal);
  ELEMENTOS.modal.addEventListener('click', (e) => {
    if (e.target === ELEMENTOS.modal) {
      fecharModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
  });
}

function abrirModal(src, legenda) {
  ELEMENTOS.modalImg.src = src;
  ELEMENTOS.modalLegenda.textContent = legenda;
  ELEMENTOS.modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  ELEMENTOS.modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', inicializar);
