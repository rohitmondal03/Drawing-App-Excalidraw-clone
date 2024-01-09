import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { SITE_AAP_NAME, SITE_DESC, SITE_WEBSITE, SITE_TITLE } from '@/config/site'
import './globals.css'



export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: SITE_AAP_NAME,
  metadataBase: new URL(SITE_WEBSITE),
  generator: "Next.js",
  authors: {
    name: "Rohit Mondal",
    url: "https://github.com/rohitmondal03"
  },
  openGraph: {
    siteName: SITE_AAP_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_WEBSITE,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Rohit Mondal",
    title: SITE_TITLE,
    description: SITE_DESC,
    site: SITE_WEBSITE,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_TITLE,
  },
  robots: "index, follow"
}


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
