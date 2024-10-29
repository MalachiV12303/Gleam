import { Suspense } from 'react';

import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { fetchFilteredCameras, fetchSearchedItems } from '@/app/lib/data';
import { ptsans } from "@/app/ui/fonts"
import React from 'react';

import { type SearchParams } from 'nuqs/server';
import { searchParamsCache } from '@/app/lib/searchParams';
import { TypeSelector } from '../ui/store/filters/itemtype-filters';
import SearchBar from '../ui/store/searchbar';

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const { search, itemtype, canon, nikon, sony, pana } = searchParamsCache.parse(await searchParams)
    let items=null;
    if(itemtype==="cam"){
        items = await fetchFilteredCameras(search, canon, nikon, sony, pana);
    }
    if(search!==''){
        items= await fetchSearchedItems(search);
    }

    return (
        <>
            <div className={`${ptsans.className} flex-col mx-auto w-9/12 mt-[4rem] max-h-screen `}>
                <div className="p-3">
                    <SearchBar />
                </div>
                <div id="store" className="flex flex-col sm:flex-row max-h-[70vh]">
                    <div className="basis-1/4 h-full">
                        <Suspense>
                            <TypeSelector />
                        </Suspense>
                        <Suspense>
                            <FiltersPanel it={itemtype}/>
                        </Suspense>
                    </div>
                    <div className="basis-3/4">
                        <Suspense fallback={<div>loading...</div>}>
                            <ItemsPanel items={items} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}

// async function TypeViewer() {
//     const { type } = searchParamsCache.all()
//     return (
//         <div className="bg-blue-700">
//             type: {type}
//             cameratype: {}
//         </div>
//     );
// }
