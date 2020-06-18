import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'

const Page = styled.main`
  min-height: 400vh;
  position: relative;
  z-index: 2;
  background: var(--color-background);
`

const BgLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // background: $section-bg;
  top: 0;
  left: 0;
  z-index: 0;

  .line {
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: var(--color-subtle-background);
    top: 0;
    z-index: 0;

    &-1 {
      left: calc(20% - 0.5px);
    }
    &-2 {
      left: calc(40% - 0.5px);
    }
    &-3 {
      left: calc(60% - 0.5px);
    }
    &-4 {
      left: calc(80% - 0.5px);
    }
  }
`

export default function ProductPageTemplate({ children, nav, ...props }) {
  return (
    <Page as="main">
      <BgLines>
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
        <div className="line line-4" />
      </BgLines>
      {nav}
      <Grid style={{ gridAutoRows: 'max-content' }}>{children}</Grid>
    </Page>
  )
}
