
import FiltersPanel from "../ui/store/filters/filters-panel";
import BackButton from "../ui/item/backbutton";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className='flex min-h-[100dvh]'>
      <main className="w-10/12 mx-auto">
        <div className='z-10 w-10/12 mt-12 md:mt-24 flex flex-col items-end gap-2 fixed'>
          <BackButton/>
        </div>
        {children}
      </main>
    </div>
  )
} 