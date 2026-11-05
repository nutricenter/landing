"use client";
// Top navigation bar — dark background matching the app's color identity
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_URL, APP_REGISTER_URL } from "@/lib/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-dark/95 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="NutriCenter" width={32} height={32} className="rounded-[9px]" />
          <span className="text-white font-bold text-xl">NutriCenter</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">
            Blog
          </Link>
          <a href={APP_URL} className="text-white/60 hover:text-white text-sm transition-colors">
            Iniciar sesión
          </a>
          <a
            href={APP_REGISTER_URL}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Probar gratis
          </a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={APP_REGISTER_URL}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Probar gratis
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-dark px-6 py-4 flex flex-col gap-4">
          <Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <a href={APP_URL} className="text-white/70 hover:text-white text-sm transition-colors">
            Iniciar sesión
          </a>
        </div>
      )}
    </nav>
  );
}
