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
    <div className="mt-4 w-full h-full no-scrollbar snap-y snap-mandatory overflow-scroll">
      {query?.map((item) => (
        <div>
          <StoreItem item={item}/>
        </div>
        ))}
    </div>
  );
}
