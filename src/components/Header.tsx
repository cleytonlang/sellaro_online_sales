import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-white">
          Sellaro
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/fale-com-vendedor"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Fale com um vendedor
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/comprar"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[var(--primary-hover)]"
          >
            Comprar curso
          </Link>
        </div>
      </div>
    </header>
  );
}
