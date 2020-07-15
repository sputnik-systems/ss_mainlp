import React, { useCallback, useState } from 'react'
import { ReactComponent as Apple } from 'assets/icons/ios.svg'
import { ReactComponent as GooglePlay } from 'assets/icons/googleplay.svg'
import { UilEllipsisV } from '@iconscout/react-unicons'

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

const slidesOne = [
  {
    title: 'Квартира к вам не привязана',
    subtitle:
      'Видеозвонки с домофона на ваш смартфон где бы вы не находились. Пропустили звонок? Ничего страшного — автоответчик примет звонок и запишет ответ. Посмотрите его тогда, когда вам будет удобно.',
    src: pic1,
  },
  {
    title: 'Видно здесь и сейчас',
    subtitle:
      'Круглосуточный доступ ко всем вашим видеокамерам в режиме реального времени. Вы можете просматривать высококачественное видео с домофона, подъезда, лифта, парковки или вашей детской площадки.',
    src: pic2,
  },
  {
    title: 'Гости будут в восторге',
    subtitle: (
      <Text variant="h5">
        Создавайте коды открытия домофона как для себя так и для своих гостей.
        Можно временные, а можно постоянные. Делитесь кодами доступа с друзьями.{' '}
        <br />
        <Flex mt="4">
          <Image mr="2" src={whatsapp} height="55px" />{' '}
          <Image mr="2" src={viber} height="55px" />
          <Image mr="2" src={telegram} height="48px" />{' '}
        </Flex>
      </Text>
    ),

    src: pic3,
  },
]

const slidesTwo = [
  {
    title: 'Хранить или не хранить, вот в чем вопрос',
    subtitle:
      'Услуга по хранению видео со всех доступных камер теперь под полным вашим контролем. Включайте архивирование на 3, 5 или 7 дней тогда когда вам это необходимо. ',
    src: pic1,
  },
  {
    title: 'Можем и помолчать',
    subtitle:
      'Вы можете не только отключать прием звонка на смартфоне, но и настраивать график режима работы квартирной трубки от домофона. Сделаем все чтобы не разбудить ваших детей во время тихого часа 🤱🏼💁🏼‍♂️.',
    src: pic2,
  },
  {
    title: 'Защитим лично вас',
    subtitle:
      'Совместно с компанией Дельта мы добавили вам в приложение тревожную кнопку. Экстренный вызов помощи стал проще и доступнее. Одно нажатие и вооруженная охрана в течение 5-7 мин прибудет к вам на помощь.',
    cta: 'Подробнее',
    src: pic3,
  },
]

export default function AppPage({ ...props }) {
  const [downloadModal, setDownloadModal] = useState(false)
  const toggleDownloadModal = useCallback(() => {
    setDownloadModal(!downloadModal)
  }, [downloadModal])
  return (
    <ProductPageTemplate
      {...props}
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
                Управляй <br /> умным домом
              </Text>
              <Flex mt="7">
                <Button variant="store" mr="4">
                  <Apple />
                  <span>App Store</span>
                </Button>
                <Button variant="store" mr="4">
                  <GooglePlay />
                  <span>Google Play</span>
                </Button>
                <IconButton onClick={toggleDownloadModal}>
                  <UilEllipsisV />
                  {/* <Image src={appGallery} style={{ width: 20 }} /> */}
                </IconButton>
                {/* <Button variant="store" style={{ width: 'auto' }}>
                <Image src={appGallery} style={{ margin: 0 }} />
              </Button> */}
              </Flex>
            </Fade>
          </Flex>

          <Flex
            style={{ height: '86vh' }}
            alignItems="center"
            justifyContent="center"
            column="heroRight"
          >
            <Phone>
              <Video src={video} background />
            </Phone>
          </Flex>
        </Grid>
      </Container>

      <SplitItem column="full" src={appShowreel} height="98vh" />

      <PhoneSection slides={slidesOne} as="section" column="full" />

      <KeysSection />

      <Container column="full">
        <Text variant="h3" textAlign="center">
          Или просто улыбнитесь домофону <Emoji emote="😉" />
        </Text>
        <Text variant="h4" textAlign="center">
          Технология распознавания лиц откроет домофон просто узнав тебя. При
          этом наш уникальный алгоритм работает без необходимости использования
          твоих фотографий, все максимально приватно - только цифры и формулы.
        </Text>
      </Container>
      <SplitItem
        column="full"
        src={
          'https://images.unsplash.com/photo-1513206139743-d812fb597a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80'
        }
        minHeight="70vh"
      />

      <Container column="full">
        <Grid>
          <Text column="padLeft" variant="h3">
            Береги <br /> автомобиль <Emoji emote={'🚙'} />
          </Text>
          <Text column="padRight" variant="h4">
            Мы научили дворовые видеокамеры охранять твой автомобиль все время
            пока он припаркован во дворе. Система сможет заметить любую
            подозрительную активность возле твоей машины и незамедлительно
            сообщить об этом.
            <Text variant="h4">
              Если в твоем доме не установлены умные камеры,{' '}
              <Link variant="inline">закажи их установку</Link> у наших
              партнеров или <Link variant="inline">подключи свою</Link>, мы
              будем только рады.
            </Text>
          </Text>
        </Grid>
      </Container>
      <Container column="full">
        <Flex backgroundColor="subtleBackground" height="85vh" column="full" />
      </Container>

      <PhoneSection
        slides={slidesTwo}
        as="section"
        column="full"
        phonePosition="left"
      />

      <Container column="full">
        <CardsSection />
      </Container>

      <DownloadAppModal isOpen={downloadModal} onClose={toggleDownloadModal} />
    </ProductPageTemplate>
  )
}
