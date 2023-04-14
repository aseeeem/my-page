import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPosts } from '../posts'
export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  return (
    <>
      <h1 className="md:text-4xl text-2xl pb-5 underline underline-offset-2">
        {post.title}
      </h1>
      <article className="prose lg:pt-2 text-gray-50 prose-xl md:prose-2xl prose-invert">
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
