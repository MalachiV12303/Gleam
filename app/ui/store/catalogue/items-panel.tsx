'use client'
import { Camera, Lense } from '@/app/lib/db/schema'
import { ScrollShadow } from '@nextui-org/react'
import { StoreItem } from '@/app/ui/store/catalogue/store-items'
import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import { ListBlobResult } from '@vercel/blob'

export function ItemsPanel({ items, images }: { items: Camera[] | Lense[], images: ListBlobResult }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <ScrollShadow ref={ref} className="pb-2 w-full sm:w-3/4 no-scrollbar relative">
        {items ? items.map((item) => {
          return (
            <StoreItem key={item.id} item={item} />
          )
        }) :
          <div className="m-8 mx-auto flex">
            <p className="text-m mx-auto"> no items found...</p>
          </div>
        }
      </ScrollShadow>
      <motion.div
        className="absolute top-0 right-0 w-[1px] h-full bg-foreground origin-top "
        style={{ scaleY }} />
    </>
  )
}