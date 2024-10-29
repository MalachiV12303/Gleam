'use client'
import React from "react"
import clsx from "clsx"
import { searchParams } from "@/app/lib/searchParams"
import { useQueryState } from "nuqs"


export function TypeSelector(){
    const ITEMTYPES = ['len', 'cam', 'aer']
    const [ isLoading, startTransition ]= React.useTransition()
    const [ itemtype, setItemtype ] = useQueryState(
        'itemtype', 
        searchParams.itemtype.withOptions({
            startTransition,
            shallow: false
    }).withDefault("cam"));
    
    if (isLoading) return (
    <div className="flex justify-between items-center divide-x border-x-[1px] border-b-[1px] h-6">
        <div className="h-full basis-1/3"></div>
        <div className="h-full basis-1/3"></div>
        <div className="h-full basis-1/3"></div>
    </div>)

    return(
        <div className="flex justify-between items-center divide-x border-x-[1px] border-b-[1px] h-6"> 
            {ITEMTYPES.map((type)=>(
                <label
                    key={type}
                    className={clsx('flex h-full basis-1/3 px-1 justify-center', { 'bg-foreground text-background' : itemtype === type })}>
                    <button
                        onClick={() => setItemtype(type)}
                    >
                        {type}
                    </button>
                </label>
            ))}
        </div>
    );
}
