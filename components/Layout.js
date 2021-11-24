import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{props.title}</title>
      </Head>
      <article>
        {props.children}
      </article>
    </>
  )
}