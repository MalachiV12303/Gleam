"use client";

import clsx from "clsx";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null
  return (
    <div className="flex gap-6">
      <div className={clsx("flex rounded-full	justify-center w-6 h-6 bg-background", { "bg-foreground text-background": theme === 'darker' })}><button onClick={() => setTheme('lighter')}><span>☼</span></button></div>
      <div className={clsx("flex rounded-full	justify-center w-6 h-6 bg-background", { "bg-foreground text-background": theme === 'lighter' })}><button onClick={() => setTheme('darker')}><span>☾</span></button></div>
    </div>
  )
};