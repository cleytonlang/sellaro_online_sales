import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] overflow-hidden pt-24 pb-16"
    >
      <div className="gradient-glow absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Investimento
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Faça do seu dinheiro uma máquina de renda passiva
            </h1>
            <p className="mt-6 text-lg text-zinc-400">
              Invista com inteligência, diversifique sua carteira e acompanhe
              sua rentabilidade em tempo real. Conte com análise profissional e
              uma comunidade de investidores.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)]/10 px-3 py-1.5 text-sm font-medium text-[var(--primary)]">
              Oferta por tempo limitado — condição especial para novos alunos
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/comprar"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-[var(--primary)] px-8 py-4 text-base font-semibold text-black transition hover:bg-[var(--primary-hover)]"
              >
                Compre o curso hoje
              </Link>
              <Link
                href="/fale-com-vendedor"
                className="inline-flex w-fit items-center justify-center rounded-lg border-2 border-[var(--primary)] px-8 py-4 text-base font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10"
              >
                Fale com um de nossos vendedores
              </Link>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Garantia de 7 dias ou seu dinheiro de volta • Acesso imediato
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            {/* Mockups de celular - placeholders visuais */}
            <div className="relative flex gap-4">
              <div className="h-[380px] w-[180px] rounded-[2rem] border-4 border-zinc-700 bg-[var(--card-bg)] p-2 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <div className="h-32 w-32 rounded-full border-4 border-emerald-400/50 bg-emerald-500/30" />
                  <span className="mt-4 text-2xl font-bold text-white">42%</span>
                  <span className="text-xs text-zinc-400">
                    Carteira recomendada
                  </span>
                </div>
              </div>
              <div className="h-[380px] w-[180px] rounded-[2rem] border-4 border-zinc-700 bg-[var(--card-bg)] p-2 shadow-2xl lg:mt-8">
                <div className="grid h-full grid-cols-2 gap-1 rounded-2xl bg-zinc-900/80 p-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-zinc-700/50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
