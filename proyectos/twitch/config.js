/**
 * Configuración Global de la Interfaz Twitch
 * Este archivo contiene constantes y configuraciones para facilitar
 * el mantenimiento y extensión del proyecto
 */

// ==================== CONFIGURACIÓN DE COLORES ====================
export const COLORS = {
    PRIMARY: '#9146ff',      // Púrpura - Color principal de Twitch
    PRIMARY_DARK: '#772ce8', // Púrpura oscuro
    DARK_BG: '#0e0e10',      // Fondo oscuro principal
    DARKER_BG: '#0a0a0d',    // Fondo más oscuro
    GRAY: '#efefef',         // Gris claro
    GRAY_DIM: '#b0b0b0',     // Gris oscuro
    BORDER: '#2d2d31',       // Color de bordes
    LIVE: '#eb0400',         // Rojo en vivo
    SUCCESS: '#31a24d',      // Verde éxito
    WARNING: '#ffa640',      // Naranja advertencia
};

// ==================== CONFIGURACIÓN DE BREAKPOINTS ====================
export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    LAPTOP: 1024,
    DESKTOP: 1440,
};

// ==================== CONFIGURACIÓN DE ANIMACIONES ====================
export const ANIMATIONS = {
    DURATION_FAST: 200,      // ms
    DURATION_NORMAL: 300,    // ms
    DURATION_SLOW: 500,      // ms
    EASING: 'ease-in-out',
};

// ==================== CONFIGURACIÓN DE API ====================
export const API_CONFIG = {
    BASE_URL: '/api',
    TIMEOUT: 5000,
    RETRY_ATTEMPTS: 3,
};

// ==================== CATEGORÍAS ====================
export const CATEGORIES = [
    { id: 1, name: 'Juegos', icon: '🎮', slug: 'games' },
    { id: 2, name: 'Just Chatting', icon: '💬', slug: 'just-chatting' },
    { id: 3, name: 'Música', icon: '🎵', slug: 'music' },
    { id: 4, name: 'Películas y TV', icon: '🎬', slug: 'movies' },
    { id: 5, name: 'Fitness', icon: '🏋️', slug: 'fitness' },
    { id: 6, name: 'Creativo', icon: '🎨', slug: 'creative' },
    { id: 7, name: 'Deportes Electrónicos', icon: '🏆', slug: 'esports' },
    { id: 8, name: 'IRL', icon: '🌍', slug: 'irl' },
];

// ==================== LÍMITES Y RESTRICCIONES ====================
export const LIMITS = {
    STREAMS_PER_PAGE: 12,
    SEARCH_MIN_LENGTH: 2,
    SEARCH_MAX_LENGTH: 100,
    MAX_STREAM_TITLE_LENGTH: 140,
    MAX_DESCRIPTION_LENGTH: 300,
};

// ==================== MENSAJES DE LA APLICACIÓN ====================
export const MESSAGES = {
    LOADING: 'Cargando...',
    ERROR: 'Algo salió mal. Intenta de nuevo.',
    NO_RESULTS: 'No se encontraron resultados',
    SUCCESS: 'Operación completada exitosamente',
    CONFIRM: '¿Estás seguro?',
    WELCOME: 'Bienvenido a Twitch',
};

// ==================== RUTAS Y URLS ====================
export const ROUTES = {
    HOME: '/',
    EXPLORE: '/explore',
    SUBSCRIPTIONS: '/subscriptions',
    CHANNEL: (channelName) => `/channel/${channelName}`,
    VIDEO: (videoId) => `/video/${videoId}`,
    CATEGORY: (categorySlug) => `/category/${categorySlug}`,
};

// ==================== USUARIO POR DEFECTO ====================
export const DEFAULT_USER = {
    name: 'Usuario',
    avatar: 'img/avatar-default.svg',
    isLoggedIn: false,
    followers: 0,
    following: [],
};

// ==================== STREAM POR DEFECTO ====================
export const DEFAULT_STREAM = {
    id: null,
    title: 'Sin título',
    channel: 'Canal desconocido',
    category: 'Varios',
    viewers: 0,
    thumbnail: 'https://via.placeholder.com/320x180',
    avatar: 'https://via.placeholder.com/32x32',
    isLive: false,
    startTime: null,
    description: '',
};

// ==================== FUNCIONES DE UTILIDAD ====================

/**
 * Formatea números para mostrar (1000 -> 1K, 1000000 -> 1M)
 * @param {number} num - Número a formatear
 * @returns {string} Número formateado
 */
export function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Calcula tiempo transcurrido desde una fecha
 * @param {Date} date - Fecha a calcular
 * @returns {string} Tiempo transcurrido formateado
 */
export function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' años';
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' meses';
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' días';
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' horas';
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutos';
    return 'Hace unos segundos';
}

/**
 * Valida si un email es válido
 * @param {string} email - Email a validar
 * @returns {boolean} Si es válido
 */
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Sanitiza strings para evitar XSS
 * @param {string} str - String a sanitizar
 * @returns {string} String sanitizado
 */
export function sanitizeString(str) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Obtiene parámetros de URL
 * @param {string} param - Nombre del parámetro
 * @returns {string|null} Valor del parámetro
 */
export function getURLParameter(param) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

/**
 * Verifica si el dispositivo es móvil
 * @returns {boolean} Si es dispositivo móvil
 */
export function isMobile() {
    return window.innerWidth <= BREAKPOINTS.TABLET;
}

/**
 * Almacena en localStorage
 * @param {string} key - Clave
 * @param {any} value - Valor
 */
export function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

/**
 * Obtiene desde localStorage
 * @param {string} key - Clave
 * @returns {any|null} Valor almacenado
 */
export function getStorageItem(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

/**
 * Genera un ID único
 * @returns {string} ID único
 */
export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default {
    COLORS,
    BREAKPOINTS,
    ANIMATIONS,
    API_CONFIG,
    CATEGORIES,
    LIMITS,
    MESSAGES,
    ROUTES,
    DEFAULT_USER,
    DEFAULT_STREAM,
    formatNumber,
    getTimeAgo,
    isValidEmail,
    sanitizeString,
    getURLParameter,
    isMobile,
    setStorageItem,
    getStorageItem,
    generateUniqueId,
};