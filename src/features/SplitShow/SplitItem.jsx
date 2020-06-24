import React, { useState, useRef, useLayoutEffect } from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from 'framer-motion'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { range } from 'utils/helpers'
import { useCallback } from 'react'
import Text from 'components/Text'
import useResizeObserver from 'use-resize-observer'

const Wrapper = styled.div`
  /* margin: 34px 17px; */

  transition: transform 0.4s, -webkit-transform 0.4s, -moz-transform 0.4s,
    -o-transform 0.4s;
  overflow: hidden;
  /* background: var(--color-subtle-background); */
`

const SplitImg = styled(motion.img)`
  width: 100%;
`

const SplitText = styled(Text)`
  padding: 34px 0 53px 0;
  max-width: 284px;

  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: block;
`

const BODY_OFFSET = 76

export default function SplitItem({ src, caption, ...props }) {
  const [element, setElement] = useState(0)

  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  useLayoutEffect(() => {
    const element = ref.current
    setElement(element)
  }, [ref])

  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    ['-50%', '50%'],
  )

  const handleResize = useCallback(() => {
    setElementTop(element.offsetTop + BODY_OFFSET)
  }, [element])

  useResizeObserver({
    ref,
    onResize: handleResize,
  })

  return (
    <div ref={ref} {...props}>
      <Wrapper>
        <SplitImg src={src} style={{ y }} />
      </Wrapper>
      {caption && <SplitText as="caption">{caption}</SplitText>}
    </div>
  )
}
