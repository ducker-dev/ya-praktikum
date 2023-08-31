import { LOCAL_STORAGE_THEME } from './consts'
import { ETheme } from './types'

export const getLocalStorageTheme = (): ETheme => {
  return localStorage.getItem(LOCAL_STORAGE_THEME) as ETheme
}

export const setLocalStorageTheme = (newTheme: ETheme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
}
