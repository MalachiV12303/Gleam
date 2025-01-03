import { CameraPage } from "@/app/ui/item/camerapage";
import React from 'react';
import { notFound } from "next/navigation";
import { searchParamsCache } from "../lib/searchParams";
import { SearchParams } from "nuqs/server";
import { fetchCameras, fetchLenses } from "../lib/db/queries";
import LensePage from "@/app/ui/item/lensepage";
import { Camera, Lense } from "../lib/db/schema";
import { isCamera, isLense } from "../lib/utils";
import { ScrollProgress } from "../ui/item/scrollprogress";

type PageProps = {
    searchParams: Promise<SearchParams>
}
export default async function Page({ searchParams }: PageProps) {
    const itemtype = searchParamsCache.parse(await searchParams).itemtype;
    const id = searchParamsCache.parse(await searchParams).id;
    let count = 0;
    const [ items ] = await fetchItems(itemtype)
    const matchingIdItem = items.find((i) => i.id===id)
    const displayedItems = items.filter((item)=>item.id!==id)

    function fetchItems(type: string) {
        switch (type) {
            case "cam":
                return Promise.all([fetchCameras()])
            case "len":
                return Promise.all([fetchLenses()])
            default:
                return []
        }
    }
    
    async function displayItem(item: Camera | Lense, index: number) {
        if (isCamera(item))
            return <CameraPage cam={item} index={index}/>
        else if (isLense(item))
            return <LensePage len={item} />
        else
            return notFound();
    }

    return (
        <>
            {matchingIdItem? displayItem(matchingIdItem, count += 1) : undefined}
            {displayedItems.map((item) => (displayItem(item, count += 1)))}
            <ScrollProgress/>
        </>
    )
}

