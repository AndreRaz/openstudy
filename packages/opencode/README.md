# @openstudy/core

Core engine for OpenStudy — CLI, TUI, agent system, tool registry, and session management.

This package is the heart of OpenStudy. It is forked from [opencode](https://github.com/opencode-ai/opencode) and extended with neux agents, bundled academic skills, and openstudy-specific XDG paths.

## Development

```bash
bun install
bun run dev
```

## Testing

```bash
bun test --timeout 30000
```

## Key entry points

- `src/index.ts` — CLI entry point
- `src/agent/agent.ts` — native agent definitions (neux-profesor, neux-tutor, neux-investigador, neux-explorador)
- `src/tool/registry.ts` — tool registry
- `src/skill/index.ts` — skill loader (bundled + project + global)
- `src/config/config.ts` — configuration (reads `study/` directories)
- `src/global/index.ts` — XDG paths (`~/.config/openstudy/`, `~/.local/share/openstudy/`)
