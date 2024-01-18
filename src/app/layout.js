import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luke`s Portfolio',
  description: 'A new and refreshing portfolio page.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
