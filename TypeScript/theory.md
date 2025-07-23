# 🟦 TypeScript - Fundamentos y Tipos

## ✳️ Variables y Tipos Primitivos

```ts
let userName = "John Doe";
const API_KEY = "abc";

userName = "Jane Smith";
let userAge = 30;
let isValid = true;
```

### Tipos de datos básicos:

- `string`
- `number`
- `boolean`
- `any`
- `void`
- `null`
- `undefined`

---

## 🔁 Tipos de unión (`|`) y tipo `any`

```ts
let userId: string | number | boolean = "abc1";
userId = 1234;
userId = true;
```

El operador `|` permite combinar múltiples tipos posibles para una misma variable.

> ⚠️ El tipo `any` existe pero **no es recomendable**, ya que pierde las ventajas del tipado fuerte de TypeScript.

---

## 🧩 Tipos personalizados (`type`) y objetos

```ts
type User = {
  name: string;
  age: number;
  isValid: boolean;
  id: string | number;
};

let user: User = {
  name: "Max",
  age: 30,
  isValid: true,
  id: "abc",
};
```

---

## 📚 Arreglos

```ts
let hobbies: string[];
hobbies = ["reading", "gaming", "coding"];
```

---

## ⚙️ Funciones

```ts
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function add1(a: number, b: number): number {
  const result = a + b;
  console.log(result);
  return result;
}
```

### Funciones como tipos

```ts
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(5, 10, add1);
```

---

## 🧾 Interfaces

```ts
interface Credentials {
  email: string;
  password: string;
}

let creds: Credentials = {
  email: "user@example.com",
  password: "securepassword",
};
```

### ¿Cuándo usar `interface` vs `type`?

| `interface`                                            | `type`                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Para definir la **estructura de objetos** o **clases** | Para definir **tipos primitivos**, **funciones** o combinaciones de tipos |
| **Extensible** mediante `extends`                      | **Flexible** para uniones e intersecciones                                |
| Ideal para **POO**                                     | Ideal para **funciones genéricas**, `union` y `intersection` types        |

---

## 🧱 Clases

- Las clases permiten crear objetos con propiedades y métodos.
- Pueden **implementar interfaces** o **extender otras clases**.
- Son útiles para **programación orientada a objetos** (POO).

---

## 🔗 Intersección de tipos (`&`)

```ts
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
  permissions: ["read", "write", "delete"],
  userName: "adminUser",
};
```

### También se puede hacer con interfaces:

```ts
interface User {
  permissions: string[];
}
interface AdminUser {
  userName: string;
}
interface AppAdminUser extends User, AdminUser {}
```

---

## 🧑‍💼 Tipos específicos (uniones literales)

```ts
type Role = "admin" | "user" | "editor";

let role: Role;
role = "admin"; // OK
role = "user"; // OK
role = "editor"; // OK
```

### Función con roles

```ts
function performAction(action: string, role: Role) {
  if (role === "admin") {
    console.log(`Admin performing action: ${action}`);
  } else if (role === "user") {
    console.log(`User performing action: ${action}`);
  } else {
    console.log(`Editor performing action: ${action}`);
  }
}

performAction("delete post", "admin");
```

### En programación orientada a objetos (OOP):

Dentro de una class, las funciones se llaman métodos.

```TS
class UserManager {
  getAllUsers() {
    return this.users;
  }
}
```

## ![alt text](image-1.png)

## 🧪 Tipos genéricos (Generics)

### Usando tipos genéricos con `Array`

```ts
let roles: Array<Role>;
roles = ["admin", "user", "editor"];
```

### Creación de un tipo genérico personalizado

```ts
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data: string) {
    this.storage.push(data);
  },
};
```

### Funciones genéricas

```ts
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "John" },
  { age: 30 }
);
```

> Con `merge`, combinamos objetos de diferentes tipos de forma segura y tipada.

---

## ✅ Conclusión

Estos conceptos cubren las bases del sistema de tipos en TypeScript: desde tipos primitivos, funciones y objetos, hasta estructuras más complejas como interfaces, tipos literales, intersecciones y generics.

> ¡Una base sólida para desarrollar aplicaciones seguras y escalables con TypeScript!
