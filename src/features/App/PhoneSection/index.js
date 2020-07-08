import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { UilArrowRight } from '@iconscout/react-unicons'

import Grid from 'components/Grid'
import Container from 'components/Container'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Button from 'components/Button'
import Text from 'components/Text'
import Image from 'components/Image'
import Phone from 'features/Phone'

const NAV = 64

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

      {Boolean(cta) && (
        <Button
          fontSize="20px"
          mt="6"
          mr="auto"
          variant="contained"
          color="subtle"
        >
          {cta}

          <UilArrowRight style={{ marginLeft: 'var(--spacing-s)' }} />
        </Button>
      )}
    </Flex>
  )
}

/*
 <Link
          variant="cta"
          mt="5"
          color="primary"
          fontSize="3"
          textAlign="left"
          href="/"
        >
          <AngleRightB />
        </Link>
*/

export default function PhoneSection({
  slides,
  phonePosition = 'right',
  ...props
}) {
  const [page, setPage] = useState(0)
  const paginate = (newPage) => {
    setPage(newPage)
  }

  return (
    <Container {...props}>
      <Grid>
        <Flex
          column={phonePosition === 'right' ? 'padLeft' : 'padRight'}
          flexDirection="column"
          order={phonePosition === 'right' ? 1 : 2}
        >
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

        <Sticky
          column={phonePosition === 'right' ? 'padRight' : 'padLeft'}
          alignItems="center"
          justifyContent="center"
          order={phonePosition === 'right' ? 2 : 1}
        >
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
  )
}
