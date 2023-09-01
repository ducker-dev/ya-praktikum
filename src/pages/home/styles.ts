import styled from '@emotion/styled'

import { Container } from 'shared/ui/components'

export const HPContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HPImagesWrapper = styled('div')(props => {
  const {
    theme: { breakpoints },
  } = props

  return {
    display: 'grid',
    gap: '3.2rem',
    gridTemplateColumns: '1fr 1fr',

    [`${breakpoints.s.media.down}`]: {
      gridTemplateColumns: '1fr',
    },
  }
})

export const HPOldImageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
})

export const HPCurrentImageWrapper = styled('div')(props => {
  const {
    theme: { breakpoints },
  } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    marginTop: '12rem',

    [`${breakpoints.s.media.down}`]: {
      marginTop: '0',
      flexDirection: 'column-reverse',
    },
  }
})

export const HPImg = styled('img')({
  maxWidth: '100%',
  height: '40rem',
  objectFit: 'cover',
})

export const HPVideo = styled('iframe')({
  height: '500px',
  border: 'none',
})
