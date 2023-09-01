import styled from '@emotion/styled'

import { Container } from 'shared/ui/components'

export const Footer = styled('div')(props => {
  const {
    theme: { colors },
  } = props

  return {
    width: '100%',
    backgroundColor: colors.slices_back,
  }
})

export const FContent = styled(Container)(props => {
  const {
    theme: {
      breakpoints: { l },
    },
  } = props

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: l.footerHeight,
  }
})
