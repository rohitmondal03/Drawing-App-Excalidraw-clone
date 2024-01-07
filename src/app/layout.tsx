import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'drawing app, but a good one...',
  description: 'a good drawing app....',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
