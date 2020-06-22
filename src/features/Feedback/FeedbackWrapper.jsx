import React, { useEffect } from 'react'
import styled from 'styled-components'
import PersonFeedback from 'features/Feedback/PersonFeedback'
import eric2 from 'assets/eric2.mov'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
      staggerChildren: 0.3,
    },
  },
  initial: {},
}

export default function FeedbackWrapper({ ...props }) {
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
      <PersonFeedback
        style={{ position: 'absolute', left: '65%', bottom: '20%' }}
      />
      <PersonFeedback
        style={{ position: 'absolute', left: '44%', top: '10%' }}
        src={eric2}
      />
      <PersonFeedback
        style={{ position: 'absolute', left: '10%', bottom: '10%' }}
      />
    </Wrapper>
  )
}
