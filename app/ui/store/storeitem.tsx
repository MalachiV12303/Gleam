import { formatCurrency } from '@/app/lib/utils';
import { CameraType, LenseType } from "@/app/lib/definitions";

export function StoreItem({ item }: { item: CameraType | LenseType ;}){
    const isCamera = (value: CameraType | LenseType): value is CameraType => {
        return true;
    };
    let formattedValue=formatCurrency(item.value ?? '0');
    if(isCamera(item)){
        return(
            <div className="snap-start m-4 flex">
                <div className="flex-1">
                    <label className="text-base underline">{item.name} - {item.type}</label>
                    <p className="text-sm"> Megapixels: {item.megapixels}</p>
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