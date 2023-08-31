import styled from '@emotion/styled'

import { TTextCustomization } from './types'

export const Typography = styled('div')<
  {
    m?: TTextCustomization
    s?: TTextCustomization
    xs?: TTextCustomization
  } & TTextCustomization
>(props => {
  const {
    theme: { texts, colors, breakpoints },
    variant,
    m,
    s,
    xs,
    color,
    center,
    uppercase,
  } = props

  const getTypographyStyles = (
    props: TTextCustomization,
  ): Record<string, string | number> => {
    const { variant, color, center, uppercase } = props

    return {
      ...(variant !== undefined ? texts[variant] : {}),
      ...(color !== undefined ? { color: colors[color] } : {}),
      ...(center !== undefined ? { textAlign: center ? 'center' : 'initial' } : {}),
      ...(uppercase !== undefined
        ? { textTransform: uppercase ? 'uppercase' : 'initial' }
        : {}),
    }
  }

  return {
    ...getTypographyStyles({ variant, color, center, uppercase }),
    ...(m
      ? {
          [breakpoints.m.media.down]: getTypographyStyles(m),
        }
      : {}),
    ...(s
      ? {
          [breakpoints.s.media.down]: getTypographyStyles(s),
        }
      : {}),
    ...(xs
      ? {
          [breakpoints.xs.media.down]: getTypographyStyles(xs),
        }
      : {}),
  }
})
