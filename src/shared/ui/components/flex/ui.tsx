import React, { FC } from 'react'

import * as S from './styles'
import { IFlexProps } from './types'

export const Flex: FC<IFlexProps> = props => {
  const { children, ...others } = props

  return <S.Flex {...others}>{children}</S.Flex>
}
