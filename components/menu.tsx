import type { JSX } from "react";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string;
  emoji: string;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Molho de tomate, mussarela fresca, manjericão e azeite.",
    price: "R$ 45,90",
    tag: "Clássica",
    emoji: "🍕",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Molho de tomate, mussarela e fatias generosas de pepperoni.",
    price: "R$ 52,90",
    tag: "Mais pedida",
    emoji: "🌶️",
  },
  {
    id: 3,
    name: "Quatro Queijos",
    description: "Mussarela, gorgonzola, parmesão e catupiry cremoso.",
    price: "R$ 56,90",
    tag: "Premium",
    emoji: "🧀",
  },
  {
    id: 4,
    name: "Portuguesa",
    description: "Presunto, ovos, cebola, azeitona e mussarela.",
    price: "R$ 49,90",
    tag: "Tradicional",
    emoji: "🥓",
  },
  {
    id: 5,
    name: "Vegetariana",
    description: "Abobrinha, berinjela, pimentão, cebola e tomate.",
    price: "R$ 48,90",
    tag: "Veggie",
    emoji: "🥬",
  },
  {
    id: 6,
    name: "Calabresa Artesanal",
    description: "Calabresa fatiada, cebola roxa e orégano fresco.",
    price: "R$ 47,90",
    tag: "Favorita",
    emoji: "🔥",
  },
];

export default function Menu(): JSX.Element {
  return (
    <section id="menu" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold">NOSSO MENU</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Sabores que conquistam
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Cada pizza é preparada na hora com ingredientes selecionados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza: Pizza) => (
            <article
              key={pizza.id}
              className="bg-neutral-950 border border-neutral-800 hover:border-red-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{pizza.emoji}</div>
                <span className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full font-semibold">
                  {pizza.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
              <p className="text-neutral-400 text-sm mb-4">
                {pizza.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-red-500">
                  {pizza.price}
                </span>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Adicionar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}