import { formatCurrency } from '@/app/lib/utils'
import { ItemType } from '@/app/lib/definitions'
import Link from 'next/link'

export function StoreItem({ item }: { item: ItemType }){
    const formattedValue=formatCurrency(item.value ?? '0')
    const params = new URLSearchParams()
    params.set("id", item.id)

    const isCamera = (value: ItemType): value is ItemType => {
        return true
    }
    if(item.id.substring(0,1)==='c'){
        params.set("itemtype", "cam")
        return(
            <div className="snap-start m-4 flex">
                <Link href={`/item?${params}`} className="flex-1">
                    <p className="text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs opacity-75"> #: {item.id}</p>
                </Link>
                <div>
                    <p className="text-xs sm:text-sm">{formattedValue}</p>
                </div>
            </div>
        )
    }
    else if(item.id.substring(0,1)==='l'){
        params.set("itemtype", "len")
        return(
            <div className="snap-start m-4 flex">
                <Link href={`/item?${params}`} className="flex-1">
                    <p className="text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs opacity-75"> #: {item.id}</p>
                </Link>
                <div>
                    <p className="text-xs sm:text-sm">{formattedValue}</p>
                </div>
            </div>
        )
    }
    
    else{
        return(
            <>
                <div>
                    unknown item type
                </div>
            </>
        )
    }
    

}