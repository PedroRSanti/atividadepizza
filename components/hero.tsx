import type { JSX } from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "30min", label: "Entrega rápida" },
  { value: "50+", label: "Sabores" },
  { value: "4.9★", label: "Avaliação" },
];

export default function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-neutral-950 to-neutral-950" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block bg-red-600/20 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-red-600/30">
          🔥 Massa artesanal desde 1995
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          A pizza que
          <br />
          <span className="text-red-500">abraça sua alma</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Ingredientes frescos, forno a lenha e receitas tradicionais italianas.
          Entrega em até 30 minutos na sua porta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Ver Menu Completo
          </a>
          <a
            href="#contato"
            className="border-2 border-neutral-700 hover:border-red-500 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Fazer Pedido
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat: Stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-red-500">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}