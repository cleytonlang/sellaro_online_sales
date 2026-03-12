"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Renda Fixa", value: 35, color: "#22c55e" },
  { name: "Ações", value: 25, color: "#eab308" },
  { name: "Criptomoedas", value: 20, color: "#f97316" },
  { name: "Fundos", value: 20, color: "#06b6d4" },
];

export function PortfolioChart() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card-bg)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Diversifique sua carteira com segurança
            </h2>
            <p className="mt-4 text-zinc-400">
              Invista em ativos que fazem sentido para você. Monitore sua
              alocação e ajuste conforme seu perfil de risco.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-[var(--border)] p-4"
                >
                  <div
                    className="mb-1 h-2 w-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-zinc-500">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-80 w-80 min-h-[320px] min-w-[320px]">
              <ResponsiveContainer width={320} height={320}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    formatter={(value, entry) => (
                      <span className="text-zinc-400">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">9%</span>
                <span className="text-xs text-zinc-500">
                  Carteira Recomendada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
