import Navbar from '@/components/Navbar'

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
