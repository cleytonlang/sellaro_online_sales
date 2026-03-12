import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const items = [
  "Estratégias validadas por nossa equipe",
  "Conteúdo atualizado semanalmente",
  "Análises de mercado em tempo real",
  "Suporte para tirar dúvidas",
];

export function StrategiesSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card-bg)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Estratégias de investimento em um só lugar
            </h2>
            <p className="mt-4 text-zinc-400">
              Todo o conhecimento que você precisa para investir com confiança.
              Cursos, análises e mentorias em uma única plataforma.
            </p>
            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <HiCheckCircle className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Link
                href="/comprar"
                className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--primary-hover)]"
              >
                Compre o curso hoje
              </Link>
              <Link
                href="/fale-com-vendedor"
                className="rounded-lg border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10"
              >
                Fale com um vendedor
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-xl border border-[var(--border)] bg-zinc-900/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
