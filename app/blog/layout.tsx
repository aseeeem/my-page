import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <header className="pt-6 pb-6  lg:text-left col-start-2">
        <h1 className="text-center lg:text-4xl text-2xl text-springfog font-extrabold underline">
          Asim's Idea Dump
        </h1>
        <h4 className="m-2 text-center">
          I decided to make a place to put my thoughts out there
        </h4>
      </header>
      <section className="text-lightorange row-start-2 col-start-2 text-lg md:text-2xl">
        {children}
      </section>
    </main>
  )
}
