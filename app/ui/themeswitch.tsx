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
    return <Spinner size='sm'/>
  }
  return (
    <Button
      variant='light'
      className='data-[hover=true]:bg-background bg-background text-foreground min-w-0 px-2 rounded-full h-7'
      onPress={() => {
        setIsSelected(!isSelected)
        setTheme(isSelected ? 'darker' : 'lighter')
      }}>
        {theme === 'lighter' ? 'lgt' : 'drk' }
    </Button>
  )
}