import React, { FC } from 'react'

import * as S from './styles'
import { ITypographyProps } from './types'

export const Typography: FC<ITypographyProps> = props => {
  const {
    children,
    variant = 't_15_regular',
    as = 'div',
    color = 'secondary_8',
    transform = 'none',
    align = 'left',
    ...rest
  } = props

  return (
    <S.Typography
      variant={variant}
      as={as}
      color={color}
      align={align}
      transform={transform}
      {...rest}
    >
      {children}
    </S.Typography>
  )
}

export const TypographyWithProps =
  (styleProps: ITypographyProps) => (attrProps: ITypographyProps) =>
    <Typography {...styleProps} {...attrProps} />
