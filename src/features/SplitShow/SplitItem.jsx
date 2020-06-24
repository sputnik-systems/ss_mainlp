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

// const threshholds = range(0, 1, 0.01) //[0.0, 0.01, 0.02]
//document.documentElement.clientHeight
//      elementTop + 76 - document.documentElement.clientHeight,

const bodyOffset = 76

export default function SplitItem({ src, ...props }) {
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

  const handleImgLoad = useCallback(() => {
    setElementTop(element.offsetTop + bodyOffset)
  }, [element])

  return (
    <div ref={ref} {...props}>
      <Wrapper>
        <SplitImg src={src} style={{ y }} onLoad={handleImgLoad} />
      </Wrapper>
    </div>
  )
}
