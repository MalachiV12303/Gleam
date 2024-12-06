'use client'

import React from 'react'
import { Filters } from './filters/filters'

export default function FiltersPanel({
  itemtype,
}: {
  itemtype: string,
}) {
  return (
    <div className="text-sm flex-col px-4 sm:px-0 lowercase">
      <Filters it={itemtype} />
    </div>
  )
}
