"use client";

import { useState } from "react";
import type { JSX } from "react";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#menu", label: "Menu" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold text-red-500">
          🍕 Bella Pizza
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-300 hover:text-red-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition-colors"
          >
            Pedir Agora
          </a>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-2xl"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {links.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-neutral-300 hover:text-red-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-center px-5 py-2 rounded-full font-semibold"
          >
            Pedir Agora
          </a>
        </nav>
      )}
    </header>
  );
}