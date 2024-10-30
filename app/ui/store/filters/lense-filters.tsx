import clsx from 'clsx';
import React from "react";
import { parseAsBoolean, useQueryState } from 'nuqs';

export function LenseFilters() {
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

    const [sigma, setSigma] = useQueryState('sigma',
        parseAsBoolean.withOptions({
            shallow: false
        }).withDefault(false));

    const [tamron, setTamron] = useQueryState('tamr',
        parseAsBoolean.withOptions({
            shallow: false
        }).withDefault(false));

    return (
        <>
                <div className="mx-4 flex gap-8">
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
                    <label
                        className={clsx('flex sm:py-1', { 'opacity-50 line-through': sigma })}>
                        <button
                            onClick={() => setSigma(!sigma)}>
                            sigma
                        </button>
                    </label>
                    <label
                        className={clsx('flex sm:py-1', { 'opacity-50 line-through': tamron })}>
                        <button
                            onClick={() => setTamron(!tamron)}>
                            tamron
                        </button>
                    </label>
                    </div>
                </div>
        </>
    );
}