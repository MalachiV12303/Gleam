'use client'
import { Camera, Lense } from '@/app/lib/db/schema'
import { ScrollShadow } from '@nextui-org/react'
import { StoreItem } from '@/app/ui/store/catalogue/store-items'

export function ItemsPanel({ items } : { items: Camera[]| Lense[] }){
  return (
      <ScrollShadow className="scrollbar h-full">
      {items ? items.map((item) => {
            return (
                <StoreItem key={item.id} item={item}/>
            )
          }) :
          <div className="m-8 mx-auto flex">
            <p className="text-m mx-auto"> no items found...</p>
          </div>
      }
      </ScrollShadow>
  )
}