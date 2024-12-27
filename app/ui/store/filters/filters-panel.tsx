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
      <Popover 
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              opacity: {
                duration: 0.15,
              },
              y:{
                duration: 0.4,
              },
            },
          },
          exit: {
            y: "5%",
            opacity: 0,
            transition: {
              opacity: {
                duration: 0.1,
              },
              y:{
                duration: 0.4 ,
              },
            },
          },
        },
      }}
        placement="bottom-end" classNames={{
        content: "w-[80dvw] bg-transparent backdrop-blur-md border-1 mt-1 mr-1",
        trigger: "h-6 border-1",
      }}>
        <PopoverTrigger >
          <Button variant='light'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-transparent bg-blur-sm">
          <ScrollShadow className="sm:h-full max-h-[70dvh] scrollbar pt-1 px-2 w-full">
            <div className="flex-col lowercase">
              <Filters it={itemtype} />
            </div>
          </ScrollShadow>
        </PopoverContent>
      </Popover>
    )
}
