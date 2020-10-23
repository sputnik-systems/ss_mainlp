import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useResizeObserver } from '@asyarb/use-resize-observer'
import { useWindowSize } from '@react-hook/window-size'
import { space, layout } from 'styled-system'

import Text from 'components/Text'
import Video from 'components/Video'
import gridColumns from 'utils/gridColumns'

const Body = styled.div`
  ${gridColumns};
  ${layout};
  ${space}
`

const Wrapper = styled.div`
  /* margin: 34px 17px; */
  /* background: var(--color-subtle-background); */
  transition: transform 0.4s;
  overflow: hidden;
  height: 100%;
`

const SplitImg = styled(Video)`
  width: 100%;
  object-fit: ${(p) => p.fit || 'cover'};
  max-height: 100vh;
  min-height: ${(p) => p.minHeight};
  height: 100%;
`

// TODO: account for img height when its > 100vh

// const vh = Math.max(
//   document.documentElement.clientHeight || 0,
//   window.innerHeight || 0,
// )

const vh = document.documentElement.clientHeight

export default function SplitItem({
  src,
  caption,
  splitItemProps = {},
  minHeight,
  type,
  fit = 'cover',
  ...props
}) {
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const [buffer, setBuffer] = useState(vh)

  const handleResize = useCallback((entry) => {
    const { top } = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setElementTop(top + scrollTop)
    setBuffer(vh, entry?.contentRect?.height)
  }, [])

  const size = useWindowSize()
  useLayoutEffect(() => {
    handleResize()
  }, [handleResize, size])

  useResizeObserver({ ref, callback: handleResize })

  const y = useTransform(
    scrollY,
    [elementTop - buffer, elementTop + buffer],
    ['-50%', '50%'],
    { clamp: false },
  )

  return (
    <Body ref={ref} {...props}>
      <Wrapper>
        <SplitImg
          src={src}
          {...splitItemProps}
          minHeight={minHeight}
          style={{ y }}
          background
          as={type ? motion.video : motion.img}
          type={type}
          muted
          playsInline
          autoPlay
          loop
          fit={fit}
        />
      </Wrapper>
      {/* {caption && <SplitText as="caption">{caption}</SplitText>} */}
    </Body>
  )
}
