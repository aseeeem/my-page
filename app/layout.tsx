import Link from "next/link";
import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="h-screen text-slate-200">
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
