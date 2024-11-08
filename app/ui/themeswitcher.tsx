"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null
  return (
    <div className="flex gap-4">
      <button onClick={() => setTheme('lighter')}>☼</button>
      <button onClick={() => setTheme('darker')}>☾</button>
    </div>
  )
};