# PRD — OpenStudy: Arquitectura de Producto

**Proyecto:** OpenStudy (fork de opencode)  
**Versión:** 2.0  
**Estado:** Implementado  
**Última revisión:** 2026-04-04

---

## Qué es OpenStudy

OpenStudy es un fork de [opencode](https://github.com/opencode-ai/opencode) orientado a estudiantes universitarios de carreras **no relacionadas con programación** (medicina, derecho, psicología, arquitectura, etc.). El objetivo es aprovechar la arquitectura multi-agente de opencode y redirigirla completamente al aprendizaje académico.

OpenStudy es un **producto independiente** — no comparte configuración, rutas XDG ni agentes con opencode.

---

## Arquitectura real (estado actual)

### Separación de opencode

OpenStudy usa sus propios directorios XDG:

```
~/.config/openstudy/       ← configuración global
~/.local/share/openstudy/  ← datos (sesiones, base de datos)
~/.cache/openstudy/        ← caché
```

La configuración del proyecto se busca en el directorio `study/` (no `.opencode/`).  
El archivo de config del proyecto es `study.json` (no `opencode.json`).

### Agentes nativos en el core

Los cuatro agentes neux están definidos como `native: true` directamente en:

```
packages/opencode/src/agent/agent.ts
```

Sus prompts viven como archivos `.txt` embebidos en el binario:

```
packages/opencode/src/agent/prompt/
├── neux-profesor.txt
├── neux-tutor.txt
├── neux-investigador.txt
└── neux-explorador.txt
```

Los agentes legacy de opencode (`build`, `plan`, `general`, `explore`) siguen existiendo como `hidden: true` para no romper internamente el motor, pero no son visibles al usuario.

### Tabla de agentes

| Agente              | Clave               | Modo      | Puede editar | Propósito                                              |
| ------------------- | ------------------- | --------- | ------------ | ------------------------------------------------------ |
| **Neux Profesor**   | `@neux-profesor`    | primary   | Sí (con ask) | Tutorías, resúmenes, flashcards, exámenes de práctica  |
| **Neux Tutor**      | `@neux-tutor`       | primary   | No           | Retroalimentación y diagnóstico de material del alumno |
| **Neux Investigador** | `@neux-investigador` | subagent | No           | Investigación académica profunda con bibliografía      |
| **Neux Explorador** | `@neux-explorador`  | subagent  | No           | Navegación de archivos de estudio en modo lectura      |

### Skills académicas

Las skills se distribuyen junto al binario en:

```
dist/<platform>/bin/skills/
├── estudio-explorar/SKILL.md
├── redaccion/SKILL.md
├── matematicas/SKILL.md
├── resumen/SKILL.md
├── flashcards/SKILL.md
└── plan-estudio/SKILL.md
```

El loader de skills en `packages/opencode/src/skill/index.ts` escanea `path.dirname(process.execPath)/skills` antes de las skills del proyecto. Esto garantiza que todos los usuarios tienen las skills académicas sin configuración adicional.

### Configuración del proyecto (`study.json`)

`study.json` en la raíz del repositorio es el archivo de configuración **del desarrollador de openstudy**, no del usuario final. Contiene exclusivamente plugins y MCPs:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-anthropic-login-via-cli@latest"],
  "mcp": {
    "filesystem": { "type": "local", "command": [...] },
    "engram": { "type": "local", "command": ["engram", "mcp"] },
    "notion": { ... },
    "notebooklm": { ... }
  }
}
```

No contiene sección `agent` — los agentes son fuente única de verdad en `agent.ts`.

---

## Principios de arquitectura

### Single source of truth para agentes

Los agentes se definen **una sola vez**: en `agent.ts` como `native: true`.  
No existe configuración de agentes en `study.json`, ni en `study/agents/*.md`.

Para modificar un agente:
1. Editar el `.txt` correspondiente en `src/agent/prompt/`
2. O modificar el objeto del agente en `agent.ts`

### Extensión via `study/` (overlay layer)

El directorio `study/` actúa como overlay de runtime para el desarrollo del producto:

```
study/
├── skills/          ← skills en desarrollo (no bundled aún)
├── tools/           ← herramientas custom
├── plugins/         ← plugins locales
├── themes/          ← temas visuales
├── glossary/        ← glosario académico
└── package.json     ← dependencias del overlay
```

Los usuarios finales de openstudy NO tienen este directorio — es específico del repositorio de desarrollo.

### Convención de archivos de config

| Scope               | Archivo canónico   | Dónde                               | Fallback legacy        |
| ------------------- | ------------------ | ----------------------------------- | ---------------------- |
| Proyecto (root)     | `study.json`       | raíz del repositorio                | —                      |
| Overlay local       | `openstudy.json`   | `study/openstudy.json`              | `study/opencode.json`  |
| Global              | `openstudy.json`   | `~/.config/openstudy/openstudy.json`| `opencode.json`        |
| Managed (IT/MDM)    | `openstudy.json`   | managed config dir                  | `opencode.json`        |

**Capa de overlay** (`study/openstudy.json`): soporte adicional a `study.json` para configuración más granular (agents, commands, plugins). Es opcional — `study.json` en la raíz es suficiente para la mayoría de los casos.

El comando `openstudy mcp add` usa `study.json` (proyecto) u `openstudy.json` (global) como destino por defecto. Los archivos `opencode.json` existentes se cargan como fallback para no romper configuraciones previas.

---

## Stack técnico

- **Runtime**: Bun + TypeScript + Effect
- **TUI**: OpenTUI (React para terminal)
- **Desktop**: Tauri (Rust) + Electron
- **Web app**: Vite + SolidJS (`packages/app`)
- **Landing/docs**: Astro + SolidJS (`packages/web`)
- **Base de datos**: SQLite con Drizzle ORM
- **Distribución npm**: `neuxora-openstudy` (`packages/npm`)

---

## Cómo extender el producto

### Agregar un nuevo agente

1. Crear el prompt en `packages/opencode/src/agent/prompt/neux-<nombre>.txt`
2. Importarlo y definirlo en `packages/opencode/src/agent/agent.ts`
3. El agente queda disponible para todos los usuarios automáticamente

### Agregar una nueva skill académica

1. Crear `packages/opencode/skills/<nombre>/SKILL.md` con frontmatter válido
2. El build script copia `packages/opencode/skills/` al lado del binario
3. La skill queda disponible para todos los usuarios automáticamente

### Agregar un nuevo MCP al proyecto de desarrollo

```bash
openstudy mcp add
# Seleccionar "Current project" → escribe en study.json
```

---

## Siguiente fase

La Fase 2 consiste en agregar agentes especializados por carrera como **subagentes nativos**:

- `neux-medicina` — terminología clínica, protocolos, farmacología
- `neux-derecho` — análisis de normas, jurisprudencia, argumentación
- `neux-arquitectura` — análisis espacial, conceptual, de proyecto

Estos se agregarían siguiendo el mismo patrón: `.txt` en `src/agent/prompt/` + definición en `agent.ts` con `mode: "subagent"`.
