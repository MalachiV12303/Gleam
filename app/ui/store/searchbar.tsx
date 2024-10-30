'use client'

import { parseAsString, useQueryState } from "nuqs"
import React from "react";

export default function SearchBar(){
    const [name, setName]= useQueryState('search', parseAsString.withOptions({
        shallow: false,
        throttleMs: 1000
    }).withDefault(''))

    return(
        <div className="flex w-full">
            <input value={name || ''} onChange={e => setName(e.target.value)} 
            placeholder="search..."
            className="opacity-75 w-full border-transparent outline-none bg-transparent"/>
        </div>
    )
}