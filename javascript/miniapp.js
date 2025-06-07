// ==== Estado ====
const usuarios = [];

// ==== Selectores ====
const inputNombre = document.getElementById("nombreInput");
const listaUsuarios = document.getElementById("listaUsuarios");

// ==== Funciones de utilidad ====

function limpiarInput() {
  inputNombre.value = "";
}

function obtenerNombreInput() {
  return inputNombre.value.trim();
}

function mostrarMensaje(texto) {
  alert(texto);
}

function actualizarLista() {
  listaUsuarios.innerHTML = "";
  usuarios.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${nombre}`;
    listaUsuarios.appendChild(li);
  });
}

// ==== Funciones principales ====

function agregarUsuario() {
  const nombre = obtenerNombreInput();

  if (nombre === "") {
    mostrarMensaje("❗ El nombre no puede estar vacío.");
    return;
  }

  if (usuarios.includes(nombre)) {
    mostrarMensaje(" Este usuario ya existe.");
    return;
  }

  usuarios.push(nombre);
  actualizarLista();
  limpiarInput();
  mostrarMensaje(` Usuario "${nombre}" agregado.`);
}

function eliminarUsuario() {
  const nombre = obtenerNombreInput();

  if (!usuarios.includes(nombre)) {
    mostrarMensaje(" Usuario no encontrado.");
    return;
  }

  const index = usuarios.indexOf(nombre);
  usuarios.splice(index, 1);
  actualizarLista();
  limpiarInput();
  mostrarMensaje(` Usuario "${nombre}" eliminado.`);
}

function buscarUsuario() {
  const nombre = obtenerNombreInput();

  if (usuarios.includes(nombre)) {
    mostrarMensaje(` Usuario encontrado: "${nombre}"`);
  } else {
    mostrarMensaje(" Usuario no encontrado.");
  }

  limpiarInput();
}
