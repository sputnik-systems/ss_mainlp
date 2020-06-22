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

import { ReactComponent as IntercomLogo } from 'assets/intercomLogo.svg'
import Container from 'components/Container'

const styles = {
  fullBlock: { gridColumn: '1/17' },
  leftBlock: { gridColumn: '1/9' },
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
          right={<Button variant="plain">Заказать установку</Button>}
        />
      }
    >
      <Container style={styles.fullBlock} py="7">
        <Text variant="hero" fontSize="114px" color="primary">
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

      <Flex
        style={{ ...styles.fullBlock, gridRow: '2 / span 2' }}
        backgroundColor="text"
        height="60vh"
      />

      <Flex
        flexDirection="column"
        style={styles.center}
        contained
        backgroundColor="background"
      >
        <Text textAlign="center" variant="h3" style={styles.fullBlock}>
          Повышает безопасность
        </Text>
        <Text textAlign="center" variant="h4" style={styles.fullBlock}>
          Домофон работает со специальными криптозащищенными ключами,
          существенно повышающими безопасность проживания в многоквартирных
          домах.
        </Text>
      </Flex>

      <Grid style={styles.fullBlock} contained backgroundColor="background">
        <Flex
          style={{ ...styles.leftBlock }}
          backgroundColor="text"
          height="60vh"
        />
        <Flex
          backgroundColor="text"
          flexDirection="column"
          style={styles.rightBlock}
        />
        {/* 
        <Flex
          style={{ ...styles.rightBlock }}
          backgroundColor="text"
          height="60vh"
        /> */}
      </Grid>

      <Grid style={styles.fullBlock} contained backgroundColor="background">
        <Flex
          style={{ ...styles.leftBlock }}
          backgroundColor="text"
          height="60vh"
        />
        <Flex flexDirection="column" style={styles.rightBlock}>
          <Text variant="h3" textAlign="left">
            Повышает безопасность
          </Text>
          <Text variant="h4" color="textSecondary">
            Домофон работает со специальными криптозащищенными ключами,
            существенно повышающими безопасность проживания в многоквартирных
            домах.
          </Text>
        </Flex>
      </Grid>

      <Grid style={styles.fullBlock} contained backgroundColor="background">
        <Text color="textSecondary" style={styles.fullBlock}>
          My wife and I now have peace of mind when we leave our kids at home to
          do a quick errand. Installation was easy. No more worries when we are
          expecting a package.
        </Text>
        <Text color="textSecondary" style={{ gridColumn: '14/17' }}>
          Joseph8 (verified customer)
        </Text>
      </Grid>

      <Flex
        style={{ gridColumn: '2/8' }}
        backgroundColor="text"
        height="60vh"
      />
      <Text variant="h1" textAlign="left" style={{ gridColumn: '9/15' }}>
        Снимает четкое видео днем и ночью
      </Text>
      <Text color="textSecondary" style={{ gridColumn: '9/15' }}>
        Видеокамера в домофоне снимает с Full HD разрешением и хранит видеоархив
        на сервере. Записи из видеоархива впоследствии отлично помогают
        обнаружить как вандалов, так и злоумышленников, промышляющих кражами в
        подъездах и квартирах.
      </Text>

      <Text variant="h1" textAlign="center" style={{ gridColumn: '4/14' }}>
        Управляется через бесплатное мобильное приложение
      </Text>
      <Text color="textSecondary" style={{ gridColumn: '5/14' }}>
        Вы можете принимать видеозвонки от гостей, а также открывать домофон
        тогда, когда вам это необходимо.
      </Text>
    </ProductPageTemplate>
  )
}
