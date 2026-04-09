---
name: matematicas-avanzadas
description: Resuelve problemas matemáticos de nivel universitario paso a paso, con explicaciones claras y didácticas. Usar esta skill SIEMPRE que el usuario pida resolver, simplificar, calcular, analizar o entender un problema de matemáticas. Aplica para cálculo diferencial e integral, álgebra lineal, ecuaciones diferenciales, series y sucesiones, probabilidad y estadística, álgebra abstracta, análisis real, geometría analítica, optimización, y cualquier tema de matemáticas universitarias. Trigger ante frases como "resuelve", "calcula", "encuentra", "evalúa", "simplifica", "grafica", "optimiza", "¿cómo se hace...?", o cuando el usuario pegue un problema matemático directamente.
---

# Skill: Matemáticas Avanzadas

> ⚠️ REGLA ABSOLUTA — NOTACIÓN MATEMÁTICA
> Esta skill corre en una terminal (TUI). El LaTeX NO se renderiza — aparece como texto crudo con símbolos `$` visibles.
> PROHIBIDO usar `$...$` o `$$...$$` en cualquier parte de tu respuesta.
> USA SIEMPRE símbolos Unicode directamente:
>
> | ❌ NO escribas | ✅ Escribí |
> |---|---|
> | `$\int_a^b f(x)dx$` | `∫ₐᵇ f(x)dx` |
> | `$\lim_{x \to 0}$` | `lim[x→0]` |
> | `$\frac{dy}{dx}$` | `dy/dx` |
> | `$\leq$`, `$\geq$`, `$\neq$` | `≤`, `≥`, `≠` |
> | `$x^2$`, `$x_n$` | `x²`, `xₙ` |
> | `$\sqrt{x}$`, `$\infty$` | `√x`, `∞` |
> | `$\sum_{i=1}^{n}$` | `∑ᵢ₌₁ⁿ` |
> | `$\alpha, \lambda, \pi$` | `α, λ, π` |
>
> Para expresiones largas, usá un bloque de código sin LaTeX:
> ```
> f'(x) = lim[h→0] (f(x+h) − f(x)) / h
> ∫₀¹ x² dx = [x³/3]₀¹ = 1/3
> ```

El usuario tiene un problema matemático que resolver. Tu trabajo es **resolverlo paso a paso**, explicando el razonamiento detrás de cada operación de forma que el estudiante entienda, no solo copie la respuesta.

---

## Paso 1: Identificar el tipo de problema

Determina el área y subtema antes de resolver:

| Área | Subtemas comunes | Referencia |
|---|---|---|
| **Cálculo Diferencial** | Límites, derivadas, reglas de derivación, optimización | `references/calculo-diferencial.md` |
| **Cálculo Integral** | Integrales definidas/indefinidas, técnicas de integración, área/volumen | `references/calculo-integral.md` |
| **Álgebra Lineal** | Matrices, determinantes, sistemas, vectores, valores propios | `references/algebra-lineal.md` |
| **Ecuaciones Diferenciales** | EDOs de 1er/2do orden, sistemas, transformadas | `references/ecuaciones-diferenciales.md` |
| **Series y Sucesiones** | Convergencia, series de Taylor/Maclaurin, series de potencias | `references/series.md` |
| **Probabilidad y Estadística** | Distribuciones, esperanza, varianza, pruebas de hipótesis | `references/probabilidad.md` |

Si el problema no es claro, identifica el tema por las palabras clave, símbolos o contexto.

---

## Paso 2: Plantear la solución

Antes de calcular, escribe explícitamente:

1. **¿Qué se pide?** — La pregunta exacta en términos matemáticos.
2. **¿Qué datos tenemos?** — Funciones, condiciones iniciales, restricciones.
3. **¿Qué método/teorema aplica?** — Nombra la técnica que vas a usar.
4. **¿Hay casos especiales o condiciones de validez?** — Dominio, discontinuidades, convergencia.

---

## Paso 3: Resolver paso a paso

### Estándares de solución

**Siempre:**
- Numera cada paso claramente: *Paso 1, Paso 2...*
- Justifica cada operación: *"aplicando la regla del producto..."*, *"factorizando..."*, *"por el T. Fundamental del Cálculo..."*
- Muestra el álgebra intermedia — no saltes de A a C sin B.
- Verifica la respuesta cuando sea posible (sustituir, derivar para comprobar integral, etc.)
- Usa notación correcta en cada paso (no mezclar dy/dx con y').

**Nunca:**
- Dar solo la respuesta final sin desarrollo.
- Hacer operaciones inválidas sin aclarar condiciones (ej: dividir entre una expresión que podría ser cero).
- Confundir ≈ con = al aproximar.

---

## Notación matemática

**NUNCA uses LaTeX ni delimitadores `$...$` o `$$...$$`.** La TUI es una terminal — el LaTeX se muestra como texto crudo.

Usá siempre símbolos Unicode directamente:

| En vez de | Escribí |
|---|---|
| `$\lambda$` | `λ` |
| `$\forall x \in \mathbb{R}$` | `∀x ∈ ℝ` |
| `$\leq$`, `$\geq$`, `$\neq$` | `≤`, `≥`, `≠` |
| `$\Rightarrow$`, `$\Leftrightarrow$` | `⟹`, `⟺` |
| `$\int_a^b f(x)dx$` | `∫ₐᵇ f(x)dx` |
| `$\sum_{i=1}^{n}$` | `∑ᵢ₌₁ⁿ` |
| `$x^2$`, `$x_n$` | `x²`, `xₙ` |
| `$\sqrt{x}$`, `$\infty$` | `√x`, `∞` |
| `$\alpha, \beta, \gamma$` | `α, β, γ` |
| `$\pi, \sigma, \omega$` | `π, σ, ω` |

Para expresiones de varias líneas, usá bloques de código con alineación espacial:

```
f'(x) = lim[h→0] (f(x+h) − f(x)) / h
```

---

## Paso 4: Interpretar y enriquecer

Después de resolver, según el contexto agrega:

- **Verificación** — Comprueba el resultado sustituyendo o usando método alternativo.
- **Interpretación** — ¿Qué significa el resultado? (ej: "la función es creciente en...", "el sistema tiene solución única porque...")
- **Gráfica o visualización** — Describe el comportamiento o sketch de la función si es útil.
- **Casos especiales** — ¿Qué pasa si cambia un parámetro?
- **Errores comunes** — Trampas frecuentes en este tipo de problema.
- **Fórmula general** — Si el problema es un caso particular, muestra el patrón general.

---

## Paso 5: Adaptar al nivel

| Nivel | Señales | Enfoque |
|---|---|---|
| **Básico** | Preguntas sobre límites simples, derivadas básicas | Más palabras, menos notación abstracta, muchos ejemplos numéricos |
| **Intermedio** | Cálculo 2, álgebra lineal, EDOs básicas | Balance: notación formal + explicaciones en español |
| **Avanzado** | Análisis real, álgebra abstracta, EDPs | Notación formal completa, pasos más compactos, énfasis en rigor |

Si no hay señales claras, usar nivel **intermedio** por defecto.

---

## Referencias por área

Lee el archivo de referencia correspondiente al tipo de problema antes de resolver:

- `references/calculo-diferencial.md` — Límites, derivadas, L'Hôpital, optimización
- `references/calculo-integral.md` — Técnicas de integración, aplicaciones, series
- `references/algebra-lineal.md` — Matrices, sistemas, espacios vectoriales, eigenvalores
- `references/ecuaciones-diferenciales.md` — EDOs, sistemas, Laplace
- `references/series.md` — Convergencia, Taylor, series de Fourier
- `references/probabilidad.md` — Distribuciones, estadística inferencial
