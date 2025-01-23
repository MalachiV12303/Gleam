import React from 'react'
import SearchBar from '../ui/searchbar'
import FiltersPanel from '../ui/store/filters/filters-panel'
import { searchParamsCache } from '@/app/lib/searchParams'
import { fetchCameras, fetchLenses } from '../lib/db/queries'
import { ItemsPanel } from '../ui/store/catalogue/items-panel'
import { SearchParams } from 'nuqs/server'
import { FilterChips } from '../ui/store/filters/filters-chips'
import { CategorySwitch } from '../ui/categoryswitch'
import { list } from '@vercel/blob'

type PageProps = {
    searchParams: Promise<SearchParams>
}

// async - performs database queries
export default async function Page({ searchParams }: PageProps) {
    const { category } = searchParamsCache.parse(await searchParams)
    const [ items ] = await fetchItems(category)
    const count = items?.length | 0
    
    async function allImages() {
        const blobs = await list();
        return blobs;
    }
    const images = await allImages();

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
        <>
            <div id='storeContainer' className='h-full w-10/12 flex flex-col mx-auto pt-16 pb-4'>
            <SearchBar className={'p-2 lg:p-4'}/>
            <div id='topLayer' className='flex flex-col sm:flex-row '>
                <div className='w-full sm:w-1/4'><CategorySwitch /></div>
                <div id='countRow' className='w-full sm:w-3/4 flex justify-between items-center py-1 sm:py-0'>
                    <p className='text-nowrap px-4'>{count === null ? '0 found...' : count + ' items found'}</p>
                    <div className='hidden sm:flex w-full overflow-auto no-scrollbar' ><FilterChips sz={'sm'}/></div>
                    <div className='flex sm:hidden items-center'>
                        <FiltersPanel contentClassname={'w-[80dvw]'} itemtype={category} type={'mobile'} />
                    </div>
                </div>
            </div>
            <div id="filtersAndItems" className="overflow-auto no-scrollbar flex flex-col relative sm:flex-row max-w-full border-t-1 border-foreground">
                <div className="relative hidden sm:inline-block w-1/4 px-2 pt-1">
                    <FiltersPanel itemtype={category} type={'desktop'} />
                </div>
                <ItemsPanel items={items} images={images.blobs}/>
            </div>
            
            </div>
        </>
    )
}