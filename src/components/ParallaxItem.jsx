import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import { random } from 'utils/helpers'
import gridColumns from 'utils/gridColumns'

const springConfig = {
  damping: 100,
  stiffness: 100,
  mass: random(1, 3),
}

const Body = styled.div`
  ${gridColumns};
`

export default function ParallaxItem({
  children,
  buffer = 250,
  end = -100,
  style,
  ...props
}) {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const y = useSpring(
    useTransform(scrollY, [elementTop, elementTop + buffer], [0, end]),
    springConfig,
  )

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <Body as={motion.div} ref={ref} style={{ ...style, y }} {...props}>
      {children}
    </Body>
  )
}
