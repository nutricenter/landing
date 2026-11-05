import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nutricenterapp.com"),
  title: "NutriCenter — Software para nutricionistas en LATAM",
  description:
    "Gestiona pacientes, agenda consultas, registra mediciones y crea planes alimenticios. Todo en un solo lugar.",
  alternates: {
    canonical: "https://www.nutricenterapp.com",
  },
  openGraph: {
    title: "NutriCenter — Software para nutricionistas en LATAM",
    description:
      "Gestiona pacientes, agenda consultas, registra mediciones y crea planes alimenticios. Todo en un solo lugar.",
    url: "https://www.nutricenterapp.com",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriCenter — Software para nutricionistas en LATAM",
    description:
      "Gestiona pacientes, agenda consultas, registra mediciones y crea planes alimenticios. Todo en un solo lugar.",
  },
  verification: {
    google: "iFTF6GiinEMPcgm_SrwXOtlhpFc045_UgnM2cu5bSpQ",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NutriCenter",
  url: "https://www.nutricenterapp.com",
  logo: "https://www.nutricenterapp.com/logo.png",
  description: "Software de gestión clínica para nutricionistas en LATAM.",
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
