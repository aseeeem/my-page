export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <section className="pl-4 pr-4 pt-6 text-gray-50 text-lg md:text-3xl md:grid md:place-content-center">
        {children}
      </section>
    </div>
  )
}
