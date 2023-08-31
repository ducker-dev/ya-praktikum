import { ReactNode } from 'react'

export enum ETheme {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

export interface ThemeProvidersProps {
  children: ReactNode
}
