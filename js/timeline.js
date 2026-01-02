document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const seletor = document.getElementById('seletor');
    const listaEventos = document.getElementById('lista-eventos');
    const modal = document.getElementById('modal-imagem');
    const modalImg = document.getElementById('modal-img');
    const modalLegenda = document.getElementById('modal-legenda');
    const modalFechar = document.querySelector('.modal-fechar');
    const btnReset = document.getElementById('btn-reset');
    
    // Filtros
    const filtroHistoria = document.getElementById('filtro-historia');
    const filtroVida = document.getElementById('filtro-vida');
    const filtroObra = document.getElementById('filtro-obra');
    
    // Dados dos eventos
    const eventos = [
        // História
        {
            id: 1,
            categoria: 'historia',
            ano: 1889,
            idade: 3,
            titulo: 'Proclamação da República no Brasil',
            descricao: 'Fim do Império e início da República Brasileira.',
            imagem: ''
        },
        {
            id: 2,
            categoria: 'historia',
            ano: 1914,
            idade: 28,
            titulo: 'Início da Primeira Guerra Mundial',
            descricao: 'Conflito global que afetou toda a Europa.',
            imagem: ''
        },
        {
            id: 3,
            categoria: 'historia',
            ano: 1939,
            idade: 53,
            titulo: 'Início da Segunda Guerra Mundial',
            descricao: 'Maior conflito armado da história mundial.',
            imagem: ''
        },
        
        // Vida
        {
            id: 4,
            categoria: 'vida',
            ano: 1886,
            idade: 0,
            titulo: 'Nascimento de Joaquim Moreira da Silva',
            descricao: 'Nasceu em Lisboa, Portugal.',
            imagem: ''
        },
        {
            id: 5,
            categoria: 'vida',
            ano: 1905,
            idade: 19,
            titulo: 'Ingresso na Universidade',
            descricao: 'Iniciou os estudos em Direito na Universidade de Coimbra.',
            imagem: ''
        },
        {
            id: 6,
            categoria: 'vida',
            ano: 1915,
            idade: 29,
            titulo: 'Casamento',
            descricao: 'Casou-se com Maria da Conceição.',
            imagem: ''
        },
        {
            id: 7,
            categoria: 'vida',
            ano: 1960,
            idade: 74,
            titulo: 'Falecimento',
            descricao: 'Faleceu em Lisboa aos 74 anos.',
            imagem: ''
        },
        
        // Obra
        {
            id: 8,
            categoria: 'obra',
            ano: 1920,
            idade: 34,
            titulo: 'Primeira Publicação',
            descricao: 'Lançamento do livro "Direito e Sociedade".',
            imagem: ''
        },
        {
            id: 9,
            categoria: 'obra',
            ano: 1935,
            idade: 49,
            titulo: 'Obra Principal',
            descricao: 'Publicação de "Tratado de Direito Civil".',
            imagem: ''
        },
        {
            id: 10,
            categoria: 'obra',
            ano: 1950,
            idade: 64,
            titulo: 'Reconhecimento Internacional',
            descricao: 'Premiado pela Academia de Ciências de Lisboa.',
            imagem: ''
        }
    ];
    
    // Estado inicial do seletor
    let inicioSelecao = 1933;
    let fimSelecao = 1942;
    let inicioIdade = 47;
    let fimIdade = 56;
    
    // Inicialização
    init();
    
    function init() {
        atualizarSeletor();
        renderizarEventos();
        configurarEventListeners();
    }
    
    function atualizarSeletor() {
        document.getElementById('seletor-ano-inicio').textContent = inicioSelecao;
        document.getElementById('seletor-ano-fim').textContent = fimSelecao;
        document.getElementById('seletor-idade-inicio').textContent = inicioIdade;
        document.getElementById('seletor-idade-fim').textContent = fimIdade;
        
        // Posicionar o seletor na linha do tempo
        const containerWidth = document.querySelector('.linha-tempo-container').offsetWidth;
        const inicioPercent = ((inicioSelecao - 1886) / (1960 - 1886)) * 100;
        const fimPercent = ((fimSelecao - 1886) / (1960 - 1886)) * 100;
        const larguraPercent = fimPercent - inicioPercent;
        
        seletor.style.left = `calc(${inicioPercent}% + 20px)`;
        seletor.style.width = `calc(${larguraPercent}% - 40px)`;
    }
    
    function renderizarEventos() {
        listaEventos.innerHTML = '';
        
        const eventosFiltrados = eventos.filter(evento => {
            // Filtrar por período selecionado
            const dentroPeriodo = evento.ano >= inicioSelecao && evento.ano <= fimSelecao;
            
            // Filtrar por categoria ativa
            const categoriaAtiva = 
                (evento.categoria === 'historia' && filtroHistoria.checked) ||
                (evento.categoria === 'vida' && filtroVida.checked) ||
                (evento.categoria === 'obra' && filtroObra.checked);
            
            return dentroPeriodo && categoriaAtiva;
        });
        
        // Ordenar por ano
        eventosFiltrados.sort((a, b) => a.ano - b.ano);
        
        if (eventosFiltrados.length === 0) {
            listaEventos.innerHTML = `
                <div class="sem-eventos">
                    <p>Nenhum evento encontrado para o período e filtros selecionados.</p>
                </div>
            `;
            return;
        }
        
        eventosFiltrados.forEach(evento => {
            const eventoElement = document.createElement('div');
            eventoElement.className = `evento-card ${evento.categoria}`;
            
            eventoElement.innerHTML = `
                <div class="evento-categoria ${evento.categoria}">
                    ${evento.categoria.toUpperCase()}
                </div>
                <div class="evento-data">
                    ${evento.ano} (${evento.idade} anos)
                </div>
                <h3 class="evento-titulo">${evento.titulo}</h3>
                <p class="evento-descricao">${evento.descricao}</p>
                ${evento.imagem ? 
                    `<img src="${evento.imagem}" alt="${evento.titulo}" class="evento-imagem">` : 
                    ''
                }
            `;
            
            // Adicionar clique na imagem para modal
            const img = eventoElement.querySelector('.evento-imagem');
            if (img) {
                img.addEventListener('click', function() {
                    abrirModal(evento.imagem, evento.titulo);
                });
            }
            
            listaEventos.appendChild(eventoElement);
        });
    }
    
    function configurarEventListeners() {
        // Filtros
        filtroHistoria.addEventListener('change', renderizarEventos);
        filtroVida.addEventListener('change', renderizarEventos);
        filtroObra.addEventListener('change', renderizarEventos);
        
        // Botão reset
        btnReset.addEventListener('click', function() {
            inicioSelecao = 1933;
            fimSelecao = 1942;
            inicioIdade = 47;
            fimIdade = 56;
            atualizarSeletor();
            renderizarEventos();
        });
        
        // Modal
        modalFechar.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Arrastar seletor (simplificado)
        let arrastando = false;
        let arrastandoInicio = false;
        let arrastandoFim = false;
        
        seletor.addEventListener('mousedown', function(e) {
            arrastando = true;
            const rect = seletor.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            
            // Determinar se está arrastando início ou fim
            if (clickX < 20) {
                arrastandoInicio = true;
            } else if (clickX > rect.width - 20) {
                arrastandoFim = true;
            }
            
            document.body.style.userSelect = 'none';
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!arrastando) return;
            
            const container = document.querySelector('.linha-tempo-container');
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width - 40; // Ajuste para padding
            
            const percent = ((e.clientX - containerRect.left - 20) / containerWidth) * 100;
            const ano = Math.round(1886 + (percent / 100) * (1960 - 1886));
            
            if (arrastandoInicio && ano < fimSelecao - 5) {
                inicioSelecao = ano;
                inicioIdade = inicioSelecao - 1886;
            } else if (arrastandoFim && ano > inicioSelecao + 5) {
                fimSelecao = ano;
                fimIdade = fimSelecao - 1886;
            }
            
            atualizarSeletor();
            renderizarEventos();
        });
        
        document.addEventListener('mouseup', function() {
            arrastando = false;
            arrastandoInicio = false;
            arrastandoFim = false;
            document.body.style.userSelect = '';
        });
        
        // Touch events para mobile
        seletor.addEventListener('touchstart', function(e) {
            arrastando = true;
            const rect = seletor.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            
            if (touchX < 20) {
                arrastandoInicio = true;
            } else if (touchX > rect.width - 20) {
                arrastandoFim = true;
            }
            
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!arrastando) return;
            
            const container = document.querySelector('.linha-tempo-container');
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width - 40;
            
            const touchX = e.touches[0].clientX;
            const percent = ((touchX - containerRect.left - 20) / containerWidth) * 100;
            const ano = Math.round(1886 + (percent / 100) * (1960 - 1886));
            
            if (arrastandoInicio && ano < fimSelecao - 5) {
                inicioSelecao = ano;
                inicioIdade = inicioSelecao - 1886;
            } else if (arrastandoFim && ano > inicioSelecao + 5) {
                fimSelecao = ano;
                fimIdade = fimSelecao - 1886;
            }
            
            atualizarSeletor();
            renderizarEventos();
            e.preventDefault();
        });
        
        document.addEventListener('touchend', function() {
            arrastando = false;
            arrastandoInicio = false;
            arrastandoFim = false;
        });
    }
    
    function abrirModal(src, legenda) {
        modalImg.src = src;
        modalLegenda.textContent = legenda;
        modal.style.display = 'block';
    }
    
    // Inicializar com um pequeno atraso para garantir que o DOM está pronto
    setTimeout(() => {
        renderizarEventos();
    }, 100);
});
