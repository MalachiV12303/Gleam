'use client'

import React from 'react'
import { Filters } from './filters'
import { FilterChips } from './filters-chips'
import { ScrollShadow } from '@nextui-org/react'


export default function FiltersPanel({
  itemtype,
}: {
  itemtype: string,
}) {
  return (
    <ScrollShadow className="h-full scrollbar">
      <div className="text-sm flex-col px-4 sm:px-0 lowercase">
        <FilterChips />
        <Filters it={itemtype} />
      </div>
    </ScrollShadow>
  )
}
