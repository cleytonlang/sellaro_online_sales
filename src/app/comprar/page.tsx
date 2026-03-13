import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { SellaroCheckoutForm } from "@/components/SellaroCheckoutForm";
import { HiShieldCheck, HiCreditCard, HiCheckCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Compre o curso | Sellaro",
  description:
    "Finalize sua compra do curso Sellaro preenchendo o formulário seguro de pagamento.",
};

const TRUST_ITEMS = [
  { icon: HiShieldCheck, text: "Garantia de 7 dias ou seu dinheiro de volta" },
  { icon: HiCreditCard, text: "Pagamento em até 12x no cartão" },
  { icon: HiCheckCircle, text: "Acesso imediato após a confirmação" },
];

export default function ComprarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-16 bg-white">
        {/* Hero */}
        <section className="border-b border-[var(--border)] bg-[var(--card-bg)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Compre o curso hoje
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Preencha o formulário abaixo para garantir sua vaga no curso da
              Sellaro. Processo rápido, seguro e 100% online.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <Icon className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário via iframe */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl">
              <SellaroCheckoutForm />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-[var(--border)] bg-[var(--card-bg)] py-16">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">
              Precisa de ajuda com a compra?
            </h2>
            <p className="mt-3 text-zinc-400">
              Se tiver qualquer dúvida durante o preenchimento do formulário,
              fale com um de nossos vendedores e tire todas as suas dúvidas.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/fale-com-vendedor"
                className="rounded-lg border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10"
              >
                Falar com um vendedor
              </Link>
              <Link
                href="/"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

