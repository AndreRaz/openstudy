---
name: demostraciones-matematicas
description: Construye demostraciones matemáticas formales paso a paso — inducción, contradicción, directa y más.
---

# Skill: Demostraciones Matemáticas

El usuario quiere demostrar un resultado matemático. Tu trabajo es construir una demostración **rigurosa, correcta y comprensible**, eligiendo la técnica más adecuada y explicando cada paso con claridad.

---

## Paso 1: Analizar el problema

Antes de demostrar, identifica:

1. **¿Qué se está afirmando?** — Reescribe el enunciado formalmente si es informal.
2. **¿Qué tipo de objeto matemático es?** — ¿Teorema, lema, corolario, proposición, identidad?
3. **¿Qué rama de las matemáticas aplica?** — Álgebra, análisis, geometría, teoría de números, etc.
4. **¿Cuál es la técnica de demostración más natural?** — Ver sección siguiente.

Si el enunciado es ambiguo, aclara las hipótesis y la conclusión exacta antes de proceder.

---

## Paso 2: Elegir la técnica de demostración

Consulta el archivo `references/tecnicas.md` para elegir entre:

| Técnica | Cuándo usarla |
|---|---|
| **Demostración directa** | La cadena de implicaciones fluye naturalmente desde hipótesis a conclusión |
| **Inducción matemática** | El enunciado involucra todos los naturales o enteros ≥ n₀ |
| **Inducción fuerte** | Cada caso depende de múltiples casos anteriores |
| **Contradicción** | Asumir lo contrario lleva a un absurdo claro |
| **Contrarrecíproco** | Más fácil negar la conclusión que afirmar la hipótesis |
| **Construcción/Existencia** | Hay que demostrar que algo existe — construirlo explícitamente |
| **Doble contención** | Para demostrar igualdad de conjuntos (A ⊆ B y B ⊆ A) |
| **Casos** | El dominio se divide en casos exhaustivos y mutuamente excluyentes |
| **Bicondicional** | Demostrar P ⟺ Q haciendo P⟹Q y Q⟹P por separado |
| **Conteo doble** | Contar el mismo objeto de dos formas distintas |
| **Invariante** | Encontrar una cantidad que no cambia durante un proceso |

---

## Paso 3: Estructura de la demostración

Toda demostración debe tener esta estructura clara:

```
**Enunciado:** [El teorema exacto a demostrar]

**Hipótesis:** [Lo que se asume como dado]

**Conclusión:** [Lo que se quiere probar]

**Técnica:** [Nombre de la técnica elegida y por qué]

**Demostración:**

[Paso 1: ...]
[Paso 2: ...]
[...]

∎  (o "Q.E.D." o "Lo que se quería demostrar")

**Intuición:** [Explicación informal de por qué el resultado es verdad]
```

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
| `$\det(A - \lambda I)$` | `det(A − λI)` |
| `$\blacksquare$` | `∎` |
| `$\sum_{i=1}^{n}$` | `∑ᵢ₌₁ⁿ` |
| `$x^2$` | `x²` |
| `$x_n$` | `xₙ` |
| `$\sqrt{x}$` | `√x` |
| `$\infty$` | `∞` |
| `$\alpha, \beta, \gamma$` | `α, β, γ` |
| `$\pi, \sigma, \omega$` | `π, σ, ω` |

Para expresiones complejas de varias líneas, usá bloques de código con alineación espacial:

```
det(A − λI) = 0
A·v = λ·v
```

---

## Paso 4: Estándares de rigor

### Siempre debes:
- **Justificar cada paso** — No dar saltos lógicos sin explicación.
- **Citar resultados usados** — Si usas un teorema conocido (Bolzano, Fermat, Pitágoras...), nómbralo.
- **Definir variables** — "Sea n un entero positivo", no solo "n".
- **Verificar casos base** en inducciones — Explícitamente.
- **Indicar cuándo termina la demostración** — Con ∎ o "□".

### Nunca hagas:
- Asumir lo que se quiere demostrar (petición de principio).
- Dividir entre cero o hacer operaciones inválidas sin justificación.
- Saltar pasos "porque es obvio" sin explicación al estudiante.
- Confundir ejemplos con demostraciones.

---

## Paso 5: Nivel de profundidad

Adapta la demostración al nivel del usuario:

- **Nivel básico** (preparatoria/bachillerato): Más palabras, menos símbolos, ejemplos concretos.
- **Nivel intermedio** (primeros años de universidad): Balance entre formalidad y explicación.
- **Nivel avanzado** (análisis real, álgebra abstracta, etc.): Notación formal completa, pasos compactos.

Si no conoces el nivel, pregunta o asume nivel intermedio.

---

## Paso 6: Enriquecimiento opcional

Después de la demostración, considera agregar:

- **Ejemplo numérico** — Para ilustrar el resultado con un caso concreto.
- **Contraejemplo** — Si alguna hipótesis falla, muestra qué sale mal.
- **Generalización** — ¿El resultado se puede extender?
- **Importancia** — ¿Para qué sirve este resultado? ¿Qué otros teoremas dependen de él?
- **Errores comunes** — Trampas frecuentes al intentar demostrar esto.

---

## Referencia rápida de símbolos

| Símbolo | Significado |
|---|---|
| ∀ | Para todo |
| ∃ | Existe |
| ∈ | Pertenece a |
| ⊆ | Subconjunto |
| ⟹ | Implica |
| ⟺ | Si y solo si |
| ∎ / □ | Fin de demostración |
| ℕ, ℤ, ℚ, ℝ, ℂ | Naturales, enteros, racionales, reales, complejos |
| ¬ | Negación |
| ∧ / ∨ | Y lógico / O lógico |

---

## Lectura adicional

- Para **técnicas detalladas con ejemplos**: leer `references/tecnicas.md`
- Para **errores lógicos comunes a evitar**: leer `references/falacias.md`
