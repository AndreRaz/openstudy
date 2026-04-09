# PRD — Comando para Crear Agentes y Subagentes Personalizados

**Proyecto:** OpenStudy  
**Módulo:** CLI / Motor de Agentes  
**Estado:** Propuesta

---

## 1. Objetivo

Crear un comando interactivo en la CLI de OpenStudy (`openstudy agent create`) que guíe a estudiantes no técnicos en la creación de **agentes** y **subagentes** personalizados.

El comando debe abstraer la complejidad técnica de escribir archivos Markdown con bloques de frontmatter YAML y redactar instrucciones complejas. El usuario solo debe responder preguntas naturales sobre qué quiere que haga el agente, y el sistema utilizará el motor de Inteligencia Artificial (LLM) interno para redactar un System Prompt profesional, estructurado, asignando los permisos adecuados y guardando el archivo en la capa overlay (`study/agent/`).

## 2. Casos de Uso

1. **Crear un Agente Primario**: El estudiante quiere un asistente de chat dedicado a una materia o metodología (ej. "Tutor de Bioquímica" o "Entrevistador Socrático").
2. **Crear un Subagente Especializado**: El estudiante quiere una herramienta experta que opere en segundo plano para delegar tareas específicas (ej. "Buscador de Jurisprudencia" o "Traductor Médico").
3. **Orquestación**: Un estudiante que ya configuró varios subagentes crea un agente primario y le dice "puedes apoyarte en los subagentes X e Y para tus respuestas".

## 3. Flujo de Usuario (UX)

El usuario ejecuta en la terminal:

```bash
openstudy agent create
```

La CLI iniciará una serie de preguntas (vía prompts en terminal):

1. **Nombre**: `¿Cómo quieres llamar a este agente? (ej. tutor-historia)`
2. **Propósito (Input Natural)**: `¿Qué quieres que haga este agente? Explícalo con tus propias palabras.`
3. **Modo (Tipo de Agente)**:
   - **Primario**: Para chatear con él directamente en la aplicación.
   - **Subagente**: Para que trabaje en segundo plano y otros agentes puedan delegarle tareas.
4. **Generación con IA**: El sistema se conecta al LLM configurado (Claude/OpenAI) y redacta la **identidad, responsabilidades y restricciones** basándose en la descripción del usuario.
5. **Aprobación de Permisos**: La IA detecta qué permisos requiere el agente y sugiere al usuario:
   - _"Para hacer esto, el agente necesita permisos para buscar y leer archivos en tu computadora. ¿Lo permites? [Y/n]"_
6. **Guardado**: Se genera el archivo `.md` automáticamente.
7. **Instrucciones Finales**: _"¡Agente creado exitosamente! Ábrelo en OpenStudy seleccionando 'tutor-historia' o invócalo escribiendo `@tutor-historia`"_.

## 4. Arquitectura / Implementación Técnica

- **Ubicación del comando**: Modificar o ampliar `packages/opencode/src/cli/cmd/agent.ts` (subcomando `create`).
- **Aprovechamiento del LLM interno**: Importar el `Provider.invoke()` o similar para enviarle un meta-prompt a la IA: _"Eres un diseñador de agentes de IA. Crea un prompt de sistema para un agente académico en base a lo que pide el usuario..."_.
- **Generación de Archivos**:
  - Validar nombre seguro (kebab-case).
  - Generar color hex aleatorio para la UI.
  - Generar estructura con frontmatter de la forma:

    ```yaml
    ---
    description: <Generada por el LLM>
    mode: <primary | subagent>
    model: <modelo_actual>
    temperature: 0.3
    color: "#4ADE80"
    permission:
      edit: deny
      bash:
        "*": deny
      webfetch: <ask|allow|deny>
    ---
    ## Identidad
    ...
    ```
- **Ruta de Escritura**: El comando resuelve el directorio overlay del proyecto (habitualmente `study/agent/` o `study/agents/` si existe la flexibilidad) y guarda allí el archivo `nombre-agente.md`.
- **Hot-reload**: Gracias a que la configuración dinámica escanea `study/agent/*.md`, no se requiere configuración manual extra en `study.json` o recargas complejas.

## 5. Criterios de Aceptación (DoD)

1. El usuario puede ejecutar `openstudy agent create` sin pasar argumentos y ser guiado paso a paso.
2. El sistema redacta prompts enriquecidos utilizando la IA (no simplemente inserta lo que el usuario escribió crudo).
3. El usuario puede elegir entre agente primario y subagente.
4. El archivo generado tiene frontmatter YAML perfectamente válido y un System Prompt formateado bajo los estándares de agentes Neux (Identidad, Responsabilidades, Límites).
5. Los permisos destructivos (como `edit` sin pedir permiso o comandos bash no restrictivos) están deshabilitados por defecto por razones de seguridad de OpenStudy.
6. El nuevo agente aparece inmediatamente como invocable o seleccionable en la interfaz OpenTUI/App tras su creación.
