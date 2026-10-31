import "@/libs/styles/globals.css";
import "@/libs/styles/toast.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import bgImage from "@/images/background.svg";

import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/libs/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/libs/constants";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);
  const title = dict.metadataTitle;
  const description = dict.hero.description;
  const pathname = `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "rezzonico.dev",
    authors: [{ name: "Jan Rezzonico", url: SITE_URL }],
    creator: "Jan Rezzonico",
    publisher: "Jan Rezzonico",
    category: "technology",
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en",
        it: "/it",
      },
    },
    openGraph: {
      type: "website",
      url: pathname,
      siteName: "rezzonico.dev",
      title,
      description,
      locale: locale === "it" ? "it_IT" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "it" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return (
    <html
      lang={lang}
      className={`${font.className} h-full antialiased`}
      data-theme="luxury"
      data-scroll-behavior="smooth"
    >
      <body
        className="flex flex-col bg-[#0c0c0e] bg-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Header dict={dict} lang={lang} />
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
