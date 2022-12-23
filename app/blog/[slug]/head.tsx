import { getPostBySlug } from '../posts'

export default function BlogArticleHeader({
  params,
}: {
  params: { slug: string }
}) {
  const { title } = getPostBySlug(params.slug)
  return (
    <>
      <title>{title}</title>
    </>
  )
}
