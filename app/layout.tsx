import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: `Hi it's Asim`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="font-light bg-slate-900 text-slate-50">
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer>
      <div className="text-xs">&copy; Asim {new Date().getFullYear()}</div>
    </footer>
  )
}
