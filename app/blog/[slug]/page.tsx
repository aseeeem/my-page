import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '../posts'

type BlogPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug)
  return {
    title: post.title,
  }
}

export default function BlogArticle({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug)
  return (
    <section className="flex flex-col items-center">
      <h1 className="py-5 text-4xl font-medium text-center underline underline-offset-2">
        {post.title}
      </h1>
      {/* if you dont break words, the links will overflow the page */}
      <article className="container px-4 pt-2 prose prose-base prose-invert prose-h3:opacity-80 prose-h3:underline prose-h3:lg:text-2xl prose-h4:opacity-70 prose-h4:md:text-xl prose-p:text-gray-50 prose-p:lg:text-lg lg:prose-2xl prose-a:break-words prose-li:break-words prose-li:lg:text-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </section>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
