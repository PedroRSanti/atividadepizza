import type { JSX } from "react";

interface Milestone {
  value: string;
  label: string;
}

const milestones: Milestone[] = [
  { value: "25+", label: "Anos de tradição" },
  { value: "48h", label: "Fermentação natural" },
];

export default function About(): JSX.Element {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-red-500 font-semibold">NOSSA HISTÓRIA</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            Paixão por pizza
            <br />
            <span className="text-red-500">desde 1995</span>
          </h2>
          <p className="text-neutral-400 mb-4 leading-relaxed">
            Tudo começou com a Nonna Rosa, que trouxe da Itália sua receita
            secreta de massa fermentada naturalmente por 48 horas.
          </p>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Hoje, mais de 25 anos depois, mantemos a tradição: forno a lenha,
            ingredientes frescos e o mesmo carinho em cada pizza que sai da
            nossa cozinha.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {milestones.map((item: Milestone) => (
              <div
                key={item.label}
                className="bg-neutral-900 rounded-xl p-5 border border-neutral-800"
              >
                <p className="text-3xl font-extrabold text-red-500 mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-neutral-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 flex items-center justify-center">
            <span className="text-[180px] md:text-[220px]">🍕</span>
          </div>
        </div>
      </div>
    </section>
  );
}