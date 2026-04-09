# Electromagnetismo

## Electrostática

**Ley de Coulomb:**
F = k·|q₁||q₂|/r²
- k = 8.99 × 10⁹ N·m²/C²
- Fuerza atractiva si cargas opuestas, repulsiva si iguales

**Campo eléctrico:** E = F/q₀ = k·Q/r²
- Dirección: alejándose de carga positiva, hacia carga negativa
- Unidades: [N/C] = [V/m]

**Superposición:** El campo total es la suma vectorial de campos individuales.

**Potencial eléctrico:** V = k·Q/r [Volts]
- Energía potencial: U = q·V = k·q₁q₂/r

**Relación campo-potencial:** E = -ΔV/Δr (el campo apunta de alto a bajo potencial)

---

## Circuitos Eléctricos

**Ley de Ohm:** V = I·R
- V [Volts], I [Amperes], R [Ohms]

**Potencia eléctrica:** P = V·I = I²·R = V²/R [Watts]

**Energía consumida:** E = P·t [J] o [kWh]

### Resistencias en serie
- R_total = R₁ + R₂ + R₃ + ...
- Misma corriente I en todas
- Voltaje se divide: V_total = V₁ + V₂ + ...

### Resistencias en paralelo
- 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...
- Para 2 resistencias: R_total = R₁R₂/(R₁+R₂)
- Mismo voltaje en todas
- Corriente se divide: I_total = I₁ + I₂ + ...

### Leyes de Kirchhoff
**Ley de nodos (corrientes):** ΣI_entrada = ΣI_salida (en todo nodo)
**Ley de mallas (voltajes):** Σ(ΔV) = 0 (alrededor de cualquier malla)

### Condensadores
- Capacitancia: C = Q/V [Farads]
- Energía: U = ½CV² = ½QV = Q²/(2C)
- En serie: 1/C_total = 1/C₁ + 1/C₂
- En paralelo: C_total = C₁ + C₂

---

## Magnetismo

**Fuerza magnética sobre carga en movimiento:**
F = q·v·B·sen θ
- θ = ángulo entre v y B
- Dirección: regla de la mano derecha

**Fuerza sobre conductor con corriente:**
F = I·L·B·sen θ

**Campo magnético de hilo largo:**
B = μ₀·I / (2πr)
- μ₀ = 4π × 10⁻⁷ T·m/A

**Campo magnético en centro de espira circular:**
B = μ₀·I / (2r)

**Campo en solenoide:**
B = μ₀·n·I (n = número de vueltas por metro)

---

## Inducción Electromagnética

**Ley de Faraday:** ε = -ΔΦ_B/Δt
- ε = fuerza electromotriz (fem) inducida [V]
- Φ_B = flujo magnético = B·A·cos θ [Weber = T·m²]

**Ley de Lenz:** La corriente inducida se opone al cambio de flujo que la origina.

**Fem en conductor moviéndose:**
ε = B·L·v (conductor de longitud L moviéndose a velocidad v en campo B)
