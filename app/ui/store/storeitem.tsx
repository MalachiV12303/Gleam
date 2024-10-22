
import { CameraType, LenseType } from "@/app/lib/definitions";

export function StoreItem({ item }: { item: CameraType | LenseType ;}){
    const isCamera = (value: CameraType | LenseType): value is CameraType => {
        return true;
    };
    if(isCamera(item)){
        // console.log(item);
        return(
            <div className="p-4">
                <p className="">{item.name}</p>
                <p>{item.brand}</p> 
                <p>{item.value}</p>
                <p>{item.id}</p> 
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