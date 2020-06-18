import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Flex from 'components/Flex'
import Text from 'components/Text'
import sk from 'assets/img/sk.jpg'

const Card = styled.section`
  --r-globalnav-height: 44px;
  --r-globalnav-segmentbar-height: 0;
  --r-globalnav-viewport-large-min-width: 1024px;
  --r-globalnav-viewport-large-max-width: 1441px;
  --r-globalnav-viewport-large-query: (min-width: 1024px);
  --r-globalnav-viewport-medium-min-width: 768px;
  --r-globalnav-viewport-medium-max-width: 1023px;
  --r-globalnav-viewport-medium-query: (max-width: 1023px);
  --r-globalnav-viewport-small-min-width: 420px;
  --r-globalnav-viewport-small-max-width: 767px;
  --r-globalnav-viewport-small-query: (max-width: 767px);
  --r-globalnav-viewport-xsmall-min-width: 320px;
  --r-globalnav-viewport-xsmall-max-width: 419px;
  --r-globalnav-viewport-xsmall-query: (max-width: 419px);
  quotes: '“' '”';
  --global-nav-segmentbar-height: 0px;
  --global-nav-localeswitcher-height: 0px;
  --global-nav-main-height: 44px;
  --global-nav-collective-height: 44px;

  --content-height: 650px;

  --gutter-width: 12px;
  --gutter-half-width: 6px;
  --gutter-and-half-width: 18px;
  --gutter-color: #fff;
  --double-edge-border-width: 0px;
  --edge-border-width: 0px;
  --background-color: #fbfbfd;
  --text-color: #1d1d1f;
  --edge-border-width-fallback: 0px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  color: var(--text-color);
  background-color: var(--background-color);
  padding-top: var(--global-nav-collective-height);
  height: calc(var(--content-height) + var(--global-nav-collective-height));

  /* background-image: url(${sk});
  background-size: cover; */

  background: var(--color-subtle-background);
`

const CtaLinks = styled(Flex)``

export default function ProductCard({ style, ...props }) {
  return (
    <Card style={{ ...style }} {...props}>
      <Text variant="h1">Народный домофон Спутник</Text>

      <CtaLinks alignItems="center" justifyContent="center">
        <Link variant="cta" mr="2">
          Подробнее
        </Link>
        <Link variant="cta">Заказать установку</Link>
      </CtaLinks>
    </Card>
  )
}
