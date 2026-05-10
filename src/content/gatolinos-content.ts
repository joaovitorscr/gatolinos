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
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayClassName: string;
};

type CatProfileFact = {
  label: string;
  value: string;
};

type CatProfile = {
  slug: string;
  name: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  accentClassName: string;
  age: string;
  location: string;
  rescueStory: string;
  summary: string;
  personality: string[];
  needs: string[];
  facts: CatProfileFact[];
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

export const siteNavigationItems: NavigationItem[] = [
  { label: "Projeto", href: "/#abordagem" },
  // { label: "Gatos", href: "/gatos" },
  { label: "Como ajudar", href: "/#contribuir" },
];

export function getNavigationItems() {
  return siteNavigationItems;
}

export const valuePillars: ValuePillar[] = [
  {
    title: "Apadrinhamento mensal",
    description:
      "O vínculo mais importante do projeto. Com contribuições recorrentes, conseguimos manter cuidado constante e previsível para os gatos acolhidos.",
    icon: "medical",
    tintClassName: "bg-secondary-container",
  },
  {
    title: "Cuidado do dia a dia",
    description:
      "Ração de qualidade, sachês, areia sanitária e pequenos mimos que deixam a rotina mais segura, limpa e confortável.",
    icon: "social",
    tintClassName: "bg-primary-fixed/55",
  },
  {
    title: "Rede de amor felino",
    description:
      "O Projeto Gatolinos sobrevive de doações e trabalho voluntário de quem ama os felinos de Londrina e acredita em mudança real.",
    icon: "tnr",
    tintClassName: "bg-tertiary-container",
  },
];

export const adoptionCategories: AdoptionCategory[] = [
  {
    slug: "adultos-carinhosos",
    title: "Adultos cheios de carinho",
    description: "Companheiros tranquilos, afetuosos e prontos para conquistar um lar.",
    image: "/gatolinos/adults.png",
    imageAlt: "Gato adulto sentado em luz suave, com pelagem bem cuidada e olhar sereno",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(37,18,2,0.92),rgba(37,18,2,0.22),transparent)]",
  },
  {
    slug: "resgatados-especiais",
    title: "Resgatados que pedem colo",
    description: "Histórias de superação, doçura e recomeços que merecem finais felizes.",
    image: "/gatolinos/special-needs.png",
    imageAlt: "Gato em ambiente acolhedor, transmitindo resiliência e doçura",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(17,47,53,0.92),rgba(17,47,53,0.2),transparent)]",
  },
  {
    slug: "duplas-inseparaveis",
    title: "Duplas inseparáveis",
    description: "Amigos de patinha que levam afeto em dobro para o mesmo lar.",
    image: "/gatolinos/bonded-pairs.png",
    imageAlt: "Dois gatinhos abraçados, dormindo juntos em uma almofada macia",
    overlayClassName:
      "bg-[linear-gradient(to_top,rgba(108,87,117,0.92),rgba(108,87,117,0.2),transparent)]",
  },
];

export const catsForAdoption: CatProfile[] = [
  {
    slug: "amelia",
    name: "Amélia",
    categorySlug: "adultos-carinhosos",
    image: "/gatolinos/adults.png",
    imageAlt: "Gata adulta em pose elegante, com olhar calmo e ambiente iluminado",
    accentClassName: "from-[#251202] via-[#553118] to-[#9e6945]",
    age: "3 anos",
    location: "Londrina, PR",
    rescueStory:
      "Amélia foi acolhida depois de aparecer sozinha em uma colônia, já castrada e claramente acostumada com pessoas. Hoje vive tranquila, observadora e muito receptiva a carinho.",
    summary:
      "Uma gata adulta serena, daquelas que escolhem o colo certo e transformam a casa em refúgio.",
    personality: [
      "Aprecia rotina calma e cantinhos ensolarados",
      "Se aproxima devagar, mas cria vínculo com facilidade",
      "Convive bem com ambientes organizados e pouco barulho",
    ],
    needs: [
      "Lar telado e seguro",
      "Adaptação com respeito ao tempo dela",
      "Família que valorize companhia tranquila",
    ],
    facts: [
      { label: "Porte", value: "Médio" },
      { label: "Energia", value: "Baixa a moderada" },
      { label: "Convívio", value: "Ideal para adultos ou família calma" },
    ],
  },
  {
    slug: "bento",
    name: "Bento",
    categorySlug: "adultos-carinhosos",
    image: "/gatolinos/adults.png",
    imageAlt: "Gato adulto descansando de forma confortável, com expressão dócil",
    accentClassName: "from-[#3d2611] via-[#815230] to-[#f2d6fa]",
    age: "5 anos",
    location: "Londrina, PR",
    rescueStory:
      "Bento chegou muito assustado, mas surpreendeu na recuperação. Hoje pede carinho com cabeçadas e acompanha cada movimento da casa com curiosidade silenciosa.",
    summary:
      "Afeto estável, presença doce e jeitinho de gato companheiro para rotina de apartamento.",
    personality: [
      "Extremamente carinhoso depois da adaptação",
      "Gosta de seguir os humanos pela casa",
      "Prefere ambientes previsíveis e gentis",
    ],
    needs: [
      "Acompanhamento veterinário de rotina",
      "Enriquecimento ambiental simples",
      "Adoção responsável com adaptação gradual",
    ],
    facts: [
      { label: "Porte", value: "Grande" },
      { label: "Energia", value: "Moderada" },
      { label: "Convívio", value: "Bom com humanos carinhosos" },
    ],
  },
  {
    slug: "flora",
    name: "Flora",
    categorySlug: "resgatados-especiais",
    image: "/gatolinos/special-needs.png",
    imageAlt: "Gata resgatada em ambiente acolhedor, transmitindo doçura e resistência",
    accentClassName: "from-[#001a1f] via-[#14464e] to-[#7ab9c8]",
    age: "2 anos",
    location: "Londrina, PR",
    rescueStory:
      "Flora foi encontrada em recuperação após um período difícil na rua. Hoje responde muito bem a cuidados constantes e se mostra cada dia mais segura perto de pessoas.",
    summary: "Delicada e resiliente, é a gata ideal para quem entende que amor também é paciência.",
    personality: [
      "Observadora e sensível a novos estímulos",
      "Adora voz baixa e toque gentil",
      "Mostra confiança em pequenos avanços diários",
    ],
    needs: [
      "Rotina estável",
      "Família paciente para adaptação",
      "Continuidade dos cuidados recomendados",
    ],
    facts: [
      { label: "Porte", value: "Pequeno" },
      { label: "Energia", value: "Baixa" },
      { label: "Convívio", value: "Melhor em ambiente tranquilo" },
    ],
  },
  {
    slug: "nino",
    name: "Nino",
    categorySlug: "resgatados-especiais",
    image: "/gatolinos/special-needs.png",
    imageAlt: "Gato resgatado com olhar atento, demonstrando recuperação e afeto",
    accentClassName: "from-[#112f35] via-[#2a5f69] to-[#c9e8f0]",
    age: "4 anos",
    location: "Londrina, PR",
    rescueStory:
      "Nino foi um resgate que exigiu cuidados intensivos no início. Depois da recuperação, revelou um temperamento afetuoso e um gosto especial por interação calma e brincadeiras leves.",
    summary:
      "Um sobrevivente doce, pronto para construir vínculo forte com quem quiser acompanhar seu recomeço.",
    personality: [
      "Curioso e muito ligado em presença humana",
      "Ama mantinhas, caixas e esconderijos baixos",
      "Brinca sem exagero, mas com bastante interesse",
    ],
    needs: [
      "Consultas de acompanhamento quando necessário",
      "Ambiente interno seguro",
      "Tutor disposto a manter a rotina de cuidado",
    ],
    facts: [
      { label: "Porte", value: "Médio" },
      { label: "Energia", value: "Moderada" },
      { label: "Convívio", value: "Se beneficia de introduções cuidadosas" },
    ],
  },
  {
    slug: "luna-e-simao",
    name: "Luna & Simão",
    categorySlug: "duplas-inseparaveis",
    image: "/gatolinos/bonded-pairs.png",
    imageAlt: "Dois gatos deitados juntos, demonstrando vínculo forte e sensação de aconchego",
    accentClassName: "from-[#6c5775] via-[#8a7295] to-[#e6d5eb]",
    age: "1 ano e 8 meses",
    location: "Londrina, PR",
    rescueStory:
      "Luna e Simão chegaram juntos e nunca mais se separaram. Um regula a coragem do outro, e a dupla encontrou segurança justamente no vínculo que construíram.",
    summary: "Para quem quer adotar afeto em dose dupla e preservar um laço que já é casa.",
    personality: [
      "Dormem juntos e exploram o ambiente em parceria",
      "Têm energia leve e comportamento muito conectado",
      "Criam uma presença afetuosa e divertida no lar",
    ],
    needs: [
      "Adoção conjunta",
      "Espaço interno enriquecido com prateleiras e nichos",
      "Família aberta a uma adaptação em dupla",
    ],
    facts: [
      { label: "Porte", value: "Pequeno a médio" },
      { label: "Energia", value: "Moderada" },
      { label: "Convívio", value: "Dupla já muito estável" },
    ],
  },
  {
    slug: "caju-e-cora",
    name: "Caju & Cora",
    categorySlug: "duplas-inseparaveis",
    image: "/gatolinos/bonded-pairs.png",
    imageAlt: "Par de gatos aconchegados lado a lado em clima calmo e amoroso",
    accentClassName: "from-[#553c5d] via-[#8d7397] to-[#fff1d8]",
    age: "2 anos",
    location: "Londrina, PR",
    rescueStory:
      "Caju e Cora formaram dupla ainda no acolhimento. Desde então, se regulam mutuamente, compartilham descanso e criam coragem juntos para conhecer pessoas novas.",
    summary:
      "Uma dupla acolhedora, perfeita para um lar que queira companhia constante e muito afeto sincronizado.",
    personality: [
      "Afetuosos entre si e cada vez mais confiantes com pessoas",
      "Gostam de brincar em dupla e descansar colados",
      "Se adaptam melhor quando seguem juntos",
    ],
    needs: [
      "Adoção conjunta e responsável",
      "Introdução tranquila ao novo ambiente",
      "Janelas teladas e segurança completa",
    ],
    facts: [
      { label: "Porte", value: "Médio" },
      { label: "Energia", value: "Moderada" },
      { label: "Convívio", value: "Dupla inseparável" },
    ],
  },
];

export function getCatBySlug(slug: string) {
  return catsForAdoption.find((cat) => cat.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return adoptionCategories.find((category) => category.slug === slug);
}

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
    tiers: [{ label: "R$ 50 / mês" }, { label: "R$ 100 / mês", emphasized: true }],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Contato por e-mail",
    href: "mailto:contato@gatolinos.org",
    icon: "mail",
  },
];
