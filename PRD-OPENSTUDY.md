# PRD — OpenStudy: Producto Académico Independiente

> Versión: 1.0 · Fecha: 2026-04-09 · Estado: Pendiente de implementación

---

## 1. Visión

OpenStudy es una plataforma de asistencia académica para estudiantes universitarios no técnicos, construida sobre el motor de opencode. El estudiante abre OpenStudy, elige una carpeta de estudio y comienza a trabajar inmediatamente — sin configuración, sin jerga técnica, sin saber qué es un agente ni una skill.

El producto final se ve como una herramienta de estudio, no como una herramienta de desarrollo. Todo lo que opencode hace internamente (multi-agente, skills, MCPs, plugins) es infraestructura que el estudiante nunca ve directamente.

---

## 2. Arquitectura de Producto

### 2.1 Identidad y Naming

| Elemento        | Nombre visible                  | Nombre interno (código) |
| --------------- | ------------------------------- | ----------------------- |
| Binario         | `openstudy`                     | `openstudy`             |
| UI/TUI          | "OpenStudy"                     | N/A                     |
| Config global   | `~/.config/openstudy/`          | N/A                     |
| Config local    | `openstudy.json`                | N/A                     |
| Agents global   | `~/.config/openstudy/AGENTS.md` | N/A                     |
| Skills global   | `~/.config/openstudy/skills/`   | N/A                     |
| Directorio repo | `openstudy/` (raíz)             | N/A                     |

**Regla**: Nada se llama `opencode` en lo visible al usuario. Internamente el código de opencode sigue existiendo como motor, pero la superficie del producto es 100% OpenStudy.

### 2.2 Directory Structure (Reestructuración)

El directorio `study/` se reestructura a `openstudy/` como directorio canónico del producto, con estructura limpia:

```
openstudy/
├── AGENTS.md              # Instrucciones globales académicas
├── commands/               # Comandos custom académicos
│   ├── resumen.md
│   ├── exam.md
│   ├── focus.md
│   └── ...
├── glossary/               # Glosarios por idioma
│   ├── es.md
│   └── ...
├── plugins/                # Plugins de UI (smoke, themes)
│   ├── tui-smoke.tsx
│   └── smoke-theme.json
├── skills/                 # Skills académicas (= fuente única)
│   ├── estudio-explorar/   # Activas
│   │   └── SKILL.md
│   ├── plan-estudio/
│   │   └── SKILL.md
│   ├── redaccion/
│   │   └── SKILL.md
│   ├── flashcards/
│   │   └── SKILL.md
│   ├── resumen/
│   │   └── SKILL.md
│   ├── matematicas/
│   │   └── SKILL.md
│   ├── estudio-definir/    # Placeholder (vacía, futuro)
│   ├── estudio-diseñar/
│   ├── estudio-ejecutar/
│   ├── estudio-entregar/
│   ├── estudio-planificar/
│   ├── estudio-revisar/
│   └── estudio-tareas/
├── themes/
├── tool/                   # Herramientas custom
│   ├── github-pr-search.ts
│   └── github-triage.ts
├── tui.json                # Config visual de TUI
└── package.json
```

**Fuente única de skills**: `openstudy/skills/` es el lugar donde se agregan, editan y mantienen todas las skills. Los directorios `packages/opencode/skills/` se ELIMINAN como fuente. El build empaqueta desde `openstudy/skills/`.

### 2.3 Skill Discovery — Cambios en el Código

El sistema de discovery actual (`packages/opencode/src/skill/index.ts`) escanea:

1. `~/.claude/skills/` y `~/.agents/skills/` → **DEBE ELIMINARSE para OpenStudy**
2. `~/.config/opencode/skills/` (via config dirs) → **DEBE CAMBIARSE a `~/.config/openstudy/`**
3. `<execPath>/skills/` (bundled) → **SE MANTIENE** (empaqueta desde `openstudy/skills/`)
4. Config dirs (project config) → **SE MANTIENE** (escanea `study/` y nuevos dirs)
5. `study.json → skills.paths` → **CAMBIA a `openstudy.json → skills.paths`**
6. `study.json → skills.urls` → **CAMBIA a `openstudy.json → skills.urls`**

Nuevos EXTERNAL_DIRS para OpenStudy:

```typescript
const EXTERNAL_DIRS = [".openstudy"] // No más .claude ni .agents
```

Nuevos config paths para OpenStudy:

```typescript
// ConfigPaths.directories debe buscar:
// 1. ~/.config/openstudy/              (global)
// 2. <project>/.openstudy/             (project-level)
// 3. Flag.OPENSTUDY_CONFIG_DIR        (override)
```

El bundled skill pattern se mantiene pero apunta al build correcto.

### 2.4 Config File

**Local (proyecto)**: `openstudy.json` en la raíz del proyecto
**Global (usuario)**: `~/.config/openstudy/openstudy.json`

El schema de config es idéntico al de opencode internamente, pero el archivo se llama `openstudy.json`. Los directorios de búsqueda (`ConfigPaths`) deben buscar `openstudy.json` y `openstudy.jsonc` primero, con fallback a `study.json` para compatibilidad.

Eliminación progresiva: `study.json` funciona pero muestra un aviso de deprecación apuntando a `openstudy.json`.

---

## 3. Agentes y Skills

### 3.1 Arquitectura: Agente Global → Subagentes con Skills Fijas

```
┌─────────────────────────────────────────┐
│           ESTUDIANTE                     │
│  "Quiero resumir este capítulo"         │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│         NEUX PROFESOR (agente global)   │
│  - Recibe la solicitud                  │
│  - Delega al subagente apropiado        │
│  - Tiene skills precargadas en prompt   │
│                                         │
│  Skills fijas: resumen, flashcards,     │
│                plan-estudio, redaccion,  │
│                matematicas               │
└────────┬──────────┬──────────┬──────────┘
         │          │          │
         ▼          ▼          ▼
   Neux Tutor   Neux Inv.   Neux Expl.
   (lectura)    (research)  (archivos)
```

**Principio**: El agente global (Neux Profesor) tiene las skills académicas principales precargadas en su system prompt. No necesita invocar la tool `skill` — ya tiene las instrucciones. Esto ahorra tokens y elimina latencia.

**Pero**: El estudiante PUEDE invocar skills manualmente con `/resumen`, `/flashcards`, etc. Y puede agregar/eliminar/modificar skills libremente. Las skills manuales se cargan como tool y funcionan independientemente.

### 3.2 Mapeo de Skills por Agente

| Agente                         | Rol                             | Skills Precargadas                                        | Skills Accesibles via Tool   |
| ------------------------------ | ------------------------------- | --------------------------------------------------------- | ---------------------------- |
| Neux Profesor (`@build`)       | Tutoría, resúmenes, mapas       | resumen, flashcards, plan-estudio, redaccion, matematicas | Todas (incluidas estudio-\*) |
| Neux Tutor (`@plan`)           | Retroalimentación, solo lectura | resumen                                                   | resumen, estudio-explorar    |
| Neux Investigador (`@general`) | Investigación profunda          | estudio-explorar, resumen                                 | estudio-explorar, resumen    |
| Neux Explorador (`@explore`)   | Navegación archivos             | (ninguna fija)                                            | Todas disponibles via tool   |

### 3.3 Skills Activas (con contenido)

| Skill              | Propósito                      | Trigger automático                          |
| ------------------ | ------------------------------ | ------------------------------------------- |
| `estudio-explorar` | Exploración académica de temas | Cuando el estudiante explora un tema nuevo  |
| `plan-estudio`     | Plan de estudio personalizado  | Cuando organiza estudio para examen/materia |
| `redaccion`        | Redacción de textos académicos | Cuando necesita escribir/estructurar textos |
| `flashcards`       | Tarjetas de repaso espaciado   | Cuando quiere repaso activo                 |
| `resumen`          | Síntesis de textos académicos  | Cuando quiere resumir material              |
| `matematicas`      | Resolución paso a paso         | Cuando tiene un problema matemático         |

### 3.4 Skills Placeholder (sin contenido aún)

Las 7 del flujo estudio-\* son el equivalente académico de SDD: un pipeline de investigación para estudiantes. Se completarán cuando la arquitectura esté estable.

`estudio-definir`, `estudio-diseñar`, `estudio-ejecutar`, `estudio-entregar`, `estudio-planificar`, `estudio-revisar`, `estudio-tareas`

---

## 4. MCPs

### 4.1 MCPs Nativos

| MCP          | Propósito                             | Config                                                      |
| ------------ | ------------------------------------- | ----------------------------------------------------------- |
| `filesystem` | Acceso a archivos del estudiante      | **Pregunta al usuario** el directorio de alcance en runtime |
| `engram`     | Memoria persistente entre sesiones    | Auto-detectado del PATH                                     |
| `notion`     | Integración con Notion (opcional)     | Requiere `NOTION_TOKEN`                                     |
| `notebooklm` | Integración con NotebookLM (opcional) | Requiere `NOTEBOOKLM_PROFILE`                               |

### 4.2 Filesystem MCP — Seguridad

El MCP filesystem **NO** tiene acceso amplio por defecto. Al iniciar, pregunta al estudiante:

> "¿En qué carpeta querés trabajar? OpenStudy solo accederá a los archivos dentro de esa carpeta."

Opciones:

- Directorio actual (default)
- Seleccionar otro directorio
- Agregar directorios adicionales durante la sesión

Esto se implementa modificando el command del MCP filesystem para incluir solo los paths aprobados.

### 4.3 MCPs Futuros

La arquitectura permite agregar MCPs con cada actualización del binario (se instalan automáticamente vía `setup-openstudy.sh`). Futuros candidatos: Zotero, Google Scholar, bibliotecas universitarias.

---

## 5. Experiencia del Estudiante

### 5.1 Primera Experiencia (Zero-Config)

```
$ openstudy
🎓 OpenStudy — Asistencia académica para estudiantes

Primera vez aquí. Para comenzar, elegí una carpeta de estudio:
> ~/Documentos/MiTesis

Conectando con el proveedor gratuito...
✓ Listo. ¿Qué querés estudiar hoy?
```

Pasos que ocurren automáticamente:

1. Setup se ejecuta si no existe `~/.config/openstudy/`
2. Skills se copian del binario a `~/.config/openstudy/skills/`
3. Config se escribe con provider gratuito + agents + MCPs
4. FileSystem pide scope
5. El estudiante comienza a trabajar

### 5.2 Flujo de Uso Típico

**El estudiante nunca ve:**

- Términos como "agent", "skill", "MCP", "provider", "model"
- Comandos con `/` por defecto (están disponibles pero ocultos)
- Configs técnicas
- Directorios de sistema

**El estudiante siempre ve:**

- Interfaz en español por defecto
- Agentes con nombres humanos (Profesor, Tutor, Investigador, Explorador)
- Resultados académicos estructurados
- Puntos clave al final de cada respuesta extensa

### 5.3 Upgrades Automáticos

Cuando sale una nueva versión:

- El binario se actualiza
- `setup-openstudy.sh` se ejecuta (embebido en el binario)
- Nuevas skills se copian SOLO si no existen ya (no sobrescribe customizaciones del estudiante)
- Config se mergea preservando preferencias existentes
- MCPs nuevos se agregan sin intervención

---

## 6. Distribución e Instalación

### 6.1 Estrategia: Single Binary Auto-Config

Flujo:

1. `install.sh` (o `install.ps1`) descarga el binario de GitHub Releases
2. También instala engram si no está presente
3. El binario se instala en `~/.local/bin/openstudy`
4. Al PRIMER inicio, el binario ejecuta el setup embebido:
   - Crea `~/.config/openstudy/`
   - Copia skills embebidas a `~/.config/openstudy/skills/`
   - Escribe `~/.config/openstudy/openstudy.json` con config default
   - Escribe `~/.config/openstudy/AGENTS.md`
   - Detecta engram y configura el MCP
   - Configura provider gratuito
5. Además, al iniciarse en un proyecto, busca `openstudy.json` local

### 6.2 Build Changes

El build script (`script/build.ts`) actualmente copia `packages/opencode/skills/` al binario. Debe cambiar a copiar `openstudy/skills/`:

```typescript
// ANTES:
const skillsSrc = path.join(dir, "skills")

// DESPUÉS:
const skillsSrc = path.resolve(dir, "../../openstudy/skills")
```

---

## 7. Cambios de Código Requeridos

### 7.1 Skill Discovery (`packages/opencode/src/skill/index.ts`)

| Cambio           | Detalle                                                       |
| ---------------- | ------------------------------------------------------------- |
| EXTERNAL_DIRS    | `[.openstudy]` en vez de `[.claude, .agents]`                 |
| Flag de disable  | `OPENSTUDY_DISABLE_EXTERNAL_SKILLS` (alias del opencode flag) |
| Bundled skills   | Se empaquetan desde `openstudy/skills/`                       |
| Nuevo global dir | `~/.config/openstudy/skills/`                                 |

### 7.2 Config Paths (`packages/opencode/src/config/paths.ts`)

| Cambio              | Detalle                                                                      |
| ------------------- | ---------------------------------------------------------------------------- |
| Config file name    | Buscar `openstudy.json` / `openstudy.jsonc` primero, fallback a `study.json` |
| Config directories  | Agregar `~/.config/openstudy/` como config dir global                        |
| Deprecation warning | Si encuentra `study.json`, mostrar aviso                                     |

### 7.3 Config Schema (`packages/opencode/src/config/config.ts`)

Sin cambios de schema — es compatible. El cambio es solo de nombres de archivo y directorios de búsqueda.

### 7.4 Setup Script (`setup-openstudy.sh`)

| Cambio            | Detalle                                     |
| ----------------- | ------------------------------------------- |
| Directorio        | `~/.config/openstudy/` consistente          |
| Skills source     | Debe empaquetarse desde `openstudy/skills/` |
| Config file       | `openstudy.json` no `opencode.json`         |
| Filesystem MCP    | Preguntar por directorio de alcance         |
| Provider gratuito | Configurar provider free default            |

### 7.5 Build Script (`packages/opencode/script/build.ts`)

| Cambio        | Detalle                                                   |
| ------------- | --------------------------------------------------------- |
| Skills source | `openstudy/skills/` en vez de `packages/opencode/skills/` |
| Setup scripts | Empaquetar `setup-openstudy.{sh,ps1,cmd}`                 |

### 7.6 Directory Restructure

| Acción                                                            | Detalle                              |
| ----------------------------------------------------------------- | ------------------------------------ |
| Renombrar `study/` → `openstudy/`                                 | Directorio canónico del producto     |
| Mover skills de `packages/opencode/skills/` → `openstudy/skills/` | Fusión de las 6 skills con contenido |
| Eliminar `packages/opencode/skills/`                              | Después de mover                     |
| Limpiar placeholders vacíos                                       | Mantener carpetas pero sin SKILL.md  |

### 7.7 Agent Prompt — Pre-loaded Skills

Cada agente debe tener instrucciones de skills precargadas en su system prompt (no como tool invocable, sino como instrucciones inline). Esto requiere modificar cómo se generan los prompts de agentes en la configuración.

**Implementación**: En `openstudy.json` global, cada agente tiene un campo `prompt` que ya incluye las instrucciones de sus skills fijas. El setup script genera estos prompts.

---

## 8. Priorización de Implementación

### Fase 1 — Estructura y Discovery (CRÍTICO, bloquea todo lo demás)

1. Renombrar `study/` → `openstudy/`
2. Mover y fusionar skills a `openstudy/skills/`
3. Actualizar `skill/index.ts` — EXTERNAL_DIRS, discovery paths
4. Actualizar `config/paths.ts` — buscar `openstudy.json` + `~/.config/openstudy/`
5. Actualizar `script/build.ts` — empaquetar desde `openstudy/skills/`
6. Eliminar `packages/opencode/skills/`

### Fase 2 — Config y Setup

7. Actualizar `setup-openstudy.sh/ps1/cmd` — config global a `openstudy.json`
8. Actualizar `study.json` → `openstudy.json` (con compatibilidad)
9. Implementar filesystem MCP con pregunta de scope
10. Configurar provider gratuito default

### Fase 3 — Agentes

11. Modificar prompts de agentes para incluir skills precargadas
12. Ajustar permisos por agente
13. Implementar delegación automática (agente global → subagentes)

### Fase 4 — Experiencia Zero-Config

14. Auto-setup en primer inicio
15. Mensajes en español para el TUI inicial
16. Flujo de bienvenida sin technische terms

---

## 9. No-Go y Exclusiones

- **No** se bifurca opencode — se usa como motor interno
- **No** se eliminan las 7 skills placeholder estudio-\* — se mantienen vacías para futuro
- **No** se cambia la TUI por ahora — misma interfaz, diferente branding
- **No** el estudiante ve "skills" en la interfaz principal — son implementación interna
- **No** se rompe compatibilidad con plugins de opencode — se mantienen

---

## 10. Métricas de Éxito

- [ ] `openstudy` se ejecuta sin config previa y funciona
- [ ] Las 6 skills activas se descubren correctamente desde `openstudy/skills/`
- [ ] El config global está en `~/.config/openstudy/openstudy.json`
- [ ] No se escanea `~/.claude/` ni `~/.config/opencode/`
- [ ] El build empaqueta skills desde `openstudy/skills/`
- [ ] El filesystem MCP pregunta el directorio de alcance
- [ ] Los agentes tienen skills precargadas en sus prompts
