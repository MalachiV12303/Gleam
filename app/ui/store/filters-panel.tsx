'use client'

import React from 'react'
import { PriceSlider } from './priceslider'
import { Filters } from './filters/filters'

export default function FiltersPanel({
  itemtype,
}: {
  itemtype: string,
}) {
  return (
    <div className="text-sm flex-col px-8 sm:px-2 lowercase">
      <PriceSlider />
      <Filters it={itemtype} />
    </div>
  )
}
