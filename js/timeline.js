// Configurações
    const ANO_INICIAL = 1886;
    const ANO_FINAL = 1960;
    const TOTAL_ANOS = ANO_FINAL - ANO_INICIAL + 1;
    const LARGURA_SELETOR = 10;
    


    // Elementos DOM
    const linhaHistoria = document.getElementById('linha-historia');
    const linhaVida = document.getElementById('linha-vida');
    const linhaObra = document.getElementById('linha-obra');
    const seletor = document.getElementById('seletor');
    const seletorAnoInicio = document.getElementById('seletor-ano-inicio');
    const seletorAnoFim = document.getElementById('seletor-ano-fim');
    const listaEventos = document.getElementById('lista-eventos');
    const botoesFiltro = {
      historia: document.getElementById('filtro-historia'),
      vida: document.getElementById('filtro-vida'),
      obra: document.getElementById('filtro-obra')
    };

    // Estado
	let posicaoSeletor = 0;
	let filtrosAtivos = {
	historia: true,
	vida: true,
	obra: true
	};
	let startX, startLeft, larguraUtil, larguraCelula;

    // Inicialização
    function inicializar() {
      criarLinhasTempo();
      const container = document.querySelector('.linha-tempo-container');
      larguraUtil = container.offsetWidth;
      larguraCelula = larguraUtil / TOTAL_ANOS;
      
      posicaoSeletor = (larguraUtil / 2) - ((larguraCelula * LARGURA_SELETOR) / 2);
      
      posicionarSeletor();
      criarEstruturaColunas();
      atualizarEventos();
      adicionarEventos();
    }
    
    function criarLinhasTempo() {
      criarLinha(linhaHistoria, 'historia');
      criarLinha(linhaVida, 'vida');
      criarLinha(linhaObra, 'obra');
    }
    
    function criarLinha(container, tipo) {
      container.innerHTML = '';
      
      for (let i = 0; i < TOTAL_ANOS; i++) {
        const anoAtual = ANO_INICIAL + i;
        const celula = document.createElement('div');
        celula.className = `celula ${tipo}`;
        celula.dataset.ano = anoAtual;
        
        const eventosAno = eventos[tipo].filter(e => e["ano civil"] == anoAtual);
        if (eventosAno.length > 0) {
          celula.classList.add('com-evento');
          
          let tooltipText = `${anoAtual}:\n`;
          eventosAno.forEach(evento => {
            tooltipText += `- ${evento["dia-mês"] ? evento["dia-mês"] + ' ' : ''}${evento.titulo}\n`;
          });
          
          celula.title = tooltipText;
        }
        
        container.appendChild(celula);
      }
    }

    function criarEstruturaColunas() {
      const containerColunas = document.createElement('div');
      containerColunas.className = 'colunas-eventos';
      
      const colunaHistoria = document.createElement('div');
      colunaHistoria.className = 'coluna-evento';
      colunaHistoria.id = 'coluna-historia';
      
      const colunaVida = document.createElement('div');
      colunaVida.className = 'coluna-evento';
      colunaVida.id = 'coluna-vida';
      
      const colunaObra = document.createElement('div');
      colunaObra.className = 'coluna-evento';
      colunaObra.id = 'coluna-obra';
      
      containerColunas.appendChild(colunaHistoria);
      containerColunas.appendChild(colunaVida);
      containerColunas.appendChild(colunaObra);
      listaEventos.appendChild(containerColunas);
    }

    function posicionarSeletor() {
      const container = document.querySelector('.linha-tempo-container');
      larguraUtil = container.offsetWidth;
      larguraCelula = larguraUtil / TOTAL_ANOS;
      
      const larguraSeletor = larguraCelula * LARGURA_SELETOR;
      seletor.style.width = `${larguraSeletor}px`;
      
      const posicaoMaxima = larguraUtil - larguraSeletor;
      posicaoSeletor = Math.max(0, Math.min(posicaoSeletor, posicaoMaxima));
      seletor.style.left = `${posicaoSeletor}px`;
      
      atualizarRótulosSeletor();
    }

    function atualizarRótulosSeletor() {
      let anoInicio = ANO_INICIAL + Math.floor(posicaoSeletor / larguraCelula);
      let anoFim = anoInicio + LARGURA_SELETOR - 1;
      
      if (posicaoSeletor <= 0) {
        anoInicio = ANO_INICIAL;
        anoFim = ANO_INICIAL + LARGURA_SELETOR - 1;
      }
      
      if (anoFim > ANO_FINAL) {
        anoFim = ANO_FINAL;
        anoInicio = ANO_FINAL - LARGURA_SELETOR + 1;
      }
      
      seletorAnoInicio.textContent = anoInicio;
      seletorAnoFim.textContent = anoFim;
      document.getElementById('seletor-idade-inicio').textContent = anoInicio - ANO_INICIAL;
      document.getElementById('seletor-idade-fim').textContent = anoFim - ANO_INICIAL;
    }

    function adicionarEventos() {
      // Evento de arrasto do seletor - MOUSE
      seletor.addEventListener('mousedown', iniciarArrasto);
      
      // Evento de arrasto do seletor - TOUCH
      seletor.addEventListener('touchstart', iniciarArrasto, {passive: false});
      
      // Eventos dos botões de filtro
      Object.keys(botoesFiltro).forEach(tipo => {
        botoesFiltro[tipo].addEventListener('change', () => {
          filtrosAtivos[tipo] = botoesFiltro[tipo].checked;
          atualizarEventos();
        });
      });
      
      window.addEventListener('resize', function() {
        const container = document.querySelector('.linha-tempo-container');
        larguraUtil = container.offsetWidth;
        larguraCelula = larguraUtil / TOTAL_ANOS;
        posicionarSeletor();
      });
    }

    function iniciarArrasto(e) {
      e.preventDefault();
      seletor.classList.add('arrastando');
      
      const clientX = e.clientX || e.touches[0].clientX;
      startX = clientX;
      startLeft = parseFloat(getComputedStyle(seletor).left);
      
      document.addEventListener('mousemove', moverSeletor);
      document.addEventListener('touchmove', moverSeletor, {passive: false});
      
      document.addEventListener('mouseup', terminarArrasto);
      document.addEventListener('touchend', terminarArrasto);
    }

    function moverSeletor(e) {
      e.preventDefault();
      const clientX = e.clientX || e.touches[0].clientX;
      const deltaX = clientX - startX;
      posicaoSeletor = startLeft + deltaX;
      posicionarSeletor();
      atualizarEventos();
    }

    function terminarArrasto() {
      document.removeEventListener('mousemove', moverSeletor);
      document.removeEventListener('touchmove', moverSeletor);
      
      document.removeEventListener('mouseup', terminarArrasto);
      document.removeEventListener('touchend', terminarArrasto);
      
      seletor.classList.remove('arrastando');
      atualizarEventos();
    }

    function atualizarEventos() {
      const anoInicio = parseInt(seletorAnoInicio.textContent);
      const anoFim = parseInt(seletorAnoFim.textContent);
      
      const colunaHistoria = document.getElementById('coluna-historia');
      const colunaVida = document.getElementById('coluna-vida');
      const colunaObra = document.getElementById('coluna-obra');
      
      colunaHistoria.innerHTML = '';
      colunaVida.innerHTML = '';
      colunaObra.innerHTML = '';
      
      colunaHistoria.classList.toggle('coluna-oculta', !filtrosAtivos.historia);
      colunaVida.classList.toggle('coluna-oculta', !filtrosAtivos.vida);
      colunaObra.classList.toggle('coluna-oculta', !filtrosAtivos.obra);
      
      if (filtrosAtivos.historia) {
        eventos.historia
          .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
          .forEach(evento => {
            colunaHistoria.appendChild(criarDivEvento(evento, 'historia'));
          });
      }
      
      if (filtrosAtivos.vida) {
        eventos.vida
          .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
          .forEach(evento => {
            colunaVida.appendChild(criarDivEvento(evento, 'vida'));
          });
      }
      
      if (filtrosAtivos.obra) {
        eventos.obra
          .filter(evento => evento["ano civil"] >= anoInicio && evento["ano civil"] <= anoFim)
          .forEach(evento => {
            colunaObra.appendChild(criarDivEvento(evento, 'obra'));
          });
      }
	  configurarAmpliacaoPorHover();
    }
   
    function criarDivEvento(evento, tipo) {
  const divEvento = document.createElement('div');
  divEvento.className = `evento ${tipo}`;
  
  let dataFormatada = evento["ano civil"];
  if (evento["dia-mês"]) {
    dataFormatada = `${evento["dia-mês"]} ${evento["ano civil"]}`;
  }
  
  let descricaoHTML = '';
  if (evento.descricao) {
    // Verifica se a descrição contém uma div com classe 'imagem-evento'
    if (evento.descricao.includes('imagem-evento')) {
      // Se tiver imagem, cria um container flexível
      descricaoHTML = `<div class="descricao-com-imagem">${evento.descricao}</div>`;
    } else {
      // Se não tiver imagem, mantém o formato normal
      descricaoHTML = `<p class="evento-descricao">${evento.descricao}</p>`;
    }
  }
  
  divEvento.innerHTML = `
    <div class="evento-cabecalho">
      <span class="evento-idade">${evento.idade} anos</span>
      <span class="evento-data">${dataFormatada}</span>
    </div>
    <h4 class="evento-titulo">${evento.titulo}</h4>
    ${descricaoHTML}
  `;
  return divEvento;
}

    document.addEventListener('DOMContentLoaded', inicializar);
	
function configurarAmpliacaoPorHover() {
  const container = document.getElementById("imagemAmpliadaContainer");
  const imgAmpliada = document.getElementById("imagemAmpliada");
  const DELAY = 300; // Tempo mais curto para melhor experiência

  // Remove event listeners antigos para evitar duplicação
  document.querySelectorAll('.imagem-evento img').forEach(img => {
    img.onmouseenter = null;
    img.onmouseleave = null;
  });

  document.querySelectorAll('.imagem-evento img').forEach(img => {
    let hoverTimer;

    img.onmouseenter = function() {
      hoverTimer = setTimeout(() => {
        const src = this.src;
        const alt = this.alt;
        
        // Criar nova imagem para pré-carregar
        const tempImg = new Image();
        tempImg.src = src;
        
        tempImg.onload = function() {
          // Calcula dimensões mantendo proporção
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const maxWidth = windowWidth * 0.8;
          const maxHeight = windowHeight * 0.8;
          
          let width = tempImg.naturalWidth;
          let height = tempImg.naturalHeight;
          
          // Ajustar se for muito grande
          if (width > maxWidth) {
            const ratio = maxWidth / width;
            width = maxWidth;
            height = height * ratio;
          }
          
          if (height > maxHeight) {
            const ratio = maxHeight / height;
            height = maxHeight;
            width = width * ratio;
          }
          
          // Configurar imagem ampliada
          imgAmpliada.src = src;
          imgAmpliada.alt = alt;
          imgAmpliada.style.width = `${width}px`;
          imgAmpliada.style.height = `${height}px`;
          
          // Centralizar na tela
          container.style.display = 'flex';
          container.style.justifyContent = 'center';
          container.style.alignItems = 'center';
          container.style.position = 'fixed';
          container.style.top = '0';
          container.style.left = '0';
          container.style.width = '100%';
          container.style.height = '100%';
          container.style.backgroundColor = 'rgba(0,0,0,0.8)';
          container.style.zIndex = '1000';
          container.style.opacity = '0';
          
          // Animação de fade in
          setTimeout(() => {
            container.style.opacity = '1';
          }, 10);
        };
      }, DELAY);
    };

    img.onmouseleave = function() {
      clearTimeout(hoverTimer);
      // Animação de fade out
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.display = 'none';
      }, 300);
    };

    // Fechar ao clicar na imagem ampliada
    container.onclick = function() {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.display = 'none';
      }, 300);
    };
  });
}

function ajustarPosicaoImagem() {
  const container = document.getElementById("imagemAmpliadaContainer");
  if (container.style.display === 'block') {
    const img = document.getElementById("imagemAmpliada");
    const imgRect = img.getBoundingClientRect();
    const imgHeight = imgRect.height;
    const scrollPosition = window.scrollY;
    
    // Ajuste vertical
    if (imgRect.bottom > window.innerHeight - 20) {
      container.style.top = `${scrollPosition + window.innerHeight - imgHeight - 30}px`;
    } else if (imgRect.top < 20) {
      container.style.top = `${scrollPosition + 30}px`;
    }
  }
}


// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  inicializar();
  configurarAmpliacaoPorHover();
});
	
	
window.addEventListener('scroll', function() {
  const container = document.getElementById("imagemAmpliadaContainer");
  if (container.style.display === 'flex') {
    const img = document.getElementById("imagemAmpliada");
    const imgHeight = img.offsetHeight;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Ajusta a posição se a imagem estiver perto do fundo
    if ((scrollPosition + windowHeight) > (imgHeight + 100)) {
      container.style.top = `${scrollPosition + windowHeight - imgHeight - 50}px`;
    }
  }
});
