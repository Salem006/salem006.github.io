# 🎮 Twitch Interface Clone - Interfaz Espejo de Twitch

Una interfaz completa que replica el diseño y funcionalidad de la plataforma Twitch, construida con HTML5, CSS3 y JavaScript vanilla.

## 📁 Estructura del Proyecto

```
TWITCH/
├── index.html          # Página principal con estructura HTML
├── style.css           # Estilos completos de la interfaz
├── script.js           # Lógica interactiva y funcionalidades
├── data.json           # Datos de canales y categorías
├── img/                # Carpeta para imágenes
│   └── avatar-default.svg    # Avatar predeterminado
└── canales/            # Carpeta para archivos de canales individuales
```

## 🎨 Características Principales

### Header (Encabezado)
- **Logo de Twitch** con icono interactivo
- **Navegación principal** (Inicio, Explorar, Suscripciones)
- **Barra de búsqueda** funcional con filtrado en tiempo real
- **Botón de conexión** estilizado
- Diseño responsivo y sticky

### Sidebar izquierdo
- **Sección recomendado**: Widget de canal destacado
- **Categorías**: Lista interactive de categorías populares
- **Canales seguidos**: Lista de canales suscritos
- Navegación intuitiva con hover effects

### Contenido Principal
- **Banner de bienvenida** con gradiente temático
- **Streams en vivo**: Grid de tarjetas de transmisiones activas
- **Categorías destacadas**: Tarjetas interactivas de categorías
- **Recomendado para ti**: Grid personalizado de streams sugeridos

### Tarjetas de Stream
- Thumbnails de video con vista previa
- **Badge "EN VIVO"** con indicador pulsante
- Información del canal (avatar, nombre, categoría)
- Contador de espectadores en tiempo real
- Efectos hover con animaciones suaves

### Footer
- Múltiples secciones de enlaces
- Información de la compañía
- Enlaces de desarrolladores y soporte

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - CSS Grid para layouts responsivos
  - Flexbox para alineación
  - Gradientes lineales
  - Animaciones y transiciones
  - Variables CSS para temas
- **JavaScript (Vanilla)**:
  - Manipulación del DOM
  - Event listeners
  - Búsqueda y filtrado dinámico
  - Carga de datos JSON

## 🎯 Funcionalidades Implementadas

### Búsqueda
Busca streams por:
- Título del stream
- Nombre del canal
- Categoría

### Navegación Interactiva
- Menú principal con indicador activo
- Enlaces de categorías con alert de demostración
- Navegación en canales seguidos

### Efectos Visuales
- Animación de pulso en el indicador "EN VIVO"
- Transiciones suaves en hover
- Elevación de tarjetas al pasar el mouse
- Cambios de color en navegación

### Responsive Design
- Diseño adaptable para móviles y tablets
- Grid de tarjetas ajustable
- Barra lateral oculta en dispositivos pequeños

## 📊 Datos Incluidos

### Streams de Ejemplo
Se incluyen 12 streams de ejemplo con:
- Thumbnails de placeholder
- Información del canal completa
- Categorías variadas
- Número de espectadores realista

### Categorías
8 categorías principales:
1. Juegos 🎮
2. Just Chatting 💬
3. Música 🎵
4. Películas y TV 🎬
5. Fitness 🏋️
6. Creativo 🎨
7. Deportes Electrónicos 🏆
8. IRL 🌍

## 🚀 Cómo Usar

1. **Abrir en navegador**: Abre `index.html` en tu navegador favorito
2. **Navegar por streams**: Desplázate por los streams en vivo
3. **Buscar**: Usa la barra de búsqueda para filtrar contenido
4. **Explorar categorías**: Haz clic en cualquier categoría
5. **Interactuar**: Haz clic en tarjetas para ver demostraciones

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:
```css
:root {
    --primary-color: #9146ff;      /* Color principal (púrpura Twitch) */
    --dark-bg: #0e0e10;            /* Fondo oscuro */
    --live-color: #eb0400;         /* Color de EN VIVO */
}
```

### Añadir Nuevos Streams
En `script.js`, añade objetos al array `liveStreams`:
```javascript
{
    id: 13,
    thumbnail: 'https://via.placeholder.com/320x180',
    title: 'Tu título aquí',
    channel: 'Nombre del canal',
    avatar: 'url-del-avatar',
    category: 'Categoría',
    viewers: 1000,
    isLive: true
}
```

## 📝 Archivos Importantes

### index.html
Estructura HTML completa con:
- Header semántico
- Container flexbox para layout
- Sidebar con navegación
- Main section con contenido principal
- Footer con múltiples secciones

### style.css
Contiene:
- Variables CSS para tematización
- Estilos del header
- Estilos del sidebar
- Grid responsivo
- Animaciones
- Estilos del footer
- Media queries para responsive

### script.js
Incluye:
- Array de datos de streams
- Funciones de creación de tarjetas
- Lógica de búsqueda
- Gestión de navegación
- Event listeners
- Inicialización del DOM

## 🔌 Próximas Mejoras Posibles

- [ ] Integración con API real de Twitch
- [ ] Base de datos para persistencia
- [ ] Sistema de login y autenticación
- [ ] Reproductor de video integrado
- [ ] Chat en vivo
- [ ] Sistema de favoritos
- [ ] Tema oscuro/claro switcheable
- [ ] Historial de búsqueda
- [ ] Notificaciones push
- [ ] Página de canal individual

## 📱 Compatibilidad

- ✅ Chrome/Chromium (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Móviles (iOS/Android)

## 📄 Licencia

Este proyecto es una interfaz educativa y no está afiliado a Twitch Interactive.

---

**Creado con ❤️ - 2026**