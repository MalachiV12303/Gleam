'use client'

import React from 'react'
import clsx from 'clsx'
import { searchParams } from '@/app/lib/searchParams'
import { useQueryState } from 'nuqs'

export function ItemTypeSelector(){
    const ITEMTYPES = ['len', 'cam', 'aer']
    const [ itemtype, setItemtype ] = useQueryState('itemtype', 
        searchParams.itemtype.withOptions({
            shallow: false
    }))
    const [, setSearch]= useQueryState('search', 
        searchParams.search.withOptions({
        shallow: false
    }))
    

    return(
        <div className="flex justify-between items-center divide-x border-foreground sm:border-x-[1px] border-b-[1px] h-6"> 
            {ITEMTYPES.map((type)=>(
                <label
                    key={type}
                    className={clsx('flex h-full basis-1/3 px-1 justify-center ', { 'bg-foreground text-background' : itemtype === type })}>
                    <button
                        onClick={() => {
                            setItemtype(type)
                            setSearch(null)}}>
                        {type}
                    </button>
                </label>
            ))}
        </div>
    )
}
