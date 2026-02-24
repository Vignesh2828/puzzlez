import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import ClickSpark from '@/components/ClickSpark';

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Puzzlez - We Transform Businesses into Scalable Digital Solutions',
  description:
    'At Puzzlez, we digitize and elevate your business with high-performance web and mobile applications, SaaS product development, cloud architecture, and modern UI/UX design built to scale.',
}


export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ClickSpark
          sparkColor="#3b82f6"
          sparkSize={6}
          sparkRadius={18}
          sparkCount={7}
          duration={400}>
          <Navbar />
          <div className="pt-[73px]">{children}</div>
          <Footer />
          <Toaster richColors position="top-right" />
        </ClickSpark>
      </body>
    </html>
  )
}
