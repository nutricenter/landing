// Utilities for reading and parsing MDX blog posts from the filesystem
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// "2026-08-07" → "7 de agosto de 2026" (no UTC shift — construye fecha local)
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

// 200 palabras por minuto — estándar de lectura en español
function calcReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  // Optional cover, e.g. "/images/blog/<slug>.webp". Without it the UI shows a branded placeholder.
  image: string | null;
  imageAlt: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Maps parsed frontmatter + body to PostMeta. imageAlt falls back to the title so the
// cover always has accessible text.
function toPostMeta(slug: string, data: Record<string, string>, content: string): PostMeta {
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: calcReadingTime(content),
    image: data.image ?? null,
    imageAlt: data.imageAlt ?? data.title,
  };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return toPostMeta(slug, data, content);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf-8");
  const { data, content } = matter(raw);
  return { ...toPostMeta(slug, data, content), content };
}
