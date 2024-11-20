import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Sarvesh Mishra',
  description: 'A portfolio website with podcasts, books, and more',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}