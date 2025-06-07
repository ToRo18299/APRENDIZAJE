#  Apuntes de CSS

Cascading Style Sheets (CSS) es el lenguaje que usamos para darle estilo y diseño a las páginas web.

---

## Sintaxis básica

```css
selector {
  propiedad: valor;
}
```
### Ejemplo
```css
h1 {
  color: blue;
  font-size: 24px;
}
```
### Explicación rápida:
- h1: es el selector, indica que se aplicarán estos estilos a todos los elementos del HTML.

- color: propiedad que cambia el color del texto.

- font-size: propiedad que define el tamaño de la letra

##  Ejemplo comentado de estilos CSS

A continuación se muestra un bloque de código con propiedades comunes y su explicación:

```css
/* Estilos para todos los párrafos */
p {
  color: black;                  /* Color del texto */
  background-color: #f0f0f0;     /* Color de fondo del párrafo */
  font-size: 16px;               /* Tamaño de la fuente */
  text-align: justify;           /* Alinea el texto justificado */
  margin: 20px;                  /* Margen externo (espacio fuera del elemento) */
  padding: 10px;                 /* Relleno interno (espacio dentro del borde) */
  border: 2px solid gray;        /* Borde de 2px, línea sólida y color gris */
  border-radius: 5px;            /* Esquinas redondeadas */
  line-height: 1.5;              /* Altura de línea (espaciado entre líneas de texto) */
}
```

## 📦 Modelo de Caja (Box Model)

Todo elemento HTML puede entenderse como una caja rectangular compuesta por:

| Parte     | Descripción |
|-----------|-------------|
| `content` | Contenido del elemento (texto, imagen, etc.) |
| `padding` | Espacio entre el contenido y el borde |
| `border`  | Borde alrededor del padding |
| `margin`  | Espacio externo, separa el elemento de otros |

###  Ejemplo en CSS comentado:

```css
.caja {
  width: 200px;                  /* Ancho del contenido */
  height: 100px;                 /* Alto del contenido */
  padding: 20px;                 /* Relleno interno */
  border: 2px solid black;       /* Borde de 2px sólido y negro */
  margin: 30px;                  /* Margen externo */
  background-color: #e0e0e0;     /* Color de fondo */
}
```
##  Flexbox – Diseño flexible en CSS

Flexbox es un modelo de diseño que facilita la distribución y alineación de elementos en una página, especialmente en diseños responsivos.

---

### Contenedor flexible (flex container)

Para activar Flexbox, se debe aplicar `display: flex` al contenedor:

```css
.contenedor {
  display: flex;
}
```
| Propiedad         | Valor común                         | Descripción                                     |
|-------------------|--------------------------------------|-------------------------------------------------|
| `flex-direction`  | `row`, `column`                     | Dirección de los elementos (horizontal o vertical) |
| `justify-content` | `center`, `space-between`, `space-around` | Alineación horizontal                       |
| `align-items`     | `center`, `flex-start`, `flex-end`  | Alineación vertical                              |
| `gap`             | `10px`, `1rem`                      | Espacio entre elementos                          |

###  Ejemplo de uso
```css
.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

```
En HTML sería:
```html
<div class="contenedor">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```
Flexbox es ideal para menús, galerías, secciones de contenido, y distribuciones adaptables.
##  8. CSS Grid – Diseño en dos dimensiones

CSS Grid permite organizar contenido en **filas y columnas**, ideal para construir layouts más complejos y responsivos.

---

###  Propiedades básicas del contenedor grid

| Propiedad                   | Valor común                             | Descripción |
|-----------------------------|------------------------------------------|-------------|
| `display`                   | `grid`                                   | Activa el modo grid |
| `grid-template-columns`     | `1fr 1fr`, `repeat(3, 1fr)`, `200px 1fr` | Define el número y tamaño de columnas |
| `grid-template-rows`        | `100px 1fr`, `repeat(2, auto)`           | Define las filas |
| `gap` o `grid-gap`          | `10px`, `1rem`                           | Espacio entre columnas y filas |
| `justify-items`             | `start`, `center`, `end`                 | Alineación horizontal de los ítems |
| `align-items`               | `start`, `center`, `end`                 | Alineación vertical de los ítems |

---

###  Propiedades comunes en los ítems

| Propiedad        | Valor común           | Descripción |
|------------------|------------------------|-------------|
| `grid-column`    | `1 / 3`, `span 2`       | Extiende el ítem en columnas |
| `grid-row`       | `1 / 2`, `span 2`       | Extiende el ítem en filas |
| `justify-self`   | `start`, `center`       | Alineación horizontal individual |
| `align-self`     | `start`, `end`          | Alineación vertical individual |

---

###  Ejemplo completo

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  gap: 10px;
}

.item1 {
  grid-column: 1 / 3; /* Ocupa ambas columnas */
}
```
##  9. Media Queries – Diseño responsive

Las media queries permiten adaptar el diseño de una página a diferentes **tamaños de pantalla**, dispositivos o condiciones.

---

###  Sintaxis básica

```css
@media (condición) {
  /* Reglas CSS que se aplican si se cumple la condición */
}
```
| Condición               | Ejemplo                                 | ¿Qué hace?                                                       |
|-------------------------|------------------------------------------|------------------------------------------------------------------|
| `max-width`             | `@media (max-width: 768px)`              | Aplica estilos cuando el ancho de la pantalla es ≤ 768px        |
| `min-width`             | `@media (min-width: 1024px)`             | Aplica estilos cuando el ancho de la pantalla es ≥ 1024px       |
| `orientation`           | `@media (orientation: landscape)`        | Aplica cuando el dispositivo está en orientación horizontal      |
| `prefers-color-scheme`  | `@media (prefers-color-scheme: dark)`    | Detecta si el usuario tiene activado el modo oscuro              |
## 🎞️ 10. Transiciones y Animaciones

Las transiciones y animaciones permiten que los cambios de estilo se realicen de forma **suave y visualmente atractiva**.

---

### Transiciones

Las transiciones aplican efectos suaves cuando cambian los valores de propiedades CSS.

####  Propiedades clave

| Propiedad        | Valor común           | Descripción |
|------------------|------------------------|-------------|
| `transition`     | `all 0.3s ease`        | Atajo para aplicar transición a múltiples propiedades |
| `transition-property` | `background-color`, `transform` | Qué propiedad cambia |
| `transition-duration` | `0.5s`, `1s`         | Tiempo que dura la transición |
| `transition-timing-function` | `ease`, `linear`, `ease-in-out` | Curva de velocidad |
| `transition-delay` | `0s`, `0.2s`          | Retraso antes de iniciar |

####  Ejemplo de transición:

```css
.boton {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.boton:hover {
  background-color: red;
}
```
| Propiedad                 | Valor común                 | Descripción                                             |
|---------------------------|------------------------------|---------------------------------------------------------|
| `animation-name`          | `mover`, `parpadear`         | Nombre del conjunto de `@keyframes` a usar             |
| `animation-duration`      | `1s`, `2s`                   | Duración total de la animación                         |
| `animation-timing-function` | `ease`, `linear`            | Curva que define la velocidad de la animación          |
| `animation-iteration-count` | `1`, `infinite`             | Número de veces que se repite la animación             |
| `animation-delay`         | `0s`, `1s`                   | Tiempo de espera antes de comenzar la animación        |
| `animation-fill-mode`     | `forwards`, `backwards`, `both` | Define el estado final/inicial una vez termina/comienza |

### 🔷 11. Variables CSS

Las variables CSS permiten **reutilizar valores** (como colores, tamaños o márgenes) en múltiples reglas. Se definen con doble guion (`--`) dentro de un selector como `:root`, y se usan con `var(--nombre)`.

| Concepto            | Descripción                                       |
|---------------------|---------------------------------------------------|
| Definición           | Se crean dentro de `:root` o cualquier selector  |
| Sintaxis             | `--nombre-variable: valor;`                      |
| Uso                 | `color: var(--nombre-variable);`                 |
| Ventajas             | Reutilización, mantenimiento más fácil, temas    |

---

### 🧠 12. Buenas prácticas CSS

| Recomendación                       | Motivo                                               |
|------------------------------------|------------------------------------------------------|
| Usar nombres de clase significativos (`.btn-primario`) | Mejora la legibilidad y mantenimiento del código     |
| Separar CSS en archivos (`main.css`, `responsive.css`) | Organización por módulos o responsabilidad           |
| Usar unidades relativas (`rem`, `%`) | Mayor responsividad en diferentes dispositivos       |
| Definir variables CSS (`:root { --color: #333; }`) | Facilita la consistencia visual y cambios rápidos    |
| Resetear estilos con `reset.css` o `normalize.css` | Evita diferencias entre navegadores                  |

---