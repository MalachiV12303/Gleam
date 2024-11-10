'use client'

import React from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(false)
  return (
    <div className="flex gap-4">
      <Switch
        defaultSelected
        isSelected={isSelected}
        classNames={{
          wrapper: "bg-primary",
          thumb: "bg-background",
          startContent:"ml-[1px]",
          endContent: "text-background mr-[1px]",
        }}
        onValueChange={(e) => {
          setIsSelected(e)
          setTheme(isSelected ? 'darker' : 'lighter')
        }}
        size="md"
        startContent={<span>☾</span>}
        endContent={<span>☼</span>}
      />
    </div>
  )
}