import Navbar from '@/components/app/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}