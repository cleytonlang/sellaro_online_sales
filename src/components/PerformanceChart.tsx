"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { periodo: "Jan", minha: 100, mercado: 100 },
  { periodo: "Fev", minha: 105, mercado: 102 },
  { periodo: "Mar", minha: 112, mercado: 104 },
  { periodo: "Abr", minha: 118, mercado: 106 },
  { periodo: "Mai", minha: 128, mercado: 108 },
  { periodo: "Jun", minha: 138, mercado: 110 },
];

export function PerformanceChart() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Rentabilidade acima da média do mercado
            </h2>
            <p className="mt-4 text-zinc-400">
              Nossa estratégia combina diversificação inteligente com gestão de
              risco para buscar retornos consistentes ao longo do tempo.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Diversificação inteligente
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                Gestão de risco profissional
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6">
            <div className="mb-4 flex gap-2">
              {["1 Semana", "1 Mês", "1 Ano"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-zinc-400 transition hover:border-[var(--primary)] hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="h-64 min-h-[256px] w-full">
              <ResponsiveContainer width="100%" height={256}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="periodo"
                    stroke="#71717a"
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#71717a"
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#27272a",
                      border: "1px solid #3f3f46",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fafafa" }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: 12 }}
                    formatter={(value) => (
                      <span className="text-zinc-400">{value}</span>
                    )}
                  />
                  <Line
                    type="monotone"
                    dataKey="minha"
                    name="Minha rentabilidade"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="mercado"
                    name="Média do mercado"
                    stroke="#71717a"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
