import React from 'react'
import { motion } from 'framer-motion'

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'black',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(0, 0, 0, 0)',

    fill: 'rgba(0, 0, 0, 1)',
    stroke: 'black',
  },
}

export default function MotionLogo({ path, ...props }) {
  return (
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
  )
}
