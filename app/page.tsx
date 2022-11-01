export default function Page() {
  return (
    <section className="h-full flex flex-col justify-items-start">
      <header className="pt-6 pb-6">
        <h1 className="lg:text-6xl text-4xl">
          Hi, I'm{" "}
          <span className="text-cyan-200" title="pronounced ah-sim">
            Asim
          </span>
        </h1>
      </header>
      <article className="lg:text-2xl text-justify lowercase">
        <p>i like all things web dev</p>
        <p>avid react dev, expressive coder</p>
        <p>i'm still getting better tho</p>
        <p>i'll start writing blogs soon</p>
        <p>so yeah that'll be fun</p>
      </article>
    </section>
  );
}
