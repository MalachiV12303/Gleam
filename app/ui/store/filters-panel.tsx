'use client'

import React from 'react'
import { useQueryState } from 'nuqs'
import { CameraFilters } from './filters/camera-filters'
import { LenseFilters } from './filters/lense-filters'
import { Slider } from '@nextui-org/slider'
import { searchParams } from '@/app/lib/searchParams'
import { useDebouncedCallback } from 'use-debounce'

export default function FiltersPanel({
  type,
}: {
  type: string | null
}) {
  const [price, setPrice] = useQueryState("price", searchParams.price.withOptions({
    shallow: false
  }));
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
  const updatePrice = useDebouncedCallback((term) => {
    console.log("price updated to: " + term )
    setPrice(term);
  }, 300); 

  return (
    <div className="text-sm flex-col">
      <div className="mx-4 my-2 sm:my-4 flex flex-col">
        <div className="flex justify-between">
          <p className="underline block">price</p>
        </div>
        <Slider
          aria-label="price"
          showTooltip={true}
          tooltipProps={{color: "primary", className: "text-background"}}
          size="sm"
          color='primary'
          step={50}
          maxValue={3000}
          minValue={0}
          hideThumb={true}
          defaultValue={price}
          marks={[
            {
              value: 0,
              label: "$0",
            },
            {
              value: 3000,
              label: "$3000",
            }
          ]}
          onChangeEnd={(e) => {
            updatePrice(e)
          }}
          className="max-w-md mt-1"
        />
      </div>
      {selectFilters(type)}
    </div>
  )
}
