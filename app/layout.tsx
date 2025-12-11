import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klassiker lesen',
  description: 'Ein Blog über klassische Literatur mit wissenschaftlichem Fundament',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

