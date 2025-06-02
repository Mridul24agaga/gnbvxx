import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goat - Your fav Solana Coin',
  description: 'Dripped in gold. Drenched in SOL. Its GOAT time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
