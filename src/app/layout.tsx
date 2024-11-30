import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agrocalculadora',
  description: 'Calculadora web para auxiliar no planejamento de plantio de verduras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="content-wrapper rounded-lg shadow-lg p-6">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

