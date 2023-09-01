import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = props => {
  const {
    variant = 'simple_outline',
    color = 'secondary_8',
    size = '1',
    to,
    toExternal,
    children,
    linkCss,
    disabled,
    ...others
  } = props

  const button = (
    <S.Button variant={variant} color={color} size={size} disabled={disabled} {...others}>
      <S.ButtonBody>{children}</S.ButtonBody>
    </S.Button>
  )

  if (to && !disabled) {
    return (
      <Link css={linkCss} to={to}>
        {button}
      </Link>
    )
  }

  if (toExternal && !disabled) {
    return (
      <Link css={linkCss} to={toExternal} target='_blank'>
        {button}
      </Link>
    )
  }

  return button
}
