import { formatCurrency } from '@/app/lib/utils'
import { CameraDetail, LenseDetail } from '@/app/lib/definitions'
import Link from 'next/link'

export function StoreItem({ item }: { item: CameraDetail | LenseDetail }) {
    const formattedValue = formatCurrency(item.value ?? '0')
    const params = new URLSearchParams()
    params.set("id", item.id)

    if ("megapixels" in item) {
        params.set("itemtype", "cam")
        return (
            <Link href={`/item?${params}`} className="flex snap-start mx-3 my-4 sm:mx-5 sm:my-3 w-full justify-between">
                <div>
                    <div className="text-sm sm:text-base">{item.name} - {item.brand}</div>
                    <div className="text-sm opacity-75 flex gap-4">
                        <p>{item.megapixels} megapixels</p>
                        <p>{item.res}p</p> 
                    </div>
                    <div className="text-sm opacity-75">
                        <p className="lowercase">{item.type === 'DSLR' ? "digital" : "mirrorless"}</p></div>
                    </div>
                <div>
                    <div className="text-sm">{formattedValue}</div>
                </div>
            </Link>
        )
    } else if ("minfl" in item) {
        params.set("itemtype", "len")
        return (
            <Link href={`/item?${params}`} className="flex snap-start m-4">
                <div className="basis-3/4">
                    <div className="text-sm sm:text-base">{item.name}</div>
                    <div className="text-xs opacity-75">{item.type}</div>
                    <div className="text-xs opacity-75">{item.brand}</div>
                    <div className="text-xs opacity-75">{item.minfl}</div>
                    <div className="text-xs opacity-75">{item.maxfl}</div>
                </div>
                <div className="basis-1/4 flex justify-end">
                    <div className="text-xs sm:text-sm">{formattedValue}</div>
                </div>
            </Link>
        )
    }
    else {
        return (
            <>
                <div>
                    unknown item type
                </div>
            </>
        )
    }


}