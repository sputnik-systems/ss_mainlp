import React, { useRef, useCallback } from 'react'
import { useResizeObserver } from '@asyarb/use-resize-observer'

import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ParallaxItem from 'components/ParallaxItem'
import Text from 'components/Text'
import Link from 'components/Link'
import Button from 'components/Button'
import Image from 'components/Image'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Emoji from 'components/Emoji'

import Container from 'components/Container'
import Video from 'components/Video'
import SplitShow from 'features/SplitShow'
import SplitItem from 'features/SplitShow/SplitItem'

import { ReactComponent as Apple } from 'assets/icons/ios.svg'
import { ReactComponent as GooglePlay } from 'assets/icons/googleplay.svg'
import appShowreel from 'assets/img/app_showreel.jpg'

import video from 'assets/videos/wickretvideo.mp4'

import PhoneSection from 'features/PhoneSection'
import KeysSection from 'features/App/KeysSection'
import CardsSection from 'features/App/CardsSection'

import Phone from 'features/PhoneSection/Phone'

import pic1 from 'assets/img/app/pic1.png'
import pic2 from 'assets/img/app/pic2.png'
import pic3 from 'assets/img/app/pic3.png'

const phoneSlides = [
  {
    title: 'Квартира к вам не привязана',
    subtitle: (
      <>
        <Text variant="h4">
          <span style={{ color: 'var(--color-text)' }}>
            Видеозвонки с домофона на ваш смартфон где бы вы не находились.{' '}
          </span>
          Теперь вы никогда не пропустите звонки от неожиданных гостей, лишь бы
          у вас был интернет.
        </Text>
        <Text variant="h4">
          Все же пропустили звонок? Ничего страшного, в вашем распоряжение
          всегда есть доступ к архиву входящих звонков. Даже если вы не взяли
          трубку, автоответчик запишет для вас видео послание от вашего гостя.
          Неожиданно и очень удобно.
        </Text>
      </>
    ),
    src: pic1,
  },
  {
    title: 'Видно здесь и сейчас',
    subtitle: (
      <>
        <Text variant="h4" color="text">
          Круглосуточный доступ ко всем вашим видеокамерам в режиме реального
          времени.
        </Text>
        <Text variant="h4">
          Вы сможете автоматически просматривать видео с домофона, подъезда,
          лифта, парковки или вашей детской площадке.
        </Text>
        <Text variant="h4">
          При желание вы всегда сможете купить дополнительные камеры изи которые
          без сложных настроек заработают там где вы скажете. Все изи как
          никогда раньше
        </Text>
      </>
    ),
    src: pic2,
    cta: 'Подробнее',
  },
  {
    title: 'Устанавливайте коды открытия домофона',
    subtitle: (
      <>
        <Text variant="h4">
          Временные и Постоянные. Себе или друзьям. Ваши гости влюбятся в
          «Спутник».
        </Text>
      </>
    ),
    src: pic3,
    cta: 'Подробнее',
  },
]

export default function AppPage({ ...props }) {
  const ref = useRef()
  const handleResize = useCallback(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])
  useResizeObserver({
    ref,
    callback: handleResize,
  })
  return (
    <ProductPageTemplate
      {...props}
      ref={ref}
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
              style={{ fontSize: 28, letterSpacing: '-0.15rem' }}
            >
              Sputnik App
            </Text>
          }
          right={
            <>
              <Link variant="nav" mr="2">
                Спецификация
              </Link>
              <Button variant="contained" color="primary">
                Скачать
              </Button>
            </>
          }
        />
      }
    >
      <Container column="full">
        <Grid>
          <Flex
            column="padLeft"
            flexDirection="column"
            height="100%"
            justifyContent="center"
            style={{
              gridColumn: '2/9',
              height: '86vh',
            }}
          >
            {/* <Text textAlign="left" variant="h4" mb="3">
              Умное приложение
            </Text> */}
            <Text variant="h1" textAlign="left">
              Управляй <br /> умным домом
            </Text>
            <Flex mt="7">
              <Button variant="store" mr="4">
                <Apple />
                <span>App Store</span>
              </Button>
              <Button variant="store">
                <GooglePlay />
                <span>Google Play</span>
              </Button>
            </Flex>
          </Flex>

          <Flex
            style={{ height: '86vh' }}
            alignItems="center"
            justifyContent="center"
            column="padRight"
          >
            <Phone>
              <Video src={video} background />
            </Phone>
          </Flex>
        </Grid>
      </Container>

      <SplitItem column="full" style={{ height: '100vh' }} src={appShowreel} />

      <PhoneSection slides={phoneSlides} as="section" column="full" />

      {/* <Container column="full">
        <Grid>
          <Text style={{ gridColumn: '2/8' }} variant="h3">
            What does being trendy mean to you?
          </Text>
          <Text
            style={{ gridColumn: '10/16', padding: 0 }}
            variant="h4"
            // color="text"
          >
            The product is targeted at a 30-40 year old audience and our team
            instantly blew past all the typical templates for these kinds of
            sites. The idea was to develop an information portal that reflected
            the most happening design trends and where you can find content
            relevant to you.
          </Text>
        </Grid>
      </Container> */}

      <KeysSection />

      <Container column="full">
        <Text variant="h3" textAlign="center">
          Познакомьтесь с домофоном поближе
        </Text>
        <Text variant="h4" textAlign="center">
          Просто улыбнись домофону <Emoji emote="😉" />. Не против, если
          перейдем на ты?
        </Text>
      </Container>
      <Container column="full">
        <Flex backgroundColor="subtleBackground" height="85vh" column="full" />
      </Container>

      {/* <Container column="full">
        <Grid>
          <Text style={{ gridColumn: '2/9' }} variant="h1" textAlign="left">
            Защитим <br /> лично вас
          </Text>
          <Flex
            backgroundColor="subtleBackground"
            height="85vh"
            column="full"
          />
        </Grid>
      </Container> */}

      <Container column="full">
        <Grid>
          <Text column="padLeft" variant="h3">
            Береги <br /> автомобиль <Emoji emote={'🚙'} />
          </Text>
          <Text
            column="padRight"
            // style={{ gridColumn: '9/16', padding: 0 }}
            variant="h4"

            // color="text"
          >
            <span style={{ color: 'var(--color-text)' }}>
              Дворовые видеокамеры, подключенные к нашему искусственному
              интеллекту, защищают ваш автомобиль все время пока он припаркован
              во дворе.
            </span>
            <Text
              // style={{ gridColumn: '9/16', padding: 0 }}
              variant="h4"

              // color="text"
            >
              Система сможет заметить любую подозрительную активность возле
              вашей машины и незамедлительно сообщить вам об этом. Если в вашем
              доме не установлены умные камеры, закажите их установку у наших
              партнеров или подключите свою (ссылка на изи), мы будем только
              рады.
            </Text>
          </Text>
        </Grid>
      </Container>

      <SplitItem column="full" src={appShowreel} />

      <Container column="full">
        <CardsSection />
      </Container>
    </ProductPageTemplate>
  )
}
