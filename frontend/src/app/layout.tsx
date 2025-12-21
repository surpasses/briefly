import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Briefly - Daily Article Digest',
  description: 'Get daily summaries of articles via SMS and email',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

