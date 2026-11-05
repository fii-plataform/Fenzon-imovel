import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://imovel-boqueirao.vercel.app"
  ),
  title: "Prédio Comercial e Residencial no Centro de Boqueirão - PB | Venda Direta",
  description:
    "Excelente oportunidade de investimento: Prédio com 3 pavimentos (rés do chão e mais dois andares) na Rua Félix Araújo, Centro de Boqueirão - Paraíba. Área total de 263,50 m², ponto comercial consolidado e apartamentos. Fale direto com o proprietário.",
  keywords: [
    "imóvel boqueirão",
    "prédio comercial boqueirão",
    "edifício boqueirão paraíba",
    "imóvel para investimento cariri",
    "venda de prédio comercial",
    "rua felix araujo boqueirao",
    "imóvel comercial e residencial",
  ],
  authors: [{ name: "Proprietário" }],
  openGraph: {
    title: "Prédio Comercial e Residencial no Centro de Boqueirão - PB",
    description:
      "Edifício com 3 pavimentos na zona mais valorizada de Boqueirão - PB. Ponto comercial ativo, apartamentos e alto potencial de rendimento. Venda direta.",
    images: [
      {
        url: "/images/predio-fachada-comercial.jpg",
        width: 1024,
        height: 992,
        alt: "Fachada do Prédio Comercial e Residencial em Boqueirão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
