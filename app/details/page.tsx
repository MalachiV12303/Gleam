import { CameraPage } from '@/app/ui/details/camerapage';
import React from 'react';
import { searchParamsCache } from '../lib/searchParams';
import { SearchParams } from 'nuqs/server';
import { fetchCameras, fetchLenses } from '../lib/db/queries';
import { LensePage } from '@/app/ui/details/lensepage';
import { Camera, Lense } from '../lib/db/schema';
import { isCamera, isLense } from '../lib/utils';
import { ScrollProgress } from '../ui/details/scrollprogress';
import { list } from '@vercel/blob';

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    let count = 0;
    const id = searchParamsCache.parse(await searchParams).id;
    const category = searchParamsCache.parse(await searchParams).category;
    const [ items ] = await fetchItems(category)

    async function allImages() {
        const blobs = await list();
        return blobs;
    }
    const images = await allImages();

    function findImage(searchTerm: string){
        const matchingImageBlobs = images.blobs.filter(blob => 
          blob.pathname.includes(searchTerm)
        )
        // Return the first matching image blob (if any)
        return matchingImageBlobs.length > 0 ? matchingImageBlobs[0] : null
    }

    const matchingIdItem = items.find((i) => i.id===id)
    const displayedItems = items.filter((item)=>item.id!==id)
    function fetchItems(type: string) {
        switch (type) {
            case 'cam':
                return Promise.all([fetchCameras()])
            case 'len':
                return Promise.all([fetchLenses()])
            default:
                return []
        }
    }
    
    async function displayItem(item: Camera | Lense, index: number) {
        if (isCamera(item))
            return <CameraPage cam={item} index={index} image={findImage(item.id)}/>
        else if (isLense(item))
            return <LensePage len={item} index={index} image={findImage(item.id)}/>
        else
            return <div>unknown item error</div>;
    }

    return (
        <>  
            {matchingIdItem? displayItem(matchingIdItem, count += 1) : undefined}
            {displayedItems.map((item) => (displayItem(item, count += 1)))}
            <ScrollProgress />
        </>
    )
}

