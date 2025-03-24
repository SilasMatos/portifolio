import './globals.css'
import Navbar from '../components/Navbar'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={outfit.className}>
      <body cz-shortcut-listen="true">
        <Navbar />
        <div className="antialiased">{children}</div>
      </body>
    </html>
  )
}
