import {
  CameraDetail,
  LenseDetail,

} from '@/app/lib/definitions'
import { StoreItem } from '@/app/ui/store/store-item'

export default function ItemsPanel({
  items,
}: {
  items: CameraDetail[] | LenseDetail[] | null
}) {
  let c = 0
  return (
    <div className="overflow-y-auto scrollbar darker:dscrollbar max-h-[45dvh] sm:max-h-full">
        {
          items ?
            items.map((item) => {
              c++
              return(
              <div key={item.name} className="flex items-center">
                <p className="block sm:hidden text-sm pl-3 opacity-75">{c}</p>
                <StoreItem item={item} />
              </div>
            )}) : 
            <div className="m-8 mx-auto flex">
                <p className="text-m mx-auto"> no items found...</p>
            </div>
        }
    </div>
  )
}


