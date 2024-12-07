import { useFilters } from "@/app/lib/searchParams";
import { Chip } from "@nextui-org/react";

export function FilterChips() {
    const [{ type, brand, res, shutter, mgp, minfl, maxfl }, setFilters] = useFilters();

    const test = [ type, brand, res, shutter, mgp, minfl, maxfl ]
    const i = ['type', 'brand', 'res', 'shutter', 'mgp', 'minfl', 'maxfl']


    const handleClose = (fil: string, remove: string, index: number,) => {
        setFilters({ [fil]: test[index].filter(item => item !== remove) });
    };
    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {test.map((fil, index) =>
            (fil.map((f) => (
                <Chip key={index} variant="faded" onClose={() => handleClose(i[index], f, index)}>
                    {f}
                </Chip>
            ))))}
        </div>
    )
}