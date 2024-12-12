'use client'
import { useFilters } from "@/app/lib/searchParams";
import { Chip, ScrollShadow } from "@nextui-org/react";

export function FilterChips() {
    const [{ type, brand, res, shutter, mgp, minfl, maxfl }, setFilters] = useFilters();

    const test = [type, brand, res, shutter, mgp, minfl, maxfl]
    const i = ['type', 'brand', 'res', 'shutter', 'mgp', 'minfl', 'maxfl']


    const handleClose = (fil: string, remove: string, index: number,) => {
        setFilters({ [fil]: test[index].filter(item => item !== remove) });
    };
    return (
        <ScrollShadow hideScrollBar orientation='horizontal' className="w-[900px] h-full overflow-x-auto flex gap-1 items-center">
            {test.map((fil, index) =>
            (fil.map((f) => (
                <Chip classNames={{ base: 'h-5' }} size="sm" key={index} variant="flat" onClose={() => handleClose(i[index], f, index)}>
                    {f}
                </Chip>
            ))))}
        </ScrollShadow>
    )
}

{/* <ScrollShadow hideScrollBar orientation="horizontal" className="w-[400px] no-scrollbar overflow-x-auto flex flex-row"></ScrollShadow> */}