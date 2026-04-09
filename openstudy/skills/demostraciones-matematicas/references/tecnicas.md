# Técnicas de Demostración — Referencia Detallada

## 1. Demostración Directa

**Cuándo usar:** Cuando puedes llegar a la conclusión partiendo de las hipótesis paso a paso.

**Estructura:**
```
Asumimos P (hipótesis).
Por [razón], se tiene que A.
Por [razón], A implica B.
...
Por lo tanto, Q (conclusión). ∎
```

**Ejemplo — Demostrar: "Si n es par, entonces n² es par"**

Sea n un entero par. Por definición, existe k ∈ ℤ tal que n = 2k.
Entonces n² = (2k)² = 4k² = 2(2k²).
Como 2k² ∈ ℤ, se sigue que n² es par. ∎

---

## 2. Inducción Matemática (Simple)

**Cuándo usar:** El enunciado es de la forma P(n) para todo n ≥ n₀ (usualmente n₀ = 0 o 1).

**Estructura:**
```
Caso base: Verificar P(n₀) directamente.
Paso inductivo: Asumir P(k) (hipótesis inductiva). Demostrar P(k+1).
Conclusión: Por inducción, P(n) es verdad para todo n ≥ n₀. ∎
```

**Ejemplo — Demostrar: 1 + 2 + ... + n = n(n+1)/2**

*Caso base (n=1):* El lado izquierdo es 1. El derecho es 1·2/2 = 1. ✓

*Paso inductivo:* Supongamos que 1 + 2 + ... + k = k(k+1)/2 (H.I.)
Entonces:
1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1)
                         = (k+1)[k/2 + 1]
                         = (k+1)(k+2)/2

Que es exactamente la fórmula para n = k+1. ∎

---

## 3. Inducción Fuerte

**Cuándo usar:** El caso P(k+1) depende de P(1), P(2), ..., P(k) — no solo del caso anterior.

**Estructura:**
```
Caso(s) base: Verificar P(n₀), ..., P(n₁) si es necesario.
Paso inductivo: Asumir P(j) para todo j < k. Demostrar P(k).
```

**Ejemplo — Todo entero n ≥ 2 es producto de primos**

*Caso base (n=2):* 2 es primo, es trivialmente producto de primos. ✓

*Paso inductivo:* Sea k > 2. Asumimos que todo entero 2 ≤ j < k es producto de primos.
- Si k es primo: ya es producto de primos.
- Si k es compuesto: k = a·b con 2 ≤ a, b < k. Por H.I., a y b son productos de primos, por lo tanto k también lo es. ∎

---

## 4. Demostración por Contradicción (Reducción al Absurdo)

**Cuándo usar:** Negar la conclusión lleva a una contradicción con las hipótesis o con algo conocido.

**Estructura:**
```
Supongamos que ¬Q (negamos la conclusión).
Partiendo de P y ¬Q, derivamos...
Llegamos a una contradicción (⊥).
Por lo tanto, Q debe ser verdad. ∎
```

**Ejemplo — √2 es irracional**

Supongamos que √2 es racional. Entonces √2 = p/q con p, q ∈ ℤ, q ≠ 0, y mcd(p,q) = 1.
Entonces 2 = p²/q², por lo que p² = 2q². Así p² es par, por lo que p es par.
Sea p = 2m. Entonces 4m² = 2q², es decir, q² = 2m². Entonces q² es par, por lo que q es par.
Pero entonces 2 | p y 2 | q, contradiciendo que mcd(p,q) = 1. **Contradicción.** ∎

---

## 5. Demostración por Contrarrecíproco

**Cuándo usar:** Es más fácil demostrar (¬Q ⟹ ¬P) que (P ⟹ Q). Son lógicamente equivalentes.

**Estructura:**
```
Demostramos el contrarrecíproco: ¬Q ⟹ ¬P.
Supongamos ¬Q.
...
Concluimos ¬P.
Por lo tanto, P ⟹ Q. ∎
```

**Ejemplo — Si n² es par, entonces n es par**

Demostramos el contrarrecíproco: "Si n es impar, entonces n² es impar."
Sea n impar, entonces n = 2k+1 para algún k ∈ ℤ.
n² = (2k+1)² = 4k² + 4k + 1 = 2(2k²+2k) + 1, que es impar. ∎

---

## 6. Demostración por Casos

**Cuándo usar:** El dominio se puede dividir en casos finitos que cubren todo y se analizan por separado.

**Estructura:**
```
Consideramos todos los casos posibles: C₁, C₂, ..., Cₙ (exhaustivos y excluyentes).
Caso 1 (C₁): ...P es verdad.
Caso 2 (C₂): ...P es verdad.
...
En todos los casos, P es verdad. ∎
```

**Ejemplo — Para todo entero n, n² + n es par**

n² + n = n(n+1). Consideramos dos casos:

*Caso 1: n es par.* Entonces n = 2k, así n(n+1) = 2k(n+1), que es par.
*Caso 2: n es impar.* Entonces n+1 es par, así n+1 = 2k, y n(n+1) = n·2k, que es par.

En ambos casos, n(n+1) es par. ∎

---

## 7. Demostración Bicondicional (P ⟺ Q)

**Cuándo usar:** Hay que demostrar equivalencia: "P si y solo si Q".

**Estructura:**
```
(⟹) Supongamos P. Demostramos Q.
(⟸) Supongamos Q. Demostramos P.
```

**Nota:** Cada dirección puede usar técnicas distintas (una directa, otra por contradicción, etc.)

---

## 8. Demostración Constructiva (Existencia)

**Cuándo usar:** Hay que probar ∃x tal que P(x). Se exhibe el objeto explícitamente.

**Ejemplo — Existe un número irracional elevado a una potencia irracional que es racional**

Sea x = √2^√2. 
- Si x es racional, terminamos: √2^√2 es irracional elevado a irracional = racional.
- Si x es irracional: x^√2 = (√2^√2)^√2 = √2² = 2, que es racional. ∎

(Este es un ejemplo de demostración no constructiva — ¡no sabemos qué caso aplica!)

---

## 9. Doble Contención (Igualdad de Conjuntos)

**Cuándo usar:** Demostrar A = B para conjuntos.

**Estructura:**
```
(A ⊆ B): Sea x ∈ A arbitrario. Demostramos x ∈ B.
(B ⊆ A): Sea x ∈ B arbitrario. Demostramos x ∈ A.
Por lo tanto A = B. ∎
```

---

## 10. Invariante

**Cuándo usar:** Procesos iterativos, juegos, algoritmos. Se encuentra una cantidad que no cambia.

**Estructura:**
```
Definimos el invariante I.
Demostramos que I se preserva en cada paso.
Usamos I para concluir algo sobre el estado final.
```
