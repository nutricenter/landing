// Site footer — dark background to bookend the page with the hero
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { APP_URL, APP_REGISTER_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src={logo} alt="NutriCenter" width={28} height={28} className="rounded-[8px]" />
              <span className="text-white font-bold text-lg">NutriCenter</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Software para nutricionistas en LATAM. Gestiona tu consulta desde un solo lugar.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Producto</span>
              <a href={APP_REGISTER_URL} className="hover:text-white transition-colors">
                Probar gratis
              </a>
              <a href={APP_URL} className="hover:text-white transition-colors">
                Iniciar sesión
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Recursos</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/nosotros" className="hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>© {new Date().getFullYear()} NutriCenter. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos
            </Link>
            <span>contacto@nutricenterapp.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
