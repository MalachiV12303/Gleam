'use client'

import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs'
import { CameraFilters } from './filters/camera-filters'
import { LenseFilters } from './filters/lense-filters'
import { Slider, SliderValue } from '@nextui-org/slider'
import React from 'react'


export default function FiltersPanel({
  type,
}: {
  type: string | null
}) {

  const [, setPrice] = useQueryState("price", parseAsArrayOf(parseAsInteger).withDefault([0,3000]));
  const [value, setValue] = React.useState<SliderValue>([0, 3000]);
  
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
    <div className="text-sm flex-col mt-2 sm:mt-4">
      <Slider 
        label="Value"
        size="sm"
        color="foreground"
        step={100}
        maxValue={3000}
        minValue={0} 
        value={value}
        onChange={setValue}
        className="max-w-md"
      />
      {selectFilters(type)}
    </div>
  )
}
