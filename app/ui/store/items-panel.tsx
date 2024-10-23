'use client';

import {
  CameraType,
} from '@/app/lib/definitions';
import { StoreItem } from '@/app/ui/store/storeitem'

export default function ItemsPanel({
  query,
}: {
  query: CameraType[];
}) {
  return (
      <div className="mt-4 w-full h-full no-scrollbar snap-y snap-mandatory overflow-scroll">
        <div>
        {query.map((item) => (
          <div key={item.name}>
            <StoreItem item={item}/>
          </div>
          ))}
        </div>
        <div className="h-[74vh]"></div>
      </div>
  );
}
