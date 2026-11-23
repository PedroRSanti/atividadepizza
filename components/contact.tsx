"use client";

import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";

interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

interface OrderForm {
  nome: string;
  telefone: string;
  pedido: string;
}

const contactItems: ContactItem[] = [
  { icon: "📞", label: "Telefone", value: "(11) 99999-9999" },
  { icon: "📍", label: "Endereço", value: "Rua da Pizza, 123 - São Paulo" },
  { icon: "🕐", label: "Horário", value: "Ter-Dom: 18h às 23h" },
];

const initialForm: OrderForm = { nome: "", telefone: "", pedido: "" };

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<OrderForm>(initialForm);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-red-500 font-semibold">PEÇA AGORA</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            Delivery em
            <br />
            <span className="text-red-500">30 minutos</span>
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Faça seu pedido pelo formulário ou entre em contato pelos nossos
            canais. Estamos prontos para te atender!
          </p>

          <div className="space-y-4">
            {contactItems.map((item: ContactItem) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-neutral-950 rounded-xl p-4 border border-neutral-800"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Faça seu pedido</h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm text-neutral-400 mb-2"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="telefone"
                className="block text-sm text-neutral-400 mb-2"
              >
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                value={form.telefone}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label
                htmlFor="pedido"
                className="block text-sm text-neutral-400 mb-2"
              >
                Seu pedido
              </label>
              <textarea
                id="pedido"
                name="pedido"
                required
                value={form.pedido}
                onChange={handleChange}
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Ex: 1x Margherita + 1x Pepperoni"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Enviar Pedido 🍕
            </button>
            {sent && (
              <p role="status" className="text-green-400 text-center text-sm">
                ✓ Pedido enviado com sucesso! Entraremos em contato.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}