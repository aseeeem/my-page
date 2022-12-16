import Link from "next/link";
import { use } from "react";

type Post = {
  title: string;
  slug: string;
  /** really a Date to JSON maybe idek */
  created: string;
};
async function getPosts() {
  const posts: Post[] = [
    {
      title: "Stop Linking Me Like 'this'",
      slug: "stop-linking-like-this",
      created: new Date("12/03/2022").toDateString(),
    },
  ];
  return posts;
}

// TODO
// make the link at the homepage have a query param of like "?article=newest" or something
// the BlogsPostList param can then auto foward to the most recent or something? idk there's probably a way to do that
/**
 * list of blog pages available
 * the subroute [slug]/page.tsx will do the actual article rendering
 */
export default function BlogPostList({ params }) {
  const posts = use(getPosts());
  return (
    <article>
      <ul>
        {posts.map((post) => (
          <PostLink key={post.slug} post={post} />
        ))}
      </ul>
    </article>
  );
}

function PostLink({ post }: { post: Post }) {
  const { slug, created, title } = post;
  return (
    <li>
      <Link className="underline" href={`/blog/${slug}`}>
        {title}
      </Link>{" "}
      - {created}
    </li>
  );
}
