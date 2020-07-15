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

import pic1 from 'assets/img/app/pic1.png'
import pic2 from 'assets/img/app/pic2.png'
import pic3 from 'assets/img/app/pic3.png'
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
              <AppLogo
                style={{
                  height: '100%',
                  borderRadius: 'var(--br-l)',
                  width: 'auto',
                  padding: 'var(--spacing-s)',
                }}
              />
              Спутник
            </>
          }
          right={
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleDownloadModal}
              >
                Скачать
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

          <Flex
            style={{ height: '86vh' }}
            alignItems="center"
            justifyContent="center"
            column="heroRight"
            backgroundColor="subtleBackground"
          />
        </Grid>
      </Container>

      <SplitItem column="full" src={appShowreel} height="98vh" />

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">Он такой неповторимый</Text>
          <Text variant="h4">
            Криптозащищенный ключ Спутник невозможно изготовить кустарным
            способом или скопировать в мастерских по производству ключей. Ваш
            ключ никогда не попадет в базы данных, которыми пользуются
            разносчики рекламы, закладчики наркотиков и правонарушители,
            промышляющие кражами из подъездов и квартир.
          </Text>

          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать подробнее
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>
    </ProductPageTemplate>
  )
}
