'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="w-full text-xl font-semibold md:text-3xl text-slate-50">
      <ul className="flex flex-row w-5/6 justify-evenly">
        <li className="uppercase hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li
          className={`hover:underline hover:text-blue-300 ${
            pathname === '/blog' ? 'underline' : ''
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
