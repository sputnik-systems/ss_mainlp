import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import Grid from 'components/Grid'
import Container from 'components/Container'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Text from 'components/Text'
import Image from 'components/Image'
import AngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b'

import phone from 'assets/img/app_watch.png'
import phone2 from 'assets/img/app_codes.png'
import phone3 from 'assets/img/app_phonereel.png'
import phoneSticky from 'assets/img/iPhoneX.png'
import Phone from './Phone'

import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'

const NAV = 64

const Section = styled(Grid)``

// const Sticky = styled(Flex)`
//   position: sticky;
//   top: calc(${NAV}px);
//   z-index: 10;
//   height: calc(100vh - ${NAV}px - var(--spacing-l));
//   overflow: hidden;
//   border-radius: 40px;
//   height: 0;
//   padding-bottom: 199%;
//   box-shadow: var(--shadow-strong);

//   img {
//     position: absolute;
//     object-fit: cover;
//     justify-self: center;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

const Sticky = styled(Flex)`
  position: sticky;
  top: calc(${NAV}px);
  z-index: 10;
  height: calc(100vh - ${NAV}px - var(--spacing-l));
`

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const slides = [
  {
    title: 'Видно здесь и сейчас',
    subtitle:
      'Доступ к видео в режиме реального времени со всех домофонов и видеокамер установленных в вашем доме. Ваша территория всегда под контролем. 24/7 доступ с телефона к камерам в домофоне, лифте, у подъезда, на парковке и детской площадке для любого жителя дома.',
    src: pic1,
    cta: 'Узнать подробнее',
  },
  {
    title: 'Все как на ладони',
    subtitle:
      'Мы покажем вам все свободные места на парковке вашего дома в режиме реального времени, ориентируясь по видео с камер видеонаблюдения на вашем доме. Наша уникальная система применяет нейросети для поиска свободных мест на парковке. Если в вашем доме не установлены наши камеры, закажите их установку или подключите свою, мы будем только рады.',
    src: pic2,
    cta: 'Узнать подробнее',
  },
  {
    title: 'Квартира к вам не привязана',
    subtitle:
      'Видеозвонки от ваших гостей в вашем смартфоне где бы вы не находились. ',
    src: pic3,
    cta: 'Узнать подробнее',
  },
]

const spring = {
  type: 'spring',
  damping: 50,
  stiffness: 50,
  velocity: 1,
}

const variants = {
  enter: {
    zIndex: 3,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 2,
    opacity: 0,
  },
}

function Slide({ title, subtitle, src, cta, paginate, idx, page, ...props }) {
  const [ref, inView, entry] = useInView({ threshold: 0.6 })
  useEffect(() => {
    if (inView) {
      paginate(idx)
    } else {
    }
  }, [inView, paginate, idx, page, entry])
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      height="100vh"
      ref={ref}
      as={motion.div}
      {...props}
    >
      <Text textAlign="left" variant="h3">
        {title}
      </Text>
      <Text variant="h4" textAlign="left">
        {subtitle}
      </Text>

      <Link
        variant="cta"
        mt="5"
        color="primary"
        fontSize="3"
        textAlign="left"
        href="/"
      >
        {cta}
        <AngleRightB />
      </Link>
    </Flex>
  )
}

export default function PhoneSection({ ...props }) {
  const [page, setPage] = useState(0)
  const paginate = (newPage) => {
    setPage(newPage)
  }

  return (
    <Section as="section" {...props}>
      <Container column="full">
        <Grid>
          <Flex column="padLeft" flexDirection="column">
            {slides.map((slide, idx) => (
              <Slide
                {...slide}
                idx={idx}
                page={page}
                key={idx}
                paginate={paginate}
              />
            ))}
          </Flex>

          <Sticky column="padRight" alignItems="center" justifyContent="center">
            <Phone>
              <AnimatePresence>
                <StyledImage
                  as={motion.img}
                  src={slides[page].src}
                  key={slides[page].src}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={spring}
                />
              </AnimatePresence>
            </Phone>
          </Sticky>
        </Grid>
      </Container>
    </Section>
  )
}
