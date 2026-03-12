import Link from "next/link";

export function SalesBanner() {
  return (
    <div className="bg-[var(--primary)] py-2 text-center">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <span className="text-sm font-semibold text-black">
          Compre o curso hoje — condição especial por tempo limitado
        </span>
        <div className="flex gap-3">
          <Link
            href="/comprar"
            className="rounded bg-black px-4 py-1.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-zinc-800"
          >
            Comprar agora
          </Link>
          <Link
            href="/fale-com-vendedor"
            className="rounded border-2 border-black px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-black/10"
          >
            Fale com um vendedor
          </Link>
        </div>
      </div>
    </div>
  );
}
