
import React from 'react'
import { useFilters } from '@/app/lib/searchParams'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from '@nextui-org/react'
import { notFound } from 'next/navigation'
import clsx from 'clsx'

export function Filters({ it }: { it: string }) {
    const [{ type, brand, res }] = useFilters()
    const filters = new Map<string, string[]>();
    switch (it) {
        case 'cam':
            filters.set('types', ['DSLR', 'Mirrorless'])
            filters.set('brands', ['Canon', 'Nikon', 'Sony', 'Panasonic'])
            filters.set('res', ['1080', '2160', '6144'])
            break;
        case 'len':
            filters.set('types', ['Telephoto Zoom', 'Standard Prime'])
            filters.set('brands', ['Canon', 'Nikon', 'Sony', 'Panasonic', 'Sigma', 'Tamron'])
            break;
        case 'aer':
            filters.set('types', ['in progress'])
            filters.set('brands', ['in progess'])
            break;
        default:
            return notFound();
    }
    return (
            <Accordion isCompact={true}>
                <AccordionItem key="type" aria-label="type" title="type">
                    <TypeFilter filters={filters.get('types')} param={type} />
                </AccordionItem>
                <AccordionItem key="brands" aria-label="brands" title="brands">
                    <BrandFilter filters={filters.get('brands')} param={brand} />
                </AccordionItem>
                <AccordionItem key="res" aria-label="res" title="res" className={clsx('', { 'hidden': !filters.has('res') })}>
                    <ResolutionFilter filters={filters.get('res')} param={res} />
                </AccordionItem>

            </Accordion>
    )
}


function TypeFilter({ filters, param }: { filters: string[] | undefined, param: string[] }) {
    const [, setFilters] = useFilters()
    return (
        <CheckboxGroup
            aria-label="type"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            color="primary"
            value={param}
            onValueChange={(e) => setFilters({type: e})}
        >
            {filters?.map((filter) => (
                <Checkbox key={filter} value={filter}>{filter}</Checkbox>
            ))}
        </CheckboxGroup>
    )
}

function BrandFilter({ filters, param }: { filters: string[] | undefined, param: string[] }) {
    const [, setFilters] = useFilters()
    return (
        <CheckboxGroup
            aria-label="brands"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            color="primary"
            value={param}
            onValueChange={(e) => setFilters({brand: e})}
        >
            {filters?.map((brand) => (
                <Checkbox key={brand} value={brand}>{brand}</Checkbox>
            ))}
        </CheckboxGroup>
    )
}


function ResolutionFilter({ filters, param }: { filters: string[] | undefined, param: string[] }) {
    const [, setFilters] = useFilters()
    return (
        <CheckboxGroup
            aria-label="res"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            color="primary"
            value={param}
            onValueChange={(e) => setFilters({res: e})}
        >
            {filters?.map((fil) => (
                <Checkbox key={fil} value={fil}>{fil}p</Checkbox>
            ))}
        </CheckboxGroup>
    )
}