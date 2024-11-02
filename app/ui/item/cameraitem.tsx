'use client'

import { CameraDetail } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

export function CameraItem({ item }: { item: CameraDetail | undefined }) {
    if (item === undefined) {
        return notFound();
    }


    return (
        <>
            <div className="min-h-[78dvh] bg-opacity-5 flex p-8">
                <div className="basis-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl">{item.name}</h1>
                    <h2 className="text-2xl">{item.brand}</h2>
                    <div className="h-16"></div>
                    <p>Description</p>
                    <p>{"<-- in progress -->"}</p>
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