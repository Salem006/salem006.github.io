# 📺 Estructura de Canales - Twitch Interface Clone

Esta carpeta está diseñada para almacenar las páginas individuales de cada canal.

## 📁 Cómo Organizar los Canales

### Estructura Recomendada

```
canales/
├── EJEMPLO_canal.html       # Archivo de ejemplo y template
├── progamer123.html         # Página del canal "ProGamer123"
├── twitchstreamer.html      # Página del canal "TwitchStreamer"
├── musicalive.html          # Página del canal "MusicaLive"
├── devmaster.html           # Página del canal "DevMaster"
├── eportstv.html            # Página del canal "EsportsTV"
├── cineclub.html            # Página del canal "CineClub"
├── speedrunner.html         # Página del canal "SpeedRunner"
└── fitcoach.html            # Página del canal "FitCoach"
```

## 🎨 Personalizar una Página de Canal

### Paso 1: Duplicar el Archivo de Ejemplo
1. Copia `EJEMPLO_canal.html`
2. Renómbralo con el nombre del canal (ej: `progamer123.html`)

### Paso 2: Modificar la Información

#### Título de la Página
```html
<title>NombreDelCanal - Twitch</title>
```

#### Nombre del Canal
```html
<h1 class="channel-name">NombreDelCanal</h1>
```

#### Avatar (Emoji o Imagen)
```html
<div class="channel-avatar">🎮</div> <!-- Cambia el emoji -->
```

#### Estadísticas
```html
<div class="stat">
    <span class="stat-number">285K</span>
    <span class="stat-label">Seguidores</span>
</div>
```

#### Descripción
```html
<p class="channel-description">
    Tu descripción aquí...
</p>
```

#### Videos/Contenido
```html
<div class="video-card">
    <div class="video-thumbnail">🎮</div>
    <div class="video-info">
        <div class="video-title">Título del Video</div>
        <div class="video-date">Hace 2 días</div>
    </div>
</div>
```

#### Información del Canal
```html
<div class="info-item">
    <div class="info-label">Categoría Principal</div>
    <div class="info-value">Tu Categoría</div>
</div>
```

## 🔗 Vincular desde la Página Principal

En `script.js`, cuando hagas clic en una tarjeta de stream, puedes dirigir a la página del canal:

```javascript
card.addEventListener('click', () => {
    window.location.href = `canales/${stream.channel.toLowerCase()}.html`;
});
```

## 📝 Variables a Personalizar por Canal

Para cada canal, actualiza estos valores:

| Variable | Ejemplo |
|----------|---------|
| Nombre | ProGamer123 |
| Seguidores | 285K |
| Transmisiones | 90 |
| Vistas Totales | 2.3M |
| Descripción | Soy un streamer profesional... |
| Categoría | Juegos Competitivos |
| Idioma | Español |
| País | España |
| Fecha de Unión | Enero 2020 |
| Avatar | 🎮 (emoji) |

## 🎨 Personalizar Colores

Puedes cambiar los colores de cada canal modificando el gradiente del banner:

```html
<div class="channel-banner" style="background: linear-gradient(135deg, #ff6b6b, #ff8e53);"></div>
```

### Sugerencias de Colores por Categoría

- **Juegos**: `#9146ff` (Púrpura)
- **Música**: `#ff6b9d` (Rosa)
- **Deportes**: `#00d4ff` (Cian)
- **Creativo**: `#ffa500` (Naranja)
- **Fitness**: `#00ff88` (Verde)
- **IRL**: `#ff9500` (Naranja oscuro)

## 🖼️ Añadir Imágenes Reales

Para reemplazar emojis con imágenes:

```html
<div class="channel-avatar">
    <img src="../img/avatars/progamer123.jpg" alt="ProGamer123">
</div>
```

Crea una carpeta `img/avatars/` y almacena las imágenes allí.

## 📱 Navegación entre Canales

En la página de inicio (`index.html`), las tarjetas de stream tienen un evento de clic:

```javascript
card.addEventListener('click', () => {
    window.location.href = `canales/${stream.channel.toLowerCase()}.html`;
});
```

## 🔄 Conectar de Vuelta a la Página Principal

El botón "Atrás" en la página del canal usa:

```html
<button class="back-btn" onclick="history.back()">← Atrás</button>
```

Esto funciona tanto desde la página principal como desde histórico.

## 📊 Datos Exportados

En `data.json` encontrarás un array `canales` con información completa de cada canal que puedes usar como referencia.

## 🎯 Checklist para Crear Canales

- [ ] Crear archivo HTML desde el template
- [ ] Actualizar título de la página
- [ ] Cambiar nombre del canal
- [ ] Actualizar avatar (emoji o imagen)
- [ ] Modificar estadísticas
- [ ] Escribir descripción
- [ ] Actualizar videos/contenido
- [ ] Cambiar información del channel
- [ ] Personalizar colores del banner
- [ ] Vincular desde la página principal

---

**Nota**: El archivo `EJEMPLO_canal.html` es un template completo y funcional que puedes usar como punto de partida para todos tus canales.