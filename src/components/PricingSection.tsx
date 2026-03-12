import Link from "next/link";
import { HiOutlineSparkles, HiOutlineStar, HiOutlineOfficeBuilding } from "react-icons/hi";

const plans = [
  {
    icon: HiOutlineSparkles,
    name: "Plano Grátis",
    description: "Para começar a investir",
    features: ["Acesso básico", "Conteúdo inicial", "Comunidade"],
    cta: "Quero começar grátis",
    href: "/comprar?plano=gratis",
    highlighted: false,
  },
  {
    icon: HiOutlineStar,
    name: "Plano Premium",
    description: "Para quem quer resultados",
    features: [
      "Tudo do Grátis",
      "Mentorias ao vivo",
      "Análises semanais",
      "Suporte prioritário",
    ],
    cta: "Comprar Premium agora",
    href: "/comprar?plano=premium",
    highlighted: true,
  },
  {
    icon: HiOutlineOfficeBuilding,
    name: "Plano Enterprise",
    description: "Para empresas e grupos",
    features: [
      "Tudo do Premium",
      "Gestão de equipe",
      "Relatórios personalizados",
      "Consultoria dedicada",
    ],
    cta: "Fale com um vendedor",
    href: "/fale-com-vendedor",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="planos"
      className="border-y border-[var(--border)] bg-[var(--card-bg)] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white">
          Escolha seu plano e compre hoje
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Dúvidas? Fale com um de nossos vendedores para atendimento personalizado.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.highlighted
                  ? "border-[var(--primary)] bg-[var(--primary)]/5"
                  : "border-[var(--border)] bg-[var(--background)]"
              }`}
            >
              <div className="rounded-lg bg-[var(--primary)]/10 p-3 w-fit">
                <plan.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-zinc-400">
                    • {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[var(--primary)] text-black hover:bg-[var(--primary-hover)]"
                    : "border border-[var(--border)] text-white hover:border-[var(--primary)]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
