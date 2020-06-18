import React, { useState, useRef, useLayoutEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function ParallaxItem({
  children,
  buffer = 300,
  end = -100,
  style,
  ...props
}) {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elementTop, elementTop + buffer], [0, end])

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <motion.div ref={ref} style={{ ...style, y }} {...props}>
      {children}
    </motion.div>
  )
}
