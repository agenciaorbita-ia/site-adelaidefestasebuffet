import type { Metadata } from "next";
import { Playfair_Display, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// TODO: trocar pelo domínio próprio quando for registrado (ex: adelaidefestasebuffet.com.br)
const siteUrl = "https://adelaidefestasebuffet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Buffet completo em Ipatinga e Vale do Aço — Adelaide Festas & Buffet",
    template: "%s | Adelaide Festas & Buffet",
  },
  description:
    "Buffet completo em Ipatinga e toda a região do Vale do Aço para casamentos, debutantes, festas infantis e confraternizações. Salão, decoração, bebidas, equipe e cortesias inclusas — há 8 anos transformando celebrações em memórias.",
  keywords: [
    "buffet para festas",
    "buffet casamento",
    "buffet debutante",
    "buffet festa infantil",
    "buffet Ipatinga",
    "buffet Vale do Aço",
    "buffet completo",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Adelaide Festas & Buffet",
    title: "Buffet completo em Ipatinga e Vale do Aço — Adelaide Festas & Buffet",
    description:
      "Casamentos, debutantes, festas infantis e confraternizações com tudo incluso: salão, decoração, bebidas, equipe e cortesias.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Adelaide Festas & Buffet",
  description:
    "Buffet completo para casamentos, debutantes, festas infantis e confraternizações. Salão, decoração, bebidas, equipe e cortesias inclusas.",
  servesCuisine: "Buffet para eventos",
  telephone: "+55-31-99540-6622",
  url: siteUrl,
  sameAs: [
    "https://instagram.com/adelaidefestasebuffet",
    "https://facebook.com/adelaidefestaebuffet",
  ],
  areaServed: [
    { "@type": "City", name: "Ipatinga" },
    { "@type": "AdministrativeArea", name: "Vale do Aço" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Diadema, 426 — Parque Caravelas",
    addressLocality: "Ipatinga",
    addressRegion: "MG",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jost.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
