import { ScrollProgress } from "../ui/details/scrollprogress"
import IndexLink from "../ui/indexlink"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div>
      <div className='z-20 text-4xl fixed top-4 px-8 flex w-full'>
            <IndexLink />
      </div>
      <main className='w-11/12 md:w-3/4 mx-auto'>
        {children}
      </main>
      <ScrollProgress />
    </div>
  )
} 