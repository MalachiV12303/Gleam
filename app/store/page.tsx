import { Suspense } from 'react';
import styles from '@/app/ui/animations.module.css';
import FiltersPanel from '@/app/ui/store/filters-panel';

import { inc } from "@/app/ui/fonts"
import React from 'react';
import { searchParamsCache } from '@/app/lib/searchParams';
import { ItemTypeSelector } from '../ui/store/filters/itemtype-filters';
import SearchBar from '../ui/store/searchbar';
import { fetchCameras, fetchLenses } from '../lib/db/queries';
import { ItemsPanel } from '../ui/store/items-panel';
import { SearchParams } from 'nuqs/server';

 type PageProps = {
    searchParams: Promise<SearchParams>
  }

export default async function Page({ searchParams }: PageProps) {
    const { itemtype } = searchParamsCache.parse(await searchParams)
    const [ items ] = await f();
    const count = items?.length | 0 ;
    function f(){
        switch (itemtype){
            case "cam":
                return Promise.all([fetchCameras()])
            case "len":
                return Promise.all([fetchLenses()])
            default:
                return [];
        }
    }

    return (
        <>
            <div className="w-screen">
                <div className={`${inc.className} flex-col mx-auto w-full sm:w-11/12 md:w-10/12`}>
                    <div className="p-4">
                        <SearchBar />
                    </div>
                    <div id="store" className="flex flex-col sm:flex-row max-h-[50dvh] sm:max-h-[72dvh] ">
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
