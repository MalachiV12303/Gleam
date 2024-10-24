import { formatCurrency } from '@/app/lib/utils';
import { CameraType } from "@/app/lib/definitions";

export function StoreItem({ item }: { item: CameraType;}){
    const isCamera = (value: CameraType): value is CameraType => {
        return true;
    };
    const formattedValue=formatCurrency(item.value ?? '0');
    if(isCamera(item)){
        return(
            <div className="snap-start m-4 flex">
                <div className="flex-1">
                    <label className="text-base">{item.name}</label>
                    <p className="text-sm">{item.megapixels} megapixels</p>
                    <p className="text-xs opacity-75"> #: {item.id}</p>
                </div>
                <div>
                    <p className="text-base">{formattedValue}</p>
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