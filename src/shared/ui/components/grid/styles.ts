import styled from '@emotion/styled'

import { IGridProps } from './types'

export const Grid = styled('div')<IGridProps>(props => {
  const { gridTemplateColumns, justifyContent, alignItems, gap } = props

  return {
    display: 'grid',
    gridTemplateColumns,
    justifyContent,
    alignItems,
    gap,
  }
})
