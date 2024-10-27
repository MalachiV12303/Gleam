import {
  createParser,
  createSearchParamsCache,
  createSerializer,
  parseAsBoolean,
  parseAsString
} from 'nuqs/server'
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const searchParams = {
  itemtype: parseAsString.withDefault("camera"),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false),
}

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  itemtype: parseAsString.withDefault("cam"),
  canon: parseAsBoolean.withDefault(false),
  nikon: parseAsBoolean.withDefault(false),
  sony: parseAsBoolean.withDefault(false),
  pana: parseAsBoolean.withDefault(false)
})


export const serialize = createSerializer(searchParams)