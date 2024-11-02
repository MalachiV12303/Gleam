

import { raleway } from "@/app/ui/fonts"
import AerialItem from "@/app/ui/item/aerialitem";
import { CameraItem } from "@/app/ui/item/cameraitem";
import LenseItem from "@/app/ui/item/lenseitem";
import React, { Suspense } from 'react';
import { fetchCamera } from "../lib/data";
import { notFound } from "next/navigation";
import { searchParamsCache } from "../lib/searchParams";
import { SearchParams } from "nuqs/server";

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const itemtype = searchParamsCache.parse(await searchParams).itemtype;
    const id=searchParamsCache.parse(await searchParams).id;

    if(id===null || id===undefined){
        return notFound();
    }
    const cam = await fetchCamera(id);
    function displayItem(){
        if(itemtype === "cam")
            return <Suspense><CameraItem item = {cam}/></Suspense>
        else if(itemtype === "len")
            return <LenseItem/>
        else if(itemtype === "aer")
            return <AerialItem/>
        else
            return null;
    }


    return (
        <>  
            <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12 max-h-screen`}>
                <div className="p-4">
                        {displayItem()}
                </div>
            </div>
        </>
    );


}

