'use client'

import React from 'react'
import { CameraFilters } from './filters/camera-filters'
import { LenseFilters } from './filters/lense-filters'
import { PriceSlider } from './priceslider'

export default function FiltersPanel({
  type,
}: {
  type: string | null
}) {
  
  function selectFilters(i: string | null) {
    switch (i) {
      case "cam":
        return <CameraFilters />
      case "len":
        return <LenseFilters />
      default:
        return <div className="flex w-full h-48 justify-center items-center"><p>aerial filters in progress...</p></div>
    }
  }

 

  return (
    <div className="text-sm flex-col px-8 sm:px-2 lowercase">
      <PriceSlider/>
      {selectFilters(type)}
    </div>
  )
}
