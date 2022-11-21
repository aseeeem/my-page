import Link from "next/link";
import FadeInText from "../components/FadeInText";

export default function Page() {
  return (
    <div className="h-full grid grid-cols-1 place-items-center">
      <header>
        <h1 className="lg:text-6xl text-4xl">
          Hi, I'm{" "}
          <span className="text-cyan-200" title="pronounced ah-sim">
            Asim
          </span>
        </h1>
      </header>
      <section className="h-full">
        <article className="lg:text-2xl text-justify lowercase">
          <p className="pb-4 animate-fade-in">i like all things web dev</p>
          <FadeInText delay={2}>
            <Link className="underline" href="/blog">
              checkout my latest article
            </Link>
          </FadeInText>
        </article>
      </section>
    </div>
  );
}
