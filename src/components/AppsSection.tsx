import { HiDeviceMobile, HiBell, HiShieldCheck, HiSupport } from "react-icons/hi";

const features = [
  { icon: HiDeviceMobile, text: "Acompanhe de onde estiver" },
  { icon: HiBell, text: "Notificações em tempo real" },
  { icon: HiShieldCheck, text: "Invista com segurança" },
  { icon: HiSupport, text: "Suporte 24h" },
];

export function AppsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="h-[420px] w-[220px] rounded-[2.5rem] border-4 border-zinc-700 bg-[var(--card-bg)] p-2 shadow-2xl">
              <div className="grid h-full grid-cols-2 gap-2 rounded-2xl bg-zinc-900/80 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-zinc-700/50"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white">
              Conheça nossas apps
            </h2>
            <p className="mt-4 text-zinc-400">
              Tenha sua carteira e análises na palma da mão. Baixe o app e
              invista com praticidade.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-zinc-300">
                  <Icon className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
