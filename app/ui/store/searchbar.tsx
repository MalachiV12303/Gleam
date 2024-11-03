'use client'

import { searchParams } from '@/app/lib/searchParams'
import { useQueryState } from 'nuqs'
import React from 'react'

export default function SearchBar() {
    const [search, setSearch] = useQueryState('search', searchParams.search.withOptions({
        shallow: false
    }))

    return (
        <div className="flex w-full">
            <label>
                <input id="searchbar" value={search || ''} onChange={e => setSearch(e.target.value)}
                    placeholder="search..."
                    className="opacity-80 w-full border-transparent outline-none bg-transparent" />
            </label>
        </div>
    )
}