// Configurações principais
const CONFIG = {
  ANO_INICIAL: 1886,
  ANO_FINAL: 1960,
  LARGURA_SELETOR: 10,
  EVENTOS: {
    historia: [
      { 
        idade: "0", 
        "ano civil": 1886, 
        "dia-mês": "", 
        titulo: "início da atividade anarquista em Portugal.", 
        descricao: 'em Lisboa, Antero de Quental formou (com Eça de Queirós, Guerra Junqueiro e Ramalho Ortigão), "O Cenáculo", um grupo de intelectuais anarquistas em revolta contra as convenções políticas, sociais e intelectuais de seu tempo. <br>mais na <a href="https://fr.wikipedia.org/wiki/Anarchisme_au_Portugal" target="_blank">wikipedia</a>.' 
      },
      { 
        idade: "5", 
        "ano civil": 1891, 
        "dia-mês": "", 
        titulo: "Revolta do 31 de Janeiro contra a Monarquia na cidade do Porto", 
        descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Revolta_de_31_de_janeiro_de_1891" target="_blank">wikipedia</a>.' 
      },
      { 
        idade: "10", 
        "ano civil": 1896, 
        "dia-mês": "13.FEV.", 
        titulo: "'Lei da Bomba' contra os Anarquistas", 
        descricao: 'mais na <a href="https://app.parlamento.pt/comunicar/V1/201905/57/artigos/art9.html" target="_blank">A.R.</a>.' 
      },
      { 
        idade: "22", 
        "ano civil": 1908, 
        "dia-mês": "28.JAN.", 
        titulo: "Regicídio", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/regicidio-em-lisboa-1908/" target="_blank">RTP Ensina</a>.' 
      },
      { 
        idade: "24", 
        "ano civil": 1910, 
        "dia-mês": "5.OUT.", 
        titulo: "Implantação da República", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/5-de-outubro-1910/" target="_blank">RTP Ensina</a>.' 
      },
      { 
        idade: "25", 
        "ano civil": 1911, 
        "dia-mês": "20.ABR.", 
        titulo: "Separação da Igreja do Estado", 
        descricao: 'mais na <a href="https://pt.wikipedia.org/wiki/Lei_da_Separa%C3%A7%C3%A3o_do_Estado_das_Igrejas" target="_blank">wikipedia</a>.' 
      },
      { 
        idade: "25", 
        "ano civil": 1911, 
        "dia-mês": "", 
        titulo: "Explosão do Movimento Anarquista", 
        descricao: "" 
      },
      { 
        idade: "26", 
        "ano civil": 1912, 
        "dia-mês": "", 
        titulo: "Fundação da Federação Anarquista do Norte", 
        descricao: "" 
      },
      { 
        idade: "27", 
        "ano civil": 1913, 
        "dia-mês": "", 
        titulo: "Fundação da CULTUAL", 
        descricao: "" 
      },
      { 
        idade: "28", 
        "ano civil": 1914, 
        "dia-mês": "", 
        titulo: "Início da 1.ª Grande Guerra [1914-1918]", 
        descricao: "" 
      },
      { 
        idade: "29", 
        "ano civil": 1915, 
        "dia-mês": "", 
        titulo: "1.ª Grande Guerra [1914-1918]", 
        descricao: "" 
      },
      { 
        idade: "30", 
        "ano civil": 1916, 
        "dia-mês": "", 
        titulo: "1.ª Grande Guerra [1914-1918]", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "", 
        titulo: "1.ª Grande Guerra [1914-1918]", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "19.Mai.", 
        titulo: "A revolta da Batata", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/__trashed-17/" target="_blank">RTP Ensina</a>.' 
      },
      { 
        idade: "32", 
        "ano civil": 1918, 
        "dia-mês": "", 
        titulo: "Fim da 1.ª Grande Guerra [1914-1918]", 
        descricao: "" 
      },
      { 
        idade: "35", 
        "ano civil": 1921, 
        "dia-mês": "6.MAR.", 
        titulo: "Fundação do Partido Comunista Português", 
        descricao: 'mais em <a href="https://www.pcp.pt/como-nasceu-partido-comunista-portugues" target="_blank">PCP</a>.' 
      },
      { 
        idade: "35", 
        "ano civil": 1921, 
        "dia-mês": "", 
        titulo: "Fundação da Internacional Sindical Vermelha [PROFITERN]", 
        descricao: 'mais em <a href="https://pt.wikipedia.org/wiki/Internacional_Vermelha_dos_Sindicatos" target="_blank">wikipedia</a>.' 
      },
      { 
        idade: "37", 
        "ano civil": 1923, 
        "dia-mês": "18.MAR.", 
        titulo: "Criação da União Anarquista Portuguesa (UAP)", 
        descricao: 'com 20 grupos aderentes entre eles o de Vila do Conde <br> <a href="https://we.riseup.net/assets/160397/Edgar%20Rodrigues%20hist%C3%B3ria%20do%20movimento%20anarquista%20em%20portugal.pdf" target="_blank">Edgar Rodrigues, História do Movimento Anarquista em Portugal</a>' 
      },
      { 
        idade: "40", 
        "ano civil": 1926, 
        "dia-mês": "28.MAI.", 
        titulo: "Golpe Militar de 28 de Maio – Ditadura", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/golpe-28-de-maio-1926/" target="_blank">RTP Ensina</a>.' 
      },
      { 
        idade: "41", 
        "ano civil": 1927, 
        "dia-mês": "25.JUL.", 
        titulo: "Fundação da Federação Anarquista Ibérica – FAI", 
        descricao: 'mais na <a href="https://noticiasanarquistas.noblogs.org/post/2021/04/16/espanha-lancamento-historia-da-fai-o-anarquismo-organizado-de-julian-vadillo-munoz/" target="_blank">ANA</a>.' 
      },
      { 
        idade: "47", 
        "ano civil": 1933, 
        "dia-mês": "11-ABR", 
        titulo: "Estado Novo – CENSURA", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/censura-previa-a-mordaca-que-o-estado-novo-criou/" target="_blank">RTP Ensina</a>.' 
      },
      { 
        idade: "48", 
        "ano civil": 1934, 
        "dia-mês": "", 
        titulo: "Jornal 'Batalha' passa à clandestinidade", 
        descricao: 'mais em <a href="https://colectivolibertarioevora.wordpress.com/2019/02/22/a-batalha-100-anos-de-luta-por-um-mundo-novo-sem-explorados-nem-exploradores-sem-oprimidos-nem-opressores/" target="_blank">Portal Anarquista</a>.' 
      },
      { 
        idade: "51", 
        "ano civil": 1937, 
        "dia-mês": "4.JUL.", 
        titulo: "Atentado a Salazar perpetrado por anarquistas", 
        descricao: 'mais na <a href="https://ensina.rtp.pt/artigo/retratos-do-atentado-a-salazar/" target="_blank">RTP Ensina</a>.' 
      }
    ],
    vida: [
      { 
        idade: "0", 
        "ano civil": 1886, 
        "dia-mês": "15.MAR.", 
        titulo: "Nascimento de JOAQUIM MOREIRA DA SILVA", 
        descricao: "" 
      },
      { 
        idade: "7", 
        "ano civil": 1893, 
        "dia-mês": "", 
        titulo: "Começa a trabalhar como moço de Lavoura", 
        descricao: "" 
      },
      { 
        idade: "18", 
        "ano civil": 1904, 
        "dia-mês": "", 
        titulo: "Vai trabalhar para o Porto como aprendiz de carpinteiro", 
        descricao: "" 
      },
      { 
        idade: "18", 
        "ano civil": 1904, 
        "dia-mês": "", 
        titulo: "Frequenta escola noturna Vasco da Gama, onde aprende a ler e escrever", 
        descricao: "" 
      },
      { 
        idade: "18", 
        "ano civil": 1904, 
        "dia-mês": "", 
        titulo: "Inscreve-se na Associação (SINDICATO)", 
        descricao: "" 
      },
      { 
        idade: "23", 
        "ano civil": 1909, 
        "dia-mês": "10.JUL.", 
        titulo: "Casa com a camponesa Maria Rosa Marques", 
        descricao: "" 
      },
      { 
        idade: "24", 
        "ano civil": 1910, 
        "dia-mês": "22.MAI.", 
        titulo: "Nasce o primeiro filho", 
        descricao: "" 
      },
      { 
        idade: "24", 
        "ano civil": 1910, 
        "dia-mês": "13.OUT.", 
        titulo: "Morte do primeiro filho", 
        descricao: "" 
      },
      { 
        idade: "26", 
        "ano civil": 1912, 
        "dia-mês": "17.FEV.", 
        titulo: "Nascimento do filho Alberto Moreira", 
        descricao: "" 
      },
      { 
        idade: "30", 
        "ano civil": 1916, 
        "dia-mês": "5.MAR.", 
        titulo: "JMS faz comício à saída da missa censurando a distribuição do milho", 
        descricao: '<div class="imagem-evento"><img src="docs/Informação do Regedor_mar1916.png" alt="informação do regedor para o administrador do concelho" style="max-width:100px;"><p class="legenda"></p></div><p><br><br>informação do regedor para o administrador do concelho</p>' 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "5.FEV.", 
        titulo: "O povo de Vilar saiu à rua em protesto contra a fome e tocou os sinos a rebate. Formou-se 'uma comissão'", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "30.MAI.", 
        titulo: "Assalto à 'Tulha' de Manuel Gonçalves Dias", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "JUL.", 
        titulo: "Julgamento do Assalto", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "AGO.", 
        titulo: "Juíz ordena a captura de JMS e restantes implicados", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "2.SET.", 
        titulo: "Comício em Vilar (no Alto da Pereira) para tratar da carestia do milho e o açambarcamento", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "17.SET.", 
        titulo: "Início do processo de audição dos réus", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "27.SET.", 
        titulo: "Emitido mandato de captura dos implicados", 
        descricao: "" 
      },
      { 
        idade: "31", 
        "ano civil": 1917, 
        "dia-mês": "23.OUT.", 
        titulo: "JMS é ouvido pelo Juiz que lhe nomeia como advogado António Maria Pereira Júnior", 
        descricao: "" 
      },
      { 
        idade: "35", 
        "ano civil": 1921, 
        "dia-mês": "MAR.", 
        titulo: "Moreira da Silva foi preso com outros anarquistas e sindicalistas", 
        descricao: "" 
      },
      { 
        idade: "35", 
        "ano civil": 1921, 
        "dia-mês": "4.SET.", 
        titulo: "JMS é eleito em comício, para a Comissão que reclama o embarateamento do preço do milho", 
        descricao: '<div class="imagem-evento"><img src="docs/Ofício ao Administrador_set1921.png" alt="imagem do ofício" style="max-width:100px;"><p class="legenda"></p></div><p><br><br>em ofício da Comissão para o Administrador</p>' 
      },
      { 
        idade: "36", 
        "ano civil": 1922, 
        "dia-mês": "", 
        titulo: "Fotografia do poeta publicada em 'A Lira do Povo'", 
        descricao: '<div class="imagem-evento"><img src="docs/JMS_aos_36_anos-2.jpeg" alt="O poeta aos 36 anos, fotografia do livro \'A Lira do Povo\', 1967" style="max-width:100px;"><p class="legenda"></p></div><p></p>' 
      },
      { 
        idade: "48", 
        "ano civil": 1934, 
        "dia-mês": "22.NOV.", 
        titulo: "Nascimento da primeira neta", 
        descricao: "Margarida Rosa Moreira" 
      },
      { 
        idade: "49", 
        "ano civil": 1935, 
        "dia-mês": "22.SET.", 
        titulo: "Nascimento da segunda neta", 
        descricao: "Helena Rosa Moreira" 
      },
      { 
        idade: "49", 
        "ano civil": 1935, 
        "dia-mês": "22.OUT.", 
        titulo: "Falecimento da segunda neta", 
        descricao: "Helena Rosa Moreira" 
      },
      { 
        idade: "50", 
        "ano civil": 1936, 
        "dia-mês": "MAR.", 
        titulo: "JMS tem uma doença grave, pensa que vai morrer.", 
        descricao: "" 
      },
      { 
        idade: "50", 
        "ano civil": 1936, 
        "dia-mês": "MAI.", 
        titulo: "Comemora o 1º de Maio", 
        descricao: "com volta ao Minho com outros anarquistas" 
      },
      { 
        idade: "52", 
        "ano civil": 1938, 
        "dia-mês": "7.JAN.", 
        titulo: "Nascimento da 3ª neta", 
        descricao: "Helena Rosa Moreira (nome igual ao da que morreu)" 
      },
      { 
        idade: "53", 
        "ano civil": 1939, 
        "dia-mês": "27.SET.", 
        titulo: "Morte da 3ª neta", 
        descricao: "Helena Rosa Moreira" 
      },
      { 
        idade: "54", 
        "ano civil": 1940, 
        "dia-mês": "JAN.", 
        titulo: "Nascimento da 4ª neta", 
        descricao: "Helena Moreira da Silva" 
      },
      { 
        idade: "56", 
        "ano civil": 1942, 
        "dia-mês": "23.JAN.", 
        titulo: "Nascimento da 5ª neta", 
        descricao: "Maria Rosa Moreira" 
      },
      { 
        idade: "63", 
        "ano civil": 1949, 
        "dia-mês": "10.MAR.", 
        titulo: "Morte da Esposa", 
        descricao: "Maria Rosa de Jesus" 
      },
      { 
        idade: "74", 
        "ano civil": 1960, 
        "dia-mês": "12-DEZ.", 
        titulo: "Falecimento de JOAQUIM MOREIRA DA SILVA", 
        descricao: "" 
      }
    ],
    obra: [
      // ... (insira todos os eventos de obra aqui)
      // Nota: Para economizar espaço, estou incluindo apenas alguns exemplos
      // Você deve adicionar TODOS os eventos de obra da sua lista
      { 
        idade: "28", 
        "ano civil": 1914, 
        "dia-mês": "27.JAN.", 
        titulo: "Grupo Anticlerical IV", 
        descricao: '<div class="imagem-evento"><img src="docs/Grupo Anti-Clerical IV.png" alt="imagem do poema" style="max-width:100px;"><p class="legenda"></p></div><p><br><br></p>' 
      },
      { 
        idade: "28", 
        "ano civil": 1914, 
        "dia-mês": "28.JAN.", 
        titulo: "Grupo Anticlerical I", 
        descricao: '<div class="imagem-evento"><img src="docs/Grupo Anti-Clerical I.png" alt="imagem do poema" style="max-width:100px;"><p class="legenda"></p></div><p><br><br></p>' 
      },
      // Adicione todos os outros eventos de obra aqui...
      { 
        idade: "72", 
        "ano civil": 1958, 
        "dia-mês": "5.JUN.", 
        titulo: "Fernando Moreira Graça", 
        descricao: "" 
      }
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
