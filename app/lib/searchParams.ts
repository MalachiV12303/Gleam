import {  type SliderValue } from '@nextui-org/slider';
import {
  createParser,
  createSearchParamsCache,
  createSerializer,
  parseAsBoolean,
  parseAsString
} from 'nuqs/server'
// import from 'nuqs/server' to avoid the "use client" directive

export const parseAsSliderValue = createParser({
  parse(queryValue) {
    const inBetween = queryValue.split(',')
    const isValid = inBetween.length === 2 && inBetween !== undefined
    if (!isValid) {
      return null
    }
    return <SliderValue>([parseFloat(inBetween[0]), parseFloat(inBetween[1])]);
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
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])), // defaults are not working properly
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
  price: parseAsSliderValue.withDefault(<SliderValue>([0, 3000])), // defaults are not working properly
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false),
  sigma: parseAsBoolean.withDefault(false),
  tamr: parseAsBoolean.withDefault(false),
})

export const serialize = createSerializer(searchParams)