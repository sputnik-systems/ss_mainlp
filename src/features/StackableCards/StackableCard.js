import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '@react-hook/window-size'

import Container from 'components/Container'

const Wrapper = styled.div`
  position: sticky;
  height: ${(p) => 100 - 2.5 * p.idx}vh;
  top: ${(p) => 2.5 * p.idx}vh;
  background: none;

  width: 100%;
  margin: auto;
  align-items: center;
  font-size: 7.2rem;
  display: flex;
  justify-content: center;
`

const Content = styled(Container)`
  max-height: 72vh;
  transform-origin: top;
  background: ${(p) => p.bg};
  color: ${(p) => p.color};

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  will-change: transform;

  border-radius: 3rem;
  padding: 3rem 1.6em;
`

// 1 -> 0.9 scale
// elementTop + vh * 0.25 start?

const vh = document.documentElement.clientHeight

// 0.14 = (100vh - 72vh(card height)) / 2

export default function StackableCard({
  idx,
  bg,
  color,
  title,
  sub,
  children,
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

  const scale = useTransform(
    scrollY,
    [elementTop + vh * 0.14, elementTop + vh],
    [1, 0.9 + idx * 0.03],
  )

  return (
    <Wrapper {...props} ref={ref} idx={idx}>
      <Content style={{ scale }} as={motion.div} bg={bg} color={color}>
        {title}
        {sub}
      </Content>
    </Wrapper>
  )
}
