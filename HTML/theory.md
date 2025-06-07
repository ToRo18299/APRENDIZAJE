
# Apuntes de HTML

Estos apuntes cubren los fundamentos de HTML organizados por secciones para facilitar el aprendizaje y consulta rápida.

---

## 1. Introducción a HTML

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Utiliza **etiquetas** para estructurar el contenido.

### Estructura básica

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Este es un párrafo.</p>
  </body>
</html>
```

---

## 2. Etiquetas comunes

| Etiqueta | Descripción |
|----------|-------------|
| `<h1>` a `<h6>` | Títulos o encabezados (de mayor a menor) |
| `<p>` | Párrafo |
| `<a>` | Hipervínculo |
| `<img>` | Imagen |
| `<ul>`, `<ol>`, `<li>` | Listas desordenadas/ordenadas |
| `<div>` | Contenedor genérico |
| `<span>` | Contenedor en línea |

---

## 3. Atributos esenciales

| Atributo | Uso | Ejemplo |
|----------|-----|---------|
| `href` | Enlaces | `<a href="https://ejemplo.com">Ir</a>` |
| `src` | Fuente de imagen | `<img src="img.jpg" alt="Imagen">` |
| `alt` | Texto alternativo para imágenes | |
| `id` | Identificador único | `<div id="menu">` |
| `class` | Agrupación de estilos | `<p class="resaltado">` |

---

## 4. Formularios

| Etiqueta | Uso |
|----------|-----|
| `<form>` | Contenedor del formulario |
| `<input>` | Campo de entrada |
| `<label>` | Etiqueta descriptiva |
| `<textarea>` | Área de texto |
| `<button>` | Botón |

---

## 5. Buenas prácticas

- Usar etiquetas semánticas: `<header>`, `<main>`, `<footer>`, `<article>`, etc.
- Validar el HTML con herramientas como W3C Validator.
- Incluir el atributo `alt` en todas las imágenes.
- Mantener indentación y estructura clara.

---
