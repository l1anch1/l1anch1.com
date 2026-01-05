# �glass Li Anchi Portfolio

A stunning portfolio website with **iOS / VisionOS Liquid Glass** aesthetic, featuring glassmorphism effects, animated mesh gradient backgrounds, and bilingual support.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)

## ✨ Features

### 🎨 Design System
- **Liquid Glass Aesthetic** — Inspired by iOS and VisionOS spatial computing design
- **Glassmorphism Components** — Translucent cards with heavy backdrop blur and light-edge borders
- **Animated Mesh Gradient** — Slowly morphing aurora background with vibrant neon colors
- **Noise Texture Overlay** — Subtle grain for premium feel

### 🧩 Components
- `GlassCard` — Reusable glass container with 3 intensity levels (subtle, medium, strong)
- `GlassNavbar` — Floating navigation bar with glass material
- `BentoGrid` — CSS Grid layout for modern portfolio presentation
- `MeshGradientBackground` — Animated blob background with Framer Motion

### 🌍 Internationalization
- **Bilingual Support** — English / 中文 toggle
- **Context-based** — Language state managed via React Context

### 📱 Responsive
- Mobile-first design
- Adaptive typography and spacing
- Collapsible navigation items on smaller screens

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/l1anch1.com.git
cd l1anch1.com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static export
npm run build

# Preview production build
npx serve out
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, glass utilities, noise overlay
│   ├── layout.tsx       # Root layout with font & providers
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── MeshGradientBackground.tsx   # Animated aurora background
│   └── ui/
│       ├── GlassCard.tsx            # Glass container component
│       ├── GlassNavbar.tsx          # Navigation bar
│       └── BentoGrid.tsx            # Grid layout system
└── contexts/
    └── LanguageContext.tsx          # i18n state management
```

## 🎨 Customization

### Color Palette

Edit `tailwind.config.ts` to customize the neon color palette:

```typescript
colors: {
  neon: {
    purple: "#a855f7",
    cyan: "#22d3ee",
    pink: "#ec4899",
    // ... add more
  }
}
```

### Glass Intensity

The `GlassCard` component supports three intensity levels:

```tsx
<GlassCard intensity="subtle">...</GlassCard>   // bg-white/5
<GlassCard intensity="medium">...</GlassCard>   // bg-white/10
<GlassCard intensity="strong">...</GlassCard>   // bg-white/15
```

### Translations

Add or modify translations in `src/contexts/LanguageContext.tsx`:

```typescript
const translations = {
  en: { greeting: "Hello" },
  zh: { greeting: "你好" },
};
```

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at `https://yourusername.github.io/repo-name/`

> **Note:** If deploying to a subdirectory, uncomment `basePath` in `next.config.mjs`

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/l1anch1.com)

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icon library |

## 📄 License

MIT © Li Anchi

---

<p align="center">
  <sub>Built with 💜 and lots of <code>backdrop-blur</code></sub>
</p>
