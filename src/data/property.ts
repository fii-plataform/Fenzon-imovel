export interface PropertyImage {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  featured?: boolean;
  category: "Fachada" | "Comercial" | "Estrutura" | "Entorno";
}

export interface PropertyFeature {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PROPERTY_DATA = {
  name: "Edifício Comercial & Residencial Boqueirão",
  headline: "Prédio Comercial e Residencial na zona mais movimentada e valorizada da cidade",
  subheadline:
    "Oportunidade única para investidores ou comerciantes no coração do Centro de Boqueirão - PB. Imóvel com 3 pavimentos, grande visibilidade e alto potencial de rendimento imediato.",
  
  price: {
    display: "Sob Consulta",
    badge: "Direto com o Proprietário",
    conditions: "Negociação facilitada • Estuda propostas • Sem intermediários",
  },

  location: {
    city: "Boqueirão",
    state: "PB",
    address: "Rua Félix Araújo",
    neighborhood: "Centro",
    fullAddress: "Rua Félix Araújo, Centro - Boqueirão / PB",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Rua+Felix+Araujo,+Centro,+Boqueir%C3%A3o+-+PB&output=embed",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Felix+Araujo,+Centro,+Boqueir%C3%A3o+-+PB",
  },

  contact: {
    ownerName: "Proprietário",
    phoneDisplay: "(83) 99386-5806",
    whatsappNumber: "5583993865806",
    get whatsappUrl() {
      const message = encodeURIComponent(
        "Olá! Vi o anúncio do Prédio Comercial e Residencial no Centro de Boqueirão e gostaria de saber valores, detalhes e agendar uma visita."
      );
      return `https://wa.me/${this.whatsappNumber}?text=${message}`;
    },
  },

  quickStats: [
    {
      id: "floors",
      label: "Pavimentos",
      value: "3 Andares",
      subtext: "Térreo + 2 pavimentos",
      iconName: "Building2",
    },
    {
      id: "totalArea",
      label: "Área Total",
      value: "263,50 m²",
      subtext: "Espaço amplo construído",
      iconName: "Maximize2",
    },
    {
      id: "dimension",
      label: "Dimensões",
      value: "1.537 m²",
      subtext: "Medidas da propriedade",
      iconName: "Ruler",
    },
    {
      id: "purpose",
      label: "Vocação",
      value: "Mista",
      subtext: "Comércio + Residencial",
      iconName: "Store",
    },
    {
      id: "location",
      label: "Localização",
      value: "Centro",
      subtext: "Rua Félix Araújo",
      iconName: "MapPin",
    },
    {
      id: "potential",
      label: "Rendimento",
      value: "Alto Retorno",
      subtext: "Múltiplas locações",
      iconName: "TrendingUp",
    },
  ],

  heroImage: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505255.jpg",
  aboutImage: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505253.jpg",

  // Lista de imagens do imóvel carregadas diretamente do repositório público do GitHub
  gallery: [
    {
      id: "foto-1",
      title: "Fachada Comercial Frontal",
      subtitle: "Ampla frente com lojas térreas ativas e dois andares superiores",
      src: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505255.jpg",
      alt: "Fachada comercial do prédio de 3 pavimentos na Rua Félix Araújo, Centro de Boqueirão",
      aspectRatio: "landscape",
      featured: true,
      category: "Comercial",
    },
    {
      id: "foto-2",
      title: "Visão Angular & Altura Total",
      subtitle: "Destaque para a esquina estratégica, sacada e os 3 pavimentos completos",
      src: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505253.jpg",
      alt: "Vista vertical da esquina e dos 3 pavimentos do edifício em Boqueirão PB",
      aspectRatio: "portrait",
      featured: false,
      category: "Fachada",
    },
    {
      id: "foto-3",
      title: "Térreo de Grande Fluxo",
      subtitle: "Ponto comercial consolidado com espaço para lojas, oficinas e serviços",
      src: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505255.jpg",
      alt: "Ponto comercial de alta movimentação no térreo",
      aspectRatio: "landscape",
      featured: false,
      category: "Estrutura",
    },
    {
      id: "foto-4",
      title: "Andares Superiores Multifuncionais",
      subtitle: "Ideais para apartamentos residenciais, consultórios médicos ou salas empresariais",
      src: "https://raw.githubusercontent.com/fii-plataform/Fenzon-imovel/main/1001505253.jpg",
      alt: "Andares superiores do prédio comercial e residencial",
      aspectRatio: "portrait",
      featured: false,
      category: "Estrutura",
    },
  ] as PropertyImage[],

  about: {
    badge: "Excelente Oportunidade de Investimento",
    title: "Um imóvel versátil no coração comercial de Boqueirão",
    paragraphs: [
      "Localizado estrategicamente na Rua Félix Araújo, a principal artéria comercial do Centro de Boqueirão - Paraíba, este edifício reúne localização privilegiada, metragem expressiva e estrutura vertical consolidada.",
      "Composto por 3 pavimentos completos (rés do chão e mais dois andares), o imóvel foi concebido para atender tanto demandas comerciais de alto fluxo quanto ocupação residencial ou corporativa.",
      "No térreo, a fachada ampla e o fácil acesso oferecem visibilidade incomparável para lojas, clínicas, farmácias ou grandes marcas. Nos andares superiores, a disposição espaçosa com varanda frontal é perfeita para a criação de apartamentos para locação, escritórios privativos, consultórios médicos ou sede de empresas.",
      "Para investidores, trata-se de um ativo gerador de renda recorrente com retorno garantido através de arrendamentos múltiplos em uma das regiões que mais se valorizam no Cariri paraibano.",
    ],
    bullets: [
      "Edifício imponente de 3 pavimentos com fundação robusta",
      "Ponto comercial consolidado com movimentação contínua",
      "Flexibilidade total para subdivisão ou reforma personalizada",
      "Excelente relação de custo por metro quadrado na região central",
    ],
  },

  differentiators: [
    {
      title: "3 Pavimentos Amplos",
      description:
        "Edifício vertical com térreo (rés do chão) e mais 2 andares completos, maximizando a área útil e a capacidade de ocupação.",
      icon: "Building",
      highlight: true,
    },
    {
      title: "Localização Mais Valorizada",
      description:
        "Situado no coração do Centro de Boqueirão, com fluxo ininterrupto de pedestres, transporte público e veículos comerciais.",
      icon: "Compass",
      highlight: true,
    },
    {
      title: "Alto Potencial de Rendimento",
      description:
        "Gere rendas simultâneas alugando as lojas no piso térreo e apartamentos, estúdios ou salas comerciais nos andares superiores.",
      icon: "Coins",
      highlight: true,
    },
    {
      title: "Fachada de Alta Visibilidade",
      description:
        "Frente ampla que destaca qualquer empreendimento ou comércio, garantindo presença de marca e fácil atração de clientes.",
      icon: "Eye",
    },
    {
      title: "Flexibilidade de Uso Misto",
      description:
        "Perfeito para uso próprio (comércio embaixo e moradia/escritório em cima) ou 100% locação com rendimento de dividendos mensais.",
      icon: "Layers",
    },
    {
      title: "Negociação Direta e Transparente",
      description:
        "Contato imediato com o proprietário para tirar dúvidas, agendar visitas técnicas e fechar a melhor condição de negócio.",
      icon: "Handshake",
    },
  ],

  investmentHighlights: [
    {
      metric: "100%",
      label: "Zona Comercial Consolidada",
      detail: "Endereço com presença constante de consumidores e serviços vizinhos.",
    },
    {
      metric: "3 em 1",
      label: "Potencial Multiuso",
      detail: "Possibilidade de alugar o térreo para varejo e os pavimentos superiores para locação.",
    },
    {
      metric: "263,50m²",
      label: "Área Construída",
      detail: "Metragem generosa para acomodar diversas configurações arquitetônicas.",
    },
    {
      metric: "Zero",
      label: "Taxas de Intermediação",
      detail: "Você conversa diretamente com quem decide, agilizando todo o processo.",
    },
  ],

  faq: [
    {
      question: "Qual é o valor pedido pelo imóvel?",
      answer:
        "O valor e as condições comerciais são disponibilizados diretamente pelo proprietário via WhatsApp ou telefone. Isso garante um atendimento personalizado e abertura para negociação flexível.",
    },
    {
      question: "Como funciona a distribuição dos 3 pavimentos?",
      answer:
        "O imóvel é composto por um pavimento térreo (ideal para comércio, lojas, depósitos ou oficinas) com pé-direito amplo e acesso direto pela rua, e mais 2 pavimentos superiores com varanda, janelas amplas e excelente iluminação natural, ideais para apartamentos ou salas comerciais.",
    },
    {
      question: "É possível agendar uma visita presencial?",
      answer:
        "Sim! Basta entrar em contato pelo WhatsApp (83) 99386-5806 e combinar o melhor dia e horário para conhecer o imóvel por dentro e conferir todos os detalhes estruturais.",
    },
    {
      question: "O imóvel aceita propostas ou permuta?",
      answer:
        "Por se tratar de negociação direta com o proprietário, propostas formais e possibilidades de pagamento são analisadas com atenção e flexibilidade.",
    },
    {
      question: "Qual o endereço exato do prédio?",
      answer:
        "O prédio está localizado na Rua Félix Araújo, Centro da cidade de Boqueirão, Paraíba, próximo aos principais comércios, agências e serviços da cidade.",
    },
  ],
};
