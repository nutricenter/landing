// Individual blog post page — renders MDX content with metadata
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";
import { APP_REGISTER_URL, DEFAULT_OG_IMAGE } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post: ReturnType<typeof getPost>;
  try {
    post = getPost(slug);
  } catch {
    return {};
  }
  const url = `https://www.nutricenterapp.com/blog/${slug}`;
  // Share preview uses the post cover when it has one; otherwise the site-wide OG image.
  const shareImage = post.image
    ? { url: post.image, width: 1600, height: 900, alt: post.imageAlt }
    : DEFAULT_OG_IMAGE;
  return {
    title: `${post.title} — NutriCenter`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "NutriCenter",
      locale: "es_419",
      type: "article",
      publishedTime: post.date,
      authors: ["Jair Flores"],
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [shareImage.url],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post: ReturnType<typeof getPost>;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://www.nutricenterapp.com/blog/${slug}`,
    ...(post.image && { image: `https://www.nutricenterapp.com${post.image}` }),
    author: {
      "@type": "Person",
      name: "Jair Flores",
      url: "https://www.linkedin.com/in/jkevinfg/",
    },
    publisher: {
      "@type": "Organization",
      name: "NutriCenter",
      url: "https://www.nutricenterapp.com",
      logo: "https://www.nutricenterapp.com/logo.png",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <Link
            href="/blog"
            className="text-sm text-primary hover:underline mb-8 inline-block"
          >
            ← Volver al blog
          </Link>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">
            {formatDate(post.date)} · {post.readingTime} de lectura
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            {post.description}
          </p>
          <PostCover
            image={post.image}
            alt={post.imageAlt}
            sizes="(min-width: 768px) 720px, 100vw"
            priority
            className="mb-12"
          />
          <article className="prose prose-gray prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </article>
          <div className="mt-16 p-8 bg-primary/8 rounded-2xl text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              ¿Quieres llevar tu consulta al siguiente nivel?
            </p>
            <p className="text-gray-500 mb-5">
              NutriCenter es el software diseñado para nutricionistas en LATAM.
            </p>
            <a
              href={APP_REGISTER_URL}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Probar gratis
            </a>
          </div>
      </main>
      <Footer />
    </>
  );
}
