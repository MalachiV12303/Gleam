
import { raleway } from "@/app/ui/fonts"
import CameraItem from "@/app/ui/item/cameraitem";
import React from 'react';

export default function Page( params : {id: string}) {
    function displayItem(id : string){
        return <CameraItem/>
    }

    return (
        <>  
            <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12 mt-12 sm:mt-16 max-h-screen`}>
                <div className="p-4">
                    {params.id}
                </div>
            </div>
        </>
    );


}

