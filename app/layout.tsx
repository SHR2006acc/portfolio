import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: 'Mohamed Rayan Htalal — AI & Software Engineering',
  description: 'Portfolio of Mohamed Rayan Htalal, an AI & Software Engineering student building intelligent, human-centered systems.',
  keywords: ['Mohamed Rayan Htalal', 'AI', 'Software Engineering', 'ENSAM Casablanca'],
  openGraph: { title: 'Mohamed Rayan Htalal — AI & Software Engineering', description: 'Building intelligent, human-centered systems.', type: 'website' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="scroll-smooth"><body className={inter.variable}>{children}</body></html> }
