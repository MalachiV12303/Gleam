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
                    <Checkbox value="tpz">Telephoto Zoom</Checkbox>
                    <Checkbox value="stp">Standard Prime</Checkbox>
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
                  <Checkbox value="tamr">Tamron</Checkbox>
                  <Checkbox value="sigm">Sigma</Checkbox>
                </CheckboxGroup>
        
              </AccordionItem>
            </Accordion>
            </>
          )
    
    
}