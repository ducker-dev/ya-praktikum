import { attachLogger } from 'effector-logger'

import { AppProvider } from './provider'

attachLogger()

export const App = () => {
  return <AppProvider />
}
