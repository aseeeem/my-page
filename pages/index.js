import Link from 'next/link'
import Layout from '../components/Layout'

export default function IndexPage() {
  return (
    <Layout title="Its Asim">
      <div className="h-screen grid place-content-center">
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
          <Link href="/blog/my-first-page">
            <a className="text-lg hover:underline hover:text-red-400">My first article!</a>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
