import React from 'react';
import SearchBar from '../ui/searchbar';
import FiltersPanel from '../ui/store/filters/filters-panel';
import { inc } from "@/app/ui/fonts"
import { searchParamsCache } from '@/app/lib/searchParams';
import { ItemTypeSelector } from '../ui/store/filters/itemtype-switch';
import { fetchCameras, fetchLenses } from '../lib/db/queries';
import { ItemsPanel } from '../ui/store/catalogue/items-panel';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import { LoadingAnim } from '../ui/animations';
import { FilterChips } from '../ui/store/filters/filters-chips';


type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const { itemtype } = searchParamsCache.parse(await searchParams)
    const [items] = await f();
    const count = items?.length | 0;
    function f() {
        switch (itemtype) {
            case "cam":
                return Promise.all([fetchCameras()])
            case "len":
                return Promise.all([fetchLenses()])
            default:
                return [];
        }
    }

    return (

        <div className={`${inc.className} flex-col mx-auto w-full sm:w-11/12 md:w-10/12`}>
            <div className="flex p-4">
                <SearchBar />
            </div>
            <div id="store" className="flex flex-col sm:flex-row max-h-[50dvh] sm:max-h-[70dvh]">
                <div className="basis-1/3">
                    <Suspense>
                        <ItemTypeSelector />
                    </Suspense>
                    <Suspense>
                        <FiltersPanel itemtype={itemtype} />
                    </Suspense>
                </div>
                <div className="basis-2/3">
                    <div className="opacity-80 px-4 h-6 flex gap-2 items-center">
                        <p className='text-nowrap'>{count === null ? "0 found..." : count + " items found"}</p>
                        <FilterChips />
                    </div>
                    <Suspense fallback={<LoadingAnim />}>
                        <ItemsPanel items={items} />
                    </Suspense>
                </div>

            </div>
        </div>
    );
}