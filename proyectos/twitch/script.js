// Datos de canales en vivo
const liveStreams = [
    {
        id: 1,
        thumbnail: 'img/avatars/rubius.svg',
        title: 'HOLA',
        channel: 'rivers_gg',
        avatar: 'img/avatars/rubius.svg',
        category: 'Just Chatting',
        viewers: 4100,
        isLive: true,
        tags: ['DropsEnabled', 'Coffee']
    },
    {
        id: 2,
        thumbnail: 'img/thumbnails/live_user_peereira7-440x248.jpg',
        title: '🎮 EL MEJOR STREAMER 🎮',
        channel: 'Peereira7',
        avatar: 'img/avatars/peereira7.svg',
        category: 'VALORANT',
        viewers: 9300,
        isLive: true,
        tags: ['Competitive', 'Ranked']
    },
    {
        id: 3,
        thumbnail: 'img/games/509658-188x250.jpg',
        title: '✦✦TAPION Y LUEGO FREEZEEE✦✦',
        channel: 'ezconde',
        avatar: 'img/avatars/jynxzi.svg',
        category: 'Just Chatting',
        viewers: 3100,
        isLive: true,
        tags: ['Vibes', 'Chill']
    },
    {
        id: 4,
        thumbnail: 'img/thumbnails/live_user_juansguarnizo-440x248.jpg',
        title: 'GARTIC PHONE 🎮',
        channel: 'juansguarnizo',
        avatar: 'img/avatars/juansguarnizo.svg',
        category: 'Gartic Phone',
        viewers: 4800,
        isLive: true,
        tags: ['Funny', 'Party']
    },
    {
        id: 5,
        thumbnail: 'img/games/League of legends.jpg',
        title: 'League of Legends Ranked',
        channel: 'Nissaxter',
        avatar: 'img/avatars/nissaxter.svg',
        category: 'League of Legends',
        viewers: 5200,
        isLive: true,
        tags: ['Ranked', 'ProPlayer']
    },
    {
        id: 6,
        thumbnail: 'img/thumbnails/jynxzi.jpg',
        title: 'Minecraft Survival Mode',
        channel: 'Jynxzi',
        avatar: 'img/avatars/jynxzi.svg',
        category: 'Minecraft',
        viewers: 7400,
        isLive: true,
        tags: ['Survival', 'Building']
    }
];

// Canales en vivo para la sección "For You"
const forYouChannels = [
    {
        id: 1,
        name: 'Rubius',
        game: 'Just Chatting',
        viewers: 22500,
        avatar: 'img/avatars/rubius.svg',
        isLive: true
    },
    {
        id: 2,
        name: 'Peereira7',
        game: 'VALORANT',
        viewers: 7560,
        avatar: 'img/avatars/peereira7.svg',
        isLive: true
    },
    {
        id: 3,
        name: 'Jynxzi',
        game: 'Rocket League',
        viewers: 39500,
        avatar: 'img/avatars/jynxzi.svg',
        isLive: true
    },
    {
        id: 4,
        name: 'Nissaxter',
        game: 'League of Legends',
        viewers: 3000,
        avatar: 'img/avatars/nissaxter.svg',
        isLive: true
    },
    {
        id: 5,
        name: 'juansguarnizo',
        game: 'Gartic Phone',
        viewers: 4200,
        avatar: 'img/avatars/juansguarnizo.svg',
        isLive: true
    },
    {
        id: 6,
        name: 'zackrawrr',
        game: 'Just Chatting',
        viewers: 52300,
        avatar: 'img/avatars/zackrawrr.svg',
        isLive: true
    }
];

// Datos de videos para el carrusel 3D
const carouselVideos = [
    {
        id: 1,
        title: 'HOLA',
        channel: 'rivers_gg',
        viewers: 4100,
        game: 'Just Chatting',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4',
        thumbnail: 'img/avatars/rubius.svg',
        avatar: 'img/avatars/rubius.svg',
        tags: ['DropsEnabled', 'Coffee']
    },
    {
        id: 2,
        title: '🎮 EL MEJOR STREAMER 🎮',
        channel: 'Peereira7',
        viewers: 9300,
        game: 'VALORANT',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4',
        thumbnail: 'img/thumbnails/live_user_peereira7-440x248.jpg',
        avatar: 'img/avatars/peereira7.svg',
        tags: ['Competitive', 'Ranked']
    },
    {
        id: 3,
        title: '✦✦TAPION Y LUEGO FREEZEEE✦✦',
        channel: 'ezconde',
        viewers: 3100,
        game: 'Just Chatting',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/elephant-dream.mp4',
        thumbnail: 'img/games/509658-188x250.jpg',
        avatar: 'img/avatars/jynxzi.svg',
        tags: ['Vibes', 'Chill']
    },
    {
        id: 4,
        title: 'GARTIC PHONE 🎮',
        channel: 'juansguarnizo',
        viewers: 4800,
        game: 'Gartic Phone',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/forrest_gump.mp4',
        thumbnail: 'img/thumbnails/live_user_juansguarnizo-440x248.jpg',
        avatar: 'img/avatars/juansguarnizo.svg',
        tags: ['Funny', 'Party']
    },
    {
        id: 5,
        title: 'League of Legends Ranked',
        channel: 'Nissaxter',
        viewers: 5200,
        game: 'League of Legends',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/tears-of-steel.mp4',
        thumbnail: 'img/games/League of legends.jpg',
        avatar: 'img/avatars/nissaxter.svg',
        tags: ['Ranked', 'ProPlayer']
    },
    {
        id: 6,
        title: 'Minecraft Survival Mode',
        channel: 'Jynxzi',
        viewers: 7400,
        game: 'Minecraft',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/vp9.webm',
        thumbnail: 'img/thumbnails/jynxzi.jpg',
        avatar: 'img/avatars/jynxzi.svg',
        tags: ['Survival', 'Building']
    }
];

const recommendedStreams = [
    {
        id: 7,
        thumbnail: 'https://via.placeholder.com/320x180/c4b5fd/ffffff?text=Recommended+1',
        title: 'Speedrun: Mario 64 en 15 minutos',
        channel: 'SpeedRunner',
        avatar: 'https://via.placeholder.com/32x32/c4b5fd/ffffff?text=SR',
        category: 'Juegos',
        viewers: 3200,
        isLive: true
    },
    {
        id: 8,
        thumbnail: 'https://via.placeholder.com/320x180/ddd6fe/ffffff?text=Recommended+2',
        title: 'Fitness Online: Entrenamiento HIIT',
        channel: 'FitCoach',
        avatar: 'https://via.placeholder.com/32x32/ddd6fe/ffffff?text=FC',
        category: 'Fitness',
        viewers: 7800,
        isLive: true
    },
    {
        id: 9,
        thumbnail: 'https://via.placeholder.com/320x180/ede9fe/ffffff?text=Recommended+3',
        title: 'Cocinando comida italiana tradicional',
        channel: 'ChefItalia',
        avatar: 'https://via.placeholder.com/32x32/ede9fe/ffffff?text=CI',
        category: 'Creativo',
        viewers: 4500,
        isLive: true
    },
    {
        id: 10,
        thumbnail: 'https://via.placeholder.com/320x180/f3e8ff/ffffff?text=Recommended+4',
        title: 'Arte Digital: Dibujando un personaje',
        channel: 'ArtisticMind',
        avatar: 'https://via.placeholder.com/32x32/f3e8ff/ffffff?text=AM',
        category: 'Creativo',
        viewers: 2100,
        isLive: true
    },
    {
        id: 11,
        thumbnail: 'https://via.placeholder.com/320x180/faf5ff/ffffff?text=Recommended+5',
        title: 'Podcast Tech: Los últimos gadgets',
        channel: 'TechTalk',
        avatar: 'https://via.placeholder.com/32x32/faf5ff/ffffff?text=TT',
        category: 'Creativo',
        viewers: 6400,
        isLive: true
    },
    {
        id: 12,
        thumbnail: 'https://via.placeholder.com/320x180/e9d5ff/ffffff?text=Recommended+6',
        title: 'Juego de Mesa: D&D Campaign',
        channel: 'DiceRollers',
        avatar: 'https://via.placeholder.com/32x32/e9d5ff/ffffff?text=DR',
        category: 'Juegos',
        viewers: 9200,
        isLive: true
    }
];

// Función para crear tarjeta de stream
function createStreamCard(stream) {
    const card = document.createElement('div');
    card.className = 'stream-card';
    
    card.innerHTML = `
        <div class="stream-thumbnail">
            <img src="${stream.thumbnail}" alt="${stream.title}">
            ${stream.isLive ? `
                <div class="stream-live-badge">
                    <span class="live-indicator"></span>
                    EN VIVO
                </div>
            ` : ''}
        </div>
        <div class="stream-info">
            <div class="stream-header">
                <div class="stream-avatar">
                    <img src="${stream.avatar}" alt="${stream.channel}">
                </div>
                <div class="stream-details">
                    <div class="stream-title">${stream.title}</div>
                    <div class="stream-channel">${stream.channel}</div>
                    <div class="stream-viewers">
                        <span class="viewer-dot"></span>
                        ${stream.viewers.toLocaleString()} espectadores
                    </div>
                </div>
            </div>
            <div style="font-size: 11px; color: #b0b0b0;">${stream.category}</div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        alert(`Ir al canal: ${stream.channel}\nTítulo: ${stream.title}`);
    });
    
    return card;
}

// Función para cargar streams en vivo
function loadLiveStreams() {
    const streamsGrid = document.querySelector('.streams-grid');
    streamsGrid.innerHTML = '';
    
    liveStreams.forEach(stream => {
        streamsGrid.appendChild(createStreamCard(stream));
    });
}

// Función para cargar streams recomendados
function loadRecommendedStreams() {
    const recommendedGrid = document.getElementById('recommended-grid');
    recommendedGrid.innerHTML = '';
    
    recommendedStreams.forEach(stream => {
        recommendedGrid.appendChild(createStreamCard(stream));
    });
}

// Función para buscar streams
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const allStreams = [...liveStreams, ...recommendedStreams];
        
        const filtered = allStreams.filter(stream => 
            stream.title.toLowerCase().includes(query) ||
            stream.channel.toLowerCase().includes(query) ||
            stream.category.toLowerCase().includes(query)
        );
        
        const streamsGrid = document.querySelector('.streams-grid');
        streamsGrid.innerHTML = '';
        
        if (filtered.length === 0) {
            streamsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b0b0b0;">No se encontraron resultados</p>';
        } else {
            filtered.forEach(stream => {
                streamsGrid.appendChild(createStreamCard(stream));
            });
        }
    });
}

// Función para manejar navegación
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            const text = item.textContent;
            if (text === 'Inicio') {
                loadLiveStreams();
                loadRecommendedStreams();
            } else if (text === 'Explorar') {
                alert('Sección Explorar - Próximamente');
            } else if (text === 'Suscripciones') {
                alert('Sección Suscripciones - Próximamente');
            }
        });
    });
}

// Función para manejar clics en categorías sidebar
function setupCategoryLinks() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.textContent.trim();
            alert(`Categoría: ${category}`);
        });
    });
}

// Función para manejar clics en canales seguidos
function setupFollowedChannels() {
    const followedItems = document.querySelectorAll('.followed-item');
    
    followedItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const channel = item.textContent.trim();
            if (channel !== 'Ver más...') {
                alert(`Ir al canal: ${channel}`);
            }
        });
    });
}

// Función para cargar datos en el widget de canal
function setupChannelWidget() {
    const widget = document.querySelector('.channel-widget');
    widget.addEventListener('click', () => {
        alert('Ir al canal destacado');
    });
}

// Función para cargar los canales en vivo en la sección "For You"
function loadForYouChannels() {
    const liveChannelsList = document.getElementById('liveChannelsList');
    liveChannelsList.innerHTML = '';
    
    // Mostrar solo los primeros 5 canales
    forYouChannels.slice(0, 5).forEach(channel => {
        const channelItem = document.createElement('a');
        channelItem.className = 'live-channel-item';
        channelItem.href = '#';
        
        channelItem.innerHTML = `
            <div class="live-channel-avatar">
                <img src="${channel.avatar}" alt="${channel.name}">
            </div>
            <div class="live-channel-info">
                <span class="live-channel-name">${channel.name}</span>
                <span class="live-channel-game">${channel.game}</span>
            </div>
            <div class="live-channel-viewers">
                <span class="viewer-indicator"></span>
                ${(channel.viewers / 1000).toFixed(1)}K
            </div>
        `;
        
        channelItem.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Abriendo canal en vivo: ${channel.name}`);
        });
        
        liveChannelsList.appendChild(channelItem);
    });
}

// Función para cargar las categorías recomendadas
function loadCategoriesGrid() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    const categories = [
        { id: 1, name: 'Just chatting', image: 'img/games/Just chatting.jpg', viewers: 856000 },
        { id: 2, name: 'League of legends', image: 'img/games/League of legends.jpg', viewers: 345000 },
        { id: 3, name: 'Minecraft', image: 'img/games/Minecraft.jpg', viewers: 892000 },
        { id: 4, name: 'Valorant', image: 'img/games/Valorant.png', viewers: 623000 },
        { id: 5, name: 'Resident', image: 'img/games/Resident.jpg', viewers: 234000 }
    ];
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div class="category-thumbnail" style="background-image: url('${category.image}')"></div>
            <h3>${category.name}</h3>
            <p>${(category.viewers / 1000).toFixed(0)}K espectadores</p>
        `;
        
        card.addEventListener('click', () => {
            alert(`Viendo: ${category.name}`);
        });
        
        categoriesGrid.appendChild(card);
    });
}

function loadRecommendedCategories() {
    const recommendedCatList = document.getElementById('recommendedCatList');
    recommendedCatList.innerHTML = '';
    
    const categories = [
        { id: 1, name: 'Just chatting', image: 'img/games/Just chatting.jpg', viewers: 426000 },
        { id: 2, name: 'League of legends', image: 'img/games/League of legends.jpg', viewers: 185000 },
        { id: 3, name: 'Minecraft', image: 'img/games/Minecraft.jpg', viewers: 342000 },
        { id: 4, name: 'Valorant', image: 'img/games/Valorant.png', viewers: 298000 },
        { id: 5, name: 'Resident', image: 'img/games/Resident.jpg', viewers: 108000 }
    ];
    
    categories.forEach(category => {
        const catItem = document.createElement('a');
        catItem.className = 'recommended-cat-item';
        catItem.href = '#';
        
        catItem.innerHTML = `
            <div class="recommended-cat-thumbnail" style="background-image: url('${category.image}'); background-size: cover; background-position: center;">
            </div>
            <div class="recommended-cat-info">
                <span class="recommended-cat-name">${category.name}</span>
                <span class="recommended-cat-viewers">
                    <span class="viewer-indicator"></span>
                    ${(category.viewers / 1000).toFixed(1)}K espectadores
                </span>
            </div>
        `;
        
        catItem.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Categoría: ${category.name}`);
        });
        
        recommendedCatList.appendChild(catItem);
    });
}

// ==================== CARRUSEL 3D NUEVO ====================
class Carousel3D {
    constructor(videos, containerId = 'carouselInner', indicatorsId = 'carouselIndicators') {
        this.videos = videos;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.container = document.getElementById(containerId);
        this.indicatorsContainer = document.getElementById(indicatorsId);
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.renderSlides();
        this.renderIndicators();
        this.updatePosition();
    }
    
    renderSlides() {
        this.container.innerHTML = '';
        this.videos.forEach((video, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.dataset.index = index;
            
            // Thumbnail con video/imagen
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'carousel-slide-thumbnail';
            
            // Badge LIVE
            const liveBadge = document.createElement('div');
            liveBadge.className = 'carousel-live-badge';
            liveBadge.innerHTML = `
                <span class="live-dot"></span>
                LIVE
            `;
            thumbnailDiv.appendChild(liveBadge);
            
            // Video o imagen como background
            const videoEl = document.createElement('video');
            videoEl.preload = 'metadata';
            videoEl.poster = video.thumbnail;
            const source = document.createElement('source');
            source.src = video.videoUrl;
            source.type = 'video/mp4';
            videoEl.appendChild(source);
            thumbnailDiv.appendChild(videoEl);
            
            // Panel de información a la derecha
            const infoDiv = document.createElement('div');
            infoDiv.className = 'carousel-slide-info';
            
            // Header con avatar
            const headerDiv = document.createElement('div');
            headerDiv.className = 'carousel-streamer-header';
            headerDiv.innerHTML = `
                <div class="carousel-avatar">
                    <img src="${video.avatar}" alt="${video.channel}" onerror="this.src='img/avatars/default.svg'">
                </div>
                <div class="carousel-streamer-info">
                    <div class="carousel-streamer-name">${video.channel}</div>
                    <div class="carousel-game-name">${video.game}</div>
                    <div class="carousel-viewers">
                        <span class="viewer-indicator"></span>
                        ${(video.viewers / 1000).toFixed(1)}K espectadores
                    </div>
                </div>
            `;
            infoDiv.appendChild(headerDiv);
            
            // Tags
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'carousel-tags';
            if (video.tags) {
                video.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.className = 'carousel-tag';
                    tagEl.textContent = tag;
                    tagsDiv.appendChild(tagEl);
                });
            }
            infoDiv.appendChild(tagsDiv);
            
            // Título
            const titleDiv = document.createElement('div');
            titleDiv.className = 'carousel-title';
            titleDiv.textContent = video.title;
            infoDiv.appendChild(titleDiv);
            
            slide.appendChild(thumbnailDiv);
            slide.appendChild(infoDiv);
            
            // Event listeners
            slide.addEventListener('mouseenter', () => this.playVideo(slide));
            slide.addEventListener('mouseleave', () => this.pauseVideo(slide));
            
            this.container.appendChild(slide);
        });
    }
    
    renderIndicators() {
        this.indicatorsContainer.innerHTML = '';
        this.videos.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            if (index === this.currentIndex) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }
    
    updatePosition() {
        const slides = this.container.querySelectorAll('.carousel-slide');
        
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'prev');
            slide.style.display = 'none';
            
            const diff = (index - this.currentIndex + this.videos.length) % this.videos.length;
            
            if (diff === 0) {
                // Slide central - ACTIVO
                slide.classList.add('active');
                slide.style.display = 'flex';
            } else if (diff === 1) {
                // Slide siguiente (a la derecha)
                slide.classList.add('next');
                slide.style.display = 'flex';
            } else if (diff === this.videos.length - 1) {
                // Slide anterior (a la izquierda)
                slide.classList.add('prev');
                slide.style.display = 'flex';
            }
        });
        
        // Actualizar indicadores
        const indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((ind, index) => {
            ind.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    playVideo(slide) {
        const video = slide.querySelector('video');
        if (video && slide.classList.contains('active')) {
            video.play().catch(() => {
                console.log('Autoplay no permitido');
            });
        }
    }
    
    pauseVideo(slide) {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
    
    next() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        // Pausar video actual
        const currentSlide = this.container.querySelector('.carousel-slide.active');
        if (currentSlide) this.pauseVideo(currentSlide);
        
        this.currentIndex = (this.currentIndex + 1) % this.videos.length;
        this.updatePosition();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    prev() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        // Pausar video actual
        const currentSlide = this.container.querySelector('.carousel-slide.active');
        if (currentSlide) this.pauseVideo(currentSlide);
        
        this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
        this.updatePosition();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        this.isTransitioning = true;
        
        // Pausar video actual
        const currentSlide = this.container.querySelector('.carousel-slide.active');
        if (currentSlide) this.pauseVideo(currentSlide);
        
        this.currentIndex = index;
        this.updatePosition();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
}

let carousel3d = null;

function initCarousel3D() {
    carousel3d = new Carousel3D(carouselVideos);
    
    // Botones prev/next
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    if (prevBtn) prevBtn.addEventListener('click', () => carousel3d.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => carousel3d.next());
}
document.addEventListener('DOMContentLoaded', () => {
    initCarousel3D();
    loadCategoriesGrid();
    loadForYouChannels();
    loadRecommendedCategories();
    loadLiveStreams();
    loadRecommendedStreams();
    setupSearch();
    setupNavigation();
    setupCategoryLinks();
    setupFollowedChannels();
    setupChannelWidget();
    
    // Configurar botón conectarse
    const connectBtn = document.querySelector('.btn-primary');
    connectBtn.addEventListener('click', () => {
        alert('Ir a conectarse / Iniciar sesión');
    });
    
    // Configurar logo
    const logo = document.querySelector('.logo-twitch');
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        initCarousel3D();
        loadForYouChannels();
        loadRecommendedCategories();
        loadLiveStreams();
        loadRecommendedStreams();
    });
});