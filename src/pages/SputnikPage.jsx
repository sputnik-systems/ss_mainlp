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

const styles = {
  fullBlock: { gridColumn: '1/17' },
  leftBlock: { gridColumn: '1/9' },
  smallLeftBlock: { gridColumn: '1/8' },
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
          // left={
          //   <Link ml="4">
          //     <IntercomLogo />
          //   </Link>
          // }
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
      >
        <Video src={heroVideo} />
      </Container>

      <Container style={styles.fullBlock} pb="7">
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

      <Grid
        style={{ ...styles.fullBlock, position: 'relative' }}
        contained
        backgroundColor="background"
      >
        <Flex
          style={styles.leftBlock}
          backgroundColor="subtleBackground"
          height="60vh"
        />
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

      <VideoSection styles={styles} />
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

      <Container style={styles.fullBlock}>
        <Text variant="h1" textAlign="center">
          Управляется через бесплатное мобильное приложение
        </Text>
        <Text variant="h4" textAlign="center" color="textSecondary">
          Вы можете принимать видеозвонки от гостей, а также открывать домофон
          тогда, когда вам это необходимо.
        </Text>
      </Container>
      <Flex
        style={styles.fullBlock}
        backgroundColor="subtleBackground"
        height="60vh"
      />
    </ProductPageTemplate>
  )
}