export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className='h-[100dvh] w-full mx-auto'>
      {children}
    </main>
  )
} 