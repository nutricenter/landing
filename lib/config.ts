// Constantes globales del proyecto
export const SITE_URL = "https://www.nutricenterapp.com";
export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://app.nutricenterapp.com";
export const APP_REGISTER_URL = `${APP_URL}/register`;

// Site-wide share image (app/opengraph-image.tsx). Pages that define their own `openGraph`
// replace the inherited one, so they must list this image explicitly.
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "NutriCenter — Software para nutricionistas en LATAM",
};
