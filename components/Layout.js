import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        {props.children}
      </article>
    </>
  )
}