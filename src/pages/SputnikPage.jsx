import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ParallaxItem from 'components/ParallaxItem'
import Text from 'components/Text'
import Link from 'components/Link'
import Button from 'components/Button'
import Image from 'components/Image'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import heroVideo from 'assets/herovideo_web.mp4'
import AngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b'

import { ReactComponent as IntercomLogo } from 'assets/intercomLogo.svg'
import Container from 'components/Container'
import Video from 'components/Video'
import FeedbackWrapper from 'features/Feedback/FeedbackWrapper'
import VideoSection from 'features/Sputnik/VideoSection'
import SplitItem from 'features/SplitShow/SplitItem'
import SplitShow from 'features/SplitShow'

import img3 from 'features/SplitShow/img3.jpeg'

const styles = {
  fullBlock: { gridColumn: '1/17' },
  leftBlock: { gridColumn: '1/8' },
  bigLeftBlock: { gridColumn: '1/9' },
  rightBlock: { gridColumn: '10/17' },
  bigRightBlock: { gridColumn: '9/17' },
  center: { gridColumn: '2/16' },
}

export default function SputnikPage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      nav={
        <ProductNav
          left={
            <Text
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              variant="h2"
              fontWeight="bold"
            >
              Народный домофон
            </Text>
          }
          right={
            <Button variant="contained" color="primary">
              Заказать установку
            </Button>
          }
        />
      }
    >
      <Container
        style={{
          ...styles.fullBlock,
          height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',
        }}
        as="header"
      >
        <Video src={heroVideo} />
      </Container>

      <Container as="section" style={styles.fullBlock} pb="7">
        <Text variant="hero" fontSize="114px">
          Разработан для людей
        </Text>
        <Text variant="h4" textAlign="center" color="textSecondary" pt="7">
          Народный домофон Спутник специально спроектирован для работы в обычных
          многоквартирных домах.
        </Text>
        <Text variant="h4" textAlign="center" color="textSecondary" pt="3">
          Невысокая стоимость домофона позволяет устанавливать его вместо
          аналоговых домофонов абсолютно во всех типах домов.
        </Text>
      </Container>
      {/* <SplitShow style={styles.fullBlock} /> */}

      <Grid
        style={{ ...styles.fullBlock, position: 'relative' }}
        contained
        backgroundColor="background"
        as="section"
      >
        <Flex backgroundColor="subtleBackground" height="60vh" />

        <Flex flexDirection="column" style={styles.rightBlock}>
          <Text variant="h3">Повышает безопасность</Text>
          <Text variant="h4">
            Домофон работает со специальными криптозащищенными ключами,
            существенно повышающими безопасность проживания в многоквартирных
            домах.
          </Text>
          <Link
            mt="5"
            color="primary"
            variant="cta"
            fontSize="3"
            textAlign="left"
            href="/"
          >
            Узнать подробнее
            <AngleRightB />
          </Link>
        </Flex>
        <FeedbackWrapper />
      </Grid>

      <VideoSection styles={styles} as="section" />
      {/* <Grid style={styles.fullBlock} contained backgroundColor="background">
        <Text color="textSecondary" style={styles.fullBlock}>
          My wife and I now have peace of mind when we leave our kids at home to
          do a quick errand. Installation was easy. No more worries when we are
          expecting a package.
        </Text>
        <Text color="textSecondary" style={{ gridColumn: '14/17' }}>
          Joseph8 (verified customer)
        </Text>
      </Grid> */}

      <Grid contained style={styles.fullBlock} as="section">
        <Flex flexDirection="column" style={styles.fullBlock}>
          <Text variant="h3" textAlign="center">
            Управляется через бесплатное мобильное приложение
          </Text>
          <Text variant="h4" textAlign="center" color="textSecondary">
            Вы можете принимать видеозвонки от гостей, а также открывать домофон
            тогда, когда вам это необходимо.
          </Text>
          <Link variant="cta" mx="auto" mt="5">
            Узнать больше
            <AngleRightB />
          </Link>
        </Flex>
      </Grid>
      <Flex
        style={styles.fullBlock}
        backgroundColor="subtleBackground"
        height="80vh"
        as="section"
      />

      <Grid
        style={{ ...styles.fullBlock, position: 'relative' }}
        contained
        backgroundColor="background"
        as="section"
      >
        <Flex
          style={styles.leftBlock}
          backgroundColor="subtleBackground"
          height="60vh"
        />
        <Flex flexDirection="column" style={styles.bigRightBlock} as="section">
          <Text variant="h3">Совместим с аналоговыми трубками</Text>
          <Text variant="h4">
            Работает со всеми существующими вариантами трубок домофона, вам не
            понадобится ничего менять.
          </Text>
          <Link
            mt="5"
            color="primary"
            variant="cta"
            fontSize="3"
            textAlign="left"
            href="/"
          >
            Узнать больше
            <AngleRightB />
          </Link>
        </Flex>
      </Grid>

      <Grid
        style={{ ...styles.fullBlock }}
        contained
        backgroundColor="background"
        as="section"
      >
        <Flex flexDirection="column" style={styles.leftBlock}>
          <Text variant="h3">Дружит с Алисой</Text>
          <Text variant="h4">
            Открывайте дверь гостям с помощью умной колонки «Алиса».
            Настраивайте домофон так, как вам это удобно, меняйте звуки открытия
            двери или устанавливайте режим тишины.
          </Text>
          <Link
            mt="5"
            color="primary"
            variant="cta"
            fontSize="3"
            textAlign="left"
            href="/"
          >
            Узнать больше
            <AngleRightB />
          </Link>
        </Flex>

        <Flex
          style={styles.bigRightBlock}
          backgroundColor="subtleBackground"
          height="60vh"
        />
      </Grid>
    </ProductPageTemplate>
  )
}
