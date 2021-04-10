import { getAllPostSlugs, getPostData } from "../../utils/posts";

export default function Post({ content }) {
  return (
    <div>
      {content.title}
      <p>{content.slug}</p>
    </div>
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
  const content = getPostData(params.slug)

  return {
    props: {
      content
    }
  }
}