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
    const [items] = await fetchItems(itemtype)
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
        <div id='storeContainer' className={`${inc.className} mx-auto w-10/12 h-[88dvh]`}>
            <div id='searchContainer' className='p-4'><SearchBar /></div>
            <div id='topLayer' className='flex flex-col sm:flex-row'>
                <div id='typeSelector' className='w-full sm:w-1/4'><ItemTypeSelector /></div>
                <div id='countRow' className='w-full sm:w-3/4 flex justify-between items-center py-1 sm:py-0'>
                    <p className='text-nowrap px-4'>{count === null ? '0 found...' : count + ' items found'}</p>
                    <div className='hidden sm:inline-block'><FilterChips /></div>
                    <div className='flex sm:hidden items-center'>
                        <FiltersPanel itemtype={itemtype} type={'mobile'} />
                    </div>
                </div>
            </div>
            <div id="filtersAndItems" className="flex flex-col sm:flex-row max-w-full max-h-[70dvh] border-t-1 border-foreground">
                <div className="hidden sm:inline-block w-1/4">
                    <FiltersPanel itemtype={itemtype} type={'desktop'} />
                </div>
                <div className="w-full sm:w-3/4 relative">
                    <ItemsPanel items={items} />
                </div>
            </div>
        </div>
    )
}