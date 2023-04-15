import Link from 'next/link'
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
    <html lang="en" className={inter.className}>
      <body className="bg-slate-900 text-slate-50 font-light h-screen flex flex-col">
        <NavComponent />
        <main className="flex flex-col flex-grow pb-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function NavComponent() {
  return (
    <nav className="text-slate-50 h-10 sticky pt-4 text-xl font-semibold">
      <ul className="flex justify-around">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="sticky">
      <div className="text-xs">&copy; Asim {new Date().getFullYear()}</div>
    </footer>
  )
}
