export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "neobrutalism-web-design",
    title: "Neobrutalism in Web Design: Order in Chaos",
    date: "2024-12-15",
    tags: ["Design", "CSS", "UI/UX"],
    excerpt: "Why I chose neobrutalism for my portfolio and how bold borders, hard shadows, and electric colors create structured chaos.",
    content: `
## Why Neobrutalism?

Neobrutalism isn't just a trend — it's a philosophy. Bold borders, hard shadows, and unapologetic colors create a visual language that says: "I'm here, and I'm not hiding behind soft gradients."

## The "Order in Chaos" Concept

The key to good neobrutalism is balance. Yes, the elements are bold and in-your-face, but there's a system:

- **Consistent border weights** (4px everywhere)
- **Uniform shadow offsets** (4px x 4px)
- **A structured color palette** with clear hierarchy
- **Grid-based layouts** that contain the chaos

## Color Theory in Neobrutalism

I use an electric palette:
- **Electric Lime (#C8FF00)** for primary accents
- **Hot Cyan (#00E5FF)** for secondary elements
- **Hot Pink (#FF2D78)** for alerts and emphasis
- **Acid Green (#39FF14)** for success states
- **Electric Purple (#B24BF3)** for highlights

## The Technical Side

Built with React, TypeScript, and Tailwind CSS v4. The design tokens are defined as CSS custom properties using OKLCH color space for consistent light/dark mode support.

## Conclusion

Neobrutalism works when you respect the system. Break the rules intentionally, not accidentally.
    `,
  },
  {
    id: "audio-engineering-web-dev",
    title: "Where Audio Engineering Meets Web Development",
    date: "2024-11-20",
    tags: ["Audio", "JavaScript", "Career"],
    excerpt: "How my background in audio engineering influences my approach to building software — from multi-stem mixing to component architecture.",
    content: `
## Two Worlds, One Mindset

Audio engineering and web development seem unrelated, but they share the same core principles:

- **Signal flow** = Data flow
- **Mixing stems** = Composing components
- **EQ and compression** = Filtering and optimizing

## Multi-Stem Thinking

When I produce music, I work with stems — individual tracks that combine into a cohesive whole. This is exactly how I approach React components:

- Each stem/component has its own space in the mix
- Volume levels = props and state
- Muting/soloing = conditional rendering
- Effects processing = transforms and middleware

## The Browser as a DAW

Modern browsers are essentially digital audio workstations. The Web Audio API gives us:

- Oscillators and filters
- Analyzers and visualizers
- Real-time processing

## What I'm Building

I'm creating a multi-stem player for my portfolio that lets visitors decompose tracks into individual elements. It's a technical demo that showcases both my audio engineering skills and web development abilities.

## The Intersection

The best creative technologists don't separate their passions — they find the threads that connect them.
    `,
  },
  {
    id: "building-with-vite",
    title: "Why I Chose Vite (and Never Looking Back)",
    date: "2024-10-05",
    tags: ["JavaScript", "Tools", "Performance"],
    excerpt: "My experience migrating from Create React App to Vite — the performance gains, the DX improvements, and why every React project should consider it.",
    content: `
## The Problem with CRA

Create React App served its purpose, but in 2024:

- Cold starts took 30+ seconds
- HMR was sluggish
- Build times were painful
- The config was a black box

## Enter Vite

Vite changed everything:

- **Cold start**: Under 1 second
- **HMR**: Near-instant
- **Build**: 10x faster
- **Config**: Transparent and extensible

## Migration Process

The migration was surprisingly smooth:

1. Install Vite and plugins
2. Update index.html (Vite uses root-level index.html)
3. Fix import paths (Vite doesn't alias by default)
4. Update scripts in package.json
5. Test and deploy

## Tailwind CSS v4 + Vite

The @tailwindcss/vite plugin makes Tailwind integration seamless:

\`\`\`ts
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()]
})
\`\`\`

## Performance Results

- Lighthouse score: 98 → 100
- First contentful paint: 1.2s → 0.3s
- Bundle size: 40% smaller

## Verdict

Vite is the future of React development. If you're still on CRA, migrate now.
    `,
  },
];
