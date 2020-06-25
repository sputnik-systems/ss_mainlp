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
      {/* <Container
        style={{
          ...styles.fullBlock,
          height: 'calc(100vh - (48px + 64px + var(--spacing-s) * 2))',
        }}
        as="header"
      >
        <Video src={heroVideo} />
      </Container> */}

      <Container style={{ ...styles.fullBlock, height: '55vh' }}>
        <Flex flexDirection="column" height="100%" justifyContent="center">
          <Text pb="4" fontSize="4">
            Умное приложение
          </Text>
          <Text textAlign="left" variant="h1" style={{ fontSize: '5.41667vw' }}>
            Для управления вашей квартирой
            <br /> и не только
          </Text>
        </Flex>
      </Container>

      <section style={styles.fullBlock}>
        <SplitItem src={img4} />
      </section>

      <Container style={styles.fullBlock}>
        <Grid>
          <Text style={{ gridColumn: '2/8' }} variant="h3">
            What does being trendy mean to you?
          </Text>
          <Text
            style={{ gridColumn: '10/16', padding: 0 }}
            variant="h4"
            // color="text"
          >
            The product is targeted at a 30-40 year old audience and our team
            instantly blew past all the typical templates for these kinds of
            sites. The idea was to develop an information portal that reflected
            the most happening design trends and where you can find content
            relevant to you.
          </Text>
        </Grid>
      </Container>
      {/* <section style={styles.fullBlock}>
        <SplitItem src={img4} />
      </section> */}
      <SplitShow style={styles.fullBlock} />

      {/* <Container style={styles.fullBlock}>
        <Grid></Grid>
      </Container> */}
      <Container style={styles.fullBlock}>
        <Grid>
          <Text style={{ gridColumn: '2/9' }} variant="h1" textAlign="left">
            Design isn’t
            <br /> just details
          </Text>
          <Flex
            backgroundColor="subtleBackground"
            height="85vh"
            style={styles.fullBlock}
          />
        </Grid>
      </Container>
    </ProductPageTemplate>
  )
}
