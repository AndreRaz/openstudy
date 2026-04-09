---
name: fisica-problemas
description: Resuelve problemas de física universitaria y preparatoria paso a paso, con diagramas descriptivos, identificación de principios físicos, desarrollo matemático completo e interpretación del resultado. Usar esta skill SIEMPRE que el usuario presente un problema de física o pregunte cómo funciona un fenómeno físico. Aplica para mecánica clásica (cinemática, dinámica, trabajo y energía, cantidad de movimiento), termodinámica, electromagnetismo, ondas y óptica, y física moderna. Trigger ante frases como "resuelve", "calcula", "encuentra la velocidad/fuerza/aceleración/energía", "¿qué pasa cuando...?", "¿cuánto vale...?", o cuando el usuario pegue un problema con datos físicos y unidades.
---

# Skill: Problemas de Física

> ⚠️ REGLA ABSOLUTA — NOTACIÓN MATEMÁTICA
> Esta skill corre en una terminal (TUI). El LaTeX NO se renderiza — aparece como texto crudo con símbolos `$` visibles.
> PROHIBIDO usar `$...$` o `$$...$$` en cualquier parte de tu respuesta.
> USA SIEMPRE símbolos Unicode directamente:
>
> | ❌ NO escribas | ✅ Escribí |
> |---|---|
> | `$F = ma$` | `F = m·a` |
> | `$\Delta t$`, `$\Delta x$` | `Δt`, `Δx` |
> | `$\theta$`, `$\omega$`, `$\alpha$` | `θ`, `ω`, `α` |
> | `$v^2 = v_0^2 + 2a\Delta x$` | `v² = v₀² + 2·a·Δx` |
> | `$\sqrt{x}$`, `$\infty$` | `√x`, `∞` |
> | `$\mu_k$`, `$\rho$` | `μₖ`, `ρ` |
> | `$\leq$`, `$\geq$` | `≤`, `≥` |
>
> Para ecuaciones de varias líneas, usá un bloque de código sin LaTeX:
> ```
> ΣFx = m·a
> T − μₖ·N = m·a
> a = (T − μₖ·m·g) / m
> ```

El usuario tiene un problema de física. Tu trabajo es resolverlo de forma **rigurosa, clara y didáctica**, siguiendo el método científico de resolución de problemas: analizar → modelar → resolver → verificar → interpretar.

---

## Paso 1: Identificar el área y el fenómeno

Determina el área antes de resolver:

| Área | Temas | Referencia |
|---|---|---|
| **Mecánica — Cinemática** | MRU, MRUA, caída libre, tiro parabólico, MCU | `references/mecanica-cinematica.md` |
| **Mecánica — Dinámica** | Leyes de Newton, fricción, fuerzas, diagramas de cuerpo libre | `references/mecanica-dinamica.md` |
| **Trabajo y Energía** | Trabajo, energía cinética/potencial, conservación, potencia | `references/energia.md` |
| **Cantidad de Movimiento** | Impulso, momentum, colisiones elásticas e inelásticas | `references/momentum.md` |
| **Termodinámica** | Temperatura, calor, leyes de la termodinámica, gases ideales | `references/termodinamica.md` |
| **Electromagnetismo** | Ley de Coulomb, campo eléctrico, circuitos, ley de Ohm, magnetismo | `references/electromagnetismo.md` |
| **Ondas y Óptica** | Ondas mecánicas, sonido, luz, reflexión, refracción, lentes | `references/ondas-optica.md` |

Si el problema mezcla áreas (ej: dinámica + energía), identifica todos los conceptos involucrados.

---

## Paso 2: Analizar el problema

Antes de escribir cualquier ecuación:

1. **Leer dos veces** — Identificar qué se da y qué se pide.
2. **Listar datos** — Con sus unidades. Convertir si es necesario.
3. **Listar incógnitas** — Lo que hay que encontrar.
4. **Dibujar un diagrama** — Describir textualmente el sistema:
   - Dirección del movimiento
   - Fuerzas que actúan (diagrama de cuerpo libre si aplica)
   - Puntos de referencia (origen del sistema de coordenadas)
   - Ángulos relevantes
5. **Identificar el principio o ley física** que gobierna el sistema.

---

## Paso 3: Modelar y plantear ecuaciones

1. **Elegir el sistema de referencia** — ¿Dónde está el origen? ¿Qué dirección es positiva?
2. **Enunciar las leyes/principios aplicables** — Nombrarlos explícitamente.
3. **Escribir las ecuaciones relevantes** — En forma general primero, luego sustituir.
4. **Verificar grados de libertad** — ¿Tengo tantas ecuaciones como incógnitas?

---

## Notación matemática

**NUNCA uses LaTeX ni delimitadores `$...$` o `$$...$$`.** La TUI es una terminal — el LaTeX se muestra como texto crudo.

Usá siempre símbolos Unicode directamente:

| En vez de | Escribí |
|---|---|
| `$\vec{F}$`, `$\vec{v}$` | `F⃗`, `v⃗` (o `F`, `v` en negrita contextual) |
| `$F = ma$` | `F = m·a` |
| `$\Delta t$`, `$\Delta x$` | `Δt`, `Δx` |
| `$\theta$`, `$\omega$`, `$\alpha$` | `θ`, `ω`, `α` |
| `$\leq$`, `$\geq$`, `$\neq$` | `≤`, `≥`, `≠` |
| `$x^2$`, `$v_0$` | `x²`, `v₀` |
| `$\sqrt{x}$`, `$\infty$` | `√x`, `∞` |
| `$\mu_k$`, `$\rho$` | `μₖ`, `ρ` |
| `$\pi$`, `$\sigma$` | `π`, `σ` |

Para ecuaciones de varias líneas, usá bloques de código:

```
v² = v₀² + 2·a·Δx
v = √(v₀² + 2·a·Δx)
```

---

## Paso 4: Resolver matemáticamente

- Desarrollar el álgebra paso a paso, sin saltos.
- Mantener las unidades en cada paso.
- Si hay sistema de ecuaciones, indicar el método de solución.
- Calcular el resultado numérico con las unidades correctas.
- Redondear apropiadamente (tipicamente 3-4 cifras significativas).

---

## Paso 5: Verificar el resultado

Siempre verificar:

- **Análisis dimensional** — ¿Las unidades del resultado son correctas?
- **Orden de magnitud** — ¿El número tiene sentido físicamente?
- **Casos límite** — ¿Qué pasa si una variable → 0 o → ∞?
- **Consistencia** — ¿El resultado cumple las leyes de conservación?
- **Signo** — ¿El signo del resultado tiene sentido físico?

---

## Paso 6: Interpretar y enriquecer

Después de dar el resultado, agregar según el contexto:

- **Interpretación física** — ¿Qué significa el número? ¿Es grande o pequeño en contexto?
- **Visualización** — Describir cómo se ve el movimiento o el fenómeno.
- **Relación con la vida cotidiana** — Ejemplos reales del mismo principio.
- **Errores comunes** — Trampas frecuentes en este tipo de problema.
- **Variante** — ¿Qué cambia si se modifica un dato?

---

## Estándares de formato

### Presentación del problema resuelto:

```
**Datos:**
- [variable] = [valor] [unidades]
- ...

**Incógnita:** [lo que se busca]

**Diagrama:** [descripción textual del sistema]

**Principio aplicado:** [ley o teorema]

**Desarrollo:**
Paso 1: [...]
Paso 2: [...]
...

**Resultado:** [valor] [unidades]

**Verificación:** [análisis dimensional y/o razonamiento]

**Interpretación:** [significado físico]
```

---

## Constantes y conversiones frecuentes

| Constante | Valor |
|---|---|
| g (gravedad terrestre) | 9.8 m/s² (o 9.81 m/s²) |
| G (gravitación universal) | 6.674 × 10⁻¹¹ N·m²/kg² |
| c (velocidad de la luz) | 3 × 10⁸ m/s |
| e (carga del electrón) | 1.602 × 10⁻¹⁹ C |
| k (constante de Coulomb) | 8.99 × 10⁹ N·m²/C² |
| ε₀ (permitividad vacío) | 8.85 × 10⁻¹² C²/(N·m²) |
| mₑ (masa electrón) | 9.109 × 10⁻³¹ kg |
| mₚ (masa protón) | 1.673 × 10⁻²⁷ kg |
| R (gas ideal) | 8.314 J/(mol·K) |
| NA (Avogadro) | 6.022 × 10²³ mol⁻¹ |
| kB (Boltzmann) | 1.381 × 10⁻²³ J/K |

### Conversiones comunes
- 1 km = 1000 m | 1 cm = 0.01 m | 1 mm = 0.001 m
- 1 km/h = 1/3.6 m/s ≈ 0.2778 m/s
- 1 kg·m/s² = 1 N | 1 N·m = 1 J | 1 J/s = 1 W
- T(K) = T(°C) + 273.15
- 1 eV = 1.602 × 10⁻¹⁹ J
- 1 atm = 101325 Pa = 101.325 kPa

---

## Referencias por área

Lee el archivo correspondiente antes de resolver:
- `references/mecanica-cinematica.md`
- `references/mecanica-dinamica.md`
- `references/energia.md`
- `references/momentum.md`
- `references/termodinamica.md`
- `references/electromagnetismo.md`
- `references/ondas-optica.md`
