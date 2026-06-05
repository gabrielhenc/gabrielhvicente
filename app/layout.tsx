import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielhvicente.com.br"),

  title: {
    default: "Gabriel Vicente | Liderança na prática para o mundo real",
    template: "%s | Gabriel Vicente",
  },

  description:
    "Líder de tecnologia, palestrante e mentor. Mais de 18 anos de experiência em tecnologia e 7 anos liderando equipes, projetos e transformações digitais.",

  keywords: [
    "Gabriel Vicente",
    "Liderança",
    "Liderança na prática",
    "Palestrante",
    "Palestrante de liderança",
    "Tecnologia",
    "Gestão de equipes",
    "Alta performance",
    "Transformação digital",
    "Liderança em tecnologia",
    "Scrum",
    "Métodos ágeis",
    "Carreira em tecnologia",
    "Ironman",
    "Mentoria",
  ],

  authors: [
    {
      name: "Gabriel Vicente",
      url: "https://gabrielhvicente.com.br",
    },
  ],

  creator: "Gabriel Vicente",

  publisher: "Gabriel Vicente",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabrielhvicente.com.br",
    title: "Gabriel Vicente | Liderança na prática para o mundo real",
    description:
      "Mais de 18 anos de experiência em tecnologia, liderança, palestras, cursos e alta performance.",

    siteName: "Gabriel Vicente",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Vicente",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gabriel Vicente | Liderança na prática para o mundo real",
    description:
      "Tecnologia, liderança, palestras e alta performance.",

    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://gabrielhvicente.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}