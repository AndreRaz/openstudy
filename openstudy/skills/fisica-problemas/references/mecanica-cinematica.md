# Mecánica — Cinemática

## Movimiento Rectilíneo Uniforme (MRU)
Velocidad constante, aceleración = 0.

| Ecuación | Descripción |
|---|---|
| x = x₀ + v·t | Posición en función del tiempo |
| v = constante | Velocidad constante |
| a = 0 | Sin aceleración |

---

## Movimiento Rectilíneo Uniformemente Acelerado (MRUA)
Aceleración constante a.

| Ecuación | Variables relacionadas |
|---|---|
| v = v₀ + a·t | v, v₀, a, t |
| x = x₀ + v₀·t + ½a·t² | x, x₀, v₀, a, t |
| v² = v₀² + 2a·(x - x₀) | v, v₀, a, x (sin t) |
| x = x₀ + ½(v₀ + v)·t | x, v₀, v, t (sin a) |

**Tip:** Si el problema no da t y no lo pide → usar la ecuación sin t.

---

## Caída Libre
MRUA vertical con a = -g (tomando hacia arriba como positivo).

- v = v₀ - g·t
- y = y₀ + v₀·t - ½g·t²
- v² = v₀² - 2g·(y - y₀)

**Punto más alto:** v = 0 → t_max = v₀/g
**Tiempo de vuelo** (regresa al mismo nivel): T = 2v₀/g
**Altura máxima:** h = v₀²/(2g)

---

## Tiro Parabólico (Proyectil)
Movimiento en 2D: horizontal (MRU) + vertical (caída libre).

**Componentes iniciales:**
- v₀ₓ = v₀·cos θ
- v₀ᵧ = v₀·sen θ

**Ecuaciones:**

| Dirección | Ecuación |
|---|---|
| Horizontal (x) | x = v₀·cos θ · t |
| Vertical (y) | y = v₀·sen θ · t - ½g·t² |
| Velocidad vertical | vᵧ = v₀·sen θ - g·t |
| Velocidad horizontal | vₓ = v₀·cos θ (constante) |

**Resultados clave:**
- Tiempo de vuelo: T = 2v₀·sen θ / g
- Alcance máximo: R = v₀²·sen(2θ) / g
- Altura máxima: H = (v₀·sen θ)² / (2g)
- Ángulo para alcance máximo: θ = 45°

**Velocidad en cualquier instante:** v = √(vₓ² + vᵧ²)
**Ángulo con horizontal:** α = arctan(vᵧ/vₓ)

---

## Movimiento Circular Uniforme (MCU)
Rapidez constante, dirección cambia. Hay aceleración centrípeta.

| Magnitud | Ecuación |
|---|---|
| Período | T = 2πr/v = 2π/ω |
| Frecuencia | f = 1/T |
| Velocidad angular | ω = 2πf = 2π/T |
| Velocidad lineal | v = ωr = 2πr/T |
| Aceleración centrípeta | aₓ = v²/r = ω²r |
| Fuerza centrípeta | F = m·v²/r = mω²r |

La aceleración centrípeta siempre apunta **hacia el centro** del círculo.

---

## Movimiento Circular Uniformemente Acelerado (MCUA)

Analogía con MRUA pero en ángulos:

| MRUA | MCUA |
|---|---|
| x → θ (rad) | |
| v → ω (rad/s) | |
| a → α (rad/s²) | |

- ω = ω₀ + α·t
- θ = θ₀ + ω₀·t + ½α·t²
- ω² = ω₀² + 2α·(θ - θ₀)

Relación con magnitudes lineales: s = r·θ, v = r·ω, aₜ = r·α

---

## Estrategia general — Cinemática

1. Identificar qué tipo de movimiento es (MRU, MRUA, parabólico, circular).
2. Establecer sistema de coordenadas y sentido positivo.
3. Listar datos y lo que se pide.
4. Elegir la ecuación que relacione lo conocido con lo desconocido.
5. Si el movimiento es en 2D: separar en componentes x e y, resolver cada una.
6. Verificar unidades y sentido físico del resultado.
