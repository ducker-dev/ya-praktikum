import styled from '@emotion/styled'

import { Container } from 'shared/ui/components'

export const JSGPContainer = styled(Container)(() => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
