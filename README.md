# 🏢 Landing Page - Prédio Comercial e Residencial em Boqueirão - PB

Landing page moderna, ultra-rápida e focada em conversão para anúncio e venda direta de um prédio comercial e residencial de 3 pavimentos, localizado no centro de Boqueirão - Paraíba.

Construída com **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS** e **Lucide React**.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Components)
- **Biblioteca:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Imagens:** `next/image` com otimização automática e suporte a domínios remotos (GitHub / Vercel)
- **Deploy:** Totalmente compatível com **Vercel** e **GitHub Pages/Actions**

---

## 🌟 Seções da Landing Page

1. **Header / Navbar:** Barra fixa com efeito vidro (*backdrop-blur*), status em tempo real de disponibilidade do imóvel, links com rolagem suave e botão de contato imediato.
2. **Hero Section:** Imagem de destaque em alta definição com sobreposição escura elegante, título de impacto, destaque de preço sob consulta (venda direta sem intermediários), dados rápidos com ícones (3 pavimentos, 263,50m² de área construída, 1.537m² de dimensões, vocação comercial/residencial) e botão de Call to Action (CTA) para o WhatsApp.
3. **Galeria de Fotos (Bento-Box / Masonry Grid):** Grade moderna e fluida com filtros por categoria, destaque para imagens verticais e horizontais, além de um **Lightbox interativo em tela cheia** com navegação por teclado (ESC, Setas) e botão de zoom.
4. **Sobre o Imóvel:** Apresentação editorial com detalhes da metragem, dos 3 pavimentos (rés do chão e mais dois andares) e das possibilidades de uso misto.
5. **Comodidades e Diferenciais:** Grid de cards com ícones realçando localização nobre, visibilidade para comércios, sacada, solidez da edificação e negociação direta.
6. **Potencial de Rendimento e Investimento:** Análise dos 3 pilares de receita (Lojas no térreo, consultórios/escritórios no 1º andar e apartamentos residenciais no 2º andar).
7. **Localização Estratégica:** Mapa interativo do Google Maps na Rua Félix Araújo, Centro de Boqueirão - PB, com botão de traçar rotas e destaques da região.
8. **Perguntas Frequentes (FAQ):** Accordion interativo com respostas sobre valores, visitas, formas de pagamento e documentação.
9. **Seção de Contato:** Área final de alta conversão com botão pulsante para WhatsApp (`(83) 99386-5806`), botão de copiar número com 1 clique e garantias de atendimento.
10. **Botão Flutuante do WhatsApp:** Sempre acessível no canto da tela para facilitar a conversão rápida em dispositivos móveis e desktop.

---

## 📁 Estrutura do Projeto

```text
├── public/
│   └── images/                       # Imagens locais do imóvel
│       ├── predio-fachada-comercial.jpg
│       └── predio-fachada-esquina.jpg
├── src/
│   ├── app/
│   │   ├── globals.css               # Estilos globais e Tailwind
│   │   ├── layout.tsx                # Layout raiz com metatags SEO e OpenGraph
│   │   └── page.tsx                  # Página principal com montagem das seções
│   ├── components/
│   │   ├── Navbar.tsx                # Barra de navegação responsiva
│   │   ├── HeroSection.tsx           # Seção principal com imagem de fundo e CTA
│   │   ├── GallerySection.tsx        # Galeria Bento-Box com filtros
│   │   ├── ImageLightbox.tsx         # Modal de visualização de fotos em alta resolução
│   │   ├── AboutSection.tsx          # Seção sobre o imóvel
│   │   ├── FeaturesSection.tsx       # Diferenciais e comodidades
│   │   ├── InvestmentSection.tsx     # Pilares de rendimento com locação
│   │   ├── LocationSection.tsx       # Mapa e detalhes da localização
│   │   ├── FaqSection.tsx            # Accordion de perguntas frequentes
│   │   ├── ContactSection.tsx        # Seção final de contato e WhatsApp
│   │   ├── FloatingWhatsApp.tsx      # Botão flutuante do WhatsApp
│   │   └── Footer.tsx                # Rodapé institucional
│   ├── data/
│   │   └── property.ts               # Arquivo central com todos os dados do imóvel
│   └── lib/
│       └── utils.ts                  # Utilitários de classes Tailwind
├── next.config.ts                    # Configurações do Next.js e domínios de imagens
├── tailwind.config.ts                # Paleta de cores e temas Tailwind
├── tsconfig.json                     # Configuração do TypeScript
└── package.json
```

---

## 🖼️ Como Alterar ou Adicionar Links das Imagens do GitHub

Todos os dados e links de fotos estão centralizados em um único arquivo:
👉 **[`src/data/property.ts`](./src/data/property.ts)**

Para usar os links públicos do GitHub ou de qualquer CDN:
1. Abra o arquivo `src/data/property.ts`.
2. No array `gallery`, altere a propriedade `src` para a URL pública da sua imagem:
   ```typescript
   {
     id: "foto-1",
     title: "Fachada Comercial Frontal",
     subtitle: "Ampla frente com lojas térreas ativas",
     src: "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/public/images/foto1.jpg",
     alt: "Fachada do prédio comercial",
     aspectRatio: "landscape",
     featured: true,
     category: "Comercial",
   }
   ```
*(O arquivo `next.config.ts` já está pré-configurado para aceitar URLs de `raw.githubusercontent.com` e `github.com` sem erros).*

---

## 🛠️ Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Como Gerar Build de Produção

```bash
npm run build
npm run start
```

---

## ☁️ Como Enviar ao GitHub e Hospedar na Vercel

### 1. Inicializar Git e Enviar ao GitHub:
```bash
git init
git add .
git commit -m "feat: landing page do prédio comercial e residencial em Boqueirão"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### 2. Deploy na Vercel:
1. Acesse [vercel.com](https://vercel.com) e conecte com sua conta do GitHub.
2. Clique em **"Add New Project"** e selecione o repositório criado.
3. As configurações padrão do Next.js serão detectadas automaticamente.
4. Clique em **"Deploy"**. Em menos de 2 minutos seu site estará no ar com HTTPS gratuito e CDN global!
