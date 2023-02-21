import Link from 'next/link'
import './globals.css'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="text-springfog font-mono bg-blue h-screen flex flex-col">
        <NavComponent />
        <main className="flex flex-col flex-grow pb-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function NavComponent() {
  return (
    <nav className="text-lightorange h-10 sticky pt-4 text-xl font-bold">
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
