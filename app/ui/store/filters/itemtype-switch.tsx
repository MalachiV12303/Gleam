'use client'

import React from 'react'
import clsx from 'clsx'
import { useQueryState } from 'nuqs'
import { searchParams, useFilters } from '@/app/lib/searchParams'

export function ItemTypeSelector(){
    const ITEMTYPES = ['len', 'cam', 'aer']
    const [, setFilters]= useFilters()
    const [ itemtype, setItemtype ] = useQueryState('itemtype', 
        searchParams.itemtype.withOptions({
            shallow: false
    }));
    return(
        <div className="flex justify-between items-center border-foreground divide-x h-6"> 
            {ITEMTYPES.map((type)=>(
                <label
                    key={type}
                    className={clsx('flex h-full basis-1/3 px-1 justify-center border-foreground', { 'bg-foreground text-background' : itemtype === type })}>
                    <button
                        onClick={() => {
                            setItemtype(type)
                            setFilters(null)
                        }}>
                        {type}
                    </button>
                </label>
            ))}
        </div>
    )
}
