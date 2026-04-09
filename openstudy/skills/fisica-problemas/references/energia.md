# Trabajo, Energía y Potencia

## Trabajo

**Definición:** W = F·d·cos θ
- F = magnitud de la fuerza
- d = desplazamiento
- θ = ángulo entre F y d
- Unidades: Joules [J] = [N·m]

**Casos especiales:**
- F paralela a d (θ=0°): W = F·d (máximo, positivo)
- F perpendicular a d (θ=90°): W = 0 (la fuerza normal no hace trabajo)
- F antiparalela a d (θ=180°): W = -F·d (trabajo negativo, la fricción)

**Trabajo neto:** Wₙₑₜ = ΣW = suma de trabajos de todas las fuerzas

---

## Energía Cinética y Teorema Trabajo-Energía

**Energía cinética:** K = ½mv²  [J]

**Teorema Trabajo-Energía:**
Wₙₑₜ = ΔK = K_f - K_i = ½mv_f² - ½mv_i²

*El trabajo neto realizado sobre un objeto es igual al cambio en su energía cinética.*

---

## Energía Potencial

### Gravitatoria
Uₑ = mgh
- h medida desde el punto de referencia elegido (usualmente el suelo)
- Solo depende de la altura, no del camino recorrido

### Elástica (resorte)
Uₑ = ½kx²
- k = constante del resorte [N/m]
- x = deformación respecto al equilibrio [m]

---

## Conservación de Energía Mecánica

**Energía mecánica total:** E = K + U = ½mv² + mgh (+ ½kx² si hay resorte)

**Sin fuerzas no conservativas (sin fricción):**
E_i = E_f  →  K_i + U_i = K_f + U_f
½mv_i² + mgh_i = ½mv_f² + mgh_f

**Con fricción u otras fuerzas no conservativas:**
E_f = E_i + W_nc
(donde W_nc es el trabajo de fuerzas no conservativas, negativo si es fricción)

O equivalentemente:
K_i + U_i + W_aplicada = K_f + U_f + |W_fricción|

---

## Fuerzas Conservativas vs No Conservativas

| Conservativas | No conservativas |
|---|---|
| Gravedad | Fricción cinética |
| Resorte (Hooke) | Resistencia del aire |
| Coulomb (eléctrica) | Tensión muscular |
| El trabajo no depende del camino | El trabajo sí depende del camino |

---

## Potencia

**Potencia media:** P = W/t = ΔE/t

**Potencia instantánea:** P = F·v·cos θ

**Unidades:** Watts [W] = [J/s]
- 1 hp (caballo de fuerza) = 746 W

**Eficiencia:** η = P_útil / P_total × 100%

---

## Estrategia — Energía

**Usar conservación de energía cuando:**
- Hay cambio de posición (altura) o velocidad
- No hay fricción (o la fricción está dada)
- No necesitas conocer fuerzas intermedias ni el tiempo
- El camino es complicado pero los puntos inicial y final están claros

**Pasos:**
1. Elegir punto de referencia para h (donde U = 0)
2. Identificar estado inicial y estado final
3. Escribir E_i = E_f (+ W_nc si hay fricción o fuerzas externas)
4. Sustituir y resolver
5. Verificar que la energía tenga sentido (no negativa donde no debe)

---

## Casos clásicos

| Problema | Ecuación clave |
|---|---|
| Caída libre (energía) | mgh = ½mv² → v = √(2gh) |
| Resorte lanza objeto | ½kx² = ½mv² → v = x√(k/m) |
| Péndulo: fondo↔extremo | ½mv² = mgh → v = √(2gh) |
| Tobogán con fricción | mgh = ½mv² + f·d |
| Loop: velocidad mínima en cima | mg = mv²/r → v_min = √(gr) |
