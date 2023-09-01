import styled from '@emotion/styled'

export const Layout = styled('div')<{
  hiddenHeader: boolean
}>(props => {
  const {
    theme: {
      breakpoints: { l },
    },
    hiddenHeader,
  } = props

  return {
    ...(!hiddenHeader && {
      paddingTop: l.headerHeight,
    }),
  }
})

export const LContent = styled('div')<{
  hiddenHeader: boolean
  hiddenFooter: boolean
}>(props => {
  const {
    theme: {
      breakpoints: { l, s },
    },
    hiddenHeader,
    hiddenFooter,
  } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    minHeight: `calc(100vh ${hiddenHeader ? `` : `- ${l.headerHeight}`} ${
      hiddenFooter ? `` : `- ${l.footerHeight}`
    })`,

    [s.media.down]: {
      minHeight: `calc(100vh ${hiddenHeader ? `` : `- ${l.headerHeight}`})`,
    },
  }
})
