// Terms of service page — required for Google OAuth verification and user trust.
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio — NutriCenter",
  description:
    "Condiciones de uso del software NutriCenter para nutricionistas.",
  alternates: { canonical: "https://www.nutricenterapp.com/terminos" },
  openGraph: {
    title: "Términos de Servicio — NutriCenter",
    description: "Condiciones de uso del software NutriCenter para nutricionistas.",
    url: "https://www.nutricenterapp.com/terminos",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-primary/6 -bottom-20 -right-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Términos de Servicio
          </h1>
          <p className="text-white/50 text-sm">
            Última actualización: 8 de agosto de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
        <div className="prose prose-gray prose-lg max-w-none">

          <p>
            Al crear una cuenta en NutriCenter aceptas estos Términos de Servicio.
            Si no estás de acuerdo con alguna de estas condiciones, no uses el
            servicio.
          </p>

          <h2>1. El servicio</h2>
          <p>
            NutriCenter es un software de gestión clínica para nutricionistas que
            incluye agenda de citas, perfil de pacientes, mediciones corporales,
            planes alimenticios e integraciones con servicios externos como Google
            Calendar. El acceso al servicio es a través de{" "}
            <strong>app.nutricenterapp.com</strong> y sus subdominios.
          </p>

          <h2>2. Cuentas y acceso</h2>
          <p>
            Eres responsable de mantener la confidencialidad de tu contraseña y de
            todas las actividades que ocurran en tu cuenta. Debes notificarnos
            inmediatamente ante cualquier uso no autorizado.
          </p>
          <p>
            Cada cuenta pertenece a un centro nutricional (&ldquo;tenant&rdquo;). Puedes
            invitar a otros profesionales y staff a tu centro; cada uno accede con
            sus propias credenciales.
          </p>

          <h2>3. Uso aceptable</h2>
          <p>Te comprometes a usar NutriCenter únicamente para:</p>
          <ul>
            <li>Gestionar tu práctica profesional como nutricionista.</li>
            <li>
              Registrar información de pacientes que han dado su consentimiento
              para el manejo de sus datos.
            </li>
            <li>Coordinar citas y comunicarte con tus pacientes.</li>
          </ul>
          <p>Está prohibido:</p>
          <ul>
            <li>Usar el servicio para actividades ilegales o fraudulentas.</li>
            <li>
              Intentar acceder a datos de otros centros o cuentas que no te
              pertenecen.
            </li>
            <li>
              Automatizar el acceso al sistema sin autorización previa por escrito.
            </li>
            <li>
              Revender o sublicenciar el acceso al servicio a terceros.
            </li>
          </ul>

          <h2>4. Planes y facturación</h2>
          <p>
            NutriCenter ofrece planes Free, Pro y Business. El plan Free está
            disponible sin costo. Los planes de pago se facturan mensualmente
            según el precio vigente al momento de la contratación.
          </p>
          <p>
            Al registrarte en un plan de pago, tienes un período de prueba de 30
            días. Si cancelas dentro de ese período no se genera ningún cargo.
            Pasado el período de prueba, los pagos no son reembolsables salvo
            disposición legal en contrario.
          </p>

          <h2>5. Datos de pacientes</h2>
          <p>
            Tú eres responsable de obtener el consentimiento de tus pacientes
            para el registro y tratamiento de su información de salud, de acuerdo
            con la legislación de protección de datos de tu país. NutriCenter actúa
            como procesador de datos en nombre de tu centro; el responsable del
            tratamiento eres tú como profesional de salud.
          </p>

          <h2>6. Disponibilidad del servicio</h2>
          <p>
            Nos esforzamos por mantener el servicio disponible de forma continua,
            pero no garantizamos una disponibilidad del 100%. Podemos realizar
            mantenimientos programados, en cuyo caso procuraremos notificarte con
            anticipación.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            NutriCenter es una herramienta de gestión y no reemplaza el criterio
            clínico del profesional de salud. No somos responsables de decisiones
            clínicas tomadas con base en la información registrada en el sistema.
          </p>
          <p>
            En ningún caso nuestra responsabilidad total ante ti excederá el monto
            pagado por el servicio en los últimos 3 meses.
          </p>

          <h2>8. Terminación</h2>
          <p>
            Puedes cancelar tu cuenta en cualquier momento desde la configuración
            de tu centro. Nos reservamos el derecho de suspender o terminar
            cuentas que violen estos términos, con o sin previo aviso.
          </p>

          <h2>9. Cambios a estos términos</h2>
          <p>
            Podemos modificar estos términos. Te notificaremos por correo
            electrónico con al menos 15 días de anticipación ante cambios
            significativos. El uso continuado del servicio tras la notificación
            implica aceptación de los nuevos términos.
          </p>

          <h2>10. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República del Perú.
            Cualquier disputa se someterá a la jurisdicción de los tribunales
            competentes de Lima, Perú.
          </p>

          <h2>11. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos escríbenos a{" "}
            <a href="mailto:contacto@nutricenterapp.com">contacto@nutricenterapp.com</a>.
          </p>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
