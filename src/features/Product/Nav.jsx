import React, { useEffect } from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'

import Text from 'components/Text'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'

const Sticky = styled(motion.header)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px) saturate(180%);
  position: fixed;
  top: 0;
  grid-column: 1/9;
  z-index: 999;
  width: 100%;
`

const variants = {
  initial: {
    y: '-100%',
    opacity: 0,
  },
  in: {
    y: '0%',
    opacity: 1,
  },
  out: {
    y: '-100%',
    opacity: 0,
  },
}

const transition = {
  duration: 0.3,
  type: 'tween',
  ease: [0.17, 0.67, 0.83, 0.67],
}

export default function ProductNav({ left, right, ...props }) {
  const { scrollY } = useViewportScroll()
  const controls = useAnimation()

  useEffect(() => {
    function update(latest) {
      latest > window.innerHeight ? controls.start('in') : controls.start('out')
    }

    const unsubscribe = scrollY.onChange(update)

    return unsubscribe
  }, [controls, scrollY])

  return (
    <Sticky
      initial="initial"
      variants={variants}
      transition={transition}
      animate={controls}
    >
      <Nav
        backgroundColor="transparent"
        height="64px"
        left={
          <>
            <Text
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                fontSize: 28,
                cursor: 'pointer',
              }}
              variant="h3"
            >
              {left}
            </Text>
          </>
        }
        right={right}
        {...props}
      />
    </Sticky>
  )
}
