import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const siteTitle = "NutriCenter — Software para nutricionistas en LATAM";
const siteDescription =
  "Organiza perfiles clínicos, registra mediciones y sigue la evolución de tus pacientes. Crea planes alimenticios con alimentos, recetas y plantillas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: "iFTF6GiinEMPcgm_SrwXOtlhpFc045_UgnM2cu5bSpQ",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NutriCenter",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Software para nutricionistas en LATAM: perfil clínico, evaluaciones y planes alimenticios.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@nutricenterapp.com",
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="antialiased text-gray-900 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
