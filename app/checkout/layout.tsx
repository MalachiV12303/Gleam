export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className="w-full mx-auto">
      {children}
    </main>
  )
} 