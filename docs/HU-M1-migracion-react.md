# Historia de usuario · Momento 1

| Campo | Valor |
|---|---|
| Código | G7-CUP-F02 |
| Título | Migrar el diseño estático de Sazón a React con componentes reutilizables |
| Módulo | Mercadeo (con vistas comunes del proyecto) |
| Rama | feature/mercadeo/G7-CUP-F02-listado |
| Prioridad | Alta |

## Historia

**Como** equipo de desarrollo de Sazón,
**quiero** trasladar las páginas HTML estáticas a un proyecto React dividido en componentes,
**para** reutilizar la interfaz, mantener el kit de marca y manejar los datos con estados locales.

## Ubicación de los componentes

| Componente | Ruta | Se usa en | Estado / datos |
|---|---|---|---|
| Layout | components/layout/Layout | Todas las vistas | |
| Navbar | components/layout/Navbar | Layout | data/modulos.js |
| Footer | components/layout/Footer | Layout | |
| Hero | components/home/Hero | Home | |
| ModuloCard | components/home/ModuloCard | Home | data/modulos.js |
| ProductCard | components/catalogo/ProductCard | Catálogo | data/productos.js |
| RecetaCard | components/recetario/RecetaCard | Recetario | data/recetas.js |
| CuponForm | components/cupones/CuponForm | Mercadeo | useState (valores, error) |
| CuponFiltro | components/cupones/CuponFiltro | Mercadeo | useState en la vista |
| CuponTabla | components/cupones/CuponTabla | Mercadeo | hooks/useCupones.js |
| UsuarioTabla | components/usuarios/UsuarioTabla | Usuarios | data/usuarios.js |
| Button, Alert | components/ui | Varias | |

## Árbol de componentes

```text
App
└─ Layout
   ├─ Navbar
   ├─ (Outlet)
   │  ├─ Home ─ Hero, ModuloCard x8
   │  ├─ Catalogo ─ ProductCard x N
   │  ├─ Recetario ─ RecetaCard x N
   │  ├─ Mercadeo ─ Alert, CuponForm, CuponFiltro, CuponTabla
   │  ├─ Usuarios ─ Alert, Button, UsuarioTabla
   │  └─ EnConstruccion (despensa, nutrición, planificador, comunidad)
   └─ Footer
```

## Criterios de aceptación

- [ ] Proyecto creado con Vite, con carpetas components, assets y views.
- [ ] Las vistas principales se arman con componentes React y JSX.
- [ ] Ningún archivo concentra toda la interfaz: Navbar, ProductCard y Footer son componentes separados.
- [ ] Los estilos usan CSS Modules y las variables del kit de marca.
- [ ] Los datos se manejan con datos estáticos y estados locales (useState).
- [ ] El módulo Mercadeo permite crear, editar, eliminar y filtrar cupones por campaña.
- [ ] Tildes y ñ se ven bien en todas las vistas.
- [ ] Existen las ramas main, develop y feature/mercadeo/G7-CUP-F02-listado, con al menos 3 commits descriptivos.
