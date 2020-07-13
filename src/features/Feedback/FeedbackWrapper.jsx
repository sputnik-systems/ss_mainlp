import React, { useEffect } from 'react'
import styled from 'styled-components'
import PersonFeedback from 'features/Feedback/PersonFeedback'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParallaxItem from 'components/ParallaxItem'

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const variants = {
  idle: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  initial: {},
}

export default function FeedbackWrapper({ persons, ...props }) {
  const animation = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      animation.start('idle')
    } else {
      animation.start('initial')
    }
  }, [animation, inView])

  return (
    <Wrapper
      ref={ref}
      animate={animation}
      initial="initial"
      variants={variants}
    >
      {persons?.map((p) => (
        <ParallaxItem
          style={{ position: 'absolute', left: p.left, top: p.top }}
          buffer={350}
          end={-150}
        >
          <PersonFeedback src={p.src} {...p} />
        </ParallaxItem>
      ))}
    </Wrapper>
  )
}
