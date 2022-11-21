import Link from "next/link";
import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="h-screen grid grid-cols-1 place-items-center text-slate-200">
        <header>
          <h1 className="lg:text-6xl text-4xl">
            Hi, I'm{" "}
            <span className="text-cyan-200" title="pronounced ah-sim">
              Asim
            </span>
          </h1>
        </header>
        {/* <NavComponent /> */}
        <main className="bg-black h-full">{children}</main>
      </body>
    </html>
  );
}

function NavComponent() {
  return (
    <nav className="text-slate-200 h-10 sticky top-0">
      <ul className="h-full">
        <li>
          <Link className="hover:text-blue-300 hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-300 hover:underline" href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
