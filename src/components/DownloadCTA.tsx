import Link from "next/link";

export function DownloadCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Compre o curso hoje e comece a investir
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Acesso imediato às aulas, mentorias e à comunidade. Ou fale com um
          de nossos consultores para um atendimento personalizado.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/comprar"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-[var(--primary)] px-10 py-4 text-lg font-semibold text-black transition hover:bg-[var(--primary-hover)] sm:w-auto"
          >
            Comprar curso agora
          </Link>
          <Link
            href="/fale-com-vendedor"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-[var(--primary)] px-10 py-4 text-lg font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10 sm:w-auto"
          >
            Fale com um vendedor
          </Link>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Garantia de 7 dias • Pagamento em até 12x
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          Também disponível em app para iOS e Android
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-zinc-500 transition hover:text-white">
            App Store
          </a>
          <a href="#" className="text-zinc-500 transition hover:text-white">
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
