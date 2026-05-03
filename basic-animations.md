# Reusable animation prompt (portfolio style)

Use this document to recreate the same **motion language** on other sites. Copy the **Master prompt** into Cursor, ChatGPT, or your project brief; keep the **Spec reference** for exact numbers.

---

## Master prompt (copy everything below the line)

---

**Role:** Implement UI motion for a React site using **Framer Motion** (`framer-motion`). Match this neo-brutalist / editorial portfolio style: confident, slightly playful, never floaty or generic “fade only.”

**Imports:** Use `import { motion as Motion, AnimatePresence } from 'framer-motion'` (and add `useScroll`, `useTransform`, `useSpring`, `useMotionValueEvent`, `useInView` only when needed).

### Global easing (default for tweens)

Use this cubic-bezier for almost all **non-spring** transitions:

```ts
const EASE = [0.215, 0.61, 0.355, 1] as const;
// Framer Motion: transition={{ duration: 0.6–0.8, ease: EASE }}
```

It reads as a **snappy ease-out** (quick start, smooth settle).

### Spring presets (use consistently)

| Use case | Config |
|----------|--------|
| Badges, hero chips, emphasized “pop” | `type: 'spring', stiffness: 220, damping: 14` |
| Nav bar reacting to scroll (scale / shadow) | `type: 'spring', stiffness: 220, damping: 24` |
| Shared layout underline / tab indicator | `type: 'spring', stiffness: 380, damping: 30` |
| Floating buttons (back-to-top, FAB) | `type: 'spring', stiffness: 300, damping: 22` |
| Scroll-linked values (smooth follow) | `useSpring(value, { stiffness: 140, damping: 24, mass: 0.4, restDelta: 0.001 })` |

### Page load (header / shell)

- **Header:** `initial={{ y: -80, opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}`, `duration: 0.6`, `ease: EASE`.
- **Nav chrome on scroll:** Animate **scale** (e.g. `0.96` when scrolled) and **box-shadow** depth with the **nav spring** above (not tween).

### Hero (first screen, `animate` not `whileInView`)

Stagger children so the block feels **sequenced**, not simultaneous:

1. Outer group: `opacity: 0, y: 24` → visible, `duration: 0.8`, `ease: EASE`.
2. Small badge / label: `opacity: 0, scale: 0.6, rotate: -8` → `opacity: 1, scale: 1, rotate: 1` with **hero spring** (`stiffness: 220, damping: 14`), `delay: 0.1`.
3. Headline lines: first line `x: -120, rotate: -6` → `x: 0, rotate: -1`; second line `x: 120` → `x: 0`; both `duration: 0.7`, `ease: EASE`, delays `0.2` and `0.35`.
4. Subcopy / CTAs: `opacity: 0, y: 30` → visible, `duration: 0.6`, `ease: EASE`, delays `0.5` and `0.7`.

**Optional parallax (Framer):** Tie a hero headline wrapper to scroll with `useScroll({ target, offset: ['start start', 'end start'] })`, then `useTransform` for `y`, `opacity`, `scale` over `scrollYProgress`. Soften with `useSpring` on noisy values (e.g. rotation) using moderate stiffness/damping.

### Scroll reveals (`whileInView`)

- Default: `viewport={{ once: true, amount: 0.2 }}` (tighten to `0.4–0.6` for small chips).
- Prefer **variants** on one wrapper instead of duplicating props everywhere.

**Direction presets (hidden → show):**

| Direction | Hidden state |
|-----------|----------------|
| `up` | `opacity: 0, y: 60` |
| `down` | `opacity: 0, y: -60` |
| `left` | `opacity: 0, x: -80` |
| `right` | `opacity: 0, x: 80` |
| `scale` | `opacity: 0, scale: 0.85` |
| `pop` | `opacity: 0, scale: 0.6, rotate: -6` → show `rotate: 0` |

Tween: `duration: 0.7` (adjust 0.5–0.8), `delay` per item for stagger (`index * 0.08` to `0.12`), `ease: EASE`.

### Section titles

Two-layer effect:

1. Outer: `initial={{ opacity: 0, x: -80 }}` → `whileInView` to `opacity: 1, x: 0`, `duration: 0.7`, `ease: EASE`.
2. Decorative plane behind title: `initial={{ rotate: 0, scale: 0.85 }}` → `whileInView` `rotate: -2, scale: 1`, `duration: 0.6`, `delay: 0.2`, `ease: EASE`.

### Card grids (projects / tiles)

- Card: `initial={{ opacity: 0, y: 80, rotate: index % 2 === 0 ? -3 : 3 }}` → `whileInView` `opacity: 1, y: 0, rotate: 0`, `duration: 0.7`, stagger delay `(index % columns) * 0.12`, `ease: EASE`.
- `whileHover`: small lift `y: -8`, `duration: 0.2` (micro-interaction).
- Inner tags/chips: `initial={{ opacity: 0, scale: 0.7 }}` → show with extra stagger `+ i * 0.04`, `duration: 0.4`, `ease: EASE`; optional `whileHover={{ scale: 1.08, rotate: -2 }}`.

### Full-width band (e.g. skills marquee)

- Band reveal: `initial={{ opacity: 0, scaleX: 0.7, rotate: 0 }}` → `whileInView` `opacity: 1, scaleX: 1, rotate: 1`, `duration: 0.7`, `ease: EASE`. Parent must use **`overflow-x: hidden` or `clip`** so horizontal motion never causes page scroll.
- **Marquee:** Prefer **CSS** for infinite scroll: duplicate content 3×, `@keyframes` from `translateX(0)` to `translateX(-33.33%)`, `animation: … 30s linear infinite`, class on inner flex row; container `overflow-hidden`.

### Footer / big type

- Split headline into spans: outer words `x: ±80` → `0`, `duration: 0.7`, staggered delays (`0`, `0.15`, `0.3`), `ease: EASE`.
- Middle emphasized word: spring from `scale: 0.5, rotate: -10` → `scale: 1, rotate: 2` with **hero spring**.
- Paragraph / CTAs: `y: 30` or `x: -40` reveals, `duration: 0.5–0.6`, stepped delays (`0.45`, `0.6`, `0.72`).

### Scroll progress bar

- `useScroll()` → `scrollYProgress`; map to `scaleX` with `useSpring(..., { stiffness: 140, damping: 24, mass: 0.4, restDelta: 0.001 })`.
- Element: `fixed` top, full width, `transform-origin: left`, thin accent strip.

### Mobile menu (`AnimatePresence`)

- Panel: `initial={{ opacity: 0, y: -20 }}`, `animate` / `exit` mirrored, short duration (~0.2–0.25s) or spring for brand consistency.

### Accessibility

- Respect **`prefers-reduced-motion: reduce`**: disable or shorten infinite animations; set transitions to near-instant; avoid large parallax offsets.

### Anti-patterns (do not do)

- Do not use only `opacity` for every element.
- Do not use bouncy springs on every small UI control (reserve springs for emphasis).
- Do not use `100vw` on animated full-bleed rows without overflow control (causes horizontal scroll).

Implement components with these rules unless the user specifies otherwise.

---

## Spec reference (quick numbers)

| Token | Value |
|-------|--------|
| Default ease (array) | `[0.215, 0.61, 0.355, 1]` |
| ScrollReveal default `duration` | `0.7` |
| ScrollReveal default `amount` | `0.2` |
| Hero line slide distance | `x: ±120` |
| Section title slide | `x: -80` |
| Footer word slide | `x: ±80` |
| Card entrance `y` | `80` |
| Marquee duration | `30s` linear |

**This repo:** React 19, Framer Motion ^12, Tailwind 4; motion implemented in `src/components/**/*.jsx` and marquee in `src/index.css` (`.animate-marquee`).

---

## How to use

1. Paste the **Master prompt** (between the horizontal rules) into your AI or design doc for a new project.
2. Add: “Stack is [Next.js / Vite / etc.] + Tailwind + framer-motion.”
3. Tweak colors and layout only; keep **easing, springs, distances, and stagger rhythm** for the same feel.
