import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../posts'
export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  return (
    <>
      <h1 className="sm:text-2xl text-4xl pb-5">{post.title}</h1>
      <article className="prose sm:prose-2xl prose-xl prose-invert">
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
