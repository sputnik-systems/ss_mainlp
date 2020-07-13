import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ParallaxItem from 'components/ParallaxItem'
import Text from 'components/Text'
import Button from 'components/Button'

import Image from 'components/Image'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Fade from 'components/Fade'
import heroVideo from 'assets/herovideo_web.mp4'
import { UilArrowRight } from '@iconscout/react-unicons'

import Container from 'components/Container'
import Video from 'components/Video'
import FeedbackWrapper from 'features/Feedback/FeedbackWrapper'
import VideoSection from 'features/Sputnik/VideoSection'
import SplitItem from 'features/SplitShow/SplitItem'

import appShowreel from 'assets/img/app_showreel.jpg'
// import sk from 'assets/img/sputnik_cropped.png'
import sk from 'assets/img/sk.jpg'
import { ReactComponent as IntercomLogo } from 'assets/intercomLogo.svg'
import { ReactComponent as SputnikIcon } from 'assets/svg/sputnikIcon.svg'

import eric from 'assets/eric.mov'
import eric2 from 'assets/eric2.mov'

const styles = {
  fullBlock: { gridColumn: '1/17' },
  leftBlock: { gridColumn: '1/8' },
  bigLeftBlock: { gridColumn: '1/9' },
  rightBlock: { gridColumn: '10/17' },
  bigRightBlock: { gridColumn: '9/17' },
  center: { gridColumn: '2/16' },
}

const persons = [
  {
    src: eric2,
    left: '10%',
    top: '5%',
    poster:
      'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    src: eric,
    left: '50%',
    top: '15%',
    poster:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    src: eric2,
    poster:
      'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    left: '2%',
    top: '85%',
  },
  {
    src: eric,
    left: '60%',
    top: '50%',
    poster:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80',
  },
  {
    poster:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    src: eric2,
    left: '70%',
    top: '25%',
  },
  {
    src: eric,
    left: '80%',
    top: '60%',
  },
  {
    src: eric,
    left: '66%',
    top: '75%',
    poster:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    src: eric,
    left: '90%',
    top: '28%',
    poster:
      'https://images.unsplash.com/photo-1559750965-99605627de70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    size: 150,
  },
]

export default function SputnikPage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      nav={
        <ProductNav
          left={
            <>
              <SputnikIcon
                style={{
                  height: '100%',
                  borderRadius: 'var(--br-l)',
                  width: 'auto',
                  padding: 'var(--spacing-s)',
                }}
              />
              Спутник Óдин
            </>
          }
          right={
            <Button variant="contained" color="primary">
              Заказать установку
            </Button>
          }
        />
      }
    >
      {/* <Container
        style={{
          height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',
        }}
        column="full"
        as="header"
      >
        <Video src={heroVideo} />
      </Container> */}

      <Container column="full">
        <Grid style={{ position: 'relative', alignItems: 'center' }}>
          <FeedbackWrapper persons={persons} />
          <Flex
            flexDirection="column"
            justifyContent="center"
            // style={{
            //   gridColumn: '2/9',
            //   height: '86vh',
            // }}
            column="heroLeft"
            height="86vh"
          >
            <Fade>
              <Text variant="h1" textAlign="left">
                Разработан для людей
              </Text>
              <Text variant="h5" color="textSecondary" pt="6">
                Народный домофон Спутник специально спроектирован для работы в
                обычных многоквартирных домах.
              </Text>
              <Text variant="h5" color="textSecondary">
                Невысокая стоимость домофона позволяет устанавливать его вместо
                аналоговых домофонов абсолютно во всех типах домов.
              </Text>

              <Button mt="6" mr="auto" variant="contained">
                Заказать установку
                <UilArrowRight />
              </Button>
            </Fade>
          </Flex>

          {/* <Flex
            style={{ height: 'calc(86vh - var(--spacing-l) * 2)' }}
            alignItems="center"
            justifyContent="center"
            column="heroRight"
          >
            <Image
              src={sk}
              style={{
                margin: 0,
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              height="100%"
            />
          </Flex> */}
        </Grid>
      </Container>

      <SplitItem height="98vh" src={sk} column="full" />
      {/* 
      <Container
        as="section"
        column="full"
        pb="7"
        style={{
          height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',
          position: 'relative',
        }}
      >
        <FeedbackWrapper />

        <Fade style={{ height: '100%' }}>
          <Flex flexDirection="column" justifyContent="center" height="100%">
            <Text variant="hero" fontSize="114px" color="primary">
              Разработан для людей
            </Text>
            <Text variant="h4" textAlign="center" color="textSecondary" pt="7">
              Народный домофон Спутник специально спроектирован для работы в
              обычных многоквартирных домах.
            </Text>
            <Text variant="h4" textAlign="center" color="textSecondary" pt="3">
              Невысокая стоимость домофона позволяет устанавливать его вместо
              аналоговых домофонов абсолютно во всех типах домов.
            </Text>
          </Flex>
        </Fade>
      </Container> */}

      <Grid
        style={{ position: 'relative' }}
        contained
        backgroundColor="background"
        as="section"
        column="full"
      >
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">Повышает безопасность</Text>
          <Text variant="h4">
            Домофон работает со специальными криптозащищенными ключами,
            существенно повышающими безопасность проживания в многоквартирных
            домах.
          </Text>

          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать подробнее
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>

      <VideoSection styles={styles} as="section" />
      {/* <Grid      column="full" contained backgroundColor="background">
        <Text color="textSecondary"      column="full">
          My wife and I now have peace of mind when we leave our kids at home to
          do a quick errand. Installation was easy. No more worries when we are
          expecting a package.
        </Text>
        <Text color="textSecondary" style={{ gridColumn: '14/17' }}>
          Joseph8 (verified customer)
        </Text>
      </Grid> */}

      <Grid contained column="full" as="section">
        <Flex flexDirection="column" column="full">
          <Text variant="h3" textAlign="center">
            Управляется через бесплатное мобильное приложение
          </Text>
          <Text variant="h4" textAlign="center" color="textSecondary">
            Вы можете принимать видеозвонки от гостей, а также открывать домофон
            тогда, когда вам это необходимо.
          </Text>
          <Button mt="6" mx="auto" variant="contained" color="subtle">
            Узнать больше
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>
      <SplitItem column="center" src={appShowreel} />

      <Grid
        style={{ position: 'relative' }}
        contained
        backgroundColor="background"
        as="section"
        column="full"
      >
        <Flex column="left" backgroundColor="subtleBackground" height="60vh" />
        <Flex flexDirection="column" column="bigRight" as="section">
          <Text variant="h3">Совместим с аналоговыми трубками</Text>
          <Text variant="h4">
            Работает со всеми существующими вариантами трубок домофона, вам не
            понадобится ничего менять.
          </Text>
          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать больше
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>

      <Grid column="full" contained backgroundColor="background" as="section">
        <Flex flexDirection="column" column="left">
          <Text variant="h3">Дружит с Алисой</Text>
          <Text variant="h4">
            Открывайте дверь гостям с помощью умной колонки «Алиса».
            Настраивайте домофон так, как вам это удобно, меняйте звуки открытия
            двери или устанавливайте режим тишины.
          </Text>
          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать больше
            <UilArrowRight />
          </Button>
        </Flex>

        <Flex
          column="bigRight"
          backgroundColor="subtleBackground"
          height="60vh"
        />
      </Grid>
    </ProductPageTemplate>
  )
}
