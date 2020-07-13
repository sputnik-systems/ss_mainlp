import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '@react-hook/window-size'

import Text from 'components/Text'
import gridColumns from 'utils/gridColumns'

const Body = styled.div`
  ${gridColumns};
`

const Wrapper = styled.div`
  /* margin: 34px 17px; */
  /* background: var(--color-subtle-background); */
  transition: transform 0.4s, -webkit-transform 0.4s, -moz-transform 0.4s,
    -o-transform 0.4s;
  overflow: hidden;
`

const SplitImg = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  max-height: 98vh;
  min-height: ${(p) => p.minHeight};
  height: 100%;
`

const SplitText = styled(Text)`
  padding: 34px 0 53px 0;
  max-width: 284px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: block;
  font-size: 24px;
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
  ...props
}) {
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)

  const handleResize = useCallback(() => {
    const { top } = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setElementTop(top + scrollTop)
  }, [ref])

  const size = useWindowSize()
  useLayoutEffect(() => {
    handleResize()
  }, [handleResize, size])

  const y = useTransform(
    scrollY,
    [elementTop - vh, elementTop + vh],
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
        />
      </Wrapper>
      {caption && <SplitText as="caption">{caption}</SplitText>}
    </Body>
  )
}
