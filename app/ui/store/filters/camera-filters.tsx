import clsx from 'clsx'
import React from "react"
import { parseAsBoolean, useQueryState } from 'nuqs'

export function CameraFilters() {
  const [isLoading, startTransition] = React.useTransition()

  const [canon, setCanon] = useQueryState('canon',
    parseAsBoolean.withOptions({
      startTransition,
      shallow: false
    }).withDefault(false));

  const [nikon, setNikon] = useQueryState('nikon',
    parseAsBoolean.withOptions({
      startTransition,
      shallow: false
    }).withDefault(false));

  const [sony, setSony] = useQueryState('sony',
    parseAsBoolean.withOptions({
      startTransition,
      shallow: false
    }).withDefault(false));

  const [pana, setPana] = useQueryState('pana',
    parseAsBoolean.withOptions({
      startTransition,
      shallow: false
    }).withDefault(false));

    if (isLoading) return <div>loading...</div>

  return (
    <>
        <div className="p-2">
          <p>brand</p>
          <label
            className={clsx('ml-4 flex sm:py-1', { 'opacity-50 line-through': canon })}>
            <button
              onClick={() =>
                setCanon(!canon)}>
              Canon
            </button>
          </label>
          <label
            className={clsx('ml-4 flex sm:py-1', { 'opacity-50 line-through': nikon })}>
            <button
              onClick={() => setNikon(!nikon)}>
              Nikon
            </button>
          </label>
          <label
            className={clsx('ml-4 flex sm:py-1', { 'opacity-50 line-through': sony })}>
            <button
              onClick={() => setSony(!sony)}>
              Sony
            </button>
          </label>
          <label
            className={clsx('ml-4 flex sm:py-1', { 'opacity-50 line-through': pana })}>
            <button
              onClick={() => setPana(!pana)}>
              Panasonic
            </button>
          </label>
        </div>
    </>
  );
}