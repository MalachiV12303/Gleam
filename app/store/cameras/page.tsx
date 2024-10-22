import CameraList from '@/app/ui/store/product-lists';
import FiltersPanel from '@/app/ui/store/filters-panel';
import { Suspense } from 'react';
import { fetchCameras, fetchFilteredCameras } from '@/app/lib/data';

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    let filters = Array.isArray(searchParams.filter)
    ? searchParams.filter
    : searchParams.filter
    ? [searchParams.filter]
    : [];
    let cameras=await fetchFilteredCameras(filters);
    console.log(cameras)
    return (
        <div>
            <FiltersPanel filters={filters}/>
            <Suspense fallback={<div>loading...</div>}>
                 <CameraList query={cameras}/>
            </Suspense>
        </div>
    );
}