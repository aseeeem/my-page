/**
 * list of blog pages available
 * the subroute [slug]/page.tsx will do the actual article rendering
 */
export default function BlogPage({ params }) {
  return (
    <article>
      <p>this is where i'd put my blog posts...</p>
      <p className="italic">if I had any</p>
    </article>
  );
}
