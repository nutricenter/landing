# NutriCenter Landing

Landing page for [NutriCenter](https://www.nutricenterapp.com) — B2B SaaS platform for nutritionists in LATAM.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, SSG) |
| Styling | Tailwind CSS v4 |
| Blog | MDX via next-mdx-remote + gray-matter |
| Font | DM Sans (matches the app) |
| Deploy | Vercel → www.nutricenterapp.com |

## Getting started

```bash
npm install
npm run dev
```

App runs at http://localhost:3000.

## Project structure

```
app/
├── page.tsx              # Home
├── blog/
│   ├── page.tsx          # Blog index
│   └── [slug]/page.tsx   # Individual post
├── nosotros/page.tsx     # Founder page
├── contacto/page.tsx     # Contact page
├── sitemap.ts            # Auto-generated sitemap.xml
└── robots.ts             # robots.txt
components/
├── Navbar.tsx
├── Hero.tsx
├── Problem.tsx
├── Features.tsx
├── CtaBanner.tsx
└── Footer.tsx
content/blog/             # MDX articles (.mdx files)
lib/
└── posts.ts              # Blog utilities (read, parse, format)
```

## Blog

Articles live in `content/blog/` as `.mdx` files with frontmatter:

```mdx
---
title: "Title of the article"
description: "One-line summary for SEO and listing."
date: "2026-08-07"
readingTime: "6 min"
---

Article content here...
```

Adding a new file automatically includes it in the blog index and sitemap.
