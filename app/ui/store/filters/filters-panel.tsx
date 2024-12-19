'use client'
import React from 'react'
import { Filters } from './filters'
import { ScrollShadow } from '@nextui-org/react'

export default function FiltersPanel({
  itemtype,
}: {
  itemtype: string,
}) {
  return (
    <ScrollShadow className="h-full scrollbar pt-1 px-2 ">
      <div className="flex-col lowercase">
        <Filters it={itemtype} />
      </div>
    </ScrollShadow>
  )
}
