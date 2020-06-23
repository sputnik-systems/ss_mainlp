import React from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'
import MotionLogo from 'components/MotionLogo'
import { Link as RouterLink } from 'react-router-dom'
import sputnikLogoPath from 'features/Home/logoPath'
import { AnimatePresence, motion } from 'framer-motion'

const Body = styled(Nav)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px) saturate(180%);
  position: sticky;
  top: 0;
  grid-column: 1/9;
`

const Sticky = styled(motion.header)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px) saturate(180%);
  position: sticky;
  top: 0;
  grid-column: 1/9;
  z-index: 999;
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
    opacity: 0,
  },
}

const transition = {
  type: 'spring',
}

export default function ProductNav({
  path = sputnikLogoPath,
  left,
  right,
  ...props
}) {
  return (
    <AnimatePresence>
      <Sticky
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Nav
          backgroundColor="transparent"
          height="64px"
          left={
            <>
              <RouterLink to="/">
                {/* <MotionLogo
                  style={{
                    marginLeft: 'var(--spacing-xs)',
                    height: '100%',
                  }}
                  path={path}
                /> */}
              </RouterLink>
              {left}
            </>
          }
          right={right}
          {...props}
        />
      </Sticky>
    </AnimatePresence>
  )
}
