import { data } from 'autoprefixer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luke`s Portfolio',
  description: 'A new and refreshing portfolio page.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
