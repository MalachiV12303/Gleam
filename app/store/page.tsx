import { Suspense } from 'react';
import styles from '@/app/ui/animations.module.css';
import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { fetchCameras, fetchLenses } from '@/app/lib/data';
import { inc } from "@/app/ui/fonts"
import React from 'react';
import { type SearchParams } from 'nuqs/server';
import { parseAsSliderValue, searchParamsCache } from '@/app/lib/searchParams';
import { ItemTypeSelector } from '../ui/store/filters/itemtype-filters';
import SearchBar from '../ui/store/searchbar';

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const { search, price, type, itemtype, canon, nikon, sony, pana } = searchParamsCache.parse(await searchParams)
    let items = null
    let count = null
    if (itemtype === "cam") {
        items = await fetchCameras( search, parseAsSliderValue.serialize(price), type, canon, nikon, sony, pana );
        count = items?.length;
    }
    else if (itemtype === 'len') {
        items = await fetchLenses( search, type, canon, nikon, sony, pana );
        count = items?.length;
    }


    return (
        <>
            <div className="w-screen">
                <div className={`${inc.className} flex-col mx-auto w-full sm:w-11/12 md:w-10/12`}>
                    <div className="p-4">
                        <SearchBar />
                    </div>
                    <div id="store" className="flex flex-col sm:flex-row max-h-[75dvh]">
                        <div className="basis-1/4">
                            <Suspense>
                                <ItemTypeSelector />
                            </Suspense>
                            <div className="opacity-75 px-2 py-1">{count === null? "0 found..." : count + " items found"}</div>
                            <Suspense>
                                <FiltersPanel type={itemtype} />
                            </Suspense>
                        </div>
                        <div className="basis-3/4">
                        
                            <Suspense fallback={loadingAnim()}>
                                <ItemsPanel items={items} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    function loadingAnim() {
        return (
            <>
                <div className={`${styles.spinnerbox} mx-auto`}>
                    <div className={`${styles.configureborder1} bg-foreground`}>
                        <div className={`${styles.configurecore} bg-background`}></div>
                    </div>
                    <div className={`${styles.configureborder2} bg-foreground`}>
                        <div className={`${styles.configurecore} bg-background`}></div>
                    </div>
                </div>
            </>);
    }
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
