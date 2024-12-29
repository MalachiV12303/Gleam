'use client'
import React from 'react'
import { searchParams } from '@/app/lib/searchParams'
import { useQueryState } from 'nuqs'

export default function SearchBar({className} : {className?: string}) {
    const [search, setSearch] = useQueryState('search', searchParams.search.withOptions({ shallow: false }))
    // const updateSearch = useDebouncedCallback((term) => { setSearch(term) }, 450)
    // removed debounced callback, issues with value and defaultValue, chips would not clear input unless value is used
    return (
        <div id="searchbar" className={`${className} max-w-full`}>
            <input spellCheck={false} value={search} placeholder='search...' className='w-full outline-none bg-transparent text-foreground'
                onChange={e => setSearch(e.target.value)} />
        </div>
    )
}