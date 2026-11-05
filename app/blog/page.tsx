// Blog index page — lists all published posts
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/posts";

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
  },
  twitter: { card: "summary_large_image", title: "Blog — NutriCenter" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-14">
          Recursos para nutricionistas en LATAM: práctica clínica, tecnología y gestión del consultorio.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-400">Próximamente...</p>
        ) : (
          <div className="flex flex-col divide-y divide-gray-100">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-8 flex flex-col gap-2 hover:pl-1 transition-all duration-150"
              >
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {formatDate(post.date)} · {post.readingTime} de lectura
                </p>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.description}
                </p>
                <span className="text-primary text-sm font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Leer artículo →
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
