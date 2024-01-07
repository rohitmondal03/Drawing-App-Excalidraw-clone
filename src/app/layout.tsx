import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'drawing app, but a good one...',
  description: 'drawing app, but a good one...',
  applicationName: "drww",
  generator: "Next.js",
  authors: {
    name: "Rohit Mondal",
    url: "https://github.com/rohitmondal03"
  },
  openGraph: {
    siteName: "drww",
    description: "drawing app, but a good one...",
    title: "drww",
    url: WEBSITE,
  }
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
