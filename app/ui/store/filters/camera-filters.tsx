import clsx from 'clsx'
import React from 'react'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { searchParams } from '@/app/lib/searchParams'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Radio, RadioGroup } from '@nextui-org/react'

export function CameraFilters() {
  const [type, setType] = useQueryState('type', searchParams.type.withOptions({ shallow: false }))
  const [brands, setBrands] = useQueryState('brands', searchParams.brands.withOptions({ shallow: false }))

  return (
    <>
    <Accordion isCompact={true}>
      <AccordionItem key="type" aria-label="type" title={"type " + type.map((t)=>(t))}>

        <CheckboxGroup
            aria-label="type"
            size="sm"
            classNames={{ wrapper: "text-background" }}
            value={type}
            onValueChange={setType}
          >
            <Checkbox value="dslr">Digital</Checkbox>
            <Checkbox value="mir">Mirrorless</Checkbox>
        </CheckboxGroup>

      </AccordionItem>
      <AccordionItem key="brands" aria-label="brands" title="brands">

      <CheckboxGroup
          aria-label="brands"
          size="sm"
          classNames={{ wrapper: "text-background" }}
          color="primary"
          value={brands}
          onValueChange={setBrands}
        >
          <Checkbox value="canon">Canon</Checkbox>
          <Checkbox value="nikon">Nikon</Checkbox>
          <Checkbox value="sony">Sony</Checkbox>
          <Checkbox value="pana">Panasonic</Checkbox>
        </CheckboxGroup>

      </AccordionItem>
    </Accordion>
    </>
  )
}