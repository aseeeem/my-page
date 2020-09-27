import Head from "next/head";

export default function IndexPage() {
  return (
    <div className="h-screen grid justify-center content-center ">
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
      </section>
    </div>
  );
}
