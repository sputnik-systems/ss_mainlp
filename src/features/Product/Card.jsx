import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Fade from 'components/Fade'
import Flex from 'components/Flex'
import Text from 'components/Text'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as RouterLink } from 'react-router-dom'

import { UilArrowRight } from '@iconscout/react-unicons'

import iphone from 'assets/img/iphone.jpg'

const Card = styled(motion.section)`
  --color-subtle-background: #fafafa;

  quotes: '“' '”';

  --global-nav-collective-height: 44px;
  --content-height: 650px;

  position: relative;
  width: 100%;
  color: var(--color-text);
  background-color: var(--background-color);
  padding-top: var(--global-nav-collective-height);
  height: calc(var(--content-height) + var(--global-nav-collective-height));
  background-color: var(--color-subtle-background);

  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  display: block;
  text-decoration: none;
`

const CtaLinks = styled(Flex)``

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  -webkit-box-flex: 1;
  flex-grow: 1;
  pointer-events: none;
`

const Image = styled.figure`
  z-index: 1;
  position: absolute;
  border: 0;
  margin: 0;
  padding: 0;
  left: calc(50% + 0px);
  right: auto;
  bottom: 0px;
  top: auto;
  transform: translatex(-50%);
  width: 2132px;
  height: 433px;
  background-size: 2132px 433px;
  background-repeat: no-repeat;
  background-image: url(${iphone});
  background-position: bottom center;
`

export default function ProductCard({
  title,
  subtitle,
  cta,
  ctaPrimary,
  ctaSecondary,
  disabled,
  style,
  ...props
}) {
  const [ref, inView] = useInView({
    threshold: 0,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <RouterLink
      style={{
        textDecoration: 'none',
        ...style,
        pointerEvents: disabled ? 'none' : 'all',
      }}
      disabled={disabled}
      to={ctaSecondary}
    >
      <Card
        disabled={disabled}
        animate={controls}
        initial="hidden"
        style={{ pointerEvents: 'none' }}
        {...props}
        ref={ref}
      >
        <Fade>
          <Text variant="h1" textAlign="center">
            {title}
          </Text>
          <Text variant="h4" textAlign="center">
            {subtitle}
          </Text>

          <CtaLinks mt="6" alignItems="center" justifyContent="center">
            {disabled ? (
              <Link disabled variant="cta" mr="5" href={ctaSecondary}>
                Скоро ⏱
              </Link>
            ) : (
              <>
                <Link variant="cta" mr="5" href={ctaSecondary}>
                  Подробнее
                  <UilArrowRight />
                </Link>
                <Link variant="cta" href={ctaPrimary}>
                  {cta}
                  <UilArrowRight />
                </Link>
              </>
            )}
          </CtaLinks>
        </Fade>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
      </Card>
    </RouterLink>
  )
}
