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
  return (
    <div className="w-full max-h-[55vh] overflow-y-auto scrollbar sm:max-h-full">
        {
          items ?
            items.map((item) => (
              <div key={item.name}>
                <StoreItem item={item} />
              </div>
            )) : 

            <div className="m-8 mx-auto flex">
                <p className="text-m mx-auto"> no items found...</p>
            </div>
        }
    </div>
  )
}


