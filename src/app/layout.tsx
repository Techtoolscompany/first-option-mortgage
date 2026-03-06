import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Option Mortgage | Experience the Difference',
  description: 'A premier national lender providing sophisticated mortgage solutions with a focus on speed, transparency, and client experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body className="bg-background-light text-slate-900 selection:bg-accent/30 flex min-h-screen w-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
