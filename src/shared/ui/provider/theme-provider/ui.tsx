import { ThemeProvider as ThemeProviderImpl } from '@emotion/react'
import { useStore } from 'effector-react'
import { FC, useCallback, useEffect } from 'react'

import { darkTheme, lightTheme } from 'shared/ui/theme'

import { events, stores } from './model'
import { ETheme, ThemeProvidersProps } from './types'
import { getLocalStorageTheme } from './utils'

export const ThemeProvider: FC<ThemeProvidersProps> = props => {
  const { children } = props

  const { $theme } = stores
  const { setTheme } = events
  const theme = useStore($theme)

  const handleSetTheme = useCallback(
    (isDarkThemeMq: boolean) => {
      const savedTheme = getLocalStorageTheme()

      if (savedTheme && savedTheme === ETheme.system) {
        setTheme(isDarkThemeMq ? ETheme.dark : ETheme.light)
      } else {
        setTheme(savedTheme)
      }
    },
    [setTheme],
  )

  const mqListener = useCallback(
    (e: any) => {
      handleSetTheme(e.matches)
    },
    [handleSetTheme],
  )

  useEffect(() => {
    const savedTheme = getLocalStorageTheme()

    if (savedTheme === ETheme.system) {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      handleSetTheme(darkThemeMq.matches)
      darkThemeMq.addEventListener('change', mqListener)

      return () => darkThemeMq.removeEventListener('change', mqListener)
    } else {
      handleSetTheme(savedTheme === ETheme.dark)
    }
  }, [setTheme, mqListener, handleSetTheme])

  return (
    <ThemeProviderImpl theme={theme === ETheme.light ? lightTheme : darkTheme}>
      {children}
    </ThemeProviderImpl>
  )
}
