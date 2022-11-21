import FadeInText from "../../components/FadeInText";

/**
 * list of blog pages available
 * the subroute [slug]/page.tsx will do the actual article rendering
 */
export default function BlogPage({ params }) {
  return (
    <article>
      <p>this is where i'd put my blog posts...</p>
      <FadeInText delay={2}>
        <span className="italic">if i had any</span>
      </FadeInText>
      <FadeInText delay={4}>
        that being said, its under construction!
      </FadeInText>
    </article>
  );
}
