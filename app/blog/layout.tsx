export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <section className="grow pl-4 pr-4 text-gray-50 text-lg md:text-3xl">
        <div className="grid place-items-center pt-6">{children}</div>
      </section>
    </div>
  )
}
