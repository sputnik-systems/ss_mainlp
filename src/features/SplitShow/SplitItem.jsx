import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import useResizeObserver from 'use-resize-observer'

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
  max-height: 100vh;
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

const BODY_OFFSET = 76

// TODO: account for img height when its > 100vh

export default function SplitItem({
  src,
  caption,
  splitItemProps = {},
  ...props
}) {
  const ref = useRef(null)
  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useViewportScroll()

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    ['-50%', '50%'],
  )

  const handleResize = useCallback(() => {
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    setElementTop(rect.top + scrollTop)
  }, [])

  useResizeObserver({
    ref,
    onResize: handleResize,
  })

  return (
    <Body ref={ref} {...props}>
      <Wrapper>
        <SplitImg src={src} {...splitItemProps} style={{ y }} />
      </Wrapper>
      {caption && <SplitText as="caption">{caption}</SplitText>}
    </Body>
  )
}
