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

- Una API key de un proveedor de IA (Anthropic recomendado)
- **Windows:** PowerShell 5+ o PowerShell 7+
- **Opcional pero recomendado:** Node.js + `npm` si quieres que también se instalen automáticamente los MCPs de `filesystem`, `notion` y `notebooklm`

### Homebrew (macOS y Linux)

```bash
brew install AndreRaz/tap/openstudy
openstudy
```

### Instalación rápida — un comando

Esta es la forma recomendada para la mayoría de usuarios. Descarga OpenStudy, instala Engram si hace falta e intenta dejar configurados los MCPs principales.

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/AndreRaz/openstudy/dev/script/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/AndreRaz/openstudy/dev/script/install.ps1 | iex
```

Después de correrlo, el instalador:

- descarga `openstudy.exe`
- intenta instalar **Engram** automáticamente
- intenta instalar **filesystem MCP**, **Notion MCP** y **NotebookLM MCP** si detecta `npm`
- ejecuta la configuración inicial de OpenStudy

> Si PowerShell bloquea el comando por políticas de seguridad, abre una terminal como usuario normal y vuelve a intentarlo. Si usas una política corporativa muy restrictiva, descarga el script manualmente y revísalo antes de ejecutarlo.

El instalador intenta dejarte listo también el ecosistema MCP:

- instala **Engram** automáticamente si no existe
- instala **filesystem MCP**, **Notion MCP** y **NotebookLM MCP** automáticamente si detecta `npm`
- configura los MCPs en `~/.config/opencode/opencode.json`

### Primer uso después de instalar

Cuando termine la instalación, ejecuta:

```bash
openstudy providers login
openstudy
```

En Windows también puedes usar:

```powershell
openstudy providers login
openstudy
```

### Nota importante para Windows: PATH

El instalador de Windows copia `openstudy.exe` en:

```powershell
$HOME\.local\bin
```

Si al abrir una nueva terminal `openstudy` no se reconoce, agrega esa carpeta al `PATH` de tu usuario y vuelve a abrir PowerShell.

Ejemplo:

```powershell
$bin = Join-Path $HOME '.local\bin'
[Environment]::SetEnvironmentVariable('Path', $env:Path + ';' + $bin, 'User')
```

Luego cierra y vuelve a abrir PowerShell.

### Descarga directa

Descarga el binario para tu plataforma desde la [página de releases](https://github.com/AndreRaz/openstudy/releases):

| Plataforma | Asset |
|------------|-------|
| macOS (Apple Silicon) | `openstudy-darwin-arm64.zip` |
| macOS (Intel) | `openstudy-darwin-x64.zip` |
| Linux x64 | `openstudy-linux-x64.tar.gz` |
| Linux ARM64 | `openstudy-linux-arm64.tar.gz` |
| Windows x64 | `openstudy-windows-x64.zip` |

```bash
# Ejemplo: Linux x64
curl -fsSL https://github.com/AndreRaz/openstudy/releases/latest/download/openstudy-linux-x64.tar.gz | tar xz
chmod +x openstudy
./openstudy

# Ejemplo: macOS Apple Silicon
curl -fsSL https://github.com/AndreRaz/openstudy/releases/latest/download/openstudy-darwin-arm64.zip -o openstudy.zip
unzip openstudy.zip && chmod +x openstudy
./openstudy
```

### Configuración manual en Windows (si descargaste el ZIP)

Si no usaste el instalador de una línea y descargaste `openstudy-windows-x64.zip` manualmente, ejecuta:

```powershell
./setup-openstudy.cmd
openstudy.exe
```

Eso aplica la configuración inicial de OpenStudy en tu usuario.

### Desde el código fuente

```bash
# Requiere Bun v1.3+
git clone https://github.com/AndreRaz/openstudy.git
cd openstudy
bun install
bun run dev
```

---

## Herramientas integradas (MCPs)

OpenStudy viene preconfigurado con herramientas que potencian a los agentes:

| Herramienta | Qué hace | Requisito |
|-------------|----------|-----------|
| **Filesystem** | Permite a los agentes leer tus archivos de estudio | Se instala automáticamente si hay `npm` |
| **Engram** | Memoria persistente — el agente recuerda entre sesiones | El instalador intenta instalarlo automáticamente |
| **Notion** | Consulta y automatización sobre tu workspace de Notion | Requiere `NOTION_TOKEN` |
| **NotebookLM** | Consulta tus notebooks de Google NotebookLM directamente | Requiere login con Google (una sola vez) |

### Nota sobre instalación automática de MCPs

OpenStudy intenta instalar estos MCPs durante la instalación principal. Si alguno no queda disponible:

- vuelve a correr el instalador
- asegúrate de tener `npm` instalado para los MCPs de Node.js
- exporta `NOTION_TOKEN` para Notion

### Instalar Engram manualmente (si hace falta)

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
