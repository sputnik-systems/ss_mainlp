import React, { useState, useRef, useLayoutEffect } from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import styled from 'styled-components'

import Grid from 'components/Grid'
import SplitItem from './SplitItem'

import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'

const Section = styled(Grid)``

export default function SplitShow({ ...props }) {
  return (
    <Section {...props} as="section">
      <SplitItem src={img1} style={{ gridColumn: '2/9' }} />
      <SplitItem
        src={img3}
        style={{ gridColumn: '9/16', marginTop: 'var(--spacing-xxl)' }}
      />
    </Section>
  )
}
