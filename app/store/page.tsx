import React from 'react'
import SearchBar from '../ui/searchbar'
import FiltersPanel from '../ui/store/filters/filters-panel'
import { inc } from '@/app/ui/fonts'
import { searchParamsCache } from '@/app/lib/searchParams'
import { ItemTypeSelector } from '../ui/store/filters/itemtype-switch'
import { fetchCameras, fetchLenses } from '../lib/db/queries'
import { ItemsPanel } from '../ui/store/catalogue/items-panel'
import { SearchParams } from 'nuqs/server'
import { FilterChips } from '../ui/store/filters/filters-chips'

type PageProps = {
    searchParams: Promise<SearchParams>
}

// async - performs database queries
export default async function Page({ searchParams }: PageProps) {
    const { itemtype } = searchParamsCache.parse(await searchParams)
    const [ items ] = await fetchItems(itemtype)
    const count = items?.length | 0

    function fetchItems(type: string) {
        switch (type) {
          case "cam":
            return Promise.all([fetchCameras()])
          case "len":
            return Promise.all([fetchLenses()])
          default:
            return []
        }
    }
    return (
        <div id='storeContainer' className={`${inc.className} mx-auto w-10/12`}>
            <div id='searchContainer' className='p-4'><SearchBar /></div>
            <div id='topLayer' className='flex'>
                <div id='typeSelector' className='w-1/3'><ItemTypeSelector /></div>
                <div id='countAndChips' className='w-2/3 flex'>
                    <p className='text-nowrap px-4'>{count === null ? '0 found...' : count + ' items found'}</p>
                    <FilterChips />
                </div>
            </div>
            <div id="filtersAndItems" className="flex flex-col sm:flex-row max-w-full max-h-[50dvh] sm:min-h-[68dvh] border-t-1 border-foreground">
                <div className="w-1/3">
                    <FiltersPanel itemtype={itemtype} />
                </div>
                <div className="w-2/3">
                    <ItemsPanel items={items} />
                </div>
            </div>
        </div>
    )
}