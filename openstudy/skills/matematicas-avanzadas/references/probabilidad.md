# Probabilidad y Estadística — Referencia

## Probabilidad Básica

**Axiomas:**
- 0 ≤ P(A) ≤ 1
- P(Ω) = 1
- P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

**Probabilidad condicional:** P(A|B) = P(A ∩ B)/P(B)

**Independencia:** P(A ∩ B) = P(A)·P(B)

**Teorema de Bayes:**
P(A|B) = P(B|A)·P(A) / P(B)

**Probabilidad total:**
P(B) = Σ P(B|Aᵢ)·P(Aᵢ)

---

## Variables Aleatorias Discretas

**E[X] = Σ x·P(X=x)**  (esperanza)
**Var(X) = E[X²] - (E[X])²**
**σ = √Var(X)**  (desviación estándar)

### Distribuciones discretas clave

| Distribución | Parámetros | P(X=k) | E[X] | Var(X) |
|---|---|---|---|---|
| **Bernoulli** | p | p^k(1-p)^(1-k), k∈{0,1} | p | p(1-p) |
| **Binomial** B(n,p) | n, p | C(n,k)pᵏ(1-p)^(n-k) | np | np(1-p) |
| **Poisson** Po(λ) | λ | e^(-λ)λᵏ/k! | λ | λ |
| **Geométrica** | p | (1-p)^(k-1)p | 1/p | (1-p)/p² |
| **Hipergeométrica** | N,K,n | C(K,k)C(N-K,n-k)/C(N,n) | nK/N | — |

---

## Variables Aleatorias Continuas

**f(x) = función de densidad:** P(a≤X≤b) = ∫ₐᵇ f(x)dx
**F(x) = función de distribución acumulada:** F(x) = P(X≤x)
**E[X] = ∫ x·f(x) dx**

### Distribuciones continuas clave

| Distribución | Parámetros | f(x) | E[X] | Var(X) |
|---|---|---|---|---|
| **Uniforme** U(a,b) | a, b | 1/(b-a) en [a,b] | (a+b)/2 | (b-a)²/12 |
| **Exponencial** Exp(λ) | λ | λe^(-λx), x≥0 | 1/λ | 1/λ² |
| **Normal** N(μ,σ²) | μ, σ² | (1/σ√2π)e^(-(x-μ)²/2σ²) | μ | σ² |

### Normal estándar Z ~ N(0,1)
**Estandarización:** Z = (X - μ)/σ

Usar tabla Z o propiedades:
- P(Z < z) se lee en tabla
- P(Z > z) = 1 - P(Z < z)
- P(-z < Z < z) = 2·P(Z < z) - 1
- Regla 68-95-99.7: P(μ-σ < X < μ+σ) ≈ 0.68

---

## Estadística Inferencial

### Estimación

**Intervalo de confianza para μ (σ conocida):**
x̄ ± z_{α/2} · σ/√n

**Intervalo de confianza para μ (σ desconocida):**
x̄ ± t_{α/2, n-1} · s/√n

Valores z comunes: 90%→1.645, 95%→1.96, 99%→2.576

### Pruebas de Hipótesis — Proceso

1. **H₀ (hipótesis nula)** vs **H₁ (hipótesis alternativa)**
2. **Nivel de significancia α** (usualmente 0.05)
3. **Estadístico de prueba:**
   - z = (x̄ - μ₀)/(σ/√n) si σ conocida
   - t = (x̄ - μ₀)/(s/√n) si σ desconocida
4. **Región de rechazo** o **valor p**
5. **Decisión:** Rechazar H₀ si |estadístico| > valor crítico, o si p < α
6. **Conclusión** en contexto del problema

### Tipos de error
- **Error Tipo I (α):** Rechazar H₀ cuando es verdadera
- **Error Tipo II (β):** No rechazar H₀ cuando es falsa
- **Potencia = 1 - β**
