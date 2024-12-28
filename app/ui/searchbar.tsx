'use client'

import { searchParams } from '@/app/lib/searchParams'
import { useQueryState } from 'nuqs'
import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar() {
    const [search, setSearch] = useQueryState('search', searchParams.search.withOptions({
        shallow: false
    }))

    const updateSearch = useDebouncedCallback((term) => {
        console.log("searching for: " + term )
        setSearch(term);
    }, 500); 
    
    return (
        <div className="w-full flex">
            <label>
                <input id="searchbar" defaultValue={search} onChange={e => updateSearch(e.target.value)}
                    placeholder="search..."
                    className="opacity-80 w-full border-transparent outline-none bg-transparent" />
            </label>
        </div>
    )
}