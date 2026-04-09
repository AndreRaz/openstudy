# Series y Sucesiones — Referencia

## Sucesiones

**Límite de una sucesión:** lím_{n→∞} aₙ = L
Si existe L finito → converge. Si no → diverge.

**Reglas:**
- Suma, producto, cociente de límites aplican normalmente
- Si |r| < 1: lím rⁿ = 0
- Si |r| > 1: diverge

---

## Series — Pruebas de Convergencia

### Resumen de pruebas

| Prueba | Cuándo usar | Resultado |
|---|---|---|
| **Término general** | Siempre primero | Si lím aₙ ≠ 0 → diverge |
| **Serie geométrica** | aₙ = arⁿ | |r|<1 → converge a a/(1-r) |
| **Serie p** | aₙ = 1/nᵖ | p>1 → converge; p≤1 → diverge |
| **Integral** | aₙ = f(n) decreciente, positiva | Convergencia ↔ ∫f dx converge |
| **Comparación** | aₙ ≤ bₙ o aₙ ≥ bₙ | Comparar con serie conocida |
| **Comparación límite** | lím aₙ/bₙ = c > 0 | Ambas convergen o ambas divergen |
| **Razón (d'Alembert)** | Factoriales, exponentes | L = lím|aₙ₊₁/aₙ|: <1 conv, >1 div, =1 incon |
| **Raíz (Cauchy)** | aₙ = (f(n))ⁿ | L = lím ⁿ√|aₙ|: misma regla |
| **Series alternantes** | (-1)ⁿaₙ | Si aₙ↓0 → converge |

### Convergencia absoluta vs condicional
- **Converge absolutamente** si Σ|aₙ| converge
- **Converge condicionalmente** si Σaₙ converge pero Σ|aₙ| diverge
- Convergencia absoluta ⟹ convergencia

---

## Series de Potencias

**Forma:** Σcₙ(x-a)ⁿ

**Radio de convergencia R:**
- R = 1/lím|cₙ₊₁/cₙ| (prueba de razón)
- o R = 1/lím ⁿ√|cₙ| (prueba de raíz)

**Intervalo de convergencia:** (a-R, a+R). Verificar extremos por separado.

---

## Series de Taylor y Maclaurin

**Serie de Taylor** de f alrededor de x = a:
f(x) = Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ

**Serie de Maclaurin** (caso a = 0):
f(x) = Σ f⁽ⁿ⁾(0)/n! · xⁿ

### Series de Maclaurin importantes

| Función | Serie | Radio |
|---|---|---|
| eˣ | Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... | ∞ |
| sen(x) | Σ (-1)ⁿ x^(2n+1)/(2n+1)! = x - x³/6 + x⁵/120 - ... | ∞ |
| cos(x) | Σ (-1)ⁿ x^(2n)/(2n)! = 1 - x²/2 + x⁴/24 - ... | ∞ |
| 1/(1-x) | Σ xⁿ = 1 + x + x² + x³ + ... | |x|<1 |
| ln(1+x) | Σ (-1)ⁿ⁺¹ xⁿ/n = x - x²/2 + x³/3 - ... | |x|≤1, x≠-1 |
| arctan(x) | Σ (-1)ⁿ x^(2n+1)/(2n+1) = x - x³/3 + x⁵/5 - ... | |x|≤1 |
| (1+x)ᵏ | Σ C(k,n) xⁿ | |x|<1 |

### Usos de series de Taylor
- Aproximar funciones (tomar primeros términos)
- Calcular límites difíciles (sustituir la serie)
- Evaluar integrales sin antiderivada elemental
- Calcular valores numéricos con precisión controlada
