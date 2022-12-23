import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full grid grid-cols-1 place-items-center">
      <header>
        <h1 className="md:text-6xl text-4xl">
          Hi, I'm{' '}
          <span className="text-cyan-200" title="pronounced ah-sim">
            Asim
          </span>
        </h1>
      </header>
      <section className="h-full">
        <article className="md:text-2xl text-justify lowercase">
          <p className="pb-4 animate-fade-in">i like all things web dev</p>
          <p className="opacity-0 animate-fade-in animation-delay-[3s] [animation-fill-mode:forwards]">
            <Link className="underline" href="/blog">
              checkout my latest article
            </Link>
          </p>
        </article>
      </section>
    </div>
  )
}
