import { use } from "react";
export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = use(getPostBySlug(params.slug));
  return (
    <>
      <h1>Article Name: {post.title}</h1>
      <article>{post.body}</article>
    </>
  );
}

// TODO fill this out, get post information from generateStaticParams
// return the whole slug

type Post = {
  title: string;
  slug: string;
  /** really a Date to JSON maybe idek */
  created: string;
  body: string;
};
async function getPostBySlug(slug: Post["slug"]) {
  const posts: Post[] = [
    {
      title: "Stop Linking Me Like 'this'",
      slug: "stop-linking-like-this",
      created: new Date("12/03/2022").toDateString(),
      body: `Here's some reason why you should stop linking me like [this](url)`,
    },
  ];
  return posts.find((post) => post.slug === slug);
}

async function getPosts() {
  const posts: Post[] = [
    {
      title: "Stop Linking Me Like 'this'",
      slug: "stop-linking-like-this",
      created: new Date("12/03/2022").toDateString(),
      body: `Here's some reason why you should stop linking me like [this](url)`,
    },
  ];
  return posts;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
