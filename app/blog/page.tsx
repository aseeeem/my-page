import Link from 'next/link'
import { type Post, getAllPosts } from './posts'

// TODO
// make the link at the homepage have a query param of like "?article=newest" or something
// the BlogsPostList param can then auto foward to the most recent or something? idk there's probably a way to do that
/**
 * list of blog pages available
 * the subroute [slug]/page.tsx will do the actual article rendering
 */
export default function BlogPostList({ params }) {
  const posts = getAllPosts()
  return (
    <ul className="flex flex-col space-y-4">
      {posts.map((post) => (
        <PostLink key={post.slug} post={post} />
      ))}
    </ul>
  )
}

function PostLink({ post }: { post: Post }) {
  const { slug, date, title } = post
  return (
    <li>
      <Link className="underline" href={`/blog/${slug}`}>
        {title}
      </Link>{' '}
      <span className="text-springfog text-lg">- {date}</span>
    </li>
  )
}
