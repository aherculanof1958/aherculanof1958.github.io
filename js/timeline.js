document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('timeline');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const addEventBtn = document.getElementById('addEventBtn');
    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.close');
    const eventForm = document.getElementById('eventForm');
    const currentDateElement = document.getElementById('currentDate');

    // Dados iniciais da linha do tempo
    let events = [
        {
            date: '2024-01-15',
            title: 'Início do Projeto',
            description: 'Lançamento oficial do projeto da linha do tempo interativa.',
            image: ''
        },
        {
            date: '2024-02-28',
            title: 'Primeira Atualização',
            description: 'Adicionada funcionalidade de adicionar eventos dinamicamente.',
            image: ''
        },
        {
            date: '2024-03-10',
            title: 'Design Responsivo',
            description: 'Implementação completa do design responsivo para todos os dispositivos.',
            image: ''
        },
        {
            date: '2024-04-05',
            title: 'Integração GitHub Pages',
            description: 'Publicação do projeto no GitHub Pages para hospedagem gratuita.',
            image: ''
        }
    ];

    // Variável para controlar o ano atual exibido
    let currentYear = new Date().getFullYear();

    // Função para formatar a data
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('pt-PT', options);
    }

    // Função para renderizar os eventos
    function renderEvents(eventsToRender) {
        timeline.innerHTML = '';
        
        // Ordenar eventos por data
        eventsToRender.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        eventsToRender.forEach((event, index) => {
            const eventElement = document.createElement('div');
            eventElement.className = 'timeline-event';
            
            eventElement.innerHTML = `
                <div class="event-marker"></div>
                <div class="event-content">
                    <div class="event-date">
                        <i class="fas fa-calendar-alt"></i> ${formatDate(event.date)}
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    ${event.image ? `<img src="${event.image}" alt="${event.title}" class="event-image">` : ''}
                </div>
            `;
            
            timeline.appendChild(eventElement);
        });

        // Atualizar o texto da data atual
        updateCurrentDateText(eventsToRender);
    }

    // Função para atualizar o texto da data atual
    function updateCurrentDateText(eventsArray) {
        if (eventsArray.length === 0) {
            currentDateElement.textContent = 'Nenhum evento encontrado';
            return;
        }
        
        const dates = eventsArray.map(event => new Date(event.date));
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));
        
        if (minDate.getFullYear() === maxDate.getFullYear()) {
            currentDateElement.textContent = `Eventos de ${formatDate(minDate)} até ${formatDate(maxDate)}`;
        } else {
            currentDateElement.textContent = `Eventos de ${formatDate(minDate)} até ${formatDate(maxDate)}`;
        }
    }

    // Função para filtrar eventos por ano
    function filterEventsByYear(year) {
        return events.filter(event => new Date(event.date).getFullYear() === year);
    }

    // Função para navegar para o ano anterior
    function goToPrevYear() {
        currentYear--;
        const filteredEvents = filterEventsByYear(currentYear);
        renderEvents(filteredEvents);
    }

    // Função para navegar para o próximo ano
    function goToNextYear() {
        currentYear++;
        const filteredEvents = filterEventsByYear(currentYear);
        renderEvents(filteredEvents);
    }

    // Função para adicionar novo evento
    function addEvent(eventData) {
        events.push(eventData);
        
        // Se o evento for do ano atual, atualiza o filtro
        if (new Date(eventData.date).getFullYear() === currentYear) {
            renderEvents(filterEventsByYear(currentYear));
        }
        
        // Salvar no localStorage
        saveEventsToLocalStorage();
    }

    // Função para salvar eventos no localStorage
    function saveEventsToLocalStorage() {
        localStorage.setItem('timelineEvents', JSON.stringify(events));
    }

    // Função para carregar eventos do localStorage
    function loadEventsFromLocalStorage() {
        const savedEvents = localStorage.getItem('timelineEvents');
        if (savedEvents) {
            events = JSON.parse(savedEvents);
        }
    }

    // Event Listeners
    prevBtn.addEventListener('click', goToPrevYear);
    
    nextBtn.addEventListener('click', goToNextYear);
    
    addEventBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        // Definir data padrão como hoje
        document.getElementById('eventDate').value = new Date().toISOString().split('T')[0];
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newEvent = {
            date: document.getElementById('eventDate').value,
            title: document.getElementById('eventTitle').value,
            description: document.getElementById('eventDescription').value,
            image: document.getElementById('eventImage').value
        };
        
        addEvent(newEvent);
        
        // Limpar formulário
        eventForm.reset();
        
        // Fechar modal
        modal.style.display = 'none';
        
        // Mostrar mensagem de sucesso
        alert('Evento adicionado com sucesso!');
    });

    // Inicialização
    function init() {
        // Carregar eventos do localStorage
        loadEventsFromLocalStorage();
        
        // Renderizar todos os eventos inicialmente
        const currentYearEvents = filterEventsByYear(currentYear);
        renderEvents(currentYearEvents.length > 0 ? currentYearEvents : events);
        
        // Atualizar texto do ano atual
        currentDateElement.textContent = `Exibindo eventos de ${currentYear}`;
    }

    // Iniciar a aplicação
    init();
});
