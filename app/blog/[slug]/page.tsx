import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../posts'
export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  return (
    <>
      <h1>{post.title}</h1>
      <article>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
