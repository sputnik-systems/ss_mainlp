import React, { useRef } from 'react'
import Video from 'components/Video'
import eric from 'assets/eric.mov'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Text from 'components/Text'
import Play from '@iconscout/react-unicons/icons/uil-play'

import { random } from 'utils/helpers'

const spring = {
  type: 'spring',
  damping: 50,
  stiffness: 50,
  velocity: 1,
}

const Wrapper = styled(motion.div)`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  border-radius: 100%;
  /* box-shadow: 0px 12.5px 25px rgba(0, 0, 0, 0.25); */
  will-change: transform;
  background: var(--color-subtle-background);
  overflow: visible;
  cursor: none;
  pointer-events: auto;
  /* width: calc(80vw * 100 / 1640);
  height: calc(80vw * 100 / 1640); */
`

const wrapperVariants = {
  initial: {
    scale: 0,
  },
  hover: {
    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
  },
  idle: {
    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',

    // boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)',
    scale: 1,

    transition: spring,
  },
}

const maskVariants = {
  hover: {
    clipPath: `circle(70% at 50% 50%)`,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
    },
  },
  idle: {
    clipPath: 'circle(50% at 50% 50%)',
  },
}

const micVariants = {
  initial: {
    opacity: 0,
  },
  idle: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%',
  },
  hover: {
    opacity: 0,
    scale: 1.05,
    x: '-50%',
    y: '-50%',
    transition: spring,
  },
}

const nameVariants = {
  initial: {
    opacity: 0,
  },
  idle: {
    opacity: 0,
    scale: 1.05,
  },
  hover: {
    opacity: 1,
    scale: 1,
  },
}

const Mask = styled(motion.div)`
  width: 100%;
  height: 100%;
  color: white;
`

const PersonName = styled(Text)`
  position: absolute;
  transform: translateX(-50%);
  bottom: -50%;
  left: 50%;
  display: block;
  font-size: 14px;
  text-align: center;
  font-weight: var('font-weight-demi');
  transition: var(--default-transition);
  background: var(--color-blurred-background);
  backdrop-filter: var(--backdrop);
  padding: var(--spacing-xxs) var(--spacing-xs);
  border-radius: var(--br-s);
`

export default function PersonFeedback({
  src = eric,
  name = 'Person Name',
  poster,
  size,
  ...props
}) {
  const side = useRef(size || random(70, 115, 5)).current
  return (
    <Wrapper
      {...props}
      // initial="initial"
      whileHover="hover"
      whileTap="hover"
      // animate="idle"
      width={side}
      height={side}
      variants={wrapperVariants}
    >
      <Mask variants={maskVariants}>
        <Video
          src={src}
          background
          autoPlay={false}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
          onTouchStart={(e) => e.target.play()}
          onTouchEnd={(e) => e.target.pause()}
          muted={false}
          poster={poster}
          style={{
            width: '140%',
            height: '140%',
            left: '-20%',
            top: '-20%',
          }}
        />
        <motion.span
          variants={micVariants}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%,-50%,0)',
            pointerEvents: 'none',
          }}
        >
          <Play />
        </motion.span>
      </Mask>
      <motion.span variants={nameVariants}>
        <PersonName>{name}</PersonName>
      </motion.span>
    </Wrapper>
  )
}
