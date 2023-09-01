import { Footer, Header } from 'shared/ui/templates'

import * as S from './styles'
import { ILayoutProps } from './types'

export const MainLayout = (props: ILayoutProps) => {
  const { children, hiddenHeader = false, hiddenFooter = false, ...others } = props

  return (
    <S.Layout hiddenHeader={hiddenHeader} {...others}>
      {!hiddenHeader && <Header />}
      <S.LContent hiddenHeader={hiddenHeader} hiddenFooter={hiddenFooter}>
        {children}
      </S.LContent>
      {!hiddenFooter && <Footer />}
    </S.Layout>
  )
}
