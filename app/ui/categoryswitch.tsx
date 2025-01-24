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
        <div className=" flex sm:flex-row flex-col justify-between items-center border-foreground divide-y sm:divide-y-0 sm:divide-x h-full sm:h-6 w-6 sm:w-full"> 
            {CATEGORIES.map((cat)=>(
                <label
                    key={cat}
                    className={clsx('duration-300 ease-in flex w-full h-full basis-1/3 px-1 justify-center border-foreground', { 'bg-foreground text-background' : category === cat })}>
                    <button
                        onClick={() => {
                            setCategory(cat)
                            setFilters(null)
                        }}
                        className='flex w-full sm:flex-row flex-col items-center justify-center'>
                        {cat.split('').map((letter)=>(<span key={letter}>{letter}</span>))}
                    </button>
                </label>
            ))}
        </div>
    )
}
