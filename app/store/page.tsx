import { fetchCameras } from '@/app/lib/data';
import CameraCatalogue from '@/app/ui/store/catalogue';

export default async function Page() {
    const cameras = await fetchCameras();
    return(
        <div>
            <p>Store Page</p>
            <CameraCatalogue 
                cameras={cameras}/>
        </div>
    );
}