# Falacias y Errores Comunes en Demostraciones Matemáticas

## ❌ Errores Lógicos

### 1. Petición de Principio (Circular Reasoning)
Usar lo que se quiere demostrar como parte de la demostración.
```
❌ INCORRECTO:
"Demostrar que √2 es irracional"
"Sabemos que √2 es irracional, por lo tanto no se puede escribir como p/q..."
```

### 2. Afirmar el Consecuente
De (P⟹Q) y Q, concluir P. ¡Inválido!
```
❌ Si llueve, el piso está mojado.
   El piso está mojado.
   Por lo tanto, llovió.  ← FALSO (pudo haber otra causa)
```

### 3. Generalizar desde Ejemplos
Verificar para n=1,2,3 no es una demostración para todos los n.
```
❌ "n² + n + 41 es primo para n=0,1,2,...,39, por lo tanto siempre es primo"
   Pero para n=40: 40² + 40 + 41 = 41² = 1681 = 41², ¡no es primo!
```

### 4. División por Cero Oculta
```
❌ Sea a = b.
   Entonces a² = ab
   a² - b² = ab - b²
   (a-b)(a+b) = b(a-b)
   a+b = b          ← Se dividió entre (a-b) = 0
   2b = b
   2 = 1  ← ABSURDO por error, no por contradicción válida
```

### 5. Cuantificadores Confundidos
"∃x ∀y P(x,y)" ≠ "∀y ∃x P(x,y)". El orden importa mucho.
```
❌ "Para todo x, existe y mayor que x" (verdad en ℝ)
≠  "Existe y que es mayor que todo x" (falso en ℝ)
```

---

## ⚠️ Errores Técnicos Frecuentes

### En Inducción
- **Olvidar el caso base** — Sin él, la inducción no arranca.
- **No usar la H.I.** — Si no usas la hipótesis inductiva, algo está mal.
- **Inducción del caso incorrecto** — Asumir P(k) cuando necesitas P(k-1) o P(k/2).
- **Paso inductivo solo válido para k grande** — Hay que revisar si aplica desde n₀.

### En Contradicción
- **Llegar a una "contradicción" falsa** — Revisar que el absurdo realmente lo sea.
- **Olvidar negar correctamente** — ¬(∀x P(x)) = ∃x ¬P(x), no ∀x ¬P(x).

### En Álgebra/Cálculo
- **Raíces cuadradas:** √(a²) = |a|, no a.
- **Logaritmos:** log(a·b) = log a + log b solo para a,b > 0.
- **Límites:** No se puede separar un límite de producto si los límites individuales son ∞·0.
- **Series:** No reordenar términos en series que no convergen absolutamente.

---

## ✅ Checklist antes de terminar una demostración

- [ ] ¿Usé todas las hipótesis? (Si no usé alguna, probablemente haya un error)
- [ ] ¿Cada paso tiene justificación?
- [ ] ¿Los cuantificadores están en el orden correcto?
- [ ] ¿Verifiqué el caso base (si es inducción)?
- [ ] ¿La contradicción es genuina (si es por reducción al absurdo)?
- [ ] ¿El "sea x arbitrario" cubre todos los casos necesarios?
- [ ] ¿Confundí implicación con equivalencia en algún paso?
