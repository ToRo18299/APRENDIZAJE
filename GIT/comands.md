#  Apuntes de Git

Este archivo contiene los comandos y conceptos básicos para trabajar con Git desde la terminal.

---

## 🔧 Configuración inicial

```bash
git config --global user.name "Mi Nombre"
git config --global user.email "micorreo@example.com"
```
##  Crear un repositorio
```bash
git init
```
### Estados de los archivos
- Untracked → no está siendo rastreado aún

- Staged → está listo para ser confirmado

- Committed → ya está guardado en el historial

### Flujo básico de trabajo

```bash
git add . 
git commit -m "Descripción del cambio"
git push origin main
```

- add → Marca archivos para ser guardados
- commit	→ Guarda los cambios con una descripción
- push → 	Sube todo al servidor remoto (GitHub)
### Subir a GitHub
```bash
git remote add origin https://github.com/usuario/repositorio.git
git branch -M main
git push -u origin main
```
| Comando                     | Descripción                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `git remote add origin URL` | Conecta tu repositorio local con uno en GitHub (URL del repo remoto).       |
| `git branch -M main`        | Renombra la rama actual a `main` (si era `master` u otro nombre).           |
| `git push -u origin main`   | Sube tus cambios a GitHub y deja enlazada la rama local con la remota.      |

### Deshacer cambios

```bash
git restore archivo.ext        # Revierte archivo modificado
git reset HEAD archivo.ext     # Saca un archivo del área de staging
```
### Clonar repositorio
```
git clone https://github.com/usuario/repositorio.git
```
### Comandos útiles extra

```bash 
git pull           # Trae los cambios del servidor
git rm archivo     # Elimina un archivo y lo registra
git mv a b         # Renombra archivo (a → b)
```
