'use client'
import React from 'react'
import { Filters } from './filters'
import { Button, Popover, PopoverContent, PopoverTrigger, ScrollShadow } from '@nextui-org/react'

export default function FiltersPanel({
  itemtype,
  type
}: {
  itemtype: string,
  type: string
}) {
  return type === 'desktop'
    ? (
      <ScrollShadow className="sm:h-full max-h-[70dvh] scrollbar pt-1 px-2 w-full overflow-x-hidden">
        <div className="flex-col lowercase">
          <Filters it={itemtype} />
        </div>
      </ScrollShadow>
    ) : (
      <Popover showArrow={true} placement="bottom-end" classNames={{
        content: "text-foreground items-start w-[60dvw] px-2 py-2 rounded-lg",
        trigger: "h-6 rounded-full",
      }}>
        <PopoverTrigger >
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent >
          <ScrollShadow className="sm:h-full max-h-[70dvh] scrollbar pt-1 px-2 w-full">
            <div className="flex-col lowercase">
              <Filters it={itemtype} />
            </div>
          </ScrollShadow>
        </PopoverContent>
      </Popover>
    )
}
