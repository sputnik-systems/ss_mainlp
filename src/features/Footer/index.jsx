import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Text from 'components/Text'

const FooterBody = styled(Flex)`
  height: var(--footer-height);
  /* background: var(--color-muted-background); */
  /* color: var(--color-sputnik-pink-dark); */
  /* box-shadow: inset rgba(0, 0, 0, 0.2) 0px 35px 50px -30px; */
  /* box-shadow: inset 0px 10px 50px rgba(0, 0, 0, 0.1); */
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
`

export default function Footer({ ...props }) {
  return (
    <FooterBody as="footer" alignItems="center" justifyContent="center">
      <Text>Footer</Text>
    </FooterBody>
  )
}
