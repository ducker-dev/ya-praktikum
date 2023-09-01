import React from 'react'

import { ROUTES } from 'shared/routes'
import { Button } from 'shared/ui/components'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.HContent>
        <Button variant='simple_outline' color='secondary_8' to={ROUTES.HOME}>
          Главная
        </Button>
        <Button variant='simple_outline' color='secondary_8' to={ROUTES.JS_GAME} disabled>
          JS Game
        </Button>
      </S.HContent>
    </S.Header>
  )
}
