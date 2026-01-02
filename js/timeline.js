document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const timelineEl = document.getElementById('timeline');
    const currentYearEl = document.getElementById('currentYear');
    const eventCountEl = document.getElementById('eventCount');
    const addEventBtn = document.getElementById('addEvent');
    const prevYearBtn = document.getElementById('prevYear');
    const nextYearBtn = document.getElementById('nextYear');
    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.close');
    const eventForm = document.getElementById('eventForm');

    // Dados iniciais
    let events = JSON.parse(localStorage.getItem('timelineEvents')) || [
        {
            id: 1,
            date: '2024-01-15',
            title: 'Início do Projeto',
            description: 'Criação da linha do tempo interativa.',
            image: ''
        },
        {
            id: 2,
            date: '2024-06-30',
            title: 'Metas do Ano',
            description: 'Atingimos 50% dos objetivos planejados para o ano.',
            image: ''
        },
        {
            id: 3,
            date: '2024-09-15',
            title: 'Novas Conquistas',
            description: 'Expansão do projeto com novas funcionalidades.',
            image: ''
        }
    ];

    let currentYear = new Date().getFullYear();
    let editMode = false;
    let eventToEdit = null;

    // Inicialização
    init();

    // Funções
    function init() {
        renderTimeline();
        updateCurrentYear();
        updateEventCount();
        setupEventListeners();
    }

    function setupEventListeners() {
        addEventBtn.addEventListener('click', () => openModal());
        prevYearBtn.addEventListener('click', () => changeYear(-1));
        nextYearBtn.addEventListener('click', () => changeYear(1));
        closeBtn.addEventListener('click', () => closeModal());
        
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveEvent();
        });

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') changeYear(-1);
            if (e.key === 'ArrowRight') changeYear(1);
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                openModal();
            }
        });
    }

    function changeYear(delta) {
        currentYear += delta;
        updateCurrentYear();
        renderTimeline();
        
        // Animações
        const timelineContainer = document.querySelector('.timeline-container');
        timelineContainer.style.opacity = '0.5';
        setTimeout(() => {
            timelineContainer.style.opacity = '1';
            timelineContainer.style.transition = 'opacity 0.3s ease';
        }, 50);
    }

    function updateCurrentYear() {
        currentYearEl.textContent = currentYear;
        currentYearEl.style.color = getRandomColor();
    }

    function getRandomColor() {
        const colors = [
            '#4361ee', '#3a0ca3', '#7209b7', 
            '#f72585', '#4cc9f0', '#4895ef'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        };
        return date.toLocaleDateString('pt-PT', options);
    }

    function getEventsForYear(year) {
        return events.filter(event => {
            const eventYear = new Date(event.date).getFullYear();
            return eventYear === year;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    function renderTimeline() {
        const yearEvents = getEventsForYear(currentYear);
        timelineEl.innerHTML = '';

        if (yearEvents.length === 0) {
            timelineEl.innerHTML = `
                <div class="no-events">
                    <i class="fas fa-calendar-times"></i>
                    <h3>Nenhum evento em ${currentYear}</h3>
                    <p>Adicione seu primeiro evento clicando no botão acima!</p>
                </div>
            `;
            return;
        }

        yearEvents.forEach((event, index) => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event-card';
            eventElement.dataset.id = event.id;
            
            const date = new Date(event.date);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            
            eventElement.innerHTML = `
                <div class="event-marker">
                    <span>${day}/${month}</span>
                </div>
                <div class="event-content">
                    <div class="event-date">
                        <i class="fas fa-calendar-alt"></i>
                        ${formatDate(event.date)}
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    ${event.image ? `
                        <img src="${event.image}" 
                             alt="${event.title}" 
                             class="event-image"
                             onerror="this.style.display='none'">
                    ` : ''}
                    <div class="event-actions">
                        <button class="btn-edit" onclick="editEvent(${event.id})">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="btn-delete" onclick="deleteEvent(${event.id})">
                            <i class="fas fa-trash"></i> Excluir
                        </button>
                    </div>
                </div>
            `;
            
            timelineEl.appendChild(eventElement);
        });

        // Adiciona estilos dinâmicos para os botões de ação
        const style = document.createElement('style');
        style.textContent = `
            .event-actions {
                display: flex;
                gap: 10px;
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #e9ecef;
            }
            .btn-edit, .btn-delete {
                padding: 8px 15px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all 0.3s;
            }
            .btn-edit {
                background: #e3f2fd;
                color: #1976d2;
            }
            .btn-edit:hover {
                background: #bbdefb;
            }
            .btn-delete {
                background: #ffebee;
                color: #d32f2f;
            }
            .btn-delete:hover {
                background: #ffcdd2;
            }
            .no-events {
                text-align: center;
                padding: 60px 20px;
                color: #6c757d;
            }
            .no-events i {
                font-size: 4rem;
                margin-bottom: 20px;
                color: #dee2e6;
            }
        `;
        document.head.appendChild(style);
    }

    function openModal(event = null) {
        if (event) {
            editMode = true;
            eventToEdit = event;
            document.getElementById('eventTitle').value = event.title;
            document.getElementById('eventDate').value = event.date;
            document.getElementById('eventDesc').value = event.description;
            document.getElementById('eventImg').value = event.image;
            modal.querySelector('h2').innerHTML = '<i class="fas fa-edit"></i> Editar Evento';
            document.querySelector('.btn-submit').innerHTML = '<i class="fas fa-save"></i> Atualizar Evento';
        } else {
            editMode = false;
            eventForm.reset();
            document.getElementById('eventDate').value = new Date().toISOString().split('T')[0];
            modal.querySelector('h2').innerHTML = '<i class="fas fa-calendar-plus"></i> Novo Evento';
            document.querySelector('.btn-submit').innerHTML = '<i class="fas fa-save"></i> Salvar Evento';
        }
        
        modal.style.display = 'block';
        document.getElementById('eventTitle').focus();
    }

    function closeModal() {
        modal.style.display = 'none';
        editMode = false;
        eventToEdit = null;
    }

    function saveEvent() {
        const formData = {
            id: editMode ? eventToEdit.id : Date.now(),
            title: document.getElementById('eventTitle').value.trim(),
            date: document.getElementById('eventDate').value,
            description: document.getElementById('eventDesc').value.trim(),
            image: document.getElementById('eventImg').value.trim()
        };

        if (!formData.title) {
            alert('Por favor, insira um título para o evento.');
            return;
        }

        if (editMode) {
            // Atualizar evento existente
            const index = events.findIndex(e => e.id === eventToEdit.id);
            if (index !== -1) {
                events[index] = formData;
            }
        } else {
            // Adicionar novo evento
            events.push(formData);
        }

        localStorage.setItem('timelineEvents', JSON.stringify(events));
        renderTimeline();
        updateEventCount();
        closeModal();
        
        // Feedback visual
        showNotification(editMode ? 'Evento atualizado!' : 'Evento adicionado!');
    }

    function deleteEvent(id) {
        if (confirm('Tem certeza que deseja excluir este evento?')) {
            events = events.filter(event => event.id !== id);
            localStorage.setItem('timelineEvents', JSON.stringify(events));
            renderTimeline();
            updateEventCount();
            showNotification('Evento excluído!');
        }
    }

    function updateEventCount() {
        const totalEvents = events.length;
        eventCountEl.textContent = totalEvents;
        
        // Animar contador
        eventCountEl.style.transform = 'scale(1.2)';
        eventCountEl.style.color = '#4361ee';
        setTimeout(() => {
            eventCountEl.style.transform = 'scale(1)';
            eventCountEl.style.color = '';
        }, 300);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        
        // Estilos da notificação
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Funções globais para os botões de edição/exclusão
    window.editEvent = function(id) {
        const event = events.find(e => e.id === id);
        if (event) openModal(event);
    };

    window.deleteEvent = deleteEvent;

    // Inicializar com animação
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 100);
});
