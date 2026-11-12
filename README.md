# Ver Portfolio Digital: [Abel Borit Guitton](https://abelborit.github.io/abelborit-portfolio)

Este es mi _personal portfolio website_.

## Comunícate conmigo:

<a href="https://www.linkedin.com/in/abelborit/" target="_blank" rel="noopener noreferrer"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/abelborit/" height="30" width="40" /></a>

---

# Desarrollo

Proyecto creado con [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/).

## Scripts disponibles

| Comando           | Descripción                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo en `http://localhost:5173/abelborit-portfolio/` |
| `npm run build`   | Verifica los tipos (`tsc -b`) y genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de `dist/` para probarlo                 |
| `npm run lint`    | Ejecuta el linter ([oxlint](https://oxc.rs/docs/guide/usage/linter)) |
| `npm run deploy`  | Genera el build y lo publica en la rama `gh-pages` (GitHub Pages) |

## Estructura

```
src/
├── data/          # contenido del portafolio (experiencia, proyectos, habilidades, perfil): se edita aquí
├── types/         # tipos del contenido
├── layouts/       # RootLayout (header, footer, scroll suave al cambiar de ruta) y PageLayout (páginas internas)
├── pages/         # una carpeta por ruta: / · /home · /acerca · /resumen · /proyectos · 404
├── components/    # componentes reutilizables, cada uno con su CSS Module
├── hooks/         # useForm (formulario de contacto), useTheme (modo oscuro/claro), usePageTitle
├── utils/ helpers/# eventos de GTM, peticiones HTTP y utilidades
└── index.css      # tokens de diseño (colores de cada tema, fuentes, radios) y estilos base
```

- **Estilos:** CSS Modules + variables CSS. Los dos temas se definen en `index.css` con `:root[data-theme="dark|light"]`; el tema se aplica antes de pintar con un script en `index.html`.
- **Fuentes:** servidas desde el propio sitio con [Fontsource](https://fontsource.org/) (Inter, Space Grotesk y JetBrains Mono, solo subconjunto latino y pesos usados).
- **Rutas y analítica:** las rutas y los valores `section` de los eventos `redirect_page` de GTM se mantienen; cada página interna se carga con `lazy`.
- **Animaciones:** solo `transform` y `opacity`, y se desactivan con `prefers-reduced-motion`.
