'use client'

import { Camera } from "@/app/lib/db/schema";
import { notFound } from "next/navigation";

export function CameraPage({ cam }: { cam: Camera }) {
    if (cam === undefined) {
        return notFound();
    }

    return (
        <>
            <div className="min-h-[78dvh] bg-opacity-5 flex p-8">
                <div className="basis-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-4xl">{cam.name}</h1>
                        <h2 className="text-2xl">{cam.brand}</h2>
                    </div>
                    <div className="flex flex-col">
                        <p>Resolution: {cam.res}</p>
                        <p>Shutter: {cam.shutter}</p>
                        <p>SD Card and Lens Compatibility: {cam.compats}</p>
                    </div>
                    <div>
                        <p>Description:</p>
                        <p className="text-sm">{cam.description}</p>
                    </div>
                </div>

                <div className="basis-1/2 flex flex-col items-end justify-center">
                    <p>{cam.value}</p>
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