import React from 'react'
import FiltersPanel from '../ui/store/filters/filters-panel'
import { searchParamsCache } from '@/app/lib/searchParams'
import { fetchCameras, fetchLenses } from '../lib/db/queries'
import { ItemsPanel } from '../ui/store/catalogue/items-panel'
import { SearchParams } from 'nuqs/server'
import { FilterChips } from '../ui/store/filters/filters-chips'
import { getAllImages } from '../lib/utils'

type PageProps = {
    searchParams: Promise<SearchParams>
}

// async - performs database queries
export default async function Page({ searchParams }: PageProps) {
    const { category } = searchParamsCache.parse(await searchParams)
    const [ items ] = await fetchItems(category)
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
        <>  
            <div id='storeContainer' className='h-full relative max-w-[1600px] flex flex-col mx-auto scrollbar items-center px-4 sm:py-8'>
                    {/* <Suspense fallback={<Spinner />}>
                        <SearchBar className="text-base flex-1" />
                    </Suspense> */}
                    <div id='topLayer' className='bg-background sticky sm:relative top-0 w-full flex py-2 px-4 justify-between border-b-1 border-foreground'>
                        {/* <div id='countRow' className='w-full sm:w-3/4 flex justify-between items-center py-1 sm:py-0'> */}
                            <p className='text-nowrap'>{count === null ? '0 found...' : count + ' items found'}</p>
                            <div className='hidden sm:flex w-full overflow-auto no-scrollbar' ><FilterChips sz={'sm'} /></div>
                            <div className='flex sm:hidden items-center'>
                                <FiltersPanel contentClassname={'w-[65dvw]'} itemtype={category} type={'mobile'} />
                            </div>
                        {/* </div> */}
                    </div>
                    
                <div id="filtersAndItems" className="w-full py-4 relative sm:flex-none overflow-auto no-scrollbar flex flex-row">
                    <div className="relative hidden sm:inline-block w-1/3 md:w-1/4 h-fit">
                        <FiltersPanel itemtype={category} type={'desktop'} />
                    </div>
                    <ItemsPanel items={items} images={await getAllImages()} />
                </div>
            </div>
        </>
    )
}