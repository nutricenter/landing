// Dynamic OG image — auto-detected by Next.js, served at /opengraph-image
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "NutriCenter — Software para nutricionistas en LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Reads the logo from the repo instead of fetching it from the live domain, so the
// image builds the same before and after DNS changes.
export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A2E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(59, 165, 143, 0.08)",
            right: -100,
            bottom: -100,
          }}
        />

        {/* Logo + nombre */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <img
            src={logoSrc}
            alt=""
            width={56}
            height={56}
            style={{ borderRadius: 14 }}
          />
          <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>NutriCenter</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          <span>Tu consulta nutricional,</span>
          <span style={{ color: "#3BA58F" }}>toda en un solo lugar</span>
        </div>

        {/* Subtítulo */}
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 26, maxWidth: 680 }}>
          Software para nutricionistas en LATAM
        </div>
      </div>
    ),
    { ...size },
  );
}
