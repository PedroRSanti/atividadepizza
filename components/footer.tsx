import type { JSX } from "react";

interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

const socials: SocialLink[] = [
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "Facebook", icon: "📘" },
  { href: "#", label: "WhatsApp", icon: "💬" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-2xl font-extrabold text-red-500">🍕 Bella Pizza</p>
        <p className="text-neutral-500 text-sm text-center">
          © {new Date().getFullYear()} Bella Pizza. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-4 text-2xl">
          {socials.map((social: SocialLink) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="hover:opacity-70 transition-opacity"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}