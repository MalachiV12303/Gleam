'use client'
import React, { useEffect } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(theme === 'lighter' ? true : false)
  const [mounted, setMounted] = React.useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <Spinner size='sm' />
  }
  return (
    <Button
      variant='light'
      className='data-[hover=true]:bg-background bg-background text-foreground min-w-0 px-2 rounded-full h-7'
      onPress={() => {
        setIsSelected(!isSelected)
        setTheme(isSelected ? 'darker' : 'lighter')
      }}>
      {theme === 'lighter' ?
        <svg xmlns="http://www.w3.org/2000/svg" fill='black' viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>}
    </Button>
  )
}