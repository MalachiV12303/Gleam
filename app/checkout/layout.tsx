import IndexLink from "../ui/indexlink"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div id='checkoutLayout'>
      <div className='z-20 text-4xl fixed top-4 px-8 flex w-full'>
        <IndexLink />
      </div>
      <main className="w-10/12 mx-auto">
        {children}
      </main>
    </div>

  )
} 