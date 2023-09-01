import styled from '@emotion/styled'

import { Container } from 'shared/ui/components'

export const Header = styled('div')(props => {
  const {
    theme: { colors, blurs },
  } = props

  return {
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: colors.slices_back_80,
    backdropFilter: `blur(${blurs.b_1})`,
    zIndex: '1000',
  }
})

export const HContent = styled(Container)(props => {
  const {
    theme: {
      breakpoints: { l },
    },
  } = props

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.6rem',
    height: l.headerHeight,
  }
})
