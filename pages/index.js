import Head from "next/head";
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="h-screen grid place-content-center">
      <Head>
        <title>Its Asim</title>
      </Head>
      <section>
        <h1 className="font-sans">
          <span className="block text-center text-5xl text-white">
            Its Asim
          </span>
          <span className="block text-center text-base text-gray-100 italic">
            and this is my page
          </span>
        </h1>
      </section>
      <section className="pt-8 text-white text-center">
        <p>I don't really have anything else to talk about rn</p>
        <p>But I promise to update this page when I do</p>
        <p>oh, happy spring! keep staying safe! wear a mask!</p>
        <Link href="/blog/my-first-page">
          <a>Click me!</a>
        </Link>
      </section>
    </div>
  );
}
