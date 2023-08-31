import { FC } from 'react'

import * as S from './styles'
import { IContainerProps } from './types'

export const Container: FC<IContainerProps> = props => {
  const { children, ...others } = props
  return <S.Container {...others}>{children}</S.Container>
}
