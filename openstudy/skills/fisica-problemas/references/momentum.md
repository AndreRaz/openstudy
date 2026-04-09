# Cantidad de Movimiento (Momentum) y Colisiones

## Momentum Lineal

**Definición:** p = m·v  [kg·m/s]
- Vector: misma dirección y sentido que v

**Segunda Ley de Newton en términos de momentum:**
ΣF = Δp/Δt

---

## Impulso

**Impulso:** J = F·Δt = Δp = p_f - p_i  [N·s = kg·m/s]

*El impulso de una fuerza es igual al cambio de momentum que produce.*

**Cuando la fuerza varía:** J = área bajo la curva F-t

---

## Conservación del Momentum

**Si ΣF_ext = 0 sobre el sistema:**
p_total_inicial = p_total_final
m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f

*El momentum total de un sistema aislado se conserva.*

**¿Cuándo aplicar?** Colisiones, explosiones, separaciones — procesos rápidos donde las fuerzas externas son despreciables durante el evento.

---

## Tipos de Colisiones

### Colisión Elástica
- Se conserva momentum ✓
- Se conserva energía cinética ✓

**Sistema de 2 cuerpos:**
v₁f = ((m₁-m₂)v₁ᵢ + 2m₂v₂ᵢ) / (m₁+m₂)
v₂f = ((m₂-m₁)v₂ᵢ + 2m₁v₁ᵢ) / (m₁+m₂)

**Casos especiales (v₂ᵢ = 0):**
- m₁ = m₂: v₁f = 0, v₂f = v₁ᵢ (intercambio completo)
- m₁ >> m₂: v₁f ≈ v₁ᵢ, v₂f ≈ 2v₁ᵢ
- m₁ << m₂: v₁f ≈ -v₁ᵢ, v₂f ≈ 0

### Colisión Perfectamente Inelástica
- Se conserva momentum ✓
- NO se conserva energía cinética ✗ (máxima pérdida)
- Los cuerpos quedan pegados: v_f común

**Ecuación:**
(m₁ + m₂)·v_f = m₁·v₁ᵢ + m₂·v₂ᵢ
v_f = (m₁v₁ᵢ + m₂v₂ᵢ) / (m₁+m₂)

**Energía perdida:** ΔK = K_f - K_i (siempre negativo, va a calor/deformación)

### Colisión Inelástica (parcial)
- Se conserva momentum ✓
- Se pierde parte de la energía cinética
- Los cuerpos no quedan pegados
- Se necesita dato adicional para resolver (ej: coeficiente de restitución)

**Coeficiente de restitución:**
e = |v₂f - v₁f| / |v₁ᵢ - v₂ᵢ|
- e = 1: elástica
- e = 0: perfectamente inelástica
- 0 < e < 1: inelástica parcial

---

## Explosiones y Separaciones

Momentum total se conserva: p_i = p_f

Si el sistema está en reposo antes: 0 = m₁v₁ + m₂v₂
→ Los fragmentos salen en direcciones opuestas.

---

## Colisiones en 2D

Conservar momentum en cada dirección por separado:
- **Eje x:** m₁v₁ₓᵢ + m₂v₂ₓᵢ = m₁v₁ₓf + m₂v₂ₓf
- **Eje y:** m₁v₁ᵧᵢ + m₂v₂ᵧᵢ = m₁v₁ᵧf + m₂v₂ᵧf

---

## Centro de Masa

**Posición:** x_cm = (m₁x₁ + m₂x₂ + ...) / (m₁ + m₂ + ...)

**Velocidad:** v_cm = p_total / m_total

**Propiedad clave:** Si ΣF_ext = 0, el centro de masa no acelera.
