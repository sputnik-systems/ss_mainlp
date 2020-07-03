import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Grid from 'components/Grid'
import Text from 'components/Text'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Video from 'components/Video'
import AngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b'
import styled from 'styled-components'

import eric from 'assets/eric.mov'
import eric2 from 'assets/eric2.mov'
import Sparkles from 'components/Sparkles'

// const THRESHOLD = [0.1, 0.8, 0.9]

const FlipScene = styled(Flex)`
  background-color: transparent;
  perspective: 1000px;
  &:hover > div {
    transform: rotateY(180deg);
  }
`

const FlipCard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 75vh;

  transform-style: preserve-3d;
`

const FrontVideo = styled(Video)`
  backface-visibility: hidden;
`

const BackVideo = styled(Video)`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

// const spring = {
//   type: 'spring',
//   damping: 20,
//   stiffness: 300,
// }

// const spring = {
//   type: 'spring',
//   damping: 20,
//   stiffness: 30,
// }

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 50,
}

const variants = {
  day: {
    rotateY: 0,
    boxShadow: '0 50px 100px rgba(253,216,53,0)',
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
  night: {
    rotateY: 180,
    boxShadow: '0 50px 100px rgba(253,216,53,0.25)',
    transition: spring,
  },
}

const textVariants = {
  day: {
    opacity: 0,
    transition: spring,
  },
  night: {
    opacity: 1,
    transition: spring,
  },
}

export default function VideoSection({ ...props }) {
  const [isDark, setIsDark] = useState(false)

  const [ref, inView, entry] = useInView({
    threshold: 0.7,
    rootMargin: '64px',
  })

  useEffect(() => {
    if (inView) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    // if (entry?.intersectionRatio > 0.9) {
    //   setIsDark(true)
    // } else {
    //   setIsDark(false)
    // }
  }, [entry, inView])

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', '')
    }
    return () => document.body.setAttribute('data-theme', '')
  }, [isDark])

  return (
    <Grid
      ref={ref}
      style={{ minHeight: '110vh' }}
      contained
      backgroundColor="background"
      as="section"
      column="full"
    >
      <Flex flexDirection="column" column="left" justifyContent="center">
        <Text variant="h3">
          Снимает четкое видео днем...{' '}
          <motion.span
            animate={isDark ? 'night' : 'day'}
            variants={textVariants}
          >
            <Sparkles>и ночью</Sparkles>
          </motion.span>
        </Text>
        <Text variant="h4">
          Видеокамера в домофоне снимает с Full HD разрешением и хранит
          видеоархив на сервере. Записи из видеоархива впоследствии отлично
          помогают обнаружить как вандалов, так и злоумышленников, промышляющих
          кражами в подъездах и квартирах.
        </Text>
        <Link
          mt="5"
          color="primary"
          variant="cta"
          fontSize="3"
          textAlign="left"
          href="/"
        >
          Посмотреть примеры
          <AngleRightB />
        </Link>
      </Flex>
      <FlipScene column="bigRight" justifyContent="center" alignItems="center">
        <FlipCard animate={isDark ? 'night' : 'day'} variants={variants}>
          <FrontVideo background src={eric} />
          <BackVideo background src={eric2} />
        </FlipCard>
      </FlipScene>
      {/* <Flex
        style={styles.bigRightBlock}
        backgroundColor="subtleBackground"
        height="60vh"
      /> */}
    </Grid>
  )
}
