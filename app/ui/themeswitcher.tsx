"use client"

import { Switch } from "@nextui-org/react"
import {useTheme} from "next-themes"
import React from "react"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null
  return (
    <div className="flex gap-4">
        <Switch
        defaultSelected
        isSelected={isSelected}
        classNames={{
          wrapper: "bg-primary",
          thumb: "bg-background",
          endContent: "text-background mr-[5px]",
        }}
        onValueChange={(e) => {
          setIsSelected(e)
          isSelected ? setTheme("darker") : setTheme("lighter")
        }}
        size="lg"
        startContent={<span>☾</span>}
        endContent={<span>☼</span>}
      >
      </Switch>
    </div>
  )
};