import React, { useRef } from 'react'
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
import AngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b'

import Container from 'components/Container'
import Video from 'components/Video'
import SplitShow from 'features/SplitShow'
import SplitItem from 'features/SplitShow/SplitItem'

import { ReactComponent as Apple } from 'assets/icons/ios.svg'
import { ReactComponent as GooglePlay } from 'assets/icons/googleplay.svg'
import appShowreel from 'assets/img/app_showreel.jpg'
import appWidget from 'assets/img/app_widget.png'
import appWatch from 'assets/img/app_watch.png'

import video from 'assets/videos/wickretvideo.mp4'

import appCodes from 'assets/img/app_phonereel.png'
import PhoneSection from 'features/PhoneSection'

import Phone from 'features/PhoneSection/Phone'
import StackableCards from 'features/StackableCards'
import { useCallback } from 'react'

const splitLeft = [
  {
    src: appCodes,
    caption: 'Открываыйте дверь через мобильное приложение...',
  },
  {
    src: appWidget,
    caption: '... а также через виджет.',
  },
  {
    src: appCodes,
    caption: 'Пользуйтесь технологией «свободные руки».',
  },
]

const splitRight = [
  { src: appWatch, caption: '...с помощью умных часов...' },
  {
    src: appCodes,
    caption: 'Создавайте коды доступа.',
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

      <PhoneSection column="full" />

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

      <Container column="full">
        <Grid>
          <Text style={{ gridColumn: '2/10' }} variant="h1" textAlign="left">
            Ключи, они такие разные...
          </Text>
        </Grid>
      </Container>
      <SplitShow left={splitLeft} right={splitRight} column="full" />

      <Container column="full">
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
      </Container>

      <Container column="full">
        <StackableCards />
      </Container>
    </ProductPageTemplate>
  )
}
