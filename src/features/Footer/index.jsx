import React from 'react'
import styled from 'styled-components'

const FooterBody = styled.footer`
  height: var(--footer-height);
  background: var(--color-muted-background);
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
`

export default function Footer({ ...props }) {
  return <FooterBody>FooterBody</FooterBody>
}
