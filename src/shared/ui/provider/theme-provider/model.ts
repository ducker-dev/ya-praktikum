import { createEvent, createStore, sample } from 'effector'

import { ETheme } from './types'

// consts

// stores
const $theme = createStore<ETheme>(ETheme.light, { name: '$theme' })

// events
const setTheme = createEvent<ETheme>('setTheme')
const toggleTheme = createEvent('toggleTheme')

// effects

// samples
sample({
  clock: setTheme,
  target: $theme,
})

sample({
  clock: toggleTheme,
  fn: () => ($theme.getState() === ETheme.light ? ETheme.dark : ETheme.light),
  target: $theme,
})

// exports
export const stores = {
  $theme,
}
export const events = {
  setTheme,
  toggleTheme,
}
