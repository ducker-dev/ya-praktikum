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
    align,
    transform,
  } = props

  const getTypographyStyles = (
    props: TTextCustomization,
  ): Record<string, string | number> => {
    const { variant, color, align, transform } = props

    return {
      ...(variant !== undefined && texts[variant]),
      ...(color !== undefined && { color: colors[color] }),
      ...(align !== undefined && { textAlign: align }),
      ...(transform !== undefined && { textTransform: transform }),
    }
  }

  return {
    ...getTypographyStyles({ variant, color, align, transform }),
    ...(m && { [breakpoints.m.media.down]: getTypographyStyles(m) }),
    ...(s && { [breakpoints.s.media.down]: getTypographyStyles(s) }),
    ...(xs && { [breakpoints.xs.media.down]: getTypographyStyles(xs) }),
  }
})
