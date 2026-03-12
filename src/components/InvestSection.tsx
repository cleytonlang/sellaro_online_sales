import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const points = [
  "Invista no seu futuro com planejamento",
  "Aprenda com quem já conquistou resultados",
  "Tenha suporte para cada etapa",
];

export function InvestSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card-bg)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Comece a investir em você
            </h2>
            <p className="mt-4 text-zinc-400">
              O melhor investimento que você pode fazer é em conhecimento e
              ferramentas que geram resultados. Compre o curso hoje ou fale com
              um de nossos vendedores.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((text) => (
                <li key={text} className="flex items-center gap-3 text-zinc-300">
                  <HiCheckCircle className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Link
                href="/comprar"
                className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--primary-hover)]"
              >
                Comprar curso hoje
              </Link>
              <Link
                href="/fale-com-vendedor"
                className="rounded-lg border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10"
              >
                Fale com um vendedor
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-[var(--border)] bg-zinc-900/50 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80')" }} />
        </div>
      </div>
    </section>
  );
}
