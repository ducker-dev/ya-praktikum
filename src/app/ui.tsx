import { attachLogger } from 'effector-logger'

import { AppProvider } from './provider'
import { AppStyles } from './styles'

attachLogger()

export const App = () => {
  return (
    <AppProvider>
      <AppStyles />
      <div className='App'>Скоро здесь появится роутинг</div>
    </AppProvider>
  )
}
