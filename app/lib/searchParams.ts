import {
  createSearchParamsCache,
  createSerializer,
  parseAsBoolean,
  parseAsString
} from 'nuqs/server'
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const searchParams = {
  search: parseAsString.withDefault(''),
  type: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault('cam'),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false),
}

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  search: parseAsString.withDefault(''),
  type: parseAsString.withDefault(''),
  itemtype: parseAsString.withDefault("cam"),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false)
})

export const serialize = createSerializer(searchParams)