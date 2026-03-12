const items = [
  {
    title: "Sala ao vivo",
    description: "Participe de transmissões ao vivo com nossos analistas.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80",
  },
  {
    title: "Análises semanais",
    description: "Relatórios e insights sobre o mercado toda semana.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    title: "Mentoria VIP",
    description: "Acompanhamento personalizado para seus investimentos.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
];

export function CommunityCards() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card-bg)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">
          Conheça e faça parte da nossa comunidade
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Conteúdos exclusivos, eventos e networking com investidores.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] transition hover:border-[var(--primary)]/30"
            >
              <div className="aspect-video bg-zinc-800 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
