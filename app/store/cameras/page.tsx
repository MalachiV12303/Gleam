import ItemsPanel from '@/app/ui/store/items-panel';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { Suspense } from 'react';
import { fetchCameras, fetchFilteredCameras } from '@/app/lib/data';

export default async function Page({
    params,
    searchParams,
}: {
    params: string;
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let one = params;
    let filters = Array.isArray(searchParams.filter)
        ? searchParams.filter
        : searchParams.filter
            ? [searchParams.filter]
            : [];
    let cameras = await fetchFilteredCameras(filters);
    return (
        <>
            <div className="flex-col mx-auto w-9/12 mt-[4rem] max-h-screen content-center">
                <div id="store" className="flex h-[60vh] gap-8">
                    <div className="basis-1/4 ">
                        <FiltersPanel filters={filters} />
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