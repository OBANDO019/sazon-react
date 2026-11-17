# Sazón · React (Momento 1)

Migración del proyecto estático Sazón (HTML/CSS/JS) a **React + Vite**, dividido en componentes reutilizables, con **CSS Modules** y el **kit de marca** de Sazón.

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5501
```

## Estructura

```text
src/
├─ assets/            # imágenes, logos
├─ styles/
│  ├─ kit-marca.css   # variables y tipografías del kit de marca (colores, Poppins, Inter)
│  └─ global.css      # reset básico + .contenedor
├─ data/              # datos estáticos (módulos, productos, recetas, usuarios, cupones)
├─ hooks/             # useCupones (estado local)
├─ components/
│  ├─ layout/         # Navbar, Footer, Layout
│  ├─ ui/             # Button, Alert
│  ├─ home/           # Hero, ModuloCard
│  ├─ catalogo/       # ProductCard
│  ├─ recetario/      # RecetaCard
│  ├─ cupones/        # CuponForm, CuponFiltro, CuponTabla
│  └─ usuarios/       # UsuarioTabla
└─ views/             # Home, Catalogo, Recetario, Mercadeo, Usuarios, EnConstruccion
```

Cada componente vive en su carpeta con su `Componente.jsx` y su `Componente.module.css`.

## Kit de marca

Las variables CSS (`--verde-noche`, `--hoja`, `--crema`, etc.) y las fuentes (Poppins para títulos, Inter para texto) están en `src/styles/kit-marca.css`, copiadas de `assets/css/sazon.css` sin inventar colores nuevos. Los CSS Modules solo usan esas variables.

## Datos

Por ahora todo se maneja con datos estáticos en `src/data/` y estado local (`useState`). `data/cupones.js` no venía en el zip, así que se creó con 5 cupones (ids 1 a 5) siguiendo las reglas de datos semilla.

## Git

Ramas: `main`, `develop`, `feature/mercadeo/G7-CUP-F02-listado`. Los comandos están en `scripts/git-flujo.sh`.

Historia de usuario: `docs/HU-M1-migracion-react.md`.
