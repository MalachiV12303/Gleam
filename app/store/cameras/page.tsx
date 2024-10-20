import { fetchCameras } from '@/app/lib/data';
import ItemList from '@/app/ui/store/itemlist';

export default async function Page() {
    const cameras = await fetchCameras();
    return(
        <div>
            <p>Store Page</p>
            <ItemList 
                cameras={cameras}/>
        </div>
    );
}