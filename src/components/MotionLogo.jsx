import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import device from './Device'

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'transparent', // TODO: change to rgba with 0 opacity
    stroke: 'var(--color-text)',
  },
  visible: {
    pathLength: 1,
    fill: 'var(--color-text)',
    stroke: 'var(--color-text)',
  },
}

const Area = styled.div`
  display: none;
  @media ${device.mobileL} {
    display: block;
  }
`

export default function MotionLogo({ path, ...props }) {
  return (
    <Area>
      <motion.svg
        width="107"
        height="43"
        viewBox="0 0 107 43"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 5, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d={path}
        />
      </motion.svg>
    </Area>
  )
}
