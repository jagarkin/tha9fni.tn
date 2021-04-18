import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode) => {
    localStorage.setItem('mode', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('mode')
    localTheme ? setTheme(localTheme) : setMode('light')
    setComponentMounted(true)
  }, []) // eslint-disabel-line

  return [theme, toggleTheme, componentMounted]
}
