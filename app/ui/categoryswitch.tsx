'use client'
import React from 'react'
import clsx from 'clsx'
import { useQueryState } from 'nuqs'
import { searchParams, useFilters } from '@/app/lib/searchParams'

export function CategorySwitch(){
    const CATEGORIES = ['len', 'cam', 'aer']
    const [, setFilters]= useFilters()
    const [ category, setCategory ] = useQueryState('category', 
        searchParams.category.withOptions({
            shallow: false
    }))
    return(
        <div className="w-full flex justify-between items-center border-foreground divide-x h-6"> 
            {CATEGORIES.map((cat)=>(
                <label
                    key={cat}
                    className={clsx('flex h-full basis-1/3 px-1 justify-center border-foreground', { 'bg-foreground text-background' : category === cat })}>
                    <button
                        onClick={() => {
                            setCategory(cat)
                            setFilters(null)
                        }}>
                        {cat}
                    </button>
                </label>
            ))}
        </div>
    )
}
