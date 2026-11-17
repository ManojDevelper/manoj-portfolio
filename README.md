# Manoj Ponugoti — Portfolio

A React + Vite portfolio site with scroll and hover animations.

## Run it

You need [Node.js](https://nodejs.org) 20.19+ (or 22+).

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the build locally
```

Deploy `/dist` to Netlify, Vercel or GitHub Pages. On Netlify: build command `npm run build`, publish directory `dist`.

## Edit the content

All the text lives in `src/data.js`: your profile, roles, tech stack, projects, and experience.

**Add your photo:** put it in `public/photo.jpg`, then in `src/components/About.jsx` set `const PHOTO = '/photo.jpg';`.

## Structure

```
src/
  data.js              ← all content
  hooks.js             ← in-view, scroll progress, active section
  index.css            ← styles + animations
  App.jsx
  components/
    Nav.jsx  Hero.jsx  Marquee.jsx  Projects.jsx
    About.jsx  Experience.jsx  Contact.jsx  Reveal.jsx  Icons.jsx
```

Animations respect the visitor's "reduce motion" setting.
