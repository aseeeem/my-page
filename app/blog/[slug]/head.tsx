export default function BlogArticleHeader({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <>
      <title>{params.slug}</title>
    </>
  )
}
