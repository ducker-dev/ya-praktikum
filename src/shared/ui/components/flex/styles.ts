import styled from '@emotion/styled'

import { IFlexProps } from './types'

export const Flex = styled('div')<IFlexProps>(props => {
  const { flexDirection, flexWrap, justifyContent, alignItems, gap } = props

  return {
    display: 'flex',
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    gap,
  }
})
