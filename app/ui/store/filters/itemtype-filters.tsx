'use client'

import { searchParams } from "@/app/lib/searchParams";
import clsx from "clsx";
import { useQueryState } from "nuqs";
import React from "react";

export function TypeSelector(){
    const ITEMTYPES = ['len', 'cam', 'aer']
    const [ isLoading, startTransition ]= React.useTransition()
    const [ itemtype, setItemtype ] = useQueryState(
        'itemtype', 
        searchParams.itemtype.withOptions({
            startTransition,
            shallow: false
    }).withDefault("cam"));
    
    return(
        <div className="flex justify-between items-center divide-x border-x-[1px]"> 
            {ITEMTYPES.map((type)=>(
                <label
                    key={type}
                    className={clsx('flex basis-1/3 px-1 border-b-[1px] justify-center', { 'bg-foreground text-background': itemtype===type })}>
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
