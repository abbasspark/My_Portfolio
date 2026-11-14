# Abbas Bandar – Portfolio

Personal portfolio site, live at <https://abbasbandar.netlify.app>.

Built with Vite, React 19 and TypeScript. No UI framework: the styling is plain
CSS with design tokens in `src/styles/tokens.css`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload         |
| `npm run build`     | Type-check, then build the site into `build` |
| `npm run preview`   | Serve the production build locally           |
| `npm run typecheck` | Run the TypeScript compiler without emitting |
| `npm run format`    | Format the code with Prettier                |

## Editing the content

The site is available in English (`/`) and German (`/de/`). All text lives in
`src/data`:

- **`content.en.ts`** and **`content.de.ts`** – the text for each language.
  Both files have the same structure, so change them together.
- **`shared.ts`** – everything that is the same in both languages: images,
  links, role dates, technology lists and social profiles.

Each content file has these parts:

- `profile` – headline, intro, location, availability and languages
- `about` – the paragraphs of the About section
- `roles` – work experience text (dates and logos are in `shared.ts`)
- `skillGroups` – the Skills table
- `caseStudy` – the Spark Technology case study, including the diagram labels
- `products` and `sideProjects` – the Projects section
- `credentials` – education and certificates
- `ui` – headings, button labels and other interface text

Images live in `src/assets`. Add a file there, import it in `shared.ts`, and
reference it from the content.

The CV behind the "View my CV" button is `public/Abbas_Bandar_CV.pdf`. Replace
that file to update it.

## Project structure

```
public/         Static files: CV, favicon, 404 page, sitemap, Netlify redirects
src/
  components/   One component per section, each with its own CSS file
  data/         Content per language and shared data
  hooks/        useTheme – light/dark theme, saved in localStorage
  styles/       tokens.css (colours, spacing) and base.css (global styles)
  i18n.tsx      Picks the language from the URL and provides the content
  types.ts      Types for the content
```

## Deployment

Netlify builds the site with `npm run build` and publishes the `build` folder
(see `netlify.toml`). A `Dockerfile` is included to serve the same build with
nginx:

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```
