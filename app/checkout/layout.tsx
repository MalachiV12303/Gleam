
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <main className="w-10/12 mx-auto">
        {children}
      </main>
  )
} 