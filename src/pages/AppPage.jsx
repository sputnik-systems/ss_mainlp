import React from 'react'
import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import ParallaxItem from 'components/ParallaxItem'
import Text from 'components/Text'
import Link from 'components/Link'
import Button from 'components/Button'
import Image from 'components/Image'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import heroVideo from 'assets/herovideo_web.mp4'
import AngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b'

import { ReactComponent as IntercomLogo } from 'assets/intercomLogo.svg'
import Container from 'components/Container'
import Video from 'components/Video'
import SplitShow from 'features/SplitShow'
import SplitItem from 'features/SplitShow/SplitItem'
import img4 from 'features/SplitShow/img4.jpg'

const styles = {
  fullBlock: { gridColumn: '1/17' },
  leftBlock: { gridColumn: '1/8' },
  bigLeftBlock: { gridColumn: '1/9' },
  rightBlock: { gridColumn: '10/17' },
  bigRightBlock: { gridColumn: '9/17' },
  center: { gridColumn: '2/16' },
}

export default function AppPage({ ...props }) {
  return (
    <ProductPageTemplate
      {...props}
      nav={
        <ProductNav
          left={
            <Text
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              variant="h2"
              fontWeight="bold"
            >
              App
            </Text>
          }
          right={
            <Button variant="contained" color="primary">
              Скачать
            </Button>
          }
        />
      }
    >
      <Container
        style={{
          ...styles.fullBlock,
          height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',
        }}
        as="header"
      >
        <Video src={heroVideo} />
      </Container>
      <div style={{ height: '100vh' }} />

      <section style={styles.fullBlock}>
        <SplitItem src={img4} />
      </section>

      <div style={{ height: '100vh' }} />
      <section style={styles.fullBlock}>
        <SplitItem src={img4} />
      </section>
      <SplitShow style={styles.fullBlock} />

      <div style={{ height: '100vh' }} />
    </ProductPageTemplate>
  )
}
