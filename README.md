# Anchi Li — AI & Software Engineering Portfolio

Personal portfolio for [Anchi Li](https://l1anch1.com), focused on AI engineering, software engineering, LLM systems, and production-minded implementation.

The portfolio is intentionally separate from the [academic profile](https://l1anch1.github.io/): this site owns engineering experience, systems, demos, source code, and measurable outcomes; the academic profile owns publications, scholarly CV, research interests, and academic updates.

## Highlights

- Bilingual English / Chinese experience
- Recruiter-oriented project and experience summaries
- Selected engineering metrics, source code, and live demos
- Responsive editorial design inspired by risograph printing
- Static export for fast, low-maintenance hosting

## Stack

- Next.js 14 with the App Router
- TypeScript and React
- Tailwind CSS
- Framer Motion
- EmailJS for the contact form

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

The production build is exported as static files in `out/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:

1. Install dependencies with `npm ci` on Node.js 20.
2. Run the static Next.js build.
3. Upload the generated `out/` directory.
4. Deploy the artifact to GitHub Pages.

The GitHub Pages deployment serves the custom domain [l1anch1.com](https://l1anch1.com).
