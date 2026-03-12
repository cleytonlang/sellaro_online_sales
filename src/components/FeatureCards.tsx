import { HiLightningBolt, HiEye, HiCog } from "react-icons/hi";

const features = [
  {
    icon: HiLightningBolt,
    title: "Invista de forma inteligente",
    description:
      "Receba alertas sobre o mercado e oportunidades selecionadas por nossa equipe.",
  },
  {
    icon: HiEye,
    title: "Monitore seus resultados",
    description:
      "Acompanhe rentabilidade e diversificação em tempo real no app.",
  },
  {
    icon: HiCog,
    title: "Controle total",
    description:
      "Controle total sobre seus investimentos e estratégias personalizadas.",
  },
];

export function FeatureCards() {
  return (
    <section
      id="diferenciais"
      className="border-y border-[var(--border)] bg-[var(--card-bg)] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[var(--primary)]/30"
            >
              <div className="rounded-lg bg-[var(--primary)]/10 p-3">
                <Icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
