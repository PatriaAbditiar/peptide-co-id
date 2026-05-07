"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/peptida", label: "Peptida" },
  { href: "/stacks", label: "Stacks" },
  { href: "/kalkulator", label: "Kalkulator" },
  { href: "/toko-peptida", label: "Toko" },
  { href: "/kamus", label: "Kamus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 tracking-tight">
              peptide
              <span className="text-slate-400 font-normal">.co.id</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/panduan/pemula"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg hover:shadow-md hover:shadow-teal-500/25 transition-all"
            >
              Mulai Belajar
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200/50 glass animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/panduan/pemula"
              className="block px-3 py-2.5 text-sm font-medium text-teal-600"
              onClick={() => setMenuOpen(false)}
            >
              Mulai Belajar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
