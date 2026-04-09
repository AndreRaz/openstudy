# Termodinámica

## Temperatura y Calor

**Escalas de temperatura:**
- T(K) = T(°C) + 273.15
- T(°F) = (9/5)·T(°C) + 32

**Calor:** Q = m·c·ΔT
- c = calor específico [J/(kg·K)]
- Q > 0: el sistema absorbe calor
- Q < 0: el sistema cede calor

**Calores específicos comunes:**
| Sustancia | c [J/(kg·K)] |
|---|---|
| Agua | 4186 |
| Hielo | 2090 |
| Vapor | 2010 |
| Aluminio | 900 |
| Hierro | 450 |
| Cobre | 387 |

**Calor latente (cambio de fase):** Q = m·L
- L_fusión del agua: 3.34 × 10⁵ J/kg
- L_vaporización del agua: 2.26 × 10⁶ J/kg

---

## Gas Ideal

**Ley del Gas Ideal:** PV = nRT
- P = presión [Pa]
- V = volumen [m³]
- n = moles
- R = 8.314 J/(mol·K)
- T = temperatura [K] ← siempre en Kelvin

**Leyes derivadas (proceso con una variable fija):**

| Proceso | Variable fija | Relación |
|---|---|---|
| Isotérmico | T | P₁V₁ = P₂V₂ (Boyle) |
| Isobárico | P | V₁/T₁ = V₂/T₂ (Charles) |
| Isocórico | V | P₁/T₁ = P₂/T₂ (Gay-Lussac) |
| General | — | P₁V₁/T₁ = P₂V₂/T₂ |

---

## Primer Ley de la Termodinámica

**ΔU = Q - W**
- ΔU = cambio en energía interna
- Q = calor absorbido por el sistema (+) o cedido (-)
- W = trabajo realizado POR el sistema (+) o SOBRE el sistema (-)

**Trabajo en expansión/compresión:** W = ∫P dV

| Proceso | Trabajo |
|---|---|
| Isobárico | W = PΔV = P(V_f - V_i) |
| Isotérmico | W = nRT·ln(V_f/V_i) |
| Isocórico | W = 0 |
| Adiabático | Q = 0 → ΔU = -W |

**Energía interna de gas ideal monoatómico:** U = (3/2)nRT → ΔU = (3/2)nRΔT

---

## Segunda Ley de la Termodinámica

La entropía del universo siempre aumenta en procesos irreversibles.
ΔS = Q/T  [J/K]

**Eficiencia de máquina térmica:**
η = W/Q_H = 1 - Q_C/Q_H

**Eficiencia de Carnot (máxima posible):**
η_Carnot = 1 - T_C/T_H  (temperaturas en Kelvin)

---

## Transferencia de Calor

**Conducción:** Q/t = kA·ΔT/d
- k = conductividad térmica [W/(m·K)]
- A = área de sección transversal
- d = espesor

**Convección:** Q/t = hA·ΔT (h = coeficiente de convección)

**Radiación:** P = εσAT⁴
- σ = 5.67 × 10⁻⁸ W/(m²·K⁴) (Stefan-Boltzmann)
- ε = emisividad (0 a 1)
