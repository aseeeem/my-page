import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { type Post, getAllPosts } from './posts'

export const metadata = {
  title: `Asim's Idea Dump`,
}

// TODO
// make the link at the homepage have a query param of like "?article=newest" or something
// the BlogsPostList param can then auto foward to the most recent or something? idk there's probably a way to do that
/**
 * list of blog pages available
 * the subroute [slug]/page.tsx will do the actual article rendering
 */
export default function BlogPostList() {
  const posts = getAllPosts()
  return (
    <>
      <Navbar />
      <main className="grid h-screen gap-2 pt-4">
        <section className="container px-2 mx-auto text-gray-50">
          <ul className="grid gap-4">
            {/* sort strings as date in descending order */}
            {posts
              .sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB.getTime() - dateA.getTime()
              })
              .map((post) => (
                <PostLink key={post.slug} post={post} />
              ))}
          </ul>
        </section>
      </main>
    </>
  )
}

function PostLink({ post }: { post: Post }) {
  const { slug, date, title } = post
  return (
    <li className="flex flex-col gap-4">
      <Link
        className="text-2xl font-extrabold text-purple-300"
        href={`/blog/${slug}`}
      >
        {title}
      </Link>
      <p className="text-xs font-light text-gray-50">📝 {date}</p>
    </li>
  )
}
