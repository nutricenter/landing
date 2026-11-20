// Final CTA banner — closing call to action
import { APP_REGISTER_URL } from "@/lib/config";

export default function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 text-center text-white md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Menos información dispersa. Más continuidad en cada consulta.
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Empieza gratis, sin tarjeta de crédito, y organiza el perfil clínico,
          la evolución y el plan alimenticio de cada paciente.
        </p>
        <a
          href={APP_REGISTER_URL}
          className="inline-block bg-white text-primary font-semibold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Crear cuenta gratis
        </a>
      </div>
    </section>
  );
}
