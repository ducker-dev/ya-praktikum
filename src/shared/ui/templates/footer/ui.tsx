import { Button, Flex, Typography } from 'shared/ui/components'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FContent>
        <Flex flexDirection='column' alignItems='flex-end' gap='0.4rem'>
          <Typography variant='t_13_medium'>По всем вопросам</Typography>
          <Button
            variant='text_empty'
            color='accent_1'
            toExternal='https://t.me/ducker_dev/'
          >
            ducker_dev
          </Button>
        </Flex>
      </S.FContent>
    </S.Footer>
  )
}
