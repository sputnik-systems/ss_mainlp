import React, { useRef, useCallback } from 'react'
import styled from 'styled-components'
import { useResizeObserver } from '@asyarb/use-resize-observer'

import Grid from 'components/Grid'

const Page = styled.main`
  --gap: calc(var(--spacing-xxl) * 2);

  min-height: 100vh;
  position: relative;
  z-index: 2;
  background: var(--color-background);
  box-shadow: 0 50px 50px -50px rgba(0, 0, 0, 0.1);
  transition: var(--default-transition);
  padding-bottom: var(--gap);
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

const StyledGrid = styled(Grid)`
  grid-auto-rows: max-content;
  z-index: 1;
  position: relative;
  grid-row-gap: var(--gap);

`

function ProductPageTemplate({
  children,
  nav,
  lines = false,
  gridProps = {},
  ...props
}) {
  const ref = useRef()
  const handleResize = useCallback(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])
  useResizeObserver({
    ref,
    callback: handleResize,
  })

  return (
    <Page as="main" {...props}>
      {lines && (
        <BgLines>
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
          <div className="line line-4" />
        </BgLines>
      )}

      {nav}
      <StyledGrid {...gridProps} ref={ref}>
        {children}
      </StyledGrid>
    </Page>
  )
}

export default ProductPageTemplate
