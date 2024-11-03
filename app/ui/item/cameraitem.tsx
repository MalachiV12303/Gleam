'use client'

import { CameraDetail } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

export function CameraItem({ item }: { item: CameraDetail | undefined }) {
    if (item === undefined) {
        return notFound();
    }
    console.log(item.res)

    return (
        <>
            <div className="min-h-[78dvh] bg-opacity-5 flex p-8">
                <div className="basis-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-4xl">{item.name}</h1>
                        <h2 className="text-2xl">{item.brand}</h2>
                    </div>
                    <div className="flex flex-col">
                        <p>Resolution: {item.res}</p>
                        <p>Shutter: {item.shutter}</p>
                        <p>SD Card Compatibility: {item.sd}</p>
                        <p>Lens Compatibility: {item.lens}</p>
                    </div>
                    <div>
                        <p>Description:</p>
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>

                <div className="basis-1/2 flex flex-col items-end justify-center">
                    <p>{item.value}</p>
                    <label>
                        <button>
                            {"+"}
                        </button>
                    </label>
                </div>
            </div>
        </>
    )
}