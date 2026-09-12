# Shaina — Frontend Developer Portfolio

A premium, cinematic, glassmorphism portfolio built with React (Vite), Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Customize your content

Almost everything is driven by plain data files in `src/data/`:

- `navLinks.js` — navbar/footer links
- `skills.js` — skills grid + proficiency bars
- `services.js` — services cards
- `projects.js` — project cards (swap in real GitHub/live links)
- `timeline.js` — education & experience timeline
- `certifications.js` — certification cards
- `socials.js` — social icon links

Edit those files and the whole site updates — no need to touch component code.

## Replace the placeholder portrait

The hero (`src/sections/Hero.jsx`) and about (`src/sections/About.jsx`) sections currently use
a gradient placeholder instead of a photo, since none was supplied. To use a real photo:

1. Drop your image into `src/assets/images/`.
2. Import it at the top of the section: `import portrait from '../assets/images/your-photo.jpg';`
3. Replace the placeholder `<div>` with an `<img src={portrait} alt="Your name" className="h-full w-full object-cover" />`.

## Theme system

Dark/light mode is controlled by `src/context/ThemeContext.jsx` and persisted to `localStorage`
under the key `portfolio-theme`. Color tokens for both themes live in `src/styles/index.css`
as CSS custom properties (`--bg-primary`, `--accent-cyan`, etc.), and are exposed to Tailwind
via the `@theme` block in the same file — so `bg-bg-primary`, `text-cyan`, `border-glass`, etc.
are all valid utility classes.

## Structure

```
src/
  assets/       static images
  components/
    common/     CursorGlow, ThemeToggle, BackToTop, AmbientBackground, ScrollProgressRing
    ui/         GlassCard, MagneticButton, SectionHeading, ScrollReveal, StaggerGroup, etc.
  context/      ThemeContext
  data/         all editable site content
  hooks/        useLenis, useScrollSpy, useMousePosition
  layouts/      Navbar, Footer
  sections/     Hero, About, Skills, Services, Projects, Journey, Certifications, Contact
  styles/       index.css (Tailwind import + theme tokens)
  App.jsx
  main.jsx
```

## Notes

- Smooth scrolling is powered by Lenis and automatically disabled for users with
  `prefers-reduced-motion` set.
- The contact form validates client-side only; wire `handleSubmit` in `Contact.jsx`
  to your own backend or a service like Formspree/EmailJS to actually send messages.
- Lighthouse-friendly: no layout-shifting web fonts (preconnected), lazy motion via
  `whileInView`, and reduced-motion support baked into the global stylesheet.
