'use client';
import {
  CameraType,
} from '@/app/lib/definitions';
import { StoreItem } from '@/app/ui/store/storeitem'

export default async function CameraList({
  query,
}: {
  query: CameraType[];
}) {
  console.log(query);
  return (
    <div className="w-full h-10">
      {query?.map((camera) => (
        <div>
          <StoreItem item={camera}/>
        </div>
        ))}
    </div>
  );
}
