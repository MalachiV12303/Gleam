import { formatCurrency, isCamera, isLense } from '@/app/lib/utils'
import Link from 'next/link'
import { Camera, Lense } from '@/app/lib/db/schema'
import { notFound } from 'next/navigation'

export function StoreItem({ item }: { item: Camera | Lense }) {
    //type guards
    

    const formattedValue = formatCurrency(parseFloat(item.value) ?? 0)
    const params = new URLSearchParams()
    params.set("id", item.id.toString())
    
    if(isCamera(item))
        return Camera(item)
    else if (isLense(item))
        return Lense(item)
    else{
        return notFound();
    }

    //camera on store page
    function Camera( cam : Camera ){
        params.set("itemtype", "cam")
        return (
            <Link href={`/item?${params}`} className="flex snap-start mx-3 my-4 sm:mx-5 sm:my-3 w-full justify-between">
                <div>
                    <div className="text-sm sm:text-base">{cam.name} - {cam.brand}</div>
                    <div className="text-sm opacity-75 flex gap-4">
                        <p>{cam.megapixels} megapixels</p>
                        <p>{cam.res}</p> 
                    </div>
                    <div className="text-sm opacity-75">
                        <p className="lowercase">{cam.type === 'DSLR' ? "digital" : "mirrorless"}</p></div>
                    </div>
                <div>
                    <div className="text-sm">{formattedValue}</div>
                </div>
            </Link>
        )
    }

    //lense on store page
    function Lense( len : Lense ){
        params.set("itemtype", "len")
        return (
            <Link href={`/item?${params}`} className="flex snap-start mx-3 my-4 sm:mx-5 sm:my-3 w-full justify-between">
                <div>
                    <div className="text-sm sm:text-base">{len.name} - {len.brand}</div>
                    <div className="text-sm opacity-75 flex gap-4">
                        {/* <p>-fl {len.details.minfl}</p>
                        <p>+fl {len.details.maxfl}</p>
                        <p>max ap {len.details.maxap}</p>
                        <p>mounts {len.details.mount.join(', ')}</p>   */}
                    </div>
                    <div className="text-sm opacity-75">
                        <p className="lowercase">{len.type === 'Telephoto Zoom' ? "telephoto zoom" : "standard prime"}</p></div>
                    </div>
                <div>
                    <div className="text-sm">{formattedValue}</div>
                </div>
            </Link>
        )
    }
}