import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid place-content-center h-[calc(100vh-1rem)]">
      <div className="flex flex-col items-center h-[50vh] justify-evenly">
        <h1 className="text-4xl md:text-6xl">
          Hi, I'm <span title="pronounced ah-sim">Asim</span>
        </h1>
        <section>
          <article className="text-center lowercase md:text-2xl text-gray-50">
            <p className="pb-4 text-gray-50">i like all things web dev</p>
            <p className="text-gray-50">
              <Link className="underline" href="/blog">
                check out my blog!
              </Link>
            </p>
            <p className="pt-6 text-sm text-gray-200">
              I'm still working on this btw, check in periodically to see what's
              up!
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
