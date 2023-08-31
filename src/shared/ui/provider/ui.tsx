import { ThemeProvider } from './theme-provider'
import { IUIProviderProps } from './types'

export const UIProvider = (props: IUIProviderProps) => {
  const { children } = props

  return <ThemeProvider>{children}</ThemeProvider>
}
