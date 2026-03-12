# Sellaro - Landing Page de Vendas

Landing page de vendas em Next.js com tema escuro e acentos em teal/cyan, inspirada em plataformas de investimento.

## Tecnologias

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Recharts** – gráficos de linha e pizza
- **React Icons** – ícones (Hero Icons)

## Como rodar

```bash
# Instalar dependências (se ainda não instalou)
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estrutura

- `src/app/` – página principal e layout
- `src/components/` – seções da landing:
  - **Header** – logo, navegação, Login/Cadastrar
  - **Hero** – headline, CTA, mockups de app
  - **FeatureCards** – 3 diferenciais com ícones
  - **PerformanceChart** – gráfico de linha (rentabilidade)
  - **PortfolioChart** – gráfico de pizza (carteira)
  - **MentorsSection** – carrossel de mentores
  - **StrategiesSection** – estratégias em um só lugar
  - **CommunitySection** – comunidade e benefícios
  - **InvestSection** – “invista em você” + imagem
  - **AppsSection** – app mobile + features
  - **PricingSection** – 3 planos (Grátis, Premium, Enterprise)
  - **CommunityCards** – sala ao vivo, análises, mentoria VIP
  - **DownloadCTA** – CTA final “Baixe o app”
  - **Footer** – links, redes sociais, copyright

## Personalização

- Cores e tema: variáveis em `src/app/globals.css` (`--primary`, `--background`, etc.).
- Conteúdo: textos e links nos próprios componentes em `src/components/`.
