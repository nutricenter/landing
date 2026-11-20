// Problem section — pain points that NutriCenter solves
const PROBLEMS = [
  {
    title: "Perfil fragmentado",
    description:
      "Antecedentes, objetivos y notas quedan repartidos entre documentos, formularios y conversaciones.",
  },
  {
    title: "Evolución sin contexto",
    description:
      "Las mediciones aisladas en hojas de cálculo dificultan comparar cambios y entender el progreso.",
  },
  {
    title: "Planes desconectados",
    description:
      "Crear cada plan en un archivo separado obliga a repetir trabajo y deja la planificación aislada del seguimiento.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          La información clínica pierde valor cuando está dispersa
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Si el perfil, las evaluaciones y los planes viven en herramientas
          separadas, seguir la evolución del paciente toma más tiempo del
          necesario.
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
