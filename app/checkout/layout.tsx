import PageBackground from "../ui/pagebackground"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className='pt-[80px] h-[100dvh] w-full mx-auto'>
      {children}
      <div className="fixed -z-30 right-0 bottom-0 w-full h-full">
        <PageBackground />
      </div>
    </main>
  )
} 