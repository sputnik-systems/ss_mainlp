import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useResizeObserver } from '@asyarb/use-resize-observer'

import Text from 'components/Text'

const BODY_OFFSET = 76

const H = 600

const Wrapper = styled.div`
  /* margin: 34px 17px; */
  /* background: var(--color-subtle-background); */
  transition: transform 0.4s, -webkit-transform 0.4s, -moz-transform 0.4s,
    -o-transform 0.4s;
  overflow: hidden;
`

const SplitImg = styled.img`
  width: 100%;
  height: ${H}px;
  object-fit: contain;
`

const SplitText = styled(Text)`
  padding: 34px 0 53px 0;
  max-width: 284px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: block;
  font-size: 22px;
`

const MovingDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

export default function SplitItemAlt({ src, src2, caption, ...props }) {
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
    ['-0%', '-100%'],
  )

  const handleResize = useCallback(() => {
    setElementTop(ref.current.offsetTop + BODY_OFFSET)
  }, [])

  useResizeObserver({
    ref,
    onResize: handleResize,
  })

  return (
    <div ref={ref} {...props}>
      <Wrapper>
        <MovingDiv style={{ height: H, y }}>
          <SplitImg src={src} />
          <SplitImg src={src2} />
        </MovingDiv>
      </Wrapper>
      {caption && <SplitText as="caption">{caption}</SplitText>}
    </div>
  )
}
