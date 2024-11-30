import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${montserrat.className}`}>Agrocalculadora</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/about" className="hover:text-accent">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  )
}