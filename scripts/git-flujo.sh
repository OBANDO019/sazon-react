#!/usr/bin/env bash
# Ejecutar desde la raíz del proyecto sazon-react.
# Crea main, dev y la rama feature con 4 commits descriptivos.
set -e

git init -b main
git add .gitignore package.json vite.config.js index.html src/main.jsx src/styles src/assets
git commit -m "chore(proyecto): inicializar proyecto Vite con React y kit de marca"

git checkout -b dev

git checkout -b feature/mercadeo/G7-CUP-F02-listado
git add src/App.jsx src/data/modulos.js src/components/layout src/components/ui src/components/home src/views/Home.jsx src/views/Vista.module.css src/views/EnConstruccion.jsx
git commit -m "feat(mercadeo): crear layout con Navbar, Footer y vista Home"

git add src/data src/components/catalogo src/components/recetario src/components/usuarios src/views/Catalogo.jsx src/views/Recetario.jsx src/views/Usuarios.jsx
git commit -m "feat(mercadeo): agregar ProductCard, RecetaCard y vistas con estado local"

git add src/hooks src/components/cupones src/views/Mercadeo.jsx
git commit -m "feat(mercadeo): migrar CRUD de cupones a componentes con useState"

git add README.md docs scripts
git commit -m "docs(mercadeo): agregar historia de usuario, README y flujo git"

git checkout dev
git merge --no-ff feature/mercadeo/G7-CUP-F02-listado -m "merge: integrar G7-CUP-F02 en dev"
git checkout main
git merge --no-ff dev -m "merge: entrega Momento 1 en main"
git checkout dev
git log --oneline --graph --all
