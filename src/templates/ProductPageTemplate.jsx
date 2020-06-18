import React from 'react'
import styled from 'styled-components'

const Page = styled.main`
  min-height: 400vh;
  position: relative;
  z-index: 2;
  background: var(--color-background);
`

const Nav = styled.nav``

export default function ProductPageTemplate({ children, nav, ...props }) {
  return (
    <Page>
      {nav}
      {children}
    </Page>
  )
}
