import { RoutersProvider } from 'shared/routes'
import { UIProvider } from 'shared/ui/provider'

import { IAppProviderProps } from './types'

export const AppProvider = (props: IAppProviderProps) => {
  const {} = props
  return (
    <UIProvider>
      <RoutersProvider />
    </UIProvider>
  )
}
