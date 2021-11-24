import hydrate from 'next-mdx-remote/hydrate'
import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostData } from "../../utils/posts"

export default function Post({ meta, source }) {
  const content = hydrate(source)
  return (
    <Layout title={meta.title}>
      {content}
    </Layout>
  )
}

export async function getStaticPaths() {
  // determine the file path here
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // get the data to actually render the post
  const { slug, meta, source } = await getPostData(params.slug)

  return {
    props: {
      slug,
      meta,
      source
    }
  }
}