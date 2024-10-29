import { Suspense } from 'react';

import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { fetchFilteredCameras } from '@/app/lib/data';
import { ptsans } from "@/app/ui/fonts"
import React from 'react';

import { type SearchParams } from 'nuqs/server';
import { searchParamsCache } from '@/app/lib/searchParams';
import { TypeSelector } from '../ui/store/filters/itemtype-filters';

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const { itemtype, canon, nikon, sony, pana } = searchParamsCache.parse(await searchParams)
    let items=null;
    if(itemtype==="cam"){
        items = await fetchFilteredCameras(canon, nikon, sony, pana);
    }

    return (
        <>
            <div className={`${ptsans.className} flex-col mx-auto w-9/12 mt-[4rem] max-h-screen`}>
                <div className="p-3">
                    Search: 
                </div>
                <div id="store" className="flex max-h-[68vh] gap-8">
                    <div className="basis-1/4 ">
                        <Suspense>
                            <TypeSelector />
                        </Suspense>
                        <Suspense>
                            <FiltersPanel />
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
