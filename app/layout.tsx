import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ілона Дорош - CV',
  description: 'Професійне резюме Ілони Дорош - Директ-менеджер',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 