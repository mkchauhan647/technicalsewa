import Footer from '@/components/Footer'
import Nav from '../components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technical Sewa',
  description: 'Technical sewa is all round solution for technical issues.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <Nav />
        {children}
        <Footer />
        </>
      </body>
    </html>
  )
}
