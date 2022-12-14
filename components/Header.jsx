import React, { useEffect, useState } from 'react'
import { Moon, Sun } from './Icons'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Header = () => {

  //react-theme
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const ThemeChangerClick = () => {

    if (!mounted) return null;

    if (theme === 'dark') {
      return (
        <p className='font-semibold flex items-center hover:cursor-pointer select-none' onClick={() => setTheme('light')}> <Sun /> Light mode</p>
      )
    } else {
      return (
        <p className='font-semibold flex items-center hover:cursor-pointer select-none' onClick={() => setTheme('dark')}> <Moon /> Dark mode</p>
      )
    }
  }

  return (
    <header className='py-4 dark:bg-[#2b3945] bg-[#ffffff] shadow-custze'>
      <div className='flex items-center justify-between w-[94%] m-auto'>
        <Link href='/'>
          <h1 className='text-lg font-bold select-none hover:cursor-pointer'>Where in the world?</h1>
        </Link>
        {ThemeChangerClick()}

      </div>
    </header>
  )
}

export default Header