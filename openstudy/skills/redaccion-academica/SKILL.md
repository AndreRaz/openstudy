---
name: redaccion-academica
description: Redacta, estructura y produce documentos académicos de alta calidad, incluyendo ensayos, reportes, informes de laboratorio, tesis, resúmenes, monografías y cualquier documento escolar o universitario — y los entrega como archivo Word (.docx) listo para entregar. Usar esta skill SIEMPRE que el usuario pida escribir, redactar, estructurar o mejorar un documento académico, o cuando pida un Word, .docx, ensayo, reporte, informe, tarea escrita, resumen ejecutivo o trabajo de investigación. También usar cuando el usuario diga "hazme la tarea", "redáctame", "escríbeme", "corrígeme", "mejora mi redacción", "hazlo en formato APA/MLA/Chicago", o cuando suba un borrador para pulir. Esta skill produce el documento como archivo .docx descargable Y cuida la calidad de la redacción.
---

# Skill: Redacción Académica y Word

Esta skill tiene dos propósitos que siempre van juntos:
1. **Redactar** el contenido con calidad académica real.
2. **Producir** el documento como archivo `.docx` descargable y listo para entregar.

Siempre leer `references/tipos-de-documento.md` para identificar el tipo exacto de documento y su estructura esperada, luego leer `references/estilos-de-cita.md` si se requieren citas o bibliografía.

---

## Paso 1: Entender el encargo

Antes de escribir, identificar:

1. **Tipo de documento** — ¿Ensayo argumentativo? ¿Reporte de laboratorio? ¿Resumen? ¿Monografía? Ver `references/tipos-de-documento.md`.
2. **Tema** — ¿Qué contenido debe tener?
3. **Extensión** — Palabras, páginas o secciones requeridas.
4. **Estilo de cita** — APA, MLA, Chicago, IEEE, o ninguno. Ver `references/estilos-de-cita.md`.
5. **Nivel académico** — Preparatoria, licenciatura, posgrado.
6. **Idioma y tono** — ¿Formal académico? ¿Técnico? ¿Divulgativo?
7. **Material de partida** — ¿El usuario tiene un borrador, notas, fuentes, o parte desde cero?

Si falta información crítica (tema, tipo de documento), preguntar antes de empezar. Si la mayoría está claro, proceder y declarar los supuestos.

---

## Paso 2: Planear la estructura

Antes de escribir, hacer un esquema (outline) explícito:

```
Título tentativo
├── Introducción
│   ├── Contexto / Antecedentes
│   ├── Planteamiento del problema / Tesis
│   └── Organización del documento
├── Sección 1: [Nombre]
│   ├── Subsección 1.1
│   └── Subsección 1.2
├── Sección 2: [Nombre]
├── ...
└── Conclusión
    ├── Síntesis de argumentos
    └── Reflexión final / Recomendaciones
```

Compartir el esquema con el usuario si hay tiempo, o proceder directamente si el encargo es claro.

---

## Paso 3: Redactar con calidad académica

### Principios de redacción académica

**Claridad:** Una idea por oración. Oraciones cortas y directas. Párrafos con oración temática clara.

**Coherencia:** Cada párrafo tiene: oración temática → desarrollo → cierre/transición. Usar conectores lógicos.

**Precisión:** Vocabulario exacto, sin ambigüedades. Definir términos técnicos.

**Objetividad:** Evitar lenguaje emotivo o coloquial. Primera persona solo si el estilo lo permite.

**Densidad informativa:** Cada oración aporta contenido. Eliminar relleno y redundancias.

### Conectores y transiciones

| Función | Conectores |
|---|---|
| Añadir idea | además, asimismo, igualmente, por otro lado |
| Contrastar | sin embargo, no obstante, en contraste, a pesar de |
| Causa | debido a, dado que, puesto que, a causa de |
| Consecuencia | por lo tanto, en consecuencia, de ahí que |
| Ejemplificar | por ejemplo, tal es el caso de, como ilustra |
| Concluir | en conclusión, en síntesis, finalmente, así pues |
| Secuencia | en primer lugar, posteriormente, a continuación |

### Párrafo modelo (estructura PEEL)
- **P**unto: oración temática que expone la idea principal
- **E**videncia: dato, cita, ejemplo que la sustenta
- **E**xplicación: análisis de cómo la evidencia apoya el punto
- **L**igadura: transición hacia el siguiente párrafo

---

## Paso 4: Producir el archivo Word (.docx)

**SIEMPRE entregar el documento como .docx**, no solo como texto en el chat.

### Instrucciones técnicas

Esta skill usa el paquete `docx` de npm para generar el archivo. Seguir estas reglas:

1. **Leer** `/mnt/skills/public/docx/SKILL.md` para los detalles técnicos de generación.
2. **Formato académico estándar:**
   - Fuente: Times New Roman 12pt o Arial 12pt
   - Interlineado: 2.0 (doble espacio) para la mayoría de formatos académicos
   - Márgenes: 2.54 cm (1 pulgada) por todos lados
   - Sangría de primera línea: 1.27 cm en párrafos de cuerpo
   - Numeración de páginas: en esquina superior/inferior derecha
3. **Estructura del archivo:**
   - Portada (si aplica): título, autor, institución, fecha
   - Tabla de contenido automática (si el documento tiene 3+ secciones)
   - Cuerpo con encabezados jerárquicos (Heading1, Heading2...)
   - Bibliografía/Referencias al final (si hay citas)
4. **Guardar** en `/mnt/user-data/outputs/[nombre-documento].docx`
5. **Validar** con el script del docx skill antes de entregar

### Plantilla de formato por estilo

| Estilo | Fuente | Interlineado | Sangría | Encabezado |
|---|---|---|---|---|
| APA 7ma | Times New Roman 12 | Doble | 1.27 cm | Título centrado, corriendo |
| MLA 9na | Times New Roman 12 | Doble | 1.27 cm | Apellido + página arriba |
| Chicago | Times New Roman 12 | Doble | 1.27 cm | Opcional |
| IEEE | Times New Roman 10 | Simple | Sin sangría | Numerado |
| Sin estilo | Arial 12 | 1.5 | 1.0 cm | Numeración simple |

---

## Paso 5: Revisar antes de entregar

Checklist de calidad:

- [ ] ¿El documento responde exactamente lo que se pidió?
- [ ] ¿La estructura es clara y sigue el esquema planeado?
- [ ] ¿Cada párrafo tiene una idea central y fluye hacia el siguiente?
- [ ] ¿Las citas están en el formato correcto?
- [ ] ¿La bibliografía está completa y ordenada?
- [ ] ¿El tono es consistente (formal/académico) a lo largo del texto?
- [ ] ¿El archivo .docx abre correctamente y tiene el formato visual esperado?

---

## Referencias

- `references/tipos-de-documento.md` — Estructura específica de cada tipo de documento
- `references/estilos-de-cita.md` — APA, MLA, Chicago, IEEE con ejemplos
