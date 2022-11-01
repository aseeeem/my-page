import Link from "next/link";
import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="h-screen flex flex-col">
        <nav className="flex-row text-slate-100 h-10 sticky top-0">
          <ul className="flex justify-evenly h-full items-center">
            <li>
              <Link className="hover:text-blue-300 hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300 hover:underline"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main className="bg-black text-cyan-50 h-full grid self-center">
          {children}
        </main>
      </body>
    </html>
  );
}
