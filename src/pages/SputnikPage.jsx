import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import Text from 'components/Text'
import Button from 'components/Button'
import Image from 'components/Image'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Fade from 'components/Fade'
import { UilArrowRight } from '@iconscout/react-unicons'

import Container from 'components/Container'
import FeedbackWrapper from 'features/Feedback/FeedbackWrapper'
import DayNightSection from 'features/Sputnik/DayNightSection'
import SplitItem from 'features/SplitShow/SplitItem'

import appShowreel from 'assets/img/app_showreel.jpg'
// import sk from 'assets/img/sputnik_cropped.png'
import zeus from 'assets/img/zeus.png'
import { ReactComponent as SputnikIcon } from 'assets/svg/sputnikIcon.svg'
import coverVideo from 'assets/videos/speakphone-cover.mp4'

import eric from 'assets/eric.mov'
import eric2 from 'assets/eric2.mov'
import Mascotte from 'components/Mascotte'

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
    left: '65%',
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
    left: '85%',
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

const categories = [
  {
    title: 'Криптозащищенным ключом',
    src: 'draft',
    subtitle: 'Безотказный способ открыть домофон за доли секунд.',
  },
  {
    title: 'Индивидуальным кодом доступа',
    src: 'draft',
    subtitle:
      'Скачайте бесплатно и открывайте домофон простым нажатием кнопки.',
  },
  {
    title: 'Виджетом на смартфоне',
    src: 'draft',
    subtitle: 'Открывайте дверь телефоном не открывая мобильное приложение.',
  },
  {
    title: 'Мобильным телефоном',
    src: 'draft',
    subtitle:
      'Домофон откроется как только мобильный телефон приблизится к двери.',
  },
  {
    title: 'Индивидуальным кодом',
    src: 'draft',
    subtitle: 'На случай если вы забыли ключ а ваш мобильный телефон сел.',
  },
  {
    title: 'Умными часами',
    src: 'draft',
    subtitle: 'Они всегда под рукой, домофон откроется в одно касание.',
  },
  {
    title: 'Улыбнувшись домофону',
    src: 'draft',
    subtitle:
      'Камера в домофоне с радостью узнать вас и откроет дверь.\nКонечно только если вы ей это разрешите.',
  },
  {
    title: 'Звонком в квартиру',
    src: 'draft',
    subtitle:
      'Просто позвоните в домофон, на том конце вам обязательно кто то ответит.',
  },
  {
    title: 'Добрым соседом',
    src: 'draft',
    subtitle: 'Если вы забыли ключи и ни настроили ни один из других способов.',
  },
]

//  height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',

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
      <Container column="full" style={{ zIndex: 999, position: 'relative' }}>
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
                Разработан
                <br /> для людей 👨‍🔬👩‍💼👨‍💻
              </Text>
              <Text variant="h4" color="textSecondary">
                Специально спроектирован для работы в обычных многоквартирных
                домах. <br />
                Невысокая стоимость домофона позволяет устанавливать Спутник без
                каких либо существенных затрат для жителей.
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

      <SplitItem
        minHeight="70vh"
        src={coverVideo}
        type="video/mp4"
        column="full"
      />

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">У вас все под контролем</Text>
          <Text variant="h4">
            Создавайте коды открытия двери, принимайте звонки с дивана или
            просто настройте бесключевой доступ в подъезд. Управляйте домофоном
            через ваше мобильное приложение так как вам вздумается
          </Text>

          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать подробнее
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>

      <Grid
        contained
        as="section"
        column="full"
        minHeight="100vh"
        style={{ gridTemplateRows: 'max-content 1fr' }}
      >
        <Text
          variant="h1"
          column="center"
          textAlign="left"
          style={{ lineHeight: 1.25 }}
        >
          Лайфхак
          <br />{' '}
          <Text variant="h3">Как открыть домофон 9 разными способами</Text>
        </Text>

        <Grid
          py="7"
          column="center"
          // p="7"
          style={{
            // gridTemplateColumns: 'repeat(auto-fit, minmax(150px, min-content))',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--spacing-xxxl) var(--spacing-xxl)',
          }}
          // backgroundColor="subtleBackground"
        >
          {categories.map((cat) => (
            <Flex flexDirection="column">
              <Mascotte
                emote={cat.src}
                style={{
                  marginRight: 'auto',
                  maxHeight: 120,
                  objectPosition: 'left',
                }}
              />
              <Text mt="6" mb="4" variant="h6">
                {cat.title}
              </Text>
              <Text mt="0" color="textSecondary">
                {cat.subtitle}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Grid>

      <DayNightSection as="section" />

      <Grid contained column="full" as="section">
        <Flex flexDirection="column" column="full">
          <Text variant="h3" textAlign="center">
            Превратить ваш дом в крепость? Легко 😎
          </Text>
          <Text variant="h4" textAlign="center" color="textSecondary">
            Вместе с компанией Дельта мы создали специальную услугу по охране
            вашей квартиры и дома.
            <br /> С ее помощью ваш дом буквально превращается в вашу крепость
            за считанные минуты.
          </Text>
          <Button mt="6" mx="auto" variant="contained" color="subtle">
            Узнать подробнее
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>
      <Image src={appShowreel} column="full" />
      {/* <SplitItem column="full" src={appShowreel} min /> */}

      <Grid
        style={{ position: 'relative' }}
        contained
        as="section"
        column="full"
      >
        <Flex column="left" backgroundColor="subtleBackground" height="60vh" />
        <Flex flexDirection="column" column="bigRight" as="section">
          <Text variant="h3">Совместим с аналоговыми трубками 📞</Text>
          <Text variant="h4">
            Работает с большинством трубок домофона, вам не понадобится ничего
            менять в своей квартире. Если вам надоела ваша существующая трубка
            вы всегда можете купить новую - выбор огромен.
          </Text>
          <Button mt="6" mr="auto" variant="contained" color="subtle">
            Узнать больше
            <UilArrowRight />
          </Button>
        </Flex>
      </Grid>

      <Grid column="full" contained as="section">
        <Flex flexDirection="column" column="left">
          <Text variant="h3">Дружит с Алисой 🙋‍♀️</Text>
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

      <Container column="full">
        <Grid>
          <Text variant="h1" column="center" textAlign="left">
            Заботиться о вас даже в чрезвычайных ситуациях 👀
          </Text>
          <Flex flexDirection="column" column="center">
            <Text variant="h4">
              Спутник часть системы экстренного информирования населения о
              чрезвычайных ситуациях. Во время ЧС вы сможете услышать четкий
              план действий в подобной ситуации через вашу обычную квартирную
              трубку от домофона.
            </Text>{' '}
            <Button
              mt="6"
              mr="auto"
              variant="contained"
              color="subtle"
              column="padRight"
            >
              Узнать больше
              <UilArrowRight />
            </Button>
          </Flex>
        </Grid>
      </Container>

      <Container
        column="center"
        style={{ display: 'flex', justifyContent: 'center', height: '80vh' }}
        backgroundColor="yellow"
      >
        <Grid column="full" height="100%%" style={{ alignItems: 'center' }}>
          <Image
            src={zeus}
            column="center"
            style={{
              height: '96%',
              objectPosition: 'bottom',
              objectFit: 'contain',
            }}
          />
        </Grid>
      </Container>

      {/* <SplitItem minHeight="70vh" src={zeus} column="center" /> */}
    </ProductPageTemplate>
  )
}
