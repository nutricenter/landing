// Privacy policy page — required for Google OAuth verification and user trust.
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEFAULT_OG_IMAGE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidad — NutriCenter",
  description:
    "Cómo NutriCenter recopila, usa y protege la información de tus pacientes y tu centro nutricional.",
  alternates: { canonical: "https://www.nutricenterapp.com/privacidad" },
  openGraph: {
    title: "Política de Privacidad — NutriCenter",
    description:
      "Cómo NutriCenter recopila, usa y protege la información de tus pacientes y tu centro nutricional.",
    url: "https://www.nutricenterapp.com/privacidad",
    siteName: "NutriCenter",
    locale: "es_419",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: "Política de Privacidad — NutriCenter", images: [DEFAULT_OG_IMAGE.url] },
};

export default function PrivacyPage() {
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
            Política de Privacidad
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
            NutriCenter (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;) opera el software de gestión para
            nutricionistas disponible en <strong>app.nutricenterapp.com</strong> y sus subdominios.
            Esta política describe qué información recopilamos, cómo la usamos y cómo
            la protegemos.
          </p>

          <h2>1. Información que recopilamos</h2>
          <p>
            Al registrarte y usar NutriCenter, recopilamos la siguiente información:
          </p>
          <ul>
            <li>
              <strong>Datos de cuenta:</strong> nombre, correo electrónico y contraseña
              del profesional o administrador del centro.
            </li>
            <li>
              <strong>Datos del centro:</strong> nombre del consultorio, subdominio,
              país, teléfono y logo.
            </li>
            <li>
              <strong>Datos de pacientes:</strong> nombre, correo, teléfono, fecha de
              nacimiento, perfil de salud, mediciones corporales y planes
              alimenticios. Estos datos son ingresados directamente por el profesional
              de salud.
            </li>
            <li>
              <strong>Datos de agenda:</strong> citas, tipos de consulta, ubicaciones
              y notas clínicas.
            </li>
            <li>
              <strong>Datos de Google Calendar (opcional):</strong> si conectas tu
              cuenta de Google, accedemos a tu calendario para sincronizar citas y
              generar enlaces de Google Meet. Solo accedemos al calendario
              &ldquo;NutriCenter&rdquo; creado específicamente para la integración.
            </li>
            <li>
              <strong>Datos de uso:</strong> registros de acceso e información técnica
              necesaria para el funcionamiento del servicio.
            </li>
          </ul>

          <h2>2. Cómo usamos tu información</h2>
          <p>Usamos la información recopilada para:</p>
          <ul>
            <li>Proveer, mantener y mejorar el servicio.</li>
            <li>
              Sincronizar citas con Google Calendar cuando activas esa integración.
            </li>
            <li>
              Enviar correos transaccionales: confirmaciones de citas, recordatorios
              y comunicaciones del sistema.
            </li>
            <li>Gestionar tu suscripción y plan de uso.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
          </ul>
          <p>
            No vendemos, alquilamos ni compartimos tu información personal ni la de
            tus pacientes con terceros con fines comerciales.
          </p>

          <h2>3. Terceros con acceso a datos</h2>
          <p>
            Para operar el servicio trabajamos con los siguientes proveedores de
            confianza, quienes acceden a datos solo en la medida necesaria para
            prestar sus servicios:
          </p>
          <ul>
            <li>
              <strong>Amazon Web Services (AWS):</strong> almacenamiento de archivos
              (logos e imágenes) en servidores ubicados en EE. UU.
            </li>
            <li>
              <strong>SendGrid (Twilio):</strong> envío de correos transaccionales.
            </li>
            <li>
              <strong>Google LLC:</strong> integración opcional de Google Calendar y
              Google Meet.
            </li>
          </ul>

          <h2>4. Integración con Google Calendar</h2>
          <p>
            El uso de NutriCenter con Google Calendar está sujeto a la{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad de Google
            </a>
            . NutriCenter accede a tu cuenta de Google únicamente para:
          </p>
          <ul>
            <li>Crear y gestionar el calendario &ldquo;NutriCenter&rdquo; en tu cuenta.</li>
            <li>Sincronizar citas agendadas desde NutriCenter.</li>
            <li>Generar enlaces de Google Meet para consultas online.</li>
          </ul>
          <p>
            No accedemos a otros calendarios, correos ni datos adicionales de tu
            cuenta de Google. Puedes desconectar la integración en cualquier momento
            desde Configuración → Integraciones.
          </p>

          <h2>5. Seguridad de los datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas para proteger tu
            información: conexiones cifradas (HTTPS/TLS), tokens OAuth encriptados en
            base de datos y acceso restringido a los datos de cada centro mediante
            multitenancy estricto. Ningún centro puede acceder a los datos de otro.
          </p>

          <h2>6. Retención de datos</h2>
          <p>
            Conservamos tus datos mientras tu cuenta esté activa. Si cancelas tu
            suscripción, tus datos se mantienen por 90 días adicionales para
            facilitar una eventual reactivación, y luego son eliminados de forma
            definitiva.
          </p>

          <h2>7. Tus derechos</h2>
          <p>Puedes en cualquier momento:</p>
          <ul>
            <li>Acceder a tu información personal desde la configuración de tu cuenta.</li>
            <li>Corregir datos incorrectos directamente en la plataforma.</li>
            <li>
              Solicitar la eliminación de tu cuenta y todos los datos asociados
              escribiéndonos a{" "}
              <a href="mailto:contacto@nutricenterapp.com">contacto@nutricenterapp.com</a>.
            </li>
          </ul>

          <h2>8. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política ocasionalmente. Cuando lo hagamos,
            actualizaremos la fecha al inicio de esta página y, si los cambios son
            significativos, te lo notificaremos por correo electrónico.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política o sobre el manejo de tus datos,
            escríbenos a{" "}
            <a href="mailto:contacto@nutricenterapp.com">contacto@nutricenterapp.com</a>.
          </p>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
