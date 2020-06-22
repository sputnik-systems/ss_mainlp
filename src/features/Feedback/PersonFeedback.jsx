import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Video from 'components/Video'
import eric from 'assets/eric.mov'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Text from 'components/Text'
import Microphone from '@iconscout/react-unicons/icons/uil-microphone'
import MicrophoneSlash from '@iconscout/react-unicons/icons/uil-microphone-slash'

const Wrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
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
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
      // damping: 40,
    },
  },
  hover: {
    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
  },
  idle: {
    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',

    // boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)',
    scale: 1,
  },
}

const maskVariants = {
  hover: {
    clipPath: `circle(60% at 50% 50%)`,
    // transition: {
    //   type: 'spring',
    //   stiffness: 20,
    //   restDelta: 2,
    // },
  },
  idle: {
    clipPath: 'circle(50% at 50% 50%)',
    // transition: {
    //   delay: 0.5,
    //   type: 'spring',
    //   stiffness: 400,
    //   damping: 40,
    // },
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
  width: 120%;
  bottom: -50%;
  left: -10%;
  display: block;
  font-size: 14px;
  text-align: center;
  font-weight: var('font-weight-demi');
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: var(--spacing-xxs);
  border-radius: var(--br-m);
`

export default function PersonFeedback({ src = eric, ...props }) {
  return (
    <Wrapper
      {...props}
      // initial="initial"
      whileHover="hover"
      // animate="idle"
      variants={wrapperVariants}
    >
      <Mask variants={maskVariants}>
        <Video
          src={src}
          background
          autoPlay={false}
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          muted={false}
          style={{
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%',
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
          <MicrophoneSlash />
        </motion.span>
      </Mask>
      <motion.span variants={nameVariants}>
        <PersonName>Эрик Фарукшин</PersonName>
      </motion.span>
    </Wrapper>
  )
}
