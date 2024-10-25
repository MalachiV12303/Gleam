import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { Suspense } from 'react';
import { fetchFilteredCameras } from '@/app/lib/data';
import { ptsans } from "@/app/ui/fonts"
import React from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const params = Array.isArray(searchParams.filter)
        ? searchParams.filter
        : searchParams.filter
            ? [searchParams.filter]
            : [];

    const cameras = await fetchFilteredCameras(params);
    return (
        <>
            <div className={`${ptsans.className} flex-col mx-auto w-9/12 mt-[4rem] max-h-screen`}>
                <div className="p-3">
                    search placeholder
                </div>
                <div id="store" className="flex max-h-[68vh] gap-8">
                    <div className="basis-1/4 ">
                        <FiltersPanel params={params} />
                    </div>
                    <div className="basis-3/4">
                        <Suspense fallback={<div>loading...</div>}>
                            <ItemsPanel query={cameras} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}