'use client';

import { RadioGroup, Radio } from "@nextui-org/radio";
import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';
import clsx from 'clsx';
import React from "react";

export default function FiltersPanel({ params }: { params: string[]; }) {
  const PRODUCTTYPES = ["camera", "lense", "aerial"]
  const CAMERATYPEFILTERS = ["DSLR", "Mirrorless"];
  const BRANDFILTERS = ["Canon", "Nikon", "Sony", "Panasonic"];

  const router = useRouter();
  const [activeFilters, setActiveFilters] = useOptimistic(params);
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = React.useState("camera");
  function updateFilters(filters: string[], key: string) {
    console.log("START OF UPDATE FILTERS")
    const newParams = new URLSearchParams(
      filters.map((filter) => [key, filter])
    );
    console.log("newParams: " + newParams);
    startTransition(() => {
      console.log("startTransition called\nsetActiveFilters(" + filters + ")")
      setActiveFilters(filters);
      router.push(`?${newParams}`);
    });
    console.log("filters: " + filters);
    console.log("active filters: " + activeFilters);
  }

  function FilterSet({ set }: { set: string[]; }) {
    return (
      <>
        {set.map((filter) => (
          <label
            key={filter}
            className={clsx(
              'ml-4 flex items-center py-1',
              {
                'opacity-50 line-through': activeFilters.includes(filter),
              }
            )}>
            <input
              checked={activeFilters.includes(filter)}
              onChange={(e) => {
                const { name, checked } = e.target;
                const newFilters = checked
                  ? [...activeFilters, name]
                  : activeFilters.filter((g) => g !== name);
                console.log("newFilters are: " + newFilters);
                updateFilters(newFilters, "filter");
              }}
              name={filter}
              type="checkbox"
              className="hidden"
            />
            {filter}
          </label>
        ))}
      </>
    )
  }

  return (
    <div className="mt-4">
      <div className="flex-col sm:block">

        <RadioGroup
          label="category"
          value={selected}
          onValueChange={setSelected}
        >
          {PRODUCTTYPES.map((state) => (
            <Radio checked={selected === "camera"} key={state} value={state}
              className={clsx(
                'ml-4 flex items-center py-1',
                {
                  'opacity-50 line-through': selected.includes(state),
                }
              )}>{state}-type</Radio>
          ))}
        </RadioGroup>
        <div className="pl-3">
          <p>type</p>
          <FilterSet set={CAMERATYPEFILTERS} />
        </div>
        <div className="pl-3">
          <p>brand</p>
          <FilterSet set={BRANDFILTERS} />
        </div>
      </div>
    </div>
  );
}
