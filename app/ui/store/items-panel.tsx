'use client';
import {
  CameraType,
} from '@/app/lib/definitions';
import { StoreItem } from '@/app/ui/store/storeitem'

export default async function ItemPanel({
  query,
}: {
  query: CameraType[];
}) {
  return (
    <div className="w-full h-full overflow-y-scroll">
      {query?.map((item) => (
        <div>
          <StoreItem item={item}/>
        </div>
        ))}
    </div>
  );
}
