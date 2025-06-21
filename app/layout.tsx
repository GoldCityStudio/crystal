import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crystal Jewelry Store - Premium Crystal & Jewelry Collection',
  description: 'Discover our premium collection of crystal jewelry, home crystals, and spiritual accessories. Handcrafted pieces for healing, protection, and beauty.',
  keywords: 'crystal jewelry, healing crystals, spiritual accessories, home crystals, crystal bracelets, crystal necklaces',
  authors: [{ name: 'Crystal Jewelry Store' }],
  openGraph: {
    title: 'Crystal Jewelry Store - Premium Crystal & Jewelry Collection',
    description: 'Discover our premium collection of crystal jewelry, home crystals, and spiritual accessories.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
} 