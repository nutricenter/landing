import Image, { type StaticImageData } from "next/image";
import evaluationScreenshot from "@/public/images/product/evaluacion-mediciones.png";
import planScreenshot from "@/public/images/product/plan-alimenticio.png";
import profileScreenshot from "@/public/images/product/perfil-clinico.png";

type Stage = {
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

const STAGES: Stage[] = [
  {
    number: "01",
    title: "Perfil clínico",
    description:
      "Reúne datos personales, objetivos, antecedentes y hábitos relevantes para comprender el contexto de cada paciente.",
    image: profileScreenshot,
    imageAlt:
      "Perfil clínico de una paciente en NutriCenter con sus datos personales y objetivos",
  },
  {
    number: "02",
    title: "Evaluación y evolución",
    description:
      "Registra mediciones antropométricas, consulta resultados y compara los cambios del paciente a lo largo del tiempo.",
    image: evaluationScreenshot,
    imageAlt:
      "Evaluación antropométrica en NutriCenter con campos para registrar mediciones corporales",
  },
  {
    number: "03",
    title: "Plan alimenticio",
    description:
      "Crea planes personalizados con alimentos, recetas o plantillas y revisa su distribución nutricional mientras trabajas.",
    image: planScreenshot,
    imageAlt:
      "Editor de planes alimenticios de NutriCenter con objetivos y análisis nutricional del día",
  },
];

export default function ProductShowcase() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Conoce NutriCenter por dentro
          </h2>
          <p className="text-lg text-gray-500">
            Un flujo conectado para organizar la información clínica, evaluar la
            evolución y crear el plan de cada paciente.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {STAGES.map((stage, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={stage.title}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`}
                >
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    Etapa {stage.number}
                  </p>
                  <h3 className="mb-4 text-3xl font-bold text-gray-900">
                    {stage.title}
                  </h3>
                  <p className="text-lg leading-8 text-gray-500">
                    {stage.description}
                  </p>
                </div>

                <figure
                  className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.3)] lg:col-span-8 ${
                    reverse ? "lg:order-1" : undefined
                  }`}
                >
                  <Image
                    src={stage.image}
                    alt={stage.imageAlt}
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="h-auto w-full"
                  />
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
