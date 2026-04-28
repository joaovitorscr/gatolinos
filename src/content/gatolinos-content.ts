type NavigationItem = {
  label: string;
  href: string;
};

type ValuePillar = {
  title: string;
  description: string;
  icon: "medical" | "social" | "tnr";
  tintClassName: string;
};

type AdoptionCategory = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayClassName: string;
};

type TransparencyMetric = {
  label: string;
  value: string;
  detail: string;
  progress: number;
  accentClassName: string;
  icon: "wallet" | "alert" | "paw";
};

type DonationOption = {
  title: string;
  description: string;
  pixKey: string;
  tiers: Array<{
    label: string;
    emphasized?: boolean;
  }>;
};

type SocialLink = {
  label: string;
  href: string;
  icon: "share" | "mail";
};

export const navigationItems: NavigationItem[] = [
  { label: "Projeto", href: "#abordagem" },
  // { label: "Transparência", href: "#transparencia" },
  // { label: "Adoção", href: "#adocao" },
  { label: "Como ajudar", href: "#contribuir" },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Apadrinhamento mensal",
    description:
      "O vínculo mais importante do projeto. Com contribuições recorrentes, conseguimos manter cuidado constante e previsível para os gatos acolhidos.",
    icon: "medical",
    tintClassName: "bg-[color:rgba(0,70,74,0.06)]",
  },
  {
    title: "Cuidado do dia a dia",
    description:
      "Ração de qualidade, sachês, areia sanitária e pequenos mimos que deixam a rotina mais segura, limpa e confortável.",
    icon: "social",
    tintClassName: "bg-[color:rgba(254,188,131,0.16)]",
  },
  {
    title: "Rede de amor felino",
    description:
      "O Projeto Gatolinos sobrevive de doações e trabalho voluntário de quem ama os felinos de Londrina e acredita em mudança real.",
    icon: "tnr",
    tintClassName: "bg-[color:rgba(255,219,208,0.7)]",
  },
];

export const adoptionCategories: AdoptionCategory[] = [
  {
    title: "Adultos cheios de carinho",
    description:
      "Companheiros tranquilos, afetuosos e prontos para conquistar um lar.",
    image: "/gatolinos/adults.png",
    imageAlt:
      "Gato adulto sentado em luz suave, com pelagem bem cuidada e olhar sereno",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(0,70,74,0.92),rgba(0,70,74,0.22),transparent)]",
  },
  {
    title: "Resgatados que pedem colo",
    description:
      "Histórias de superação, doçura e recomeços que merecem finais felizes.",
    image: "/gatolinos/special-needs.png",
    imageAlt: "Gato em ambiente acolhedor, transmitindo resiliência e doçura",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(109,42,21,0.92),rgba(109,42,21,0.18),transparent)]",
  },
  {
    title: "Duplas inseparáveis",
    description: "Amigos de patinha que levam afeto em dobro para o mesmo lar.",
    image: "/gatolinos/bonded-pairs.png",
    imageAlt: "Dois gatinhos abraçados, dormindo juntos em uma almofada macia",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(133,83,36,0.92),rgba(133,83,36,0.18),transparent)]",
  },
];

export const transparencyMetrics: TransparencyMetric[] = [
  {
    label: "Apadrinhamento mensal",
    value: "Base que sustenta o projeto",
    detail:
      "As contribuições recorrentes ajudam a manter alimentação, higiene e cuidados contínuos com mais tranquilidade.",
    progress: 72,
    accentClassName: "bg-secondary-container",
    icon: "wallet",
  },
  {
    label: "Doações do dia a dia",
    value: "Cada ajuda vira conforto",
    detail:
      "Ração, sachês, areia sanitária e mimos só chegam até eles porque existe uma comunidade segurando essa patinha.",
    progress: 84,
    accentClassName: "bg-tertiary",
    icon: "alert",
  },
  {
    label: "Voluntariado e afeto",
    value: "Amor que mantém tudo vivo",
    detail:
      "O projeto existe graças ao trabalho voluntário de pessoas que se importam com os gatos de Londrina.",
    progress: 100,
    accentClassName: "bg-primary-fixed",
    icon: "paw",
  },
];

export const donationOptions: DonationOption[] = [
  {
    title: "Doação via PIX",
    description:
      "Ideal para quem quer ajudar agora. Toda contribuição fortalece a rotina e o bem-estar dos gatinhos acolhidos.",
    pixKey: "(43) 9 8417-1897",
    tiers: [],
  },
  {
    title: "Padrinhos mensais",
    description:
      "Um compromisso de amor que ajuda a garantir previsibilidade para alimentação, higiene e cuidados essenciais.",
    pixKey: "",
    tiers: [
      { label: "R$ 50 / mês" },
      { label: "R$ 100 / mês", emphasized: true },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Contato por e-mail",
    href: "mailto:contato@gatolinos.org",
    icon: "mail",
  },
];
