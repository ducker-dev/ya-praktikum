import { RoutersProvider } from 'shared/routes'
import { UIProvider } from 'shared/ui/provider'

import { AppStyles } from './styles'
import { IAppProviderProps } from './types'

export const AppProvider = (props: IAppProviderProps) => {
  const {} = props
  return (
    <UIProvider>
      <AppStyles />
      <RoutersProvider />
    </UIProvider>
  )
}
