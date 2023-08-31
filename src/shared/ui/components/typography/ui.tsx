import { FC } from 'react'

import * as S from './styles'
import { ITypographyProps } from './types'

export const Typography: FC<ITypographyProps> = props => {
  const {
    children,
    variant = 't_15_regular',
    as = 'div',
    color = 'secondary_8',
    uppercase = false,
    center = false,
    ...rest
  } = props

  return (
    <S.Typography
      variant={variant}
      as={as}
      color={color}
      center={center}
      uppercase={uppercase}
      {...rest}
    >
      {children}
    </S.Typography>
  )
}

export const TypographyWithProps =
  (styleProps: ITypographyProps) => (attrProps: ITypographyProps) =>
    <Typography {...styleProps} {...attrProps} />
