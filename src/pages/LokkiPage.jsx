import React, { useRef, useCallback, useState } from 'react'
import { useResizeObserver } from '@asyarb/use-resize-observer'
import { ReactComponent as Apple } from 'assets/icons/ios.svg'
import { ReactComponent as GooglePlay } from 'assets/icons/googleplay.svg'
import { UilArrowRight } from '@iconscout/react-unicons'

import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import Text from 'components/Text'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Emoji from 'components/Emoji'
import Image from 'components/Image'
import Link from 'components/Link'
import Fade from 'components/Fade'
import IconButton from 'components/IconButton'

import Container from 'components/Container'
import Video from 'components/Video'
import SplitItem from 'features/SplitShow/SplitItem'
import Phone from 'features/Phone'

import PhoneSection from 'features/App/PhoneSection'
import KeysSection from 'features/App/KeysSection'
import CardsSection from 'features/App/CardsSection'
import DownloadAppModal from 'features/App/DownloadAppModal'

import key from 'assets/img/lokki/key.png'
import keyShadow from 'assets/img/lokki/keyShadow.png'

import appShowreel from 'assets/img/app_showreel.jpg'
import video from 'assets/videos/wickretvideo.mp4'
import whatsapp from 'assets/svg/whatsapp.svg'
import telegram from 'assets/svg/telegram.svg'
import viber from 'assets/svg/viber.svg'
import appGallery from 'assets/icons/appgallery.png'
import { ReactComponent as AppLogo } from 'assets/svg/mobileAppLogo.svg'

export default function AppPage({ ...props }) {
  const ref = useRef()
  const handleResize = useCallback(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])
  useResizeObserver({
    ref,
    callback: handleResize,
  })

  const [downloadModal, setDownloadModal] = useState(false)
  const toggleDownloadModal = useCallback(() => {
    setDownloadModal(!downloadModal)
  }, [downloadModal])
  return (
    <ProductPageTemplate
      {...props}
      ref={ref}
      nav={
        <ProductNav
          left={
            <>
              {/* <AppLogo
                style={{
                  height: '100%',
                  borderRadius: 'var(--br-l)',
                  width: 'auto',
                  padding: 'var(--spacing-s)',
                }}
              />
               */}
              <Image src={key} fit="contain" />
              Спутник Локки
            </>
          }
          right={
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleDownloadModal}
              >
                Купить
              </Button>
            </>
          }
        />
      }
    >
      <Container column="full" style={{ zIndex: 999, position: 'relative' }}>
        <Grid>
          <Flex
            column="heroLeft"
            flexDirection="column"
            height="86vh"
            justifyContent="center"
          >
            <Fade>
              <Text variant="h1" textAlign="left">
                Ключ,
                <br /> который не предаст
              </Text>

              <Button variant="contained" mt="7" mr="auto">
                Купить
                <UilArrowRight />
              </Button>
              {/* <Button variant="store" style={{ width: 'auto' }}>
                <Image src={appGallery} style={{ margin: 0 }} />
              </Button> */}
            </Fade>
          </Flex>

          {/* <Image
            style={{
              height: '86vh',
             ',
              gridColumn: '11/17',
            }}
            src={key}
          /> */}

          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              height: '86vh',
              position: 'relative',
            }}
            column="heroRight"
          >
            <Image
              style={{
                height: '100%',
                position: 'absolute',
                transform: 'scale(1.4)',
                left: '-10%',
              }}
              src={keyShadow}
              fit="contain"
            />
            <Image
              fit="contain"
              style={{ height: '100%', position: 'relative' }}
              src={key}
            />
          </Flex>
        </Grid>
      </Container>

      {/* <SplitItem column="full" src={appShowreel} height="98vh" /> */}

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">
            Он такой <br />
            неповторимый 😻
          </Text>
          <Text variant="h4">
            Криптозащищенный ключ Спутник невозможно изготовить кустарным
            способом или скопировать в мастерских по производству ключей. Ваш
            ключ никогда не попадет в базы данных, которыми пользуются
            разносчики рекламы, закладчики наркотиков и правонарушители,
            промышляющие кражами из подъездов и квартир.
          </Text>
        </Flex>
      </Grid>
      <Grid contained as="section" column="full">
        <Flex flexDirection="column" column="left">
          <Text variant="h3">
            Красть бесполезно,
            <br /> потерять не страшно 🛀
          </Text>
          <Text variant="h4">
            Благодаря передовым технологиям вы можете не переживать об утере или
            краже ключа. За безопасность ключа отвечает наша уникальная,
            запатентованная система. Если ключом воспользуется злоумышленник то
            на ваш телефон придет уведомление, а сам ключ будет заблокирован до
            ваших дальнейших указаний.
          </Text>
        </Flex>
        <Flex backgroundColor="subtleBackground" height="60vh" column="right" />
      </Grid>

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">Схватывает на лету 🦅</Text>
          <Text variant="h4">
            Улучшенный криптографический микропроцессор позволяет открывать
            домофоны на 40% быстрее, при этом расстояние считывания увеличено
            более, чем в два раза. Ключ считывается даже без соприкосновения с
            домофоном.
          </Text>
        </Flex>
      </Grid>

      <Text column="center" variant="h3" textAlign="center">
        Хорошо упакован 📦
      </Text>
      <Flex backgroundColor="subtleBackground" height="100vh" column="full" />
    </ProductPageTemplate>
  )
}
