# Aprendiendo React con TypeScript — Parte 1: Fundamentos

## 1. ¿Qué es React?

React es una **biblioteca de JavaScript** creada por Meta (Facebook) para construir interfaces de usuario (UIs) basadas en componentes.

### 🔑 Características clave:
- **Componentes reutilizables:** cada parte de la UI se representa como una función o clase.
- **Virtual DOM:** actualiza solo lo que cambia, haciendo la app más eficiente.
- **Flujo de datos unidireccional:** los datos fluyen de padres a hijos.
- **JSX:** una sintaxis que permite escribir HTML dentro de JavaScript.

## 2. ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** que agrega **tipado estático**. Se compila a JavaScript y ayuda a detectar errores antes de ejecutar el código.

### 🔍 Ventajas de TypeScript:
- Detecta errores en tiempo de desarrollo.
- Mejora el autocompletado y la documentación.
- Permite definir estructuras de datos claras.
- Es especialmente útil en proyectos React grandes o colaborativos.

## 3. ¿Por qué usar React con TypeScript?

Combinar React con TypeScript permite:
- Saber qué tipo de datos recibe un componente (**props**).
- Tipar correctamente el estado (**useState**).
- Tipar eventos de formularios y clics.
- Evitar errores como pasar `undefined` donde se espera un string.
- Crear aplicaciones más robustas y fáciles de mantener.

> 🧠 **Ejemplo conceptual:**
> Si tienes un botón que recibe una etiqueta (`label`), puedes asegurar que siempre sea un `string`:
> 
> ```ts
> interface ButtonProps {
>   label: string
> }
> ```

## 4. ¿Qué es un componente?

Un **componente** es una función (o clase) que devuelve una parte de la interfaz de usuario.

### Ejemplo simple en React + TypeScript:

```tsx
import React from 'react'

interface SaludoProps {
  nombre: string
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>Hola, {nombre}</h1>
}
```
# Parte 2: Estructura del Proyecto y JSX

## 1. Estructura básica de un proyecto React con Vite + TypeScript

Cuando creas un proyecto con Vite y React + TypeScript, obtienes algo así:

### 🗂️ Estructura típica de un proyecto React + TypeScript con Vite

```bash
mi-app/
├── public/               # Archivos públicos (favicon, index.html)
├── src/                  # Código fuente
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
├── index.html            # HTML base
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias y scripts
├── vite.config.ts        # Configuración de Vite
```
### Archivos clave:

- **`main.tsx`**: Es el archivo donde se monta el componente principal (`<App />`) dentro del DOM.
  
```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
**App.tsx**: Es el componente principal, generalmente donde se estructura la app.

```tsx
// src/App.tsx
import React from 'react';

const App = () => {
  return <h1>Hola desde App</h1>;
};

export default App;
```

## 2. ¿Qué es JSX?

JSX es una extensión de JavaScript (y TypeScript) que permite escribir código similar a HTML dentro de los archivos `.tsx`.

### 🧠 ¿Por qué usar JSX?

* Hace el código más legible y declarativo.
* Permite mezclar lógica y presentación.
* Se transforma en llamadas a `React.createElement()` por detrás.

### 🔧 Ejemplo básico:

```tsx
const elemento = <h2>Hola JSX</h2>;
```

---

### 📌 Características clave de JSX:

* Puedes usar **expresiones de JavaScript** dentro de llaves `{ ... }`.
* Todo JSX debe estar **dentro de un solo contenedor padre**.

```tsx
return (
  <div>
    <h1>Hola</h1>
    <p>Bienvenido</p>
  </div>
);
```

* Puedes usar `<>...</>` como "fragmento" si no quieres un `div`.

```tsx
return (
  <>
    <h1>Hola</h1>
    <p>Esto es un fragmento</p>
  </>
);
```

* El atributo `class` en HTML se escribe `className` en JSX.
* Los eventos usan camelCase: `onClick`, `onChange`, `onSubmit`, etc.

### 🎯 Ejemplo completo:

```tsx
const nombre = 'Laura';

function Saludo() {
  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <p>Bienvenida a React con TypeScript</p>
    </div>
  );
}
```

---

## 3. Tipado básico de componentes

En React + TypeScript, tipar las **props** mejora la robustez del código.

### ✅ Opción 1: Usar `React.FC<Props>`

```tsx
interface Props {
  mensaje: string;
}

const MiComponente: React.FC<Props> = ({ mensaje }) => {
  return <p>{mensaje}</p>;
};
```

### ✅ Opción 2 (más flexible): usar funciones tipadas

```tsx
interface Props {
  mensaje: string;
}

function MiComponente({ mensaje }: Props) {
  return <p>{mensaje}</p>;
}
```

> 🧠 Ambas formas son válidas. Muchos desarrolladores prefieren la segunda por su simplicidad y control sobre los tipos.

---

## 4. Estilos en JSX

### 🎨 Estilo en línea (con TypeScript)

```tsx
const estilo: React.CSSProperties = {
  color: 'blue',
  fontSize: '20px'
};

function Titulo() {
  return <h1 style={estilo}>Texto azul</h1>;
}
```

### 🎨 Usar clases CSS externas

Primero define tu clase en `App.css`:

```css
/* App.css */
.titulo {
  color: red;
  font-weight: bold;
}
```

Y luego úsala en tu componente:

```tsx
import './App.css';

function Titulo() {
  return <h1 className="titulo">Texto rojo</h1>;
}
```

---

## 3. Props dinámicas y estado (`useState`) con TypeScript

En React, los **props** se usan para enviar datos a componentes hijos, y el **estado (state)** se usa para manejar datos internos del componente.

### 🎁 Props dinámicas

Puedes definir tipos de props complejas (objetos, listas, booleanos):

```tsx
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

interface UsuarioCardProps {
  usuario: Usuario;
}

function UsuarioCard({ usuario }: UsuarioCardProps) {
  return (
    <div>
      <h3>{usuario.nombre}</h3>
      <p>ID: {usuario.id}</p>
      <p>Estado: {usuario.activo ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
}
```

### 🧠 Estado con `useState`

`useState` permite manejar información que puede cambiar con el tiempo.

#### 🟦 Estado simple:

```tsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

#### 🟨 Estado con objetos:

```tsx
interface Formulario {
  nombre: string;
  edad: number;
}

const [formulario, setFormulario] = useState<Formulario>({
  nombre: '',
  edad: 0
});
```

#### 🟩 Actualizar propiedades de forma segura:

```tsx
setFormulario(prev => ({
  ...prev,
  nombre: 'Ana'
}));
```
## 4. Eventos y formularios en React con TypeScript

Cuando manejamos interacciones del usuario en React, como clics o formularios, TypeScript nos permite **tipar correctamente** los eventos para evitar errores.

### 🖱️ Tipado de eventos en botones

```tsx
function Boton() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Clic en el botón');
  };

  return <button onClick={handleClick}>Haz clic</button>;
}
```

### 📋 Tipado de formularios

Para formularios, se usan eventos como `ChangeEvent`, `FormEvent`, etc.

```tsx
import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nombre enviado: ${nombre}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 🧠 Buenas prácticas

* Siempre usa los tipos de evento específicos (`MouseEvent`, `ChangeEvent`, `FormEvent`, etc.)
* Tipar correctamente los elementos (`HTMLInputElement`, `HTMLButtonElement`, etc.)
* Evita el uso de `any`, TypeScript ofrece tipos ya definidos para todos los eventos comunes.

---

## 5. Renderizado condicional y listas en React con TypeScript

El renderizado condicional y las listas son herramientas clave para mostrar contenido dinámico en React.

### 🔁 Renderizado de listas con `map`

Cuando tenemos un arreglo de objetos, podemos usar `map` para renderizar un componente por cada elemento.

```tsx
interface Tarea {
  id: number;
  titulo: string;
}

const tareas: Tarea[] = [
  { id: 1, titulo: 'Aprender React' },
  { id: 2, titulo: 'Aprender TypeScript' },
  { id: 3, titulo: 'Crear una app' }
];

function ListaTareas() {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>{tarea.titulo}</li>
      ))}
    </ul>
  );
}
```

> ⚠️ Siempre proporciona una `key` única al renderizar listas para mejorar el rendimiento y evitar errores.

### ✅ Tipado de arreglos

Asegúrate de tipar los arreglos correctamente:

```tsx
const nombres: string[] = ['Ana', 'Luis', 'Carlos'];
```

### 🔀 Renderizado condicional

Usamos condicionales para mostrar u ocultar elementos:

```tsx
interface Props {
  logueado: boolean;
}

function Bienvenida({ logueado }: Props) {
  return (
    <div>
      {logueado ? (
        <p>¡Bienvenido de nuevo!</p>
      ) : (
        <p>Por favor, inicia sesión.</p>
      )}
    </div>
  );
}
```

También puedes usar:

* `&&` para mostrar algo solo si la condición es verdadera.
* `null` si no quieres renderizar nada.

```tsx
{logueado && <p>Acceso autorizado</p>}
```

---

## 6. Ciclo de vida y `useEffect` con TypeScript

En React, el hook `useEffect` permite ejecutar efectos secundarios (side effects), como peticiones a APIs, suscripciones, timers, etc. Es una forma moderna de manejar el ciclo de vida del componente.

### ⏱️ Sintaxis básica

```tsx
import { useEffect } from 'react';

function Componente() {
  useEffect(() => {
    console.log('El componente se montó');
  }, []);

  return <p>Hola mundo</p>;
}
```

* El segundo parámetro (`[]`) indica que solo se ejecuta una vez al montar.
* Si agregas dependencias, se ejecuta cada vez que cambien:

```tsx
useEffect(() => {
  console.log('nombre cambió');
}, [nombre]);
```

### 🧹 Limpieza del efecto (equivalente a componentWillUnmount)

```tsx
useEffect(() => {
  const intervalo = setInterval(() => {
    console.log('Actualizando...');
  }, 1000);

  return () => {
    clearInterval(intervalo);
    console.log('Componente desmontado');
  };
}, []);
```

### 📡 Ejemplo: obtener datos de una API

```tsx
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
}

function ListaPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

## 7. Context API y manejo de estado global con TypeScript

Cuando varios componentes necesitan acceder o modificar el mismo estado, usar **props** se vuelve engorroso. En estos casos, React ofrece **Context API** como solución para el manejo de estado global.

### 🧱 ¿Qué es Context?

Context es una forma de compartir datos entre componentes **sin necesidad de pasarlos manualmente por props** en cada nivel del árbol.

### 🛠️ Crear un contexto tipado

```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  usuario: string;
  setUsuario: (usuario: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState('');

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### 📦 Usar el contexto en otros componentes

```tsx
function Perfil() {
  const contexto = useContext(AuthContext);
  if (!contexto) throw new Error('AuthContext no disponible');

  const { usuario, setUsuario } = contexto;

  return (
    <div>
      <p>Usuario actual: {usuario}</p>
      <button onClick={() => setUsuario('Laura')}>Cambiar usuario</button>
    </div>
  );
}
```

### 📌 Consideraciones:

* El valor inicial en `createContext` debe permitir `undefined` si no estás seguro de su uso inmediato.
* Siempre valida el contexto antes de usarlo (`if (!contexto) throw ...`).

---
## 9. Integración con APIs externas y tipado de respuestas

Una tarea común en React es obtener datos de un servidor. Con TypeScript, podemos **tipar las respuestas** para asegurar que el formato sea el esperado.

### 🌐 `fetch` con tipado de respuesta

```tsx
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function ListaPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

> ⚠️ Es importante tipar explícitamente el resultado que esperas (`data: Post[]`) para que TypeScript pueda detectar errores si el formato no coincide.

### 🧪 Validación de datos manual

Si no puedes confiar 100% en la API, puedes validar los datos antes de usarlos:

```tsx
if (Array.isArray(data) && data.every(p => 'id' in p && 'title' in p)) {
  setPosts(data as Post[]);
}
```

### ⚙️ Alternativa con `async/await`

```tsx
useEffect(() => {
  async function cargarDatos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await res.json();
    setPosts(data);
  }
  cargarDatos();
}, []);
```

---

