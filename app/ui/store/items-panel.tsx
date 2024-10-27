'use client';

import {
  CameraType,
  LenseType,
  AerialType,
} from '@/app/lib/definitions';
import { StoreItem } from '@/app/ui/store/store-item'

export default function ItemsPanel({
  items,
}: {
  items: CameraType[] | LenseType[] | AerialType[] | null;
}) {
  return (
    <div className="w-full max-h-full overflow-y-auto scrollbar ">
      <div className="h-full">
        {
          items ? 
          items.map((item) => (
            <div key={item.name}>
              <StoreItem item={item} />
            </div>
          )) : <div className="m-4">returned items is null</div>
        }
      </div>
    </div>
  );
}


