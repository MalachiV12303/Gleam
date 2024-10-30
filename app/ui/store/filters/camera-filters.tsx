import clsx from 'clsx'
import React from "react"
import { parseAsBoolean, parseAsString, useQueryState } from 'nuqs'

export function CameraFilters() {
  const [ type , setType] = useQueryState('type', 
    parseAsString.withOptions({
      shallow: false
    }).withDefault(''))
  const [canon, setCanon] = useQueryState('canon',
    parseAsBoolean.withOptions({
      shallow: false
    }).withDefault(false));
  const [nikon, setNikon] = useQueryState('nikon',
    parseAsBoolean.withOptions({
      shallow: false
    }).withDefault(false));
  const [sony, setSony] = useQueryState('sony',
    parseAsBoolean.withOptions({
      shallow: false
    }).withDefault(false));
  const [pana, setPana] = useQueryState('pana',
    parseAsBoolean.withOptions({
      shallow: false
    }).withDefault(false));

  return (
    <>
      <div className="mx-4 flex gap-8">
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
              digital
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
              mirrorless
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