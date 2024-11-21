import React from 'react'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/app/lib/searchParams'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from '@nextui-org/react'

export function LenseFilters() {
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
                    <Checkbox value="Telephoto Zoom">Telephoto Zoom</Checkbox>
                    <Checkbox value="Standard Prime">Standard Prime</Checkbox>
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
                  <Checkbox value="Canon">Canon</Checkbox>
                  <Checkbox value="Nikon">Nikon</Checkbox>
                  <Checkbox value="Sony">Sony</Checkbox>
                  <Checkbox value="Pana">Panasonic</Checkbox>
                  <Checkbox value="Tamron">Tamron</Checkbox>
                  <Checkbox value="Sigma">Sigma</Checkbox>
                </CheckboxGroup>
        
              </AccordionItem>
            </Accordion>
            </>
          )
    
    
}