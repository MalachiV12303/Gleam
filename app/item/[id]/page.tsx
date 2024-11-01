
'use client'

import { raleway } from "@/app/ui/fonts"
import AerialItem from "@/app/ui/item/aerialitem";
import CameraItem from "@/app/ui/item/cameraitem";
import LenseItem from "@/app/ui/item/lenseitem";
import { parseAsString, useQueryState } from "nuqs";
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const [ itemtype, setItemtype ] = useQueryState('itemtype', parseAsString.withDefault(''));

    function displayItem(id : string){
        if(itemtype === "cam")
            return <CameraItem/>
        else if(itemtype === "len")
            return <LenseItem/>
        else if(itemtype === "aer")
            return <AerialItem/>
        else
            return id;
    }
    
    const t=params.id.substring(0,1)
    if((params.id.length===9) && (t==='c' ||t==='l'||t==='a')){
        switch (t){
            case 'c':
                setItemtype('cam');
            case 'l':
                setItemtype('len');
            case 'a':
                setItemtype('aer');
            default:
                setItemtype(null);
        }
    }

    return (
        <>  
            <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12 mt-12 sm:mt-16 max-h-screen`}>
                <div className="p-4">
                    {displayItem(params.id)}
                </div>
            </div>
        </>
    );


}

