import { iCurImgSrc, iOldImgSrc } from 'pages/home/assets'

import { MainLayout } from 'widgets/layouts'

import { Button, Flex, Typography } from 'shared/ui/components'

import * as S from './styles'

export const HomePage = () => {
  return (
    <MainLayout>
      <S.HPContainer>
        <Flex
          flexDirection='column'
          justifyContent='center'
          gap='6.4rem'
          padding='3.2rem 0'
        >
          <Typography variant='t_40_extraBold'>Познакомимся?</Typography>
          <Flex flexDirection='column' gap='4rem'>
            <Typography variant='t_32_extraBold'>Мои фотокарточки</Typography>
            <S.HPImagesWrapper>
              <S.HPOldImageWrapper>
                <S.HPImg src={iOldImgSrc} alt='Я в прошлом' />
                <Typography variant='t_15_regular'>
                  Это я творил магию в школе чародейства и волшебства
                </Typography>
              </S.HPOldImageWrapper>
              <S.HPCurrentImageWrapper>
                <S.HPImg src={iCurImgSrc} alt='Я сейчас' />
                <Typography variant='t_15_regular'>
                  А это я уже семьянин с дочкой, 2-мя котами и потрясным шоколадным
                  собакеном
                </Typography>
              </S.HPCurrentImageWrapper>
            </S.HPImagesWrapper>
          </Flex>
          <Flex flexDirection='column' gap='4rem'>
            <Typography variant='t_32_extraBold'>Как я пришел к жизни такой?</Typography>
            <Typography variant='t_15_regular'>
              Если кратко то в 8 классе я искал заработок на просторах интернета и как-то
              мне попалась статья о создании сайтов и заработке на размещении в них
              рекламы, рекламу я так и не начал размещать, но основы сайтостроения я
              выучил, потом экзамены, университет, свадьба и в один момент я понял, что
              хочу чего-то большего и начал ходить собеседования и мне приглянулась удача,
              я попал в свою первую компанию где мы делали web-симуляторы и именно там я
              по настоящему влюбился в программирование, я постоянно совершенствовался,
              придумывал какие-то интересные фишки для новых проектов, интересные
              анимации, более сложная верстка, улучшение качества архитектуры приложения и
              т.д. В итоге я полностью с 0 дошел до уровня среднего миддла в крупной
              компании, полностью на удаленке, с ЗП позволяющей жить так, как я и не
              мечтал тогда в 8 классе, такие дела :)
            </Typography>
          </Flex>
          <Flex flexDirection='column' gap='4rem'>
            <Typography variant='t_32_extraBold'>
              Исходники этого же приложения
            </Typography>
            <Button
              variant='text_empty'
              color='secondary_6'
              toExternal='https://github.com/ducker-dev/ya-praktikum'
            >
              https://github.com/ducker-dev/ya-praktikum
            </Button>
          </Flex>
          <Flex flexDirection='column' gap='4rem'>
            <Typography variant='t_32_extraBold'>
              Небольшое видео о прикольной фишке CSS
            </Typography>
            <S.HPVideo
              src='https://www.youtube.com/embed/ZM1myWoRp80?si=cXupCCVSXKB3vWJ1'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></S.HPVideo>
          </Flex>
        </Flex>
      </S.HPContainer>
    </MainLayout>
  )
}
