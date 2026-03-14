// Script del clon de YouTube

// Cargar datos cuando el DOM esté completo
document.addEventListener('DOMContentLoaded', () => {
    cargarContenido();
});

// Función para cargar contenido del JSON
function cargarContenido() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data.videos) {
                renderizarVideos(data.videos, 'videos-1');
            }
            if (data.shorts) {
                renderizarShorts(data.shorts, 'shorts-1');
            }
            if (data.videos) {
                renderizarVideos(data.videos, 'videos-2');
            }
            if (data.shorts) {
                renderizarShorts(data.shorts, 'shorts-2');
            }
            if (data.videos) {
                renderizarVideos(data.videos, 'videos-3');
            }
            // Configurar eventos DESPUÉS de renderizar
            configurarEventos();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Función para renderizar videos
function renderizarVideos(videos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        videoCard.innerHTML = `
            <div class="video-thumbnail">
                ${video.imagen ? `<img src="${encodeURI(decodeURI(video.imagen))}" alt="${video.titulo}">` : 'Imagen'}
                <span class="video-duration">${video.duracion || '12:30'}</span>
            </div>
            <div class="video-info">
                <div class="video-channel-avatar">
                    ${video.logo ? `<img src="${encodeURI(decodeURI(video.logo))}" alt="${video.canal}">` : ''}
                </div>
                <div class="video-details">
                    <div class="video-title">${video.titulo}</div>
                    <div class="video-channel">${video.canal}</div>
                    <div class="video-stats">${video.visualizaciones} • hace ${video.tiempo}</div>
                </div>
            </div>
        `;

        container.appendChild(videoCard);
    });
}

// Función para renderizar shorts
function renderizarShorts(shorts, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    shorts.forEach(short => {
        const shortCard = document.createElement('div');
        shortCard.className = 'short-card';
        
        if (short.video) {
            shortCard.classList.add('has-video');
        }

        let contenidoShort = '';
        if (short.video) {
            contenidoShort = `
                <video class="short-video" preload="metadata">
                    <source src="${encodeURI(decodeURI(short.video))}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
            `;
        } else {
            contenidoShort = `<div class="short-placeholder"><span>Short</span></div>`;
        }

        shortCard.innerHTML = contenidoShort + `
            <div class="short-title">${short.titulo}</div>
        `;

        container.appendChild(shortCard);
    });
}
// Función para configurar eventos
function configurarEventos() {
    // Evento del botón hamburguesa
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            sidebar.classList.toggle('active');
            mostrarOverlay(sidebar.classList.contains('active'));
        });
    }

    // Cerrar sidebar al hacer clic en el overlay
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', cerrarSidebar);
    }

    // Hacer activo el item del sidebar al hacer clic
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems[0].classList.add('active');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                cerrarSidebar();
            }
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Eventos para los shorts con video
    const shortCards = document.querySelectorAll('.short-card');
    shortCards.forEach((card, index) => {
        const video = card.querySelector('.short-video');
        if (video) {
            // Configurar el video sin controles y en mute para autoplay
            video.muted = true;
            video.loop = false;

            card.addEventListener('mouseenter', () => {
                video.currentTime = 0;
                video.play().catch(err => console.log('Autoplay bloqueado:', err));
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            // Evento de clic para abrir modal
            card.addEventListener('click', () => {
                const sourceElement = video.querySelector('source');
                const videoSrc = sourceElement ? sourceElement.src : '';
                const titulo = card.querySelector('.short-title').textContent;
                
                if (videoSrc) {
                    abrirModalShort(videoSrc, titulo);
                }
            });
        }
    });

    // Configurar modal
    configurarModal();

    // Evento para las tarjetas de video
    document.addEventListener('click', (e) => {
        const videoCard = e.target.closest('.video-card');
        if (videoCard) {
            console.log('Video clicked');
        }
    });
}

// Función para mostrar/ocultar overlay
function mostrarOverlay(mostrar) {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        if (mostrar) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}

// Función para cerrar sidebar
function cerrarSidebar() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerBtn) {
        hamburgerBtn.classList.remove('active');
    }
    if (sidebar) {
        sidebar.classList.remove('active');
    }
    mostrarOverlay(false);
}

// Función para abrir modal con short
function abrirModalShort(videoSrc, titulo) {
    const modal = document.getElementById('shortModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('modalTitle');

    modalVideo.src = videoSrc;
    modalTitle.textContent = titulo;
    modal.classList.add('active');
    modalVideo.play();
}

// Función para cerrar modal
function cerrarModal() {
    const modal = document.getElementById('shortModal');
    const modalVideo = document.getElementById('modalVideo');

    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// Función para configurar el modal
function configurarModal() {
    const modal = document.getElementById('shortModal');
    const modalClose = document.querySelector('.modal-close');

    // Cerrar al hacer clic en la X
    modalClose.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar al presionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModal();
        }
    });
}
