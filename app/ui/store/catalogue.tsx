import {
  Camera,
} from '@/app/lib/definitions';
import { Item } from '@/app/ui/store/item'

export default function CameraCatalogue({
  cameras,
}: {
  cameras: Camera[];
}) {
  return (
    <div className="w-full">
      <h1 className={`mb-8 text-xl md:text-2xl`}>
        Catalogue
      </h1>
      <div>
        {cameras?.map((camera) => (
          <div key={camera.id}>
              <Item id={camera.id} name={camera.name} brand={camera.brand} price={camera.price}/>
          </div>
        ))}
      </div>
    </div>
  );
}
