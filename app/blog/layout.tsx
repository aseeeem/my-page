import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <header className="pt-6 pb-6  lg:text-left col-start-2">
        <h1 className="text-center lg:text-4xl text-2xl text-springfog font-extrabold underline">
          Asim's Idea Dump
        </h1>
        <h4 className="m-2 text-center">
          I decided to make a place to put my thoughts out there
        </h4>
      </header>
      <section className="grow text-lightorange text-lg md:text-3xl">
        {children}
      </section>
    </div>
  )
}
