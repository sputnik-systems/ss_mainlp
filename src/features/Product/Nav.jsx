import React, { useEffect } from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'
import device from '../../components/Device'
import Text from 'components/Text'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'

const Sticky = styled(motion.nav)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px) saturate(180%);
  position: fixed;
  top: auto;
  bottom: 0;
  grid-column: 1/9;
  z-index: 888;
  width: 100%;
  @media ${device.mobileL} {
    top: 0;
    bottom: auto;
  }
`

const LeftText = styled(Text)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 28px;
  cursor: pointer;
  & > *:first-child {
    height: 100%;
    border-radius: var(--br-l);
    width: auto;
    padding: var(--spacing-s);
  }
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
      latest > window.innerHeight / 2
        ? controls.start('in')
        : controls.start('out')
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
        left={
          <>
            <LeftText
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              variant="h3"
            >
              {left}
            </LeftText>
          </>
        }
        right={right}
        style={{ height: 'var(--nav-height)' }}
        {...props}
      />
    </Sticky>
  )
}
