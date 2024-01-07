import type { Metadata } from 'next'

import { SITE_AAP_NAME, SITE_DESCRIPTION, SITE_WEBSITE } from '@/config/site'
import './globals.css'



export const metadata: Metadata = {
  title: SITE_DESCRIPTION,
  description: SITE_DESCRIPTION,
  applicationName: "drww",
  generator: "Next.js",
  authors: {
    name: "Rohit Mondal",
    url: "https://github.com/rohitmondal03"
  },
  openGraph: {
    siteName: SITE_AAP_NAME,
    title: SITE_AAP_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_WEBSITE,
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
