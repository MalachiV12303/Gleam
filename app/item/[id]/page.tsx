
import { raleway } from "@/app/ui/fonts"
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <div className={`${raleway.className} flex-col mx-auto w-full sm:w-9/12 mt-12 sm:mt-16 max-h-screen`}>
                <div className="p-4">
                    Item Screen
                </div>
            </div>
        </>
    );


}

