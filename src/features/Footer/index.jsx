import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'

const FooterBody = styled(Flex)`
  height: var(--footer-height);
  background: var(--color-sputnik-pink);
  color: var(--color-sputnik-pink-dark);
  box-shadow: inset 0px 10px 50px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
`

export default function Footer({ ...props }) {
  return (
    <FooterBody as="footer" alignItems="center" justifyContent="center">
      FooterBody
    </FooterBody>
  )
}
