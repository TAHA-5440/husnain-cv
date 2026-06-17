import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://husnainghaffar.com'),
  title: {
    default: 'Husnain Ghaffar — Electrical Engineer | Power Systems & Renewable Energy',
    template: '%s | Husnain Ghaffar',
  },
  description:
    'Portfolio of Husnain Ghaffar, an Electrical Engineer specializing in Power Systems, Renewable Energy, Distribution Network Studies, Load Flow & Short Circuit Analysis, and Grid Modernization.',
  keywords: [
    'Electrical Engineer',
    'Power Systems',
    'Renewable Energy',
    'Load Flow Studies',
    'Short Circuit Analysis',
    'Distribution Network Planning',
    'Solar Integration',
    'ETAP',
    'SCADA',
    'Grid Modernization',
    'Husnain Ghaffar',
  ],
  authors: [{ name: 'Husnain Ghaffar' }],
  creator: 'Husnain Ghaffar',
  openGraph: {
    type: 'website',
    title: 'Husnain Ghaffar — Electrical Engineer | Power Systems & Renewable Energy',
    description:
      'Specializd in Power System Studies, Distribution Network Planning, and Solar Integration.',
    siteName: 'Husnain Ghaffar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Husnain Ghaffar — Electrical Engineer',
    description:
      'Power Systems · Renewable Energy · Distribution Network Studies · Grid Modernization',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1419',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="m-0 font-sans antialiased">
        <div className="scroll-progress" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
