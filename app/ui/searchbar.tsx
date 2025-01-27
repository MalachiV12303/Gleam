'use client'
import React from 'react'
import { searchParams } from '@/app/lib/searchParams'
import { useQueryState } from 'nuqs'

export default function SearchBar({ className }: { className?: string }) {
    const [search, setSearch] = useQueryState('search', searchParams.search.withOptions({ shallow: false }))
    // const updateSearch = useDebouncedCallback((term) => { setSearch(term) }, 450)
    // removed debounced callback, issues with value and defaultValue, chips would not clear input unless value is used
    return (
        <div className={`${className} flex px-1 py-1 items-center rounded-full outline-none bg-background text-background`}>
            <div className='flex items-center gap-2 px-3 py-1 bg-foreground rounded-full w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="background" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input spellCheck={false} value={search} placeholder='search...' className='placeholder:text-background w-full bg-transparent '
                    onChange={e => setSearch(e.target.value)}/>
            </div>
        </div>
    )
}