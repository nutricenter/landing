// Problem section — pain points that NutriCenter solves
const PROBLEMS = [
  {
    title: "Demasiadas apps",
    description:
      "Saltas entre WhatsApp, Excel, Google Calendar y otras herramientas para gestionar cada paciente.",
  },
  {
    title: "Tiempo en administración",
    description:
      "Pierdes horas en tareas administrativas en lugar de enfocarte en la atención clínica.",
  },
  {
    title: "Información dispersa",
    description:
      "El historial, mediciones y planes de cada paciente viven en lugares distintos y difíciles de consultar.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Los nutricionistas merecen mejores herramientas
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Hoy gestionas tu práctica con varias herramientas que no están diseñadas
          para trabajar juntas. El resultado: tiempo perdido, errores evitables
          y una imagen poco profesional frente a tus pacientes.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 border-t-2 border-t-primary"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
