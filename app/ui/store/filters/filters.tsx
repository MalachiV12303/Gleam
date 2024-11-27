import React from 'react'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/app/lib/searchParams'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from '@nextui-org/react'
import { notFound } from 'next/navigation'

export function Filters({ it }: { it: string }) {
    const filters = new Map<string, string[]>();
    switch (it) {
        case 'cam':
            filters.set('types', ['DSLR', 'Mirrorless'])
            filters.set('brands', ['Canon', 'Nikon', 'Sony', 'Panasonic'])
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
                <TypeFilter types={filters.get('types')} />
            </AccordionItem>
            <AccordionItem key="brands" aria-label="brands" title="brands">
                <BrandFilter filters={filters.get('brands')} />
            </AccordionItem>
        </Accordion>
    )
}

function TypeFilter({ types }: { types: string[] | undefined }) {
    const [type, setType] = useQueryState('type', searchParams.type.withOptions({ shallow: false }))
    return (
        <CheckboxGroup
            aria-label="type"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            color="primary"
            value={type}
            onValueChange={setType}
        >
            {types?.map((type) => (
                <Checkbox key={type} value={type}>{type}</Checkbox>
            ))}
        </CheckboxGroup>
    )
}

function BrandFilter({ filters }: { filters: string[] | undefined }) {
    const [brands, setBrands] = useQueryState('brands', searchParams.brands.withOptions({ shallow: false }))
    return (
        <CheckboxGroup
            aria-label="brands"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            color="primary"
            value={brands}
            onValueChange={setBrands}
        >
            {filters?.map((brand) => (
                <Checkbox key={brand} value={brand}>{brand}</Checkbox>
            ))}
        </CheckboxGroup>
    )
}