'use client'

import { parseAsString, useQueryState } from "nuqs"
import React from "react";

export default function SearchBar(){
    const [search, setSearch]= useQueryState('search', parseAsString.withOptions({
        shallow: false
    }).withDefault(''))

    return(
        <div className="flex w-full">
            <input value={search || ''} onChange={e => setSearch(e.target.value)} 
            placeholder="search..."
            className="opacity-75 w-full border-transparent outline-none bg-transparent"/>
        </div>
    )
}