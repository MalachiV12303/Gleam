"use client"

import { useQueryState } from 'nuqs';
import { CameraFilters } from './filters/camera-filters';
import { LenseFilters } from './filters/lense-filters';

export default function FiltersPanel() {
  const [itemtype, setItemType]=useQueryState("itemtype");

  function selectFilters(i : string | null){

    switch(i){
      case null:
        return <CameraFilters />
      case "len":
        return <LenseFilters />
      default:
        return <div className="m-4">{i} filter set is not found</div>
    }

  }
  return (
    <>
    {selectFilters(itemtype)}
    </>
  );
}
