# Ecuaciones Diferenciales — Referencia

## Clasificación Rápida

| Tipo | Forma | Método |
|---|---|---|
| Variables separables | dy/dx = f(x)·g(y) | Separar e integrar |
| Lineal de 1er orden | y' + P(x)y = Q(x) | Factor integrante |
| Exacta | M dx + N dy = 0, Mᵧ = Nₓ | Función potencial |
| Bernoulli | y' + P(x)y = Q(x)·yⁿ | Sustitución v = y^(1-n) |
| Homogénea de 2do orden (coef. const.) | ay'' + by' + cy = 0 | Ecuación característica |
| No homogénea | ay'' + by' + cy = g(x) | Complementaria + particular |

---

## EDOs de Primer Orden

### 1. Variables Separables
**Forma:** dy/dx = f(x)/g(y)  [o equivalente]

**Método:**
```
g(y) dy = f(x) dx
∫g(y) dy = ∫f(x) dx
Resolver e integrar ambos lados
Despejar y si es posible
```

### 2. Ecuación Lineal de 1er Orden
**Forma estándar:** y' + P(x)·y = Q(x)

**Factor integrante:** μ(x) = e^(∫P(x)dx)

**Solución:**
```
Multiplicar ambos lados por μ(x):
μy' + μPy = μQ
[μy]' = μQ
μy = ∫μQ dx
y = (1/μ)∫μQ dx
```

### 3. Exactas
**Condición:** ∂M/∂y = ∂N/∂x

**Método:**
```
Buscar F(x,y) tal que ∂F/∂x = M y ∂F/∂y = N
F = ∫M dx (integrar respecto a x, constante puede depender de y)
Usar ∂F/∂y = N para determinar la constante
Solución: F(x,y) = C
```

---

## EDOs de Segundo Orden con Coeficientes Constantes

### Ecuación homogénea: ay'' + by' + cy = 0

**Ecuación característica:** ar² + br + c = 0

| Raíces | Solución general |
|---|---|
| r₁, r₂ reales distintas | y = C₁e^(r₁x) + C₂e^(r₂x) |
| r₁ = r₂ = r (repetida) | y = (C₁ + C₂x)e^(rx) |
| r = α ± βi (complejas) | y = e^(αx)[C₁cos(βx) + C₂sen(βx)] |

### Ecuación no homogénea: ay'' + by' + cy = g(x)

**Solución:** y = yₕ + yₚ

yₕ = solución de la ecuación homogénea asociada
yₚ = solución particular (encontrar por uno de los métodos)

**Método de Coeficientes Indeterminados (para g(x) estándar):**

| g(x) | Forma de yₚ |
|---|---|
| Polinomio grado n | Aₙxⁿ + ... + A₁x + A₀ |
| e^(αx) | Ae^(αx) |
| sen(βx) o cos(βx) | A·sen(βx) + B·cos(βx) |
| Combinaciones | Combinar las formas |

⚠️ **Modificación:** Si la forma propuesta de yₚ es solución de yₕ, multiplicar por x (o x² si es raíz doble).

**Método de Variación de Parámetros (general):**
yₚ = u₁y₁ + u₂y₂, donde y₁, y₂ son soluciones base de la homogénea.
```
u₁' = -y₂·g(x)/W
u₂' = y₁·g(x)/W
W = Wronskiano = y₁y₂' - y₂y₁'
Integrar para obtener u₁, u₂
```

---

## Transformada de Laplace

### Tabla de transformadas básicas

| f(t) | L{f(t)} = F(s) |
|---|---|
| 1 | 1/s |
| t | 1/s² |
| tⁿ | n!/s^(n+1) |
| e^(at) | 1/(s-a) |
| sen(bt) | b/(s²+b²) |
| cos(bt) | s/(s²+b²) |
| e^(at)sen(bt) | b/((s-a)²+b²) |
| e^(at)cos(bt) | (s-a)/((s-a)²+b²) |

### Propiedades clave
- L{f'(t)} = sF(s) - f(0)
- L{f''(t)} = s²F(s) - sf(0) - f'(0)
- L{e^(at)f(t)} = F(s-a)  [desplazamiento en s]

### Proceso de solución con Laplace
```
1. Aplicar L{} a toda la EDO
2. Sustituir condiciones iniciales
3. Despejar Y(s) = L{y(t)}
4. Descomponer en fracciones parciales
5. Aplicar transformada inversa L⁻¹{}
```
