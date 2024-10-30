import { Suspense } from 'react';
import styles from '@/app/ui/animations.module.css';

import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { fetchFilteredCameras, fetchSearchedItems } from '@/app/lib/data';
import { raleway } from "@/app/ui/fonts"
import React from 'react';

import { type SearchParams } from 'nuqs/server';
import { searchParamsCache } from '@/app/lib/searchParams';
import { TypeSelector } from '../ui/store/filters/itemtype-filters';
import SearchBar from '../ui/store/searchbar';

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const { search, type, itemtype, canon, nikon, sony, pana } = searchParamsCache.parse(await searchParams)
    let items = null;
    if (itemtype === "cam") {
        items = await fetchFilteredCameras(type, canon, nikon, sony, pana);
    }
    if (search !== '') {
        items = await fetchSearchedItems(search);
    }

    return (
        <>
            <div className="w-screen">
                <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12`}>
                    <div className="p-4">
                        <SearchBar />
                    </div>
                    <div id="store" className="flex flex-col sm:flex-row max-h-[68dvh]">
                        <div className="basis-1/4 h-full">
                            <Suspense>
                                <TypeSelector />
                            </Suspense>
                            <Suspense>
                                <FiltersPanel it={itemtype} />
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
