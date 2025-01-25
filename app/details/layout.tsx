import IndexLink from "../ui/indexlink"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className='flex min-h-[100dvh]'>
      <main className='w-11/12 mx-auto'>
        {/* <div className='w-10/12 z-10 mt-20 flex flex-col items-start gap-2 fixed'>
          <BackButton/>
        </div> */}
        <IndexLink/>
        {children}
      </main>
    </div>
  )
} 