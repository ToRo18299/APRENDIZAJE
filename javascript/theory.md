# 📘 Apuntes de JavaScript

## 1. Introducción a JavaScript

JavaScript es un lenguaje de programación:

- **Interpretado**: no necesita compilarse para ejecutarse.
- **Multiplataforma**: puede correr en navegadores (frontend) y en servidores (con Node.js).
- **Débilmente tipado**: no es necesario declarar el tipo de dato.
- **Dinámico**: puedes modificar estructuras y tipos en tiempo de ejecución.

Es uno de los **tres pilares del desarrollo web**:

- **HTML** → estructura
- **CSS** → estilos
- **JavaScript** → comportamiento

### Primer ejemplo

```js
console.log("¡Hola JavaScript!");
```
## 1. ¿Dónde se puede usar JavaScript?

JavaScript es muy versátil y se utiliza tanto en el **frontend (cliente)** como en el **backend (servidor)**. A continuación se muestran los contextos más comunes:

---

### 💻 En el Navegador (Frontend)

Es el entorno más común. Se usa para agregar **interactividad a las páginas web**.  
Algunos ejemplos:

- Validar formularios
- Crear menús desplegables
- Detectar eventos de usuario (clicks, teclas)
- Manipular el DOM (Document Object Model)

**Ejemplo básico:**

```html
<button onclick="alert('Hola!')">Haz clic</button>

```
## En el Servidor (Backend) con Node.js

JavaScript también puede ejecutarse fuera del navegador gracias a Node.js, un entorno de ejecución que permite:

- Crear servidores web
- Manejar bases de datos
- Construir APIs REST
- Automatizar tareas

## 2. Variables en JavaScript

- **`let`**: permite declarar variables que cambian.
- **`const`**: para valores constantes (no se pueden reasignar).
- **`var`**: forma antigua, evita usarla.

**Ejemplo**
```js
let nombre = "Ana";
const PI = 3.14;
```
### 2.1 Tipos de Datos

JavaScript tiene **tipos de datos primitivos**:

- `string` → texto  
- `number` → números (enteros o decimales)  
- `boolean` → `true` o `false`  
- `undefined` → variable declarada pero sin valor  
- `null` → ausencia intencional de valor  
- `object` → estructuras más complejas  
- `symbol` → identificadores únicos (avanzado)

###  Ejemplos

```js
let texto = "Hola";         // string
let edad = 25;              // number
let activo = true;          // boolean
let sinValor;               // undefined
let nada = null;            // null

```
## 3. Estructuras de Control

Permiten tomar decisiones o repetir acciones en el código.

### Condicional (if / else)

```js
let edad = 18;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```
### Bucle (for)

Repite un bloque de código un número determinado de veces.
```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```
### While
Repite un bloque mientras la condición sea verdadera.
```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```
### Switch
Selecciona entre múltiples opciones según el valor de una variable.

```js
let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana");
    break;
  default:
    console.log("Otro día");
}
```
## 4. Funciones

Las funciones permiten **organizar código reutilizable**. Se definen una vez y se pueden ejecutar (invocar) varias veces.

---

### Función declarada

Se define con la palabra `function` y puede usarse antes de ser escrita (por hoisting).

```js
function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(saludar("Ana")); // Hola Ana
```

### Función expresada (anónima)

Se guarda en una variable y no se puede llamar antes de su definición.
```js
const sumar = function(a, b) {
  return a + b;
};//Crea una función anónima (sin nombre) y la guarda en la variable sumar. 

console.log(sumar(3, 4)); // 7
```
Se usa cuando quieres asignar funciones como valores (por ejemplo, a objetos o como callbacks) o cuuando quieres evitar que se ejecuten antes accidentalmente.
### Función flecha (arrow function)

Es una forma **más corta y moderna** de escribir funciones.

---

### Sintaxis básica

```js
const saludar = (nombre) => {
  return "Hola " + nombre;
};

console.log(saludar("Ana")); // Hola Ana

```
## 5. Arrays y Objetos

---

###  Arrays

Un **array** es una lista ordenada de elementos.

```js
const frutas = ["manzana", "pera", "naranja"];

console.log(frutas[0]); // "manzana"
console.log(frutas.length); // 3
```
Se puede recorrerlos con for o forEach:
```js
frutas.forEach(fruta => console.log(fruta));
```

## Objetos
Un objeto agrupa datos con nombre (clave: valor).
```js 
const persona = {
  nombre: "Luis",
  edad: 30,
  activo: true
};

console.log(persona.nombre); // "Luis"
console.log(persona["edad"]); // 30
// Se puede acceder con . o [].

```
## 6. Métodos útiles de Arrays

Los arrays en JavaScript tienen métodos integrados que facilitan su manipulación.

### `.push()`
Agrega un elemento al final del array.

```js
const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]
```
### `.pop()`
Elimina el último elemento del array.
```js
const numeros = [1, 2, 3, 4];
numeros.pop();
console.log(numeros); // [1, 2, 3]
```
### `.forEach()`
Ejecuta una función por cada elemento del array.
```js
const numeros = [1, 2, 3];
numeros.forEach(n => console.log(n));
```
### `.map()`
Crea un nuevo array aplicando una función a cada elemento.
```js
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]
```
### `.filter()`
Crea un nuevo array con los elementos que cumplan una condición.
```js
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]
```
### `.find()`
Devuelve el primer elemento que cumpla una condición.
```js
const numeros = [1, 2, 3, 4];
const mayorA2 = numeros.find(n => n > 2);
console.log(mayorA2); // 3
```
### 7. Manipulación del DOM

| Acción               | Método / Propiedad                       | Ejemplo                                                  |
|----------------------|-------------------------------------------|----------------------------------------------------------|
| Seleccionar por ID   | `getElementById("id")`                   | `document.getElementById("titulo")`                      |
| Seleccionar por selector | `querySelector("selector")`         | `document.querySelector("p")`                            |
| Seleccionar todos    | `querySelectorAll("selector")`           | `document.querySelectorAll("p")`                         |
| Cambiar texto        | `element.textContent = "nuevo"`          | `titulo.textContent = "Hola"`                            |
| Cambiar estilo       | `element.style.prop = valor`             | `titulo.style.color = "red"`                             |
| Crear elemento       | `createElement("tag")`                   | `document.createElement("p")`                            |
| Agregar al DOM       | `appendChild(elemento)`                  | `document.body.appendChild(nuevoParrafo)`                |
| Eliminar elemento    | `element.remove()`                       | `document.getElementById("borrar").remove()`             |
## 8. Eventos en JavaScript

Los eventos permiten ejecutar código cuando el usuario interactúa con la página (como hacer clic, escribir, mover el mouse, etc.).

---

### Resumen de eventos comunes

| Evento       | ¿Cuándo ocurre?                          | Ejemplo de uso                                              |
|--------------|-------------------------------------------|-------------------------------------------------------------|
| `click`      | Cuando se hace clic en un elemento       | `boton.addEventListener("click", funcion)`                  |
| `input`      | Cuando se escribe en un campo de texto   | `campo.addEventListener("input", funcion)`                  |
| `change`     | Cuando cambia el valor de un campo       | `select.addEventListener("change", funcion)`                |
| `submit`     | Cuando se envía un formulario            | `form.addEventListener("submit", funcion)`                  |
| `mouseover`  | Cuando el mouse pasa por encima          | `elemento.addEventListener("mouseover", funcion)`           |
| `keydown`    | Cuando se presiona una tecla             | `document.addEventListener("keydown", funcion)`             |

---

###  Ejemplo básico

```js
const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
  alert("¡Hiciste clic!");
});

```
## 9. Temporizadores y Asincronía

JavaScript permite ejecutar código de forma **asíncrona**, es decir, sin detener el flujo principal del programa. Esto es útil para temporizadores, solicitudes a servidores, animaciones, etc.

---

###  Resumen de funciones asíncronas comunes

| Función        | ¿Qué hace?                                        | Ejemplo básico                                  |
|----------------|---------------------------------------------------|-------------------------------------------------|
| `setTimeout()` | Ejecuta una vez luego de un tiempo                | `setTimeout(() => { ... }, 2000)`              |
| `setInterval()`| Ejecuta repetidamente cada cierto intervalo       | `setInterval(() => { ... }, 1000)`             |
| `fetch()`      | Realiza una solicitud HTTP (GET, POST, etc.)      | `fetch("url").then(res => res.json())`         |
| `Promise`      | Representa un valor futuro (éxito o error)        | `new Promise((res, rej) => { ... })`           |
| `async/await`  | Sintaxis moderna para trabajar con promesas       | `const datos = await fetch(...)`               |

---

### 🧪 Ejemplo con `setTimeout` y `fetch`

```js
console.log("Inicio");

setTimeout(() => {
  console.log("Esto aparece después de 2 segundos");
}, 2000);

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));
```
## 10. Promesas y async/await

Las promesas permiten trabajar con operaciones asíncronas (como llamadas a una API) de forma más controlada.  
`async/await` es una forma moderna y más legible de manejar promesas.

---

### 📦 ¿Qué es una promesa?

Una promesa representa un **valor que estará disponible en el futuro**. Puede:

- **resolverse** (con éxito)
- **rechazarse** (con error)

---

###  Resumen: formas de manejar promesas

| Técnica        | ¿Qué hace?                                | Ejemplo básico                                   |
|----------------|--------------------------------------------|--------------------------------------------------|
| `.then()`      | Ejecuta código si la promesa se resuelve   | `fetch(...).then(res => res.json())`            |
| `.catch()`     | Captura errores si la promesa falla        | `.catch(error => console.log(error))`           |
| `async`        | Marca una función como asíncrona           | `async function cargar() { ... }`               |
| `await`        | Espera a que se resuelva una promesa       | `const res = await fetch(...)`                  |

---

### Ejemplo con `.then()` y `.catch()`

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

###  Ejemplo con async/await

```js
async function cargarUsuario() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

cargarUsuario();
```
