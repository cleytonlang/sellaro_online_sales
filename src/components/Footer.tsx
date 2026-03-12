import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const footerLinks = {
  produtos: [
    { label: "Comprar curso", href: "/comprar" },
    { label: "Fale com vendedor", href: "/fale-com-vendedor" },
    { label: "Investimentos", href: "#" },
    { label: "Mentoria", href: "#" },
    { label: "App", href: "#" },
  ],
  sobre: [
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  ajuda: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
  ],
};

const socialIcons = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Sellaro
            </Link>
            <p className="mt-3 text-sm text-zinc-400">
              © {currentYear} Sellaro. Todos os direitos reservados.
            </p>
            <div className="mt-4 flex gap-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-zinc-400 transition hover:text-[var(--primary)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Nossos Produtos
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Sobre</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.sobre.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Ajuda</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.ajuda.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-zinc-500">
            Disponível para iOS e Android
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white">
              App Store
            </a>
            <a href="#" className="text-zinc-500 hover:text-white">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
