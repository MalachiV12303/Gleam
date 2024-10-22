'use client';

import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';

export default function FiltersPanel({ filters }: { filters: string[];}) {
  let router = useRouter();
  let [activeFilters, setActiveFilters] = useOptimistic(filters);
  let [isPending, startTransition] = useTransition();

  function updateFilters(filters: string[]) {
    let newParams = new URLSearchParams(
      filters.map((filter) => ["filter", filter])
    );
    startTransition(() => {
      setActiveFilters(filters);
      router.push(`?${newParams}`);
    });
  }

  const FILTERS=["DSLR","Mirrorless", "Canon", "Nikon", "Sony", "Panasonic"];

  return (
    <>
    <p>Filters</p>
    <div className="flex gap-6 sm:block overflow-y-scroll">
      {FILTERS.map((filter) => (
        <label
          key={filter}
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <input
            checked={activeFilters.includes(filter)}
            onChange={(e) => {
              let { name, checked } = e.target;
              let newFilters = checked
                ? [...activeFilters, name]
                : activeFilters.filter((g) => g !== name);
              updateFilters(newFilters);
            }}
            name={filter}
            type="checkbox"
            className="accent-blue-500"
          />
          {filter}
        </label>
        
      ))}
    </div>
    </>
  );
}
