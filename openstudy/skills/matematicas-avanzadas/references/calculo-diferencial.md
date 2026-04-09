# Cálculo Diferencial — Referencia

## Límites

### Técnicas para evaluar límites

| Situación | Técnica |
|---|---|
| Sustitución directa funciona | Sustituir x → a directamente |
| Forma 0/0 con polinomios | Factorizar y cancelar |
| Forma 0/0 o ∞/∞ | Regla de L'Hôpital |
| Raíces en denominador/numerador | Racionalizar (multiplicar conjugado) |
| x → ±∞ con racional | Dividir entre la potencia mayor |
| Límites trigonométricos | Usar lim(sen x)/x = 1 cuando x→0 |
| Forma 1^∞, 0^0, ∞^0 | Tomar logaritmo + L'Hôpital |

### Formas indeterminadas y cómo resolverlas

```
0/0  → Factorizar, L'Hôpital, o racionalizar
∞/∞  → L'Hôpital o dividir entre potencia mayor
0·∞  → Reescribir como 0/(1/∞) o ∞/(1/0) → 0/0 o ∞/∞
∞-∞  → Factorizar, combinar fracciones → 0/0
1^∞  → ln L = lím [f·ln g] → forma 0·∞
0^0  → ln L = lím [g·ln f] → forma 0·∞
∞^0  → ln L = lím [g·ln f] → forma 0·∞
```

### Regla de L'Hôpital
Si lím f(x)/g(x) es 0/0 o ±∞/±∞, entonces:
**lím f(x)/g(x) = lím f'(x)/g'(x)**
(Aplicar las veces necesarias mientras persista la forma indeterminada)

---

## Derivadas

### Reglas básicas

| Función | Derivada |
|---|---|
| c (constante) | 0 |
| xⁿ | n·xⁿ⁻¹ |
| eˣ | eˣ |
| aˣ | aˣ·ln(a) |
| ln(x) | 1/x |
| logₐ(x) | 1/(x·ln a) |
| sen(x) | cos(x) |
| cos(x) | -sen(x) |
| tan(x) | sec²(x) |
| cot(x) | -csc²(x) |
| sec(x) | sec(x)·tan(x) |
| csc(x) | -csc(x)·cot(x) |
| arcsen(x) | 1/√(1-x²) |
| arccos(x) | -1/√(1-x²) |
| arctan(x) | 1/(1+x²) |

### Reglas de combinación

**Suma/Resta:** (f ± g)' = f' ± g'

**Producto:** (f·g)' = f'·g + f·g'

**Cociente:** (f/g)' = (f'·g - f·g') / g²

**Cadena:** (f(g(x)))' = f'(g(x))·g'(x)

### Derivada implícita
Derivar ambos lados respecto a x, tratando y como función de x:
- La derivada de y es dy/dx
- La derivada de y² es 2y·(dy/dx)
- Despejar dy/dx al final

### Derivadas de orden superior
- y'' = d²y/dx² = segunda derivada
- Interpretar: y'' > 0 → cóncava hacia arriba, y'' < 0 → cóncava hacia abajo

---

## Análisis de Funciones

### Criterios para máximos y mínimos

**Criterio de la primera derivada:**
- f'(c) = 0 o no existe → c es punto crítico
- f' cambia de + a - en c → máximo local
- f' cambia de - a + en c → mínimo local
- f' no cambia de signo → punto de inflexión

**Criterio de la segunda derivada:**
- f'(c) = 0 y f''(c) > 0 → mínimo local
- f'(c) = 0 y f''(c) < 0 → máximo local
- f''(c) = 0 → inconcluso, usar primera derivada

### Análisis completo de una función — Pasos

1. Dominio
2. Intersecciones con ejes (f(0) y f(x)=0)
3. Simetría (par/impar)
4. Asíntotas (verticales: denominador=0; horizontales: lím x→±∞)
5. Monotonía: signo de f'
6. Máximos y mínimos locales
7. Concavidad: signo de f''
8. Puntos de inflexión: f''=0 y cambia signo
9. Sketch

---

## Optimización

### Proceso de optimización

1. **Leer con cuidado** — ¿Qué se maximiza/minimiza?
2. **Variables** — Definir variables con unidades.
3. **Función objetivo** — La función que se optimiza.
4. **Restricción** — Ecuación que relaciona las variables.
5. **Reducir a una variable** — Usar la restricción para eliminar una variable.
6. **Derivar e igualar a cero** — Encontrar puntos críticos.
7. **Verificar** — ¿Es máximo o mínimo? ¿Tiene sentido físicamente?
8. **Responder** — Con unidades y en contexto.

### Problemas clásicos
- **Caja de volumen máximo** — Cortar esquinas de cartón
- **Cerca con área máxima** — Cercar terreno con longitud fija
- **Distancia mínima** — De un punto a una curva
- **Tiempo mínimo** — Caminos mixtos (río + tierra)
