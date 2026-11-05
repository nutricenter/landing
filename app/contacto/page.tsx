// Contact page
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEFAULT_OG_IMAGE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — NutriCenter",
  description: "Escríbenos para soporte, prensa o cualquier consulta sobre NutriCenter.",
  alternates: { canonical: "https://www.nutricenterapp.com/contacto" },
  openGraph: {
    title: "Contacto — NutriCenter",
    description: "Escríbenos para soporte, prensa o cualquier consulta sobre NutriCenter.",
    url: "https://www.nutricenterapp.com/contacto",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: "Contacto — NutriCenter", images: [DEFAULT_OG_IMAGE.url] },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          Contacto
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hablemos
        </h1>
        <p className="text-lg text-gray-500 mb-2">
          Respondemos todos los mensajes — dudas, soporte o lo que necesites.
        </p>
        <a
          href="mailto:contacto@nutricenterapp.com"
          className="text-2xl font-semibold text-primary hover:underline"
        >
          contacto@nutricenterapp.com
        </a>
      </main>
      <Footer />
    </>
  );
}
