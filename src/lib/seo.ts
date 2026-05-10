import type { Metadata } from "next";

export const siteConfig = {
  name: "Projeto Gatolinos Londrina",
  shortName: "Gatolinos",
  locale: "pt_BR",
  language: "pt-BR",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://projetogatolinos.com.br"),
  description:
    "Projeto Gatolinos Londrina: resgate, adoção, apadrinhamento e doações para manter cuidado responsável aos gatos acolhidos em Londrina.",
  keywords: [
    "Projeto Gatolinos",
    "Gatolinos Londrina",
    "adoção de gatos Londrina",
    "resgate de gatos Londrina",
    "apadrinhamento de gatos",
    "doação para gatos",
    "ONG de gatos Londrina",
  ],
  logo: "/gatolinos/logo.png",
  socialImage: "/gatolinos/social-image.png",
  location: "Londrina, Paraná",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.socialImage,
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
} = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [siteConfig.language]: url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - adoção e apadrinhamento de gatos em Londrina`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}
