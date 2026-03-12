import { HiChat, HiLightningBolt, HiUserGroup, HiQuestionMarkCircle } from "react-icons/hi";

const benefits = [
  { icon: HiChat, text: "Troque experiências com outros investidores" },
  { icon: HiLightningBolt, text: "Receba insights e alertas em tempo real" },
  { icon: HiUserGroup, text: "Participe de grupos por perfil" },
  { icon: HiQuestionMarkCircle, text: "Tire suas dúvidas com a comunidade" },
];

export function CommunitySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white">
              Conecte-se com a comunidade
            </h2>
            <p className="mt-4 text-zinc-400">
              Faça parte de uma rede de investidores que compartilha ideias,
              análises e resultados. Aprenda e evolua junto.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-zinc-300">
                  <Icon className="h-5 w-5 flex-shrink-0 text-[var(--primary)]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-lg bg-zinc-800/50 p-3"
                >
                  <div className="h-10 w-10 rounded-full bg-zinc-700" />
                  <div className="flex-1">
                    <div className="h-3 w-3/4 rounded bg-zinc-600" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-zinc-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
