// Hero section — dark background matching the app's visual identity
import { APP_REGISTER_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative bg-dark pt-32 pb-28 px-6 overflow-hidden">
      {/* Decorative circles — mirrors the app's left panel */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 -bottom-40 -right-24 pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gold/6 top-16 right-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="block">Del perfil clínico al plan alimenticio,</span>
          <span className="block text-primary">todo en un solo lugar</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10">
          Organiza la información de cada paciente, registra sus mediciones,
          sigue su evolución y crea planes alimenticios personalizados desde un
          mismo lugar.
        </p>
        <a
          href={APP_REGISTER_URL}
          className="inline-block bg-primary hover:bg-primary-dark text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          Crear cuenta gratis
        </a>
      </div>
    </section>
  );
}
