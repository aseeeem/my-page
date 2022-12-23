import { getPostBySlug, getAllPosts } from "../posts";
export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </>
  );
}

// TODO fill this out, get post information from generateStaticParams
// return the whole slug

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
