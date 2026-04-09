# Cálculo Integral — Referencia

## Integrales Inmediatas

| Función | Integral |
|---|---|
| xⁿ (n≠-1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln(a) + C |
| sen(x) | -cos(x) + C |
| cos(x) | sen(x) + C |
| sec²(x) | tan(x) + C |
| csc²(x) | -cot(x) + C |
| sec(x)tan(x) | sec(x) + C |
| 1/√(1-x²) | arcsen(x) + C |
| 1/(1+x²) | arctan(x) + C |
| 1/√(a²-x²) | arcsen(x/a) + C |
| 1/(a²+x²) | (1/a)arctan(x/a) + C |

---

## Técnicas de Integración

### 1. Sustitución (u-sustitución)
**Cuándo:** Hay una función compuesta — ves g'(x)·f(g(x)).
```
Identificar: u = g(x)
Calcular: du = g'(x)dx → dx = du/g'(x)
Sustituir y resolver en términos de u
Regresar a x al final
```
**Señales:** Exponente dentro de otra función, raíces con expresión adentro, función trigonométrica de algo compuesto.

### 2. Integración por Partes
**Cuándo:** Producto de dos tipos distintos de funciones.
**Fórmula:** ∫u dv = uv - ∫v du

**Regla ILATE para elegir u (en orden de prioridad):**
- **I** nversa trigonométrica (arctan, arcsen...)
- **L** ogarítmica (ln x, log x)
- **A** lgebraica (xⁿ, polinomios)
- **T** rigonométrica (sen x, cos x)
- **E** xponencial (eˣ, aˣ)

u = el que aparece **primero** en ILATE; dv = el resto.

**Caso cíclico:** Si aparece la integral original al integrar por partes dos veces, despejarla algebraicamente.

### 3. Fracciones Parciales
**Cuándo:** Integral de la forma ∫P(x)/Q(x)dx, grado P < grado Q.

**Pasos:**
1. Factorizar Q(x) completamente
2. Descomponer según los factores:
   - Factor lineal (ax+b): A/(ax+b)
   - Factor lineal repetido (ax+b)²: A/(ax+b) + B/(ax+b)²
   - Factor cuadrático irreducible (ax²+bx+c): (Ax+B)/(ax²+bx+c)
3. Multiplicar ambos lados por Q(x)
4. Resolver el sistema para A, B, C...
5. Integrar cada fracción

### 4. Sustitución Trigonométrica
**Cuándo:** Aparecen √(a²-x²), √(x²-a²), √(x²+a²)

| Expresión | Sustitución | Identidad |
|---|---|---|
| √(a²-x²) | x = a·sen θ | 1-sen²θ = cos²θ |
| √(x²+a²) | x = a·tan θ | 1+tan²θ = sec²θ |
| √(x²-a²) | x = a·sec θ | sec²θ-1 = tan²θ |

### 5. Integrales Trigonométricas
**∫senⁿx cosᵐx dx:**
- Si n impar: guardar un sen x, sustituir u=cos x
- Si m impar: guardar un cos x, sustituir u=sen x
- Si ambos pares: usar identidades de ángulo doble

**Identidades útiles:**
- sen²x = (1-cos2x)/2
- cos²x = (1+cos2x)/2
- sen x cos x = sen(2x)/2

---

## Integral Definida y Teorema Fundamental del Cálculo

**T.F.C. Parte 1:** Si F'(x) = f(x), entonces:
∫ₐᵇ f(x)dx = F(b) - F(a)

**T.F.C. Parte 2 (derivada de integral):**
d/dx [∫ₐˣ f(t)dt] = f(x)

Con límite superior compuesto g(x):
d/dx [∫ₐᵍ⁽ˣ⁾ f(t)dt] = f(g(x))·g'(x)

---

## Aplicaciones de la Integral

### Área entre curvas
**Entre f(x) y g(x) en [a,b] donde f ≥ g:**
A = ∫ₐᵇ [f(x) - g(x)] dx

**Pasos:**
1. Graficar o determinar cuál función está arriba
2. Encontrar puntos de intersección (si no se dan)
3. Si se cruzan, dividir el intervalo

### Volúmenes de revolución

**Método de discos/arandelas (eje x):**
V = π ∫ₐᵇ [R(x)² - r(x)²] dx
(R = radio exterior, r = radio interior)

**Método de cascarones cilíndricos (eje x):**
V = 2π ∫ₐᵇ x·f(x) dx

### Longitud de arco
L = ∫ₐᵇ √(1 + [f'(x)]²) dx

---

## Integrales Impropias

**Tipo 1 (límite infinito):**
∫ₐ^∞ f(x)dx = lím_{t→∞} ∫ₐᵗ f(x)dx

**Tipo 2 (discontinuidad):**
Si f tiene discontinuidad en b:
∫ₐᵇ f(x)dx = lím_{t→b⁻} ∫ₐᵗ f(x)dx

**Converge** si el límite existe y es finito. **Diverge** si es ±∞ o no existe.

**Prueba de comparación:** Si 0 ≤ f(x) ≤ g(x) y ∫g converge → ∫f converge.
