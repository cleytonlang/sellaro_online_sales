"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function StickySalesCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--background)]/95 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-white">
          Pronto para começar? Compre o curso ou fale com um vendedor.
        </p>
        <div className="flex gap-3">
          <Link
            href="/comprar"
            className="rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--primary-hover)]"
          >
            Comprar curso hoje
          </Link>
          <Link
            href="/fale-com-vendedor"
            className="rounded-lg border border-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)]/10"
          >
            Fale com vendedor
          </Link>
        </div>
      </div>
    </div>
  );
}
