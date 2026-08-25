# TriAxis — 3D Web Experience

> Algoryx Internship · Task 3 · Built with React + Three.js

A fully interactive 3D web experience built around a GLB model viewer, featuring orbit controls, auto-rotation, particle effects, and a complete multi-section landing page.

---

## Live Demo

🔗 [triaxis.vercel.app](https://triaxis.vercel.app)

---

## Preview

> The hero section displays an interactive 3D Mew model with orbit controls — rotate, zoom, and pan in real time.

---

## Features

- **Interactive 3D Viewer** — Drag to rotate, scroll to zoom, right-click to pan
- **Auto-Rotation** — Model continuously spins even while interacting
- **Particle Field** — 500 pink particles orbiting the model
- **Aura Rings** — Animated torus rings with glow effects
- **Idle Float** — Subtle up/down bobbing animation
- **GLB Upload** — Drag and drop any `.glb` / `.gltf` file to preview it
- **Scroll Animations** — Framer Motion entrance effects on every section
- **Fully Responsive** — Mobile-first layout with hamburger nav
- **Dark Theme** — Deep purple-black with fuchsia/violet accent system

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 8 | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| React Three Fiber | React renderer for Three.js |
| @react-three/drei | Three.js helpers (OrbitControls, useGLTF, Stars, Float) |
| Three.js | 3D engine |
| Framer Motion | Scroll & entrance animations |
| Google Fonts | Barlow Condensed + Inter font pairing |

---

## Project Structure

```
triaxis/
├── public/
│   └── mew.glb              # 3D model asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed nav with glass blur on scroll
│   │   ├── Hero.tsx          # 3D canvas + hero copy + upload zone
│   │   ├── Scene3D.tsx       # Three.js scene, model, particles, rings
│   │   ├── ModelErrorBoundary.tsx  # Catches GLB load errors
│   │   ├── Stats.tsx         # Animated counter stats
│   │   ├── Services.tsx      # 6 service cards with hover glow
│   │   ├── About.tsx         # Company info + value cards
│   │   ├── Technology.tsx    # Tech stack badges + targets
│   │   ├── CTA.tsx           # Email capture form
│   │   └── Footer.tsx        # Footer with nav columns
│   ├── App.tsx               # Root component
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind + global styles + theme tokens
├── index.html
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm)

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/triaxis.git
cd triaxis

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Add the 3D Model

Place `mew.glb` inside the `public/` folder:

```
public/
  mew.glb
```

The model will load automatically on the hero section.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## How the 3D Viewer Works

```
App.tsx
  └── Hero.tsx
        └── SceneWithFallback
              ├── ModelErrorBoundary   ← catches load failures
              └── Suspense
                    └── Scene3D.tsx
                          ├── MewModel     ← loads GLB, auto-fits camera, rotates
                          ├── Particles    ← 500 orbiting pink dots
                          ├── AuraRings    ← two animated torus rings
                          ├── Stars        ← drei starfield background
                          └── OrbitControls ← rotate / zoom / pan
```

- If `mew.glb` is missing, `ModelErrorBoundary` catches the error and shows a drag-and-drop upload zone instead
- Once a file is uploaded, a blob URL is created and passed to `Scene3D`
- The camera auto-fits to the model's bounding box on load

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#07010f` | Page background |
| Primary | `#e879f9` | Fuchsia — CTAs, highlights |
| Secondary | `#a855f7` | Violet — accents |
| Cyan | `#22d3ee` | Subtle glow accents |
| Text | `#f5eeff` | Headings |
| Muted | `#7c6a99` | Body text, labels |

---

## Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed, glass blur on scroll, mobile hamburger |
| **Hero** | 3D model viewer + headline + mini stats |
| **Stats** | 5 animated metrics |
| **Services** | 6 service cards with per-card accent glow |
| **About** | Company story + 4 value cards |
| **Technology** | Tech badges + engineering targets |
| **CTA** | Email capture form with success state |
| **Footer** | Brand, nav columns, social links, copyright |

---

## Deployment

This project is deployed on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework: **Vite** (auto-detected)
4. Click **Deploy**

---

## Internship Context

This project was built as **Task 3** of the **Algoryx Internship Program**.

- Platform: [algoryx.in/community](https://algoryx.in/community)
- Task: Build a 3D web experience using a GLB asset downloaded from the Algoryx Community
- Asset used: `mew.glb` — Mew Pokémon 3D model

---

## License

MIT — free to use, modify, and distribute.

---

<p align="center">Built with ♥ for Algoryx Internship Task 3</p>
