'use client'
import { Camera, Lense } from '@/app/lib/db/schema'
import { StoreItem } from '@/app/ui/store/catalogue/store-items'
import { ListBlobResultBlob } from '@vercel/blob'

export function ItemsPanel({ items, images }: { items: Camera[] | Lense[], images: ListBlobResultBlob[]}) {
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   container: ref,
  // })
  // const scaleY = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });


  function findImage(searchTerm: string){
    const matchingImageBlobs = images.filter(blob => 
      blob.pathname.includes(searchTerm)
    )
    // Return the first matching image blob (if any)
    return matchingImageBlobs.length > 0 ? matchingImageBlobs[0] : null
  }

  return (
    <>
      <div className="sm:px-8 w-full h-min no-scrollbar relative grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 gap-x-4 sm:gap-x-12 bg-transparent place-items-center">
        {items && items.length !==0 ? items.map((item) => {
          return (
            <StoreItem key={item.id} item={item} image={findImage(item.id)} />
          )
        }) :
          <div className="mt-12 text-lg col-span-2 lg:col-span-3 2xl:col-span-4 flex">
            <p> no items found...</p>
          </div>
        }
        <div className='w-full h-[1px] col-span-2 lg:col-span-3 2xl:col-span-4 bg-foreground' />
        
      </div>
      {/* <motion.div
        className="absolute top-0 right-0 w-[1px] h-full bg-foreground origin-top "
        style={{ scaleY }} /> */}
    </>
  )
}