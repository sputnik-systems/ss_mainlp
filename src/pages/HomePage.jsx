import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import HomeNav from 'features/Home/Nav'
import ProductCard from 'features/Product/Card'
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParallaxItem from 'components/ParallaxItem'

const variants = {
  animated: { y: 0, opacity: 1 },
  initial: {
    y: 150,
    opacity: 0,
  },
}

export default function HomePage({ ...props }) {
  // const y1 = useTransform(scrollY, [0, 650], [0, 0])
  // const y2 = useTransform(scrollY, [0, 650], [400, 0])

  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   triggerOnce: false,
  // })

  return (
    <ProductPageTemplate nav={<HomeNav style={{ gridColumn: '1/9' }} />}>
      <ParallaxItem style={{ gridColumn: '1/9' }}>
        <ProductCard />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/9' }}>
        <ProductCard />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/9' }}>
        <ProductCard />
      </ParallaxItem>
      <ParallaxItem style={{ gridColumn: '1/9' }}>
        <ProductCard />
      </ParallaxItem>
    </ProductPageTemplate>
  )
}
