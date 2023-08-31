import { FC } from 'react'

import * as S from './styles'
import { IFlexProps } from './types'

export const Flex: FC<IFlexProps> = props => {
  const {
    children,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    gap = '0rem',
    ...others
  } = props

  return (
    <S.Flex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...others}
    >
      {children}
    </S.Flex>
  )
}
