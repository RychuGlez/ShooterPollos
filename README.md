# Shooter Pollos

Prototipo 2D tipo run-and-gun con desplazamiento lateral, estética pixel art retro y recursos originales generados dentro del proyecto.

## Tecnología elegida

Se eligió **HTML5 Canvas + JavaScript ES Modules** porque no requiere motor externo ni descargas de paquetes, ejecuta en cualquier navegador moderno de Windows, permite pixel art nítido y conserva una base de código fácil de ampliar. Se añade un servidor local mínimo en Node.js para evitar dependencias y facilitar la ejecución.

## Instalación

Requisitos:

- Node.js 20 o superior.
- npm incluido con Node.js.

Comandos:

```bash
npm run dev
```

Abre la URL local que muestra el servidor, normalmente `http://localhost:5173`.

Para generar una versión distribuible:

```bash
npm run build
```

## Controles

- **A/D** o **flechas izquierda/derecha**: moverse.
- **Espacio**: saltar.
- **J** o **Z**: disparar.
- **W** o **flecha arriba**: apuntar arriba.
- **W + dirección horizontal**: apuntar en diagonal hacia arriba.
- **S** o **flecha abajo** en el aire: apuntar hacia abajo.
- **Enter**: confirmar en menús.
- **Escape**: pausa básica / volver al menú.

Las teclas sugeridas están centralizadas en `src/config/controls.js` para facilitar su modificación futura.

## Funcionalidades implementadas

- Pantalla de inicio, pantalla de victoria y pantalla de derrota con reinicio.
- Pollo protagonista con movimiento lateral, salto, disparo y apuntado frontal, vertical y diagonal.
- Cámara lateral con seguimiento y escalado nítido para pixel art.
- Nivel único ambientado en una granja industrial militarizada con introducción, plataformas, oleadas, checkpoint y arena final.
- Enemigos terrestres patrulleros, artilleros estáticos y enemigos voladores.
- Jefe final mecánico con barra de vida, aviso visual y dos fases de ataque.
- Sistema de salud, vidas, daño, invulnerabilidad temporal, puntuación y pickups.
- Power-up temporal que mejora el bláster de maíz.
- Proyectiles del jugador y enemigos con limpieza automática fuera del área útil.
- Audio procedural provisional para disparo, salto, daño, recogida, jefe, victoria, derrota y música simple de nivel/jefe.

## Arquitectura

- `src/main.js`: ciclo principal, entidades del prototipo, cámara, render pixel-art y reglas del nivel.
- `src/config/`: constantes globales y controles modificables.
- `src/systems/`: utilidades de colisión.
- `src/audio/`: gestor de audio procedural.
- `server.js`: servidor local estático sin dependencias.
- `scripts/check.js`: comprobación sintáctica rápida de los módulos JavaScript.

El jugador usa una máquina de estados sencilla (`idle`, `run`, `jump`, `defeat`) para seleccionar comportamiento visual. Los enemigos y el jefe separan sus patrones por tipo/fase, lo que permite añadir comportamientos nuevos sin concentrar toda la lógica en una sola clase.

## Cómo ampliar

### Agregar enemigos

1. Añade la forma pixelada en las funciones de dibujo de `src/main.js` o extrae un nuevo módulo de sprites.
2. Crea un nuevo `type` en la lógica de enemigos de `src/main.js` o extrae una clase independiente.
3. Registra posiciones en los arreglos de creación de `reset()` en `src/main.js`.

### Agregar armas

1. Añade una forma de proyectil en `render()` o extrae un módulo de sprites.
2. Extiende la función `shoot()` en `src/main.js` con un nuevo nivel o modo.
3. Ajusta cooldown, velocidad, daño y patrón de disparo.

### Agregar niveles

1. Extrae la definición de plataformas/enemigos a archivos de datos o crea un nuevo método de carga.
2. Define límites de mundo, plataformas, pickups, enemigos y condiciones de victoria.
3. Cambia la llamada de `reset()` para cargar el nuevo nivel.

## Recursos externos y licencias

No se descargaron recursos gráficos, música ni efectos de terceros. Los sprites son figuras pixeladas originales generadas por código en `src/main.js`. Los sonidos y música son tonos procedurales generados con Web Audio en tiempo de ejecución.

## Limitaciones conocidas

- Las animaciones son básicas y reutilizan pocas texturas para mantener el prototipo ligero.
- La pausa es simple y puede pulirse con una escena dedicada de pausa en vez de volver al menú.
- El audio procedural es provisional y no sustituye una banda sonora final.
- El nivel está definido por código; para producción convendría moverlo a datos o a un editor de mapas.
