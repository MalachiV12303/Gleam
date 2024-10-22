
import { CameraType, LenseType } from "@/app/lib/definitions";

export function StoreItem({ item }: { item: CameraType | LenseType ;}){
    const isCamera = (value: CameraType | LenseType): value is CameraType => {
        return true;
    };
    
    if(isCamera(item)){
        return(
            <>
                <p>
                    Camera Type Item
                </p>
                <div>
                    {item.name}
                    {item.brand}
                    {item.value}
                    {item.id}
                </div>
            </>
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