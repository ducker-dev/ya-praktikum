import { blurs } from './consts/blurs'
import { breakpoints } from './consts/breakpoints'
import { darkColors, lightColors } from './consts/colors'
import { fonts } from './consts/fonts'
import { gradients } from './consts/gradients'
import { darkShadows, lightShadows } from './consts/shadows'
import { texts } from './consts/texts'
import { transitions } from './consts/transitions'
import { weights } from './consts/weights'

export const lightTheme = {
  colors: lightColors,
  gradients,
  blurs,
  shadows: lightShadows,
  fonts,
  weights,
  texts,
  transitions,
  breakpoints,
}

export const darkTheme: typeof lightTheme = {
  ...lightTheme,
  colors: darkColors,
  shadows: darkShadows,
}

export type TTheme = typeof lightTheme
export type TColorsKeys = keyof typeof lightColors
export type TGradientsKeys = keyof typeof gradients
export type TBlursKeys = keyof typeof blurs
export type TShadowsKeys = keyof typeof lightShadows
export type TFontsKeys = keyof typeof fonts
export type TWeightsKeys = keyof typeof weights
export type TTextsKeys = keyof typeof texts
export type TTransitionsKeys = keyof typeof transitions
export type TBreakpoints = typeof breakpoints
export type TBreakpointsKeys = keyof TBreakpoints
