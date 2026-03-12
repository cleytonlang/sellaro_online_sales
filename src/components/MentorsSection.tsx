const mentors = [
  { name: "Ana Silva", role: "Economista", initial: "A" },
  { name: "Carlos Mendes", role: "Analista de Investimentos", initial: "C" },
  { name: "Maria Santos", role: "Especialista em Renda Fixa", initial: "M" },
  { name: "Pedro Costa", role: "Gestor de Carteiras", initial: "P" },
  { name: "Julia Oliveira", role: "Consultora Financeira", initial: "J" },
];

export function MentorsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">
          Conheça alguns dos nossos mentores
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Aprenda com profissionais que vivem o mercado e compartilham
          estratégias reais.
        </p>
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="min-w-[200px] flex-shrink-0 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden transition hover:border-[var(--primary)]/30"
            >
              <div className="aspect-[3/4] flex items-center justify-center bg-zinc-800 text-4xl font-bold text-[var(--primary)]/80">
                {mentor.initial}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">{mentor.name}</h3>
                <p className="text-sm text-zinc-500">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
