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
    <div className="w-full max-h-full overflow-y-auto scrollbar">
      <div className="h-full">
        {query.map((item) => (
          <div key={item.name}>
            <StoreItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
