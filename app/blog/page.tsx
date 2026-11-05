// Blog index page — lists all published posts
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { getAllPosts, formatDate } from "@/lib/posts";
import { DEFAULT_OG_IMAGE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog — NutriCenter",
  description:
    "Recursos para nutricionistas en LATAM: práctica clínica, tecnología y gestión del consultorio.",
  alternates: { canonical: "https://www.nutricenterapp.com/blog" },
  openGraph: {
    title: "Blog — NutriCenter",
    description: "Recursos para nutricionistas en LATAM: práctica clínica, tecnología y gestión del consultorio.",
    url: "https://www.nutricenterapp.com/blog",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: "Blog — NutriCenter", images: [DEFAULT_OG_IMAGE.url] },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-12">
          Recursos para nutricionistas en LATAM: práctica clínica, tecnología y gestión del consultorio.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-400">Próximamente...</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={[
                  "group flex flex-col-reverse md:flex-row md:items-center gap-5 md:gap-8",
                  "p-5 md:p-6 rounded-2xl border border-gray-200 bg-white",
                  "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200",
                ].join(" ")}
              >
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    {formatDate(post.date)} · {post.readingTime} de lectura
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="text-primary text-sm font-semibold mt-1">
                    Leer artículo <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <PostCover
                  image={post.image}
                  alt={post.imageAlt}
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="w-full md:w-80 shrink-0"
                />
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
