

import { raleway } from "@/app/ui/fonts"
import { CameraPage } from "@/app/ui/item/camerapage";
import React from 'react';
import { notFound } from "next/navigation";
import { searchParamsCache } from "../lib/searchParams";
import { SearchParams } from "nuqs/server";
import BackButton from "../ui/item/backbutton";
import { fetchCameraById, fetchLenseById } from "../lib/db/queries";
import LensePage from "@/app/ui/item/lensepage";

type PageProps = {
    searchParams: Promise<SearchParams>
}

export default async function Page({ searchParams }: PageProps) {
    const itemtype = searchParamsCache.parse(await searchParams).itemtype;
    const id = searchParamsCache.parse(await searchParams).id;

    async function displayItem() {
        if (itemtype === "cam") 
            return <CameraPage cam={await fetchCameraById(id)} />
        else if (itemtype === "len") 
            return <LensePage len={await fetchLenseById(id)} />
        else
            return notFound();
    }

    return (
        <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12 max-h-screen`}>
            <div className="p-4">
                <div className="flex">
                    <BackButton />
                    <p className="m-4 ml-24 text-center text-danger">item pages in progress</p>
                </div>
                
                {displayItem()}
            </div>
        </div>
    )
}

