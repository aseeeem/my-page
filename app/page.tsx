import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center justify-evenly">
      <h1 className="md:text-6xl text-4xl">
        Hi, I'm <span title="pronounced ah-sim">Asim</span>
      </h1>
      <section>
        <article className="md:text-2xl text-justify lowercase text-gray-50">
          <p className="pb-4 animate-fade-in text-gray-50">
            i like all things web dev
          </p>
          <p className="opacity-0 animate-fade-in animation-delay-[3s] [animation-fill-mode:forwards] text-gray-50">
            <Link className="underline" href="/blog">
              checkout my latest article
            </Link>
          </p>
        </article>
      </section>
    </div>
  )
}
