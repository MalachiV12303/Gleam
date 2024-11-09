import clsx from 'clsx'
import React from 'react'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/app/lib/searchParams'

export function CameraFilters() {

  const [ type , setType] = useQueryState('type', 
    searchParams.type.withOptions({
      shallow: false
    }))
  const [canon, setCanon] = useQueryState('canon',
    searchParams.canon.withOptions({
      shallow: false
    }));
  const [nikon, setNikon] = useQueryState('nikon',
    searchParams.nikon.withOptions({
      shallow: false
    }))
  const [sony, setSony] = useQueryState('sony',
    searchParams.sony.withOptions({
      shallow: false
    }))
  const [pana, setPana] = useQueryState('pana',
    searchParams.pana.withOptions({
      shallow: false
    }))

  return (
    <>
      <div className="flex gap-8">
        <div>
          <p className="hidden underline sm:block">type</p>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': type === 'dslr' })}>
            <button
              onClick={() => {if(type==="dslr"){
                setType(null)
              }else{
                setType("dslr")
              }
                }}>
              digi
            </button>
          </label>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': type === 'mir' })}>
            <button
              onClick={() => {if(type==="mir"){
                setType(null)
              }else{
                setType("mir")
              }
                }}>
              mirlss
            </button>
          </label>
        </div>
        <div>
          <p className="hidden underline sm:block">brand</p>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': canon })}>
            <button
              onClick={() =>
                setCanon(!canon)}>
              canon
            </button>
          </label>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': nikon })}>
            <button
              onClick={() => setNikon(!nikon)}>
              nikon
            </button>
          </label>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': sony })}>
            <button
              onClick={() => setSony(!sony)}>
              sony
            </button>
          </label>
          <label
            className={clsx('flex sm:py-1', { 'opacity-50 line-through': pana })}>
            <button
              onClick={() => setPana(!pana)}>
              panasonic
            </button>
          </label>
        </div>
      </div>
    </>
  );
}