import { FC } from 'react'

import * as S from './styles'
import { IGridProps } from './types'

export const Grid: FC<IGridProps> = props => {
  const {
    children,
    gridTemplateColumns,
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    gap = '0rem',
    ...others
  } = props

  return (
    <S.Grid
      gridTemplateColumns={gridTemplateColumns}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...others}
    >
      {children}
    </S.Grid>
  )
}
