import { montserrat } from '@/fonts'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'TechLead',
  description: 'Conquiste o Mundo Digital e Alcance Seu Público-Alvo de Forma Efetiva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`body ${montserrat.className}`}>{children}</body>
    </html>
  )
}
