import { formatCurrency } from '@/app/lib/utils';
import { CameraType, LenseType } from "@/app/lib/definitions";
import Link from 'next/link';
import { serialize } from '@/app/lib/searchParams';

export function StoreItem({ item }: { item: CameraType | LenseType;}){
    const isCamera = (value: CameraType): value is CameraType => {
        return true;
    };
    
    const formattedValue=formatCurrency(item.value ?? '0');

    if(isCamera(item)){
        return(
            <div className="snap-start m-4 flex">
                <Link href={`/item/${item.id}`} className="flex-1">
                    <p className="text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs sm:text-sm">{item.megapixels} megapixels</p>
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