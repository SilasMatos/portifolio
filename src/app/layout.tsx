import './globals.css'
import Navbar from '../components/Navbar'
import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Silas Matos - Portfólio',
  description:
    'Portfólio de Silas Matos, desenvolvedor especializado em React, Next.js, Node e experiências digitais modernas.',
  keywords: [
    'Silas Matos',
    'desenvolvedor frontend',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'portfólio'
  ],
  authors: [{ name: 'Silas Matos' }],
  creator: 'Silas Matos',
  openGraph: {
    title: 'Silas Matos - Portfólio',
    description:
      'Portfólio de Silas Matos, desenvolvedor especializado em React, Next.js, Nodejs e experiências digitais modernas.',
    url: 'https://www.silasmatos.com.br/',
    siteName: 'Silas Matos Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silas Matos - Portfólio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silas Matos - Portfólio',
    description:
      'Portfólio de Silas Matos, desenvolvedor especializado em React, Next.js, Nodejs e experiências digitais modernas.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'seu-codigo-de-verificacao-google'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={outfit.className}>
      <head>
        <link rel="icon" href="/fivicon.png" sizes="any" />
        <link rel="icon" href="/fivicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/fivicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F66135" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body cz-shortcut-listen="true">
        <Navbar />
        <div className="antialiased">{children}</div>
      </body>
    </html>
  )
}
