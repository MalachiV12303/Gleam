'use client'
import { CameraFilters } from './filters/camera-filters';
import { LenseFilters } from './filters/lense-filters';

export default function FiltersPanel({
  it,
}: {
  it: string | null;
}) {
  function selectFilters( i : string | null ){
    switch(i){
      case "cam":
        return <CameraFilters />
      case "len":
        return <LenseFilters />
      default:
        return <div className="flex w-full h-48 justify-center items-center"><p>aerial filters in progress...</p></div>
    }
  }
  return (
    <>
    <div className="text-sm flex-col mt-2 sm:mt-4">
      {selectFilters(it)}
    </div>
    </>
  );
}
