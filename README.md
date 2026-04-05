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

| Agente | Cómo invocarlo | Qué hace |
|--------|----------------|----------|
| **Neux Profesor** | agente por defecto | Tutorías, resúmenes, flashcards, exámenes de práctica, mapas conceptuales |
| **Neux Tutor** | `@neux-tutor` | Retroalimentación sobre tu material — análisis y diagnóstico (solo lectura) |
| **Neux Investigador** | `@neux-investigador` | Investigación académica profunda con bibliografía estructurada |
| **Neux Explorador** | `@neux-explorador` | Navegación de tus archivos de estudio en tu computadora |

Todos los agentes responden en **español** por defecto y siguen principios de integridad académica.

---

## Skills Académicas

Las skills son capacidades especializadas que se activan con `/` dentro de cualquier sesión. Se instalan automáticamente en tu configuración global.

| Skill | Comando | Para qué sirve |
|-------|---------|----------------|
| **Exploración** | `/estudio-explorar` | Mapea conceptos, fuentes y debates antes de estudiar un tema nuevo |
| **Redacción** | `/redaccion` | Guía para escribir ensayos, informes y trabajos universitarios |
| **Matemáticas** | `/matematicas` | Resuelve problemas paso a paso con explicación de cada concepto |
| **Resumen** | `/resumen` | Sintetiza textos, apuntes o capítulos con jerarquía de ideas |
| **Flashcards** | `/flashcards` | Genera tarjetas de repaso espaciado desde cualquier material |
| **Plan de estudio** | `/plan-estudio` | Crea un cronograma realista para exámenes o materias completas |

---

## Instalación

### Requisitos previos

- Una API key de un proveedor de IA (Anthropic recomendado)
- **Windows:** PowerShell 5+ o PowerShell 7+
- **Recomendado:** Node.js (incluye `npm` y `npx`) para que funcionen los MCPs de `filesystem`, `notion` y `notebooklm`

### Homebrew (macOS y Linux)

```bash
brew install AndreRaz/tap/openstudy
openstudy
```

### Instalación rápida — un comando

Esta es la forma recomendada para la mayoría de usuarios. Un solo comando deja todo configurado.

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/AndreRaz/openstudy/dev/script/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/AndreRaz/openstudy/dev/script/install.ps1 | iex
```

El instalador hace todo esto automáticamente:

- Descarga e instala el binario de **OpenStudy**
- Instala **Engram** (memoria persistente) si no está presente
- Configura los **agentes académicos** (Neux Profesor, Tutor, Investigador, Explorador)
- Instala las **6 skills académicas** globalmente (redacción, matemáticas, resumen, flashcards, plan de estudio, exploración)
- Configura los **MCPs** en `~/.config/openstudy/openstudy.json` usando `npx` — no requiere instalación previa de paquetes npm

> **Windows**: Si PowerShell bloquea el script por políticas de seguridad, abre una nueva terminal como usuario normal y vuelve a intentarlo.

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
| **Filesystem** | Permite a los agentes leer tus archivos de estudio | Node.js (se ejecuta vía `npx`, sin instalación manual) |
| **Engram** | Memoria persistente — el agente recuerda entre sesiones | El instalador lo instala automáticamente |
| **Notion** | Consulta y automatización sobre tu workspace de Notion | Node.js + variable `NOTION_TOKEN` |
| **NotebookLM** | Consulta tus notebooks de Google NotebookLM directamente | Node.js + login con Google (una sola vez) |

Los MCPs de Node.js usan `npx` internamente: no requieren instalación global previa. Si Node.js está instalado, funcionan desde el primer uso. Si no está instalado, solo Engram estará activo — el resto se activa en cuanto instales Node.js.

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
- **TUI**: OpenTUI (SolidJS para terminal)
- **Desktop**: Tauri (Rust) + Electron
- **Web**: Vite + SolidJS (app) / Astro + SolidJS (landing)
- **Base de datos**: SQLite con Drizzle ORM

---

## Estructura del proyecto

```
openstudy/
├── study/                       # Overlay de desarrollo (no se distribuye al usuario final)
│   ├── skills/                  # Skills en desarrollo (no bundled aún)
│   ├── plugins/                 # Event hooks personalizados (.ts)
│   ├── tools/                   # Herramientas LLM custom (.ts)
│   ├── themes/                  # Temas visuales custom (.json)
│   └── openstudy.json           # Config overlay local avanzado (opcional)
├── packages/
│   ├── opencode/                # Core: CLI + TUI + motor de agentes
│   │   └── skills/              # Skills académicas distribuidas con el instalador
│   │       ├── estudio-explorar/
│   │       ├── redaccion/
│   │       ├── matematicas/
│   │       ├── resumen/
│   │       ├── flashcards/
│   │       └── plan-estudio/
│   ├── app/                     # App web (Vite + SolidJS)
│   ├── desktop/                 # App escritorio (Tauri)
│   ├── desktop-electron/        # App escritorio (Electron)
│   ├── ui/                      # Componentes UI compartidos
│   └── web/                     # Landing page
├── script/
│   ├── install.sh               # Instalador macOS/Linux
│   └── install.ps1              # Instalador Windows
├── AGENTS.md                    # Contrato global de agentes académicos
├── study.json                   # Configuración raíz: plugins y MCPs
└── PRD.md                       # Documento de requerimientos del producto
```

**Capas de configuración:**
- `study.json` — config raíz del proyecto (plugins, MCPs). Es el archivo principal.
- `study/openstudy.json` — overlay local avanzado (opcional, para configuración más granular).
- `~/.config/openstudy/openstudy.json` — config global del usuario.

Al instalar, las skills se distribuyen junto al binario y quedan disponibles globalmente.

---

## Créditos

OpenStudy es un fork de [opencode](https://github.com/anomalyco/opencode) por [Anomaly](https://anomaly.co). Toda la arquitectura base, el motor de agentes y el sistema de plugins son obra del equipo de opencode.

Herramientas integradas:
- [Engram](https://github.com/Gentleman-Programming/engram) por Gentleman Programming — memoria persistente para agentes IA
- [NotebookLM MCP](https://github.com/PleasePrompto/notebooklm-mcp) — integración directa con Google NotebookLM

---

## Licencia

MIT — Ver [LICENSE](./LICENSE) para más detalles.
