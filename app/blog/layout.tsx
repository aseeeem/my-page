import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full grid grid-cols-[0.5fr_3fr_0.5fr] grid-rows-[0.5fr_3fr_0.5fr]">
      <header className="pt-6 pb-6 text-center lg:text-left col-start-2">
        <h1 className="text-2xl text-cyan-200 font-extrabold underline">
          <Link href="/">Asim's Idea Dump</Link>
        </h1>
      </header>
      <section className="h-full row-start-2 col-start-2 text-lg">
        {children}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

function Footer() {
  return (
    <footer className="row-start-3 col-start-2 text-center">
      Footer...eventually
    </footer>
  );
}
