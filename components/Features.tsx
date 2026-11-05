// Features section — four core capabilities of NutriCenter
const FEATURES = [
  {
    icon: "📅",
    title: "Agenda inteligente",
    description:
      "Organiza tus consultas sin complicaciones. Vistas de semana, día y mes. Conecta con Google Calendar para sincronizar citas y generar enlaces de Google Meet — NutriCenter solo accede al calendario propio que crea para la integración.",
  },
  {
    icon: "🫀",
    title: "Perfil clínico completo",
    description:
      "Conoce a tu paciente en profundidad. Historial clínico, objetivos, antecedentes, hábitos y condiciones de salud en un solo lugar.",
  },
  {
    icon: "📏",
    title: "Mediciones corporales",
    description:
      "Mide y registra su evolución clínica. 11 fórmulas de composición corporal, gráficos de evolución y reporte PDF de progreso.",
  },
  {
    icon: "🥗",
    title: "Planes alimenticios",
    description:
      "Crea el plan perfecto basado en sus datos. Distribución de macros, micronutrientes y plantillas reutilizables para ahorrar tiempo.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas en un solo sistema
          </h2>
          <p className="text-lg text-gray-500">
            Desde la agenda hasta el plan alimenticio, NutriCenter cubre cada etapa
            de tu práctica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
