import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './globals.css'
import { Metadata } from 'next'
import '@fontsource/poppins'
import { AosInit } from './components/common/AosInit'
// import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Jan Rezzonico - Web Developer',
  description:
    'The personal website of Jan Rezzonico - a Business IT Specialist based in Ticino, Switzerland with a passion for Web Development',
  keywords:
    'Jan Rezzonico, Jan, Rezzonico, Web Developer, Business IT Specialist, Ticino, Switzerland, Svizzera, Lugano, Informatico AFC, Sviluppatore Web, Sviluppatore, Informatico, Tessin, Schweiz, Informatiker, Webentwickler',
  metadataBase: new URL('https://www.rezzonico.dev'),
  alternates: {
    canonical: './',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <>
      <html
        lang={locale}
        data-theme="luxury">
        <head>
          <link
            rel="apple-touch-icon"
            href="/images/apple-touch-icon.png"
          />
          {/* <Script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        </head>
        <AosInit />
        <body
          style={{
            backgroundImage: 'url(/images/background.svg)',
          }}
          className="bg-fixed antialiased">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1 max-w-screen-2xl mx-auto p-4">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}
