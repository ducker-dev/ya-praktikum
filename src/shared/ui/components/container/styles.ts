import styled from '@emotion/styled'

import { TBreakpoints, TBreakpointsKeys } from 'shared/ui/theme'

import { IContainerProps } from './types'

const createAdaptive = (breakpoints: TBreakpoints) => {
  const bpsKeys = Object.keys(breakpoints)
  let styles = {}

  bpsKeys.forEach((breakpoint, index) => {
    const activeBpKey = breakpoint as TBreakpointsKeys
    const activeBp = breakpoints[activeBpKey]
    const base = {
      maxWidth: `calc(${activeBp.container} + (${activeBp.indents} * 2))`,
      paddingRight: activeBp.indents,
      paddingLeft: activeBp.indents,
    }

    if (index === 0) {
      styles = base
    } else {
      if (index === bpsKeys.length - 1) {
        styles = {
          ...styles,
          [activeBp.media.down]: base,
          [activeBp.media.between]: base,
        }
      } else {
        styles = {
          ...styles,
          [activeBp.media.between]: base,
        }
      }
    }
  })

  return styles
}

export const Container = styled('div')<IContainerProps>(props => {
  const { fluid, theme } = props

  return {
    width: '100%',
    position: 'relative',
    height: 'inherit',
    minHeight: 'inherit',

    ...(fluid
      ? {
          maxWidth: '100%',
          padding: `0 3.2rem`,
        }
      : {
          margin: '0 auto',
          ...createAdaptive(theme.breakpoints),
        }),
  }
})
