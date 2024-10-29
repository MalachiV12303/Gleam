import clsx from 'clsx';
import React from "react";
import { parseAsBoolean, useQueryState } from 'nuqs';

export function LenseFilters() {
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

    const [sigma, setSigma] = useQueryState('sigma',
        parseAsBoolean.withOptions({
            startTransition,
            shallow: false
        }).withDefault(false));

    const [tamron, setTamron] = useQueryState('tamr',
        parseAsBoolean.withOptions({
            startTransition,
            shallow: false
        }).withDefault(false));

        if (isLoading) return <div>Loading...</div>
        
    return (
        <>
            <div className="flex-col">
                <div className="p-2">
                    <p>brand</p>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': canon })}>
                        <button
                            onClick={() =>
                                setCanon(!canon)}>
                            Canon
                        </button>
                    </label>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': nikon })}>
                        <button
                            onClick={() => setNikon(!nikon)}>
                            Nikon
                        </button>
                    </label>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': sony })}>
                        <button
                            onClick={() => setSony(!sony)}>
                            Sony
                        </button>
                    </label>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': pana })}>
                        <button
                            onClick={() => setPana(!pana)}>
                            Panasonic
                        </button>
                    </label>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': sigma })}>
                        <button
                            onClick={() => setSigma(!sigma)}>
                            Sigma
                        </button>
                    </label>
                    <label
                        className={clsx('ml-4 flex py-1', { 'opacity-50 line-through': tamron })}>
                        <button
                            onClick={() => setTamron(!tamron)}>
                            Tamron
                        </button>
                    </label>
                </div>
            </div>
        </>
    );
}