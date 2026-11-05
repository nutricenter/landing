// About / Founder page
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros — NutriCenter",
  description:
    "La historia detrás de NutriCenter y por qué fue construido para los nutricionistas en LATAM.",
  alternates: { canonical: "https://www.nutricenterapp.com/nosotros" },
  openGraph: {
    title: "Nosotros — NutriCenter",
    description: "La historia detrás de NutriCenter y por qué fue construido para los nutricionistas en LATAM.",
    url: "https://www.nutricenterapp.com/nosotros",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Nosotros — NutriCenter" },
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-primary/6 -bottom-20 -right-20 pointer-events-none" />
        <div className="absolute w-56 h-56 rounded-full bg-gold/5 top-20 right-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Nosotros
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            La historia detrás de NutriCenter
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            NutriCenter nació de una pregunta simple: ¿por qué los nutricionistas en LATAM
            tienen que saltar entre varias herramientas para hacer el trabajo que debería
            hacer una sola?
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            <div className="shrink-0">
              <Image
                src="/jair.jpeg"
                alt="Jair Flores"
                width={140}
                height={140}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Jair Flores</h2>
              <p className="text-primary font-medium mb-3">Founder & Developer</p>
              <a
                href="https://www.linkedin.com/in/jkevinfg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-4"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin.com/in/jkevinfg
              </a>
              <p className="text-gray-500 leading-relaxed">
                Llevo años trabajando como Software Engineer y en mi experiencia lo que
                más me apasiona no es el código en sí — es ver cómo un producto que
                ayudé a construir resuelve algo real para las personas. Esa capacidad
                transformadora de la tecnología es lo que me motiva, especialmente en
                áreas donde más importa: salud y educación.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="prose prose-gray prose-lg max-w-none">
            <h2>Por qué NutriCenter</h2>
            <p>
              Decidí enfocarme en salud — y específicamente en nutrición — porque creo
              que es una de las ramas más importantes para el bienestar de las personas,
              y una de las más desatendidas por el software disponible en LATAM.
            </p>
            <p>
              Antes de escribir una línea de código, investigué cómo trabajan los
              nutricionistas en la región: qué herramientas usaban, qué les faltaba y
              por qué las soluciones existentes no los convencían. La conclusión fue
              clara: las alternativas eran demasiado genéricas, demasiado costosas, o
              simplemente no estaban pensadas para un profesional independiente en
              Perú, Colombia o México.
            </p>
            <p>
              NutriCenter es mi respuesta a eso. Un sistema diseñado desde cero para el
              nutricionista en LATAM: agenda, perfil clínico, mediciones corporales y
              planes alimenticios — todo en un solo lugar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
