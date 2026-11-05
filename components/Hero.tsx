// Hero section — dark background matching the app's visual identity
import { APP_REGISTER_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative bg-dark pt-32 pb-28 px-6 overflow-hidden">
      {/* Decorative circles — mirrors the app's left panel */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 -bottom-40 -right-24 pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gold/6 top-16 right-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-primary/15 text-primary text-sm font-medium px-3 py-1 rounded-full mb-6">
          En beta — sé de los primeros en usarlo
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Tu consulta nutricional,{" "}
          <span className="text-primary">toda en un solo lugar</span>
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
          NutriCenter es una plataforma de gestión clínica para nutricionistas en
          LATAM. Pacientes, agenda, mediciones y planes alimenticios —
          sin saltar entre apps.
        </p>
        <a
          href={APP_REGISTER_URL}
          className="inline-block bg-primary hover:bg-primary-dark text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          Probar gratis
        </a>
      </div>
    </section>
  );
}
