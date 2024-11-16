import { Camera, Lense } from '@/app/lib/db/schema';
import { StoreItem } from '@/app/ui/store/store-items'
import { ScrollShadow } from '@nextui-org/react';


export async function ItemsPanel({
  items,
}:{
  items: Camera[]| Lense[];
}){
  let c = 0
  return (
      <ScrollShadow className="scrollbar max-h-[40dvh] sm:max-h-full">
      {
        items ?
          items.map((item) => {
            c++
            return (
              <div key={item.name} className="flex items-center">
                <p className="block sm:hidden text-sm pl-3 opacity-75">{c}</p>
                <StoreItem item={item} />
              </div>
            )
          }) :
          <div className="m-8 mx-auto flex">
            <p className="text-m mx-auto"> no items found...</p>
          </div>
      }
      </ScrollShadow>
  )
}