import {
  Camera,
} from '@/app/lib/definitions';
import { Item } from '@/app/ui/store/item'

export default function ItemList({
  cameras,
}: {
  cameras: Camera[];
}) {
  return (
    <div className="w-full">
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
