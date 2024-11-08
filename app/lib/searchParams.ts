import { SliderValue } from '@nextui-org/slider';
import {
  createParser,
  createSearchParamsCache,
  createSerializer,
  parseAsBoolean,
  parseAsString
} from 'nuqs/server'
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const parseAsSliderValue = createParser({
  parse(queryValue) {
    const inBetween = queryValue.split(',')
    const isValid = inBetween.length === 2 && inBetween !== undefined
    if (!isValid) {
      return null
    }
    // if(inBetween[0]==='0' && inBetween[1]==='3000'){
    //   return <SliderValue>([0, 3000]);
    // }
    //console.log("inbetween0:\n"+parseInt(inBetween[0]) +"\ninbetween1:\n"+  parseInt(inBetween[1]))
    return <SliderValue>([parseInt(inBetween[0]), parseInt(inBetween[1])]);
  },
  serialize(value) {
    return value.toString()
  }
})

export const searchParams = {
  id: parseAsString.withDefault(''),
  search: parseAsString.withDefault(''),
  type: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault('cam'),
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false),
  sigma: parseAsBoolean.withDefault(false),
  tamr: parseAsBoolean.withDefault(false),
}

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  id: parseAsString.withDefault(''),
  search: parseAsString.withDefault(''),
  type: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault('cam'),
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false),
  sigma: parseAsBoolean.withDefault(false),
  tamr: parseAsBoolean.withDefault(false),
})



export const serialize = createSerializer(searchParams)