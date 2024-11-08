'use client'

import React from 'react'
import { useQueryState } from 'nuqs'
import { CameraFilters } from './filters/camera-filters'
import { LenseFilters } from './filters/lense-filters'
import { Slider } from '@nextui-org/slider'
import { parseAsSliderValue, searchParams } from '@/app/lib/searchParams'


export default function FiltersPanel({
  type,
}: {
  type: string | null
}) {
  const [price, setPrice] = useQueryState("price", searchParams.price);
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
    <div className="text-sm flex-col">
      <div className="mx-4 my-2 sm:my-4">
        <div className="flex justify-between">
          <p className="underline block">price</p>
          <p>{parseAsSliderValue.serialize(price)}</p>
        </div>
        <Slider
          aria-label="price"
          size="sm"
          color="foreground"
          hideThumb={true}
          step={50}
          maxValue={3000}
          minValue={0}
          value={price}
          onChange={(e) => {
            setPrice(e)
          }}
          className="max-w-md mt-1"
        />
      </div>
      {selectFilters(type)}
    </div>
  )
}
