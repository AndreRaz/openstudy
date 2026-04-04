<p align="center">
  <img src="packages/web/src/assets/lander/screenshot.png" alt="OpenStudy" width="700">
</p>

<h1 align="center">OpenStudy</h1>
<p align="center"><strong>Tu asistente académico con inteligencia artificial.</strong></p>
<p align="center">Tutorías, investigación y retroalimentación para estudiantes universitarios — de cualquier carrera.</p>

<p align="center">
  <a href="https://github.com/AndreRaz/openstudy"><img alt="GitHub" src="https://img.shields.io/github/stars/AndreRaz/openstudy?style=flat-square" /></a>
  <a href="https://github.com/AndreRaz/openstudy/blob/dev/LICENSE"><img alt="License" src="https://img.shields.io/github/license/AndreRaz/openstudy?style=flat-square" /></a>
</p>

---

## Qué es OpenStudy

OpenStudy es una plataforma de asistencia académica potenciada por IA, construida sobre el motor de [opencode](https://github.com/anomalyco/opencode) y diseñada exclusivamente para **estudiantes universitarios no técnicos**.

No es una herramienta de programación. No es un asistente de código. Es un tutor académico que entiende tu carrera — Derecho, Medicina, Psicología, Arquitectura, Diseño, Historia, o cualquier otra disciplina.

### Para quién es

- Estudiantes universitarios de **cualquier carrera**
- Personas que necesitan ayuda para **entender temas complejos**
- Quienes buscan un tutor disponible **24/7** que no juzga preguntas "básicas"

---

## Agentes Académicos

OpenStudy incluye 4 agentes especializados. Cada uno tiene un propósito claro:

| Agente | Comando | Qué hace |
|--------|---------|----------|
| **Neux Profesor** | `Tab` (default) | Tutorías, resúmenes, flashcards, exámenes de práctica, mapas conceptuales |
| **Neux Tutor** | `Tab` | Retroalimentación sobre tu material — análisis y diagnóstico (solo lectura) |
| **Neux Investigador** | `@neux-investigador` | Investigación académica profunda con bibliografía estructurada |
| **Neux Explorador** | `@neux-explorador` | Navegación de tus archivos de estudio en tu computadora |

Todos los agentes responden en **español** por defecto y siguen principios de integridad académica.

---

## Instalación

### Requisitos previos

- [Bun](https://bun.sh/) v1.3+ (o Node.js 20+)
- Una API key de un proveedor de IA (Anthropic recomendado)

### Desde el código fuente

```bash
# Clonar el repositorio
git clone https://github.com/AndreRaz/openstudy.git
cd openstudy

# Instalar dependencias
bun install

# Ejecutar en modo terminal
bun run dev
```

### App de escritorio (Beta)

OpenStudy también está disponible como aplicación de escritorio con Tauri:

```bash
# Ejecutar la app de escritorio en modo desarrollo
bun run dev:desktop
```

---

## Herramientas integradas (MCPs)

OpenStudy viene preconfigurado con herramientas que potencian a los agentes:

| Herramienta | Qué hace | Requisito |
|-------------|----------|-----------|
| **Filesystem** | Permite a los agentes leer tus archivos de estudio | Ninguno |
| **Engram** | Memoria persistente — el agente recuerda entre sesiones | Instalar [engram](https://github.com/Gentleman-Programming/engram) |
| **NotebookLM** | Consulta tus notebooks de Google NotebookLM directamente | Iniciar sesión con Google (una sola vez) |

### Instalar Engram (recomendado)

```bash
# macOS
brew install gentleman-programming/tap/engram

# Verificar instalación
engram version
```

Engram es un binario Go. Sin Node.js, sin Docker, sin dependencias. [Más info](https://github.com/Gentleman-Programming/engram).

---

## Campos académicos soportados

OpenStudy funciona con **cualquier disciplina universitaria**:

- **Ciencias de la Salud** — Medicina, Enfermería, Odontología, Psicología, Nutrición
- **Derecho y Ciencias Sociales** — Derecho, Ciencias Políticas, Sociología, Economía
- **Humanidades y Artes** — Historia, Filosofía, Literatura, Comunicación, Bellas Artes
- **Ciencias Naturales** — Biología, Química, Física, Matemáticas
- **Diseño e Ingeniería** — Arquitectura, Diseño Gráfico, Diseño Industrial, Urbanismo
- **Ciencias Económicas** — Contabilidad, Finanzas, Mercadotecnia, Gestión Empresarial
- **Ciencias de la Educación** — Pedagogía, Didáctica, Psicología Educativa

---

## Principios

1. **Integridad académica** — No genera trabajos para entregar como propios
2. **Honestidad intelectual** — Si no sabe algo, lo dice. No inventa datos ni citas
3. **Profundidad sobre velocidad** — Prefiere explicar bien a responder rápido
4. **Lenguaje centrado en el estudiante** — Sin jerga técnica de software
5. **Consciencia de contexto** — Recuerda el tema y objetivo durante toda la sesión

---

## Stack técnico

OpenStudy está construido sobre la arquitectura de [opencode](https://github.com/anomalyco/opencode):

- **Runtime**: Bun + TypeScript + Effect
- **TUI**: Ink (React para terminal)
- **Desktop**: Tauri (Rust) + Electron
- **Web**: Astro + SolidJS
- **Base de datos**: SQLite con Drizzle ORM

---

## Estructura del proyecto

```
openstudy/
├── .opencode/
│   ├── agents/          # Agentes académicos (Markdown)
│   └── skills/          # Skills de estudio académico
├── packages/
│   ├── opencode/        # Core: CLI + TUI + motor de agentes
│   ├── app/             # App web (Astro)
│   ├── desktop/         # App escritorio (Tauri)
│   ├── desktop-electron/# App escritorio (Electron)
│   ├── ui/              # Componentes UI compartidos
│   └── web/             # Landing page
├── AGENTS.md            # Contrato global de agentes académicos
├── opencode.json        # Configuración de agentes y MCPs
└── PRD.md               # Documento de requerimientos del producto
```

---

## Créditos

OpenStudy es un fork de [opencode](https://github.com/anomalyco/opencode) por [Anomaly](https://anomaly.co). Toda la arquitectura base, el motor de agentes y el sistema de plugins son obra del equipo de opencode.

Herramientas integradas:
- [Engram](https://github.com/Gentleman-Programming/engram) por Gentleman Programming — memoria persistente para agentes IA
- [NotebookLM MCP](https://github.com/PleasePrompto/notebooklm-mcp) — integración directa con Google NotebookLM

---

## Licencia

MIT — Ver [LICENSE](./LICENSE) para más detalles.
