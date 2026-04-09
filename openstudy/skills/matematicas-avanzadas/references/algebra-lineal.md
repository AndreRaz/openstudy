# Álgebra Lineal — Referencia

## Matrices y Operaciones

### Operaciones básicas
- **Suma:** Elemento a elemento (mismas dimensiones)
- **Producto escalar:** k·A multiplica cada entrada por k
- **Producto matricial:** (AB)ᵢⱼ = fila i de A · columna j de B
  - Solo válido si columnas de A = filas de B
  - AB ≠ BA en general

### Transpuesta
(Aᵀ)ᵢⱼ = Aⱼᵢ   |   (AB)ᵀ = BᵀAᵀ

### Matriz inversa
A es invertible si det(A) ≠ 0.
Para encontrar A⁻¹:
1. Formar [A | I]
2. Aplicar operaciones de fila hasta [I | A⁻¹]

Para 2×2: si A = [[a,b],[c,d]], entonces A⁻¹ = (1/det A)·[[d,-b],[-c,a]]

---

## Determinantes

### Reglas de cálculo

**2×2:** det([[a,b],[c,d]]) = ad - bc

**3×3 (expansión por cofactores — primera fila):**
det(A) = a₁₁·C₁₁ + a₁₂·C₁₂ + a₁₃·C₁₃
donde Cᵢⱼ = (-1)^(i+j)·Mᵢⱼ (Mᵢⱼ = menor, determinante de la submatriz)

**Propiedades útiles:**
- Intercambiar dos filas → cambia signo del determinante
- Multiplicar una fila por k → determinante se multiplica por k
- Sumar múltiplo de una fila a otra → determinante no cambia
- Fila de ceros → det = 0
- Dos filas iguales → det = 0
- det(AB) = det(A)·det(B)
- det(Aᵀ) = det(A)

---

## Sistemas de Ecuaciones Lineales Ax = b

### Método de Gauss-Jordan

1. Formar la matriz aumentada [A | b]
2. Aplicar operaciones elementales de fila:
   - Intercambiar filas
   - Multiplicar fila por escalar ≠ 0
   - Sumar múltiplo de una fila a otra
3. Reducir a forma escalonada reducida (RREF)
4. Interpretar la solución

### Interpretación de la solución

| Situación en RREF | Tipo de solución |
|---|---|
| Fila [0 0 ... 0 | c] con c≠0 | Sistema inconsistente (sin solución) |
| Solución única | Una solución particular |
| Variables libres presentes | Infinitas soluciones (espacio de soluciones) |

**Rango:** Número de filas no-cero en la forma escalonada.
- **Rango(A) = Rango([A|b])** → sistema consistente
- **Rango(A) < Rango([A|b])** → inconsistente
- **Rango(A) = n** (número de incógnitas) → solución única

### Regla de Cramer (sistemas cuadrados, det ≠ 0)
xᵢ = det(Aᵢ)/det(A), donde Aᵢ = A con la columna i reemplazada por b

---

## Espacios Vectoriales

### Conceptos clave

**Subespacio:** Subconjunto W de un espacio vectorial que:
1. Contiene al vector cero
2. Es cerrado bajo suma
3. Es cerrado bajo multiplicación escalar

**Espacio nulo (kernel):** Nul(A) = {x : Ax = 0}
**Espacio columna (imagen):** Col(A) = span de las columnas de A

**Independencia lineal:** {v₁,...,vₖ} es L.I. si c₁v₁+...+cₖvₖ=0 implica todos cᵢ=0.

**Base:** Conjunto L.I. que genera el espacio.
**Dimensión:** Número de vectores en cualquier base.

**Teorema del rango-nulidad:**
dim(Nul A) + dim(Col A) = número de columnas de A
(nulidad + rango = n)

---

## Valores y Vectores Propios (Eigenvalores)

### Definición
λ es eigenvalor de A si existe v ≠ 0 tal que **Av = λv**.
v se llama eigenvector correspondiente a λ.

### Cómo encontrarlos

**Paso 1 — Eigenvalores:**
Resolver la ecuación característica: **det(A - λI) = 0**
El resultado es un polinomio en λ. Sus raíces son los eigenvalores.

**Paso 2 — Eigenvectores:**
Para cada eigenvalor λᵢ, resolver: **(A - λᵢI)x = 0**
El espacio nulo de (A - λᵢI) es el eigenespacio de λᵢ.

### Propiedades
- La traza de A = suma de eigenvalores
- det(A) = producto de eigenvalores
- Matrices simétricas → eigenvalores reales
- Eigenvalores distintos → eigenvectores linealmente independientes

### Diagonalización
A es diagonalizable si tiene n eigenvectores L.I.
A = PDP⁻¹, donde D = diagonal de eigenvalores, P = matrix de eigenvectores.

---

## Transformaciones Lineales

**Definición:** T: ℝⁿ → ℝᵐ es lineal si:
- T(u+v) = T(u) + T(v)
- T(cu) = cT(u)

Toda transformación lineal se puede representar como T(x) = Ax.

**Kernel (núcleo):** ker(T) = {x : T(x) = 0}
**Imagen:** im(T) = {T(x) : x ∈ ℝⁿ}

**T es inyectiva** si ker(T) = {0}
**T es sobreyectiva** si im(T) = ℝᵐ
