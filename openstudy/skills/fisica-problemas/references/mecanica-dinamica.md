# Mecánica — Dinámica (Leyes de Newton)

## Las Tres Leyes de Newton

**1ª Ley (Inercia):** Un objeto en reposo permanece en reposo, y uno en movimiento continúa en movimiento rectilíneo uniforme, a menos que actúe una fuerza neta sobre él.

**2ª Ley:** ΣF = m·a  (la fuerza neta produce aceleración)

**3ª Ley (Acción-Reacción):** Si A ejerce una fuerza sobre B, entonces B ejerce una fuerza igual y opuesta sobre A.

---

## Diagrama de Cuerpo Libre (DCL)

**Pasos para construirlo:**
1. Aislar el objeto de interés.
2. Identificar TODAS las fuerzas que actúan SOBRE él (no las que ejerce).
3. Representar cada fuerza como vector desde el centro del objeto.
4. Establecer sistema de coordenadas (generalmente x horizontal, y vertical).
5. Descomponer fuerzas en componentes.

**Fuerzas comunes:**
- **Peso:** W = mg, hacia abajo
- **Normal:** N, perpendicular a la superficie de contacto
- **Fricción:** f, paralela a la superficie, opuesta al movimiento
- **Tensión:** T, a lo largo de la cuerda, alejándose del objeto
- **Resorte:** F = -kx (Ley de Hooke), hacia el equilibrio
- **Empuje/Aplicada:** En la dirección indicada

---

## Fuerzas de Fricción

**Fricción estática:** fₛ ≤ μₛ·N
- Actúa cuando el objeto está en reposo, oponiéndose a que se mueva.
- Puede tomar cualquier valor hasta su máximo: fₛ_max = μₛ·N

**Fricción cinética:** fₖ = μₖ·N
- Actúa cuando el objeto está en movimiento.
- Siempre opuesta a la dirección del movimiento.
- μₖ < μₛ siempre.

**¿Cuándo hay movimiento?** Si la fuerza aplicada supera fₛ_max = μₛ·N.

---

## Plano Inclinado

**Sistema de coordenadas recomendado:** x paralelo al plano (positivo cuesta abajo), y perpendicular al plano.

**Componentes del peso:**
- Paralela al plano: Wₓ = mg·sen θ (hacia abajo del plano)
- Perpendicular al plano: Wᵧ = mg·cos θ (hacia el plano)

**Normal:** N = mg·cos θ (si no hay otras fuerzas perpendiculares)

**Fricción:** f = μₖ·mg·cos θ

**Aceleración (sin fricción):** a = g·sen θ

**Aceleración (con fricción, bajando):** a = g(sen θ - μₖ·cos θ)

**Aceleración (con fricción, subiendo):** a = g(sen θ + μₖ·cos θ)

---

## Sistemas de Cuerpos Conectados

**Principio:** Cada cuerpo tiene su propio DCL, pero si están conectados por una cuerda inextensible, tienen la misma aceleración.

**Máquina de Atwood (dos masas colgando):**
- a = (m₁ - m₂)·g / (m₁ + m₂)
- T = 2·m₁·m₂·g / (m₁ + m₂)

**Cuerpo sobre mesa + cuerpo colgando:**
- a = m₂·g / (m₁ + m₂)  [sin fricción]
- a = (m₂·g - μₖ·m₁·g) / (m₁ + m₂)  [con fricción]

---

## Dinámica Circular

Cuando un objeto se mueve en círculo, la fuerza neta hacia el centro produce la aceleración centrípeta:

**ΣFₓ = m·v²/r** (hacia el centro)

**Ejemplos:**
- Curva horizontal: fricción provee la fuerza centrípeta → f = mv²/r
- Curva peraltada: componente de N → N·sen θ = mv²/r
- Objeto en torno de un punto (péndulo circular): T - mg·cos θ = mv²/L
- Tope de un loop: N + mg = mv²/r → v_min cuando N = 0

---

## Proceso general de resolución — Dinámica

1. Identificar el sistema (un cuerpo o varios).
2. Dibujar el DCL para cada cuerpo.
3. Establecer sistema de coordenadas.
4. Escribir ΣFₓ = maₓ y ΣFᵧ = maᵧ para cada cuerpo.
5. Si hay restricciones (cuerda inextensible, superficie): plantearlas.
6. Resolver el sistema de ecuaciones.
7. Verificar: ¿Los signos tienen sentido? ¿La aceleración apunta en la dirección esperada?
