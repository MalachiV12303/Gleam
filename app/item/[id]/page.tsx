
import { raleway } from "@/app/ui/fonts"
import CameraItem from "@/app/ui/item/cameraitem";
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
    function displayItem(id : string){
        console.log(id)
        return <CameraItem/>
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

