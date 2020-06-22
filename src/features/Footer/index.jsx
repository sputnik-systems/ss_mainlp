import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Grid from 'components/Grid'
import Container from 'components/Container'
import Text from 'components/Text'

const FooterBody = styled(Grid)`
  height: var(--footer-height);
  /* background: var(--color-sputnik-pink); */
  /* color: var(--color-sputnik-pink-dark); */
  /* box-shadow: inset rgba(0, 0, 0, 0.2) 0px 35px 50px -30px; */
  /* box-shadow: inset 0px 10px 50px rgba(0, 0, 0, 0.1); */
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  padding-top: var(--spacing-l);
  padding-bottom: var(--spacing-l);
  align-items: center;
`

export default function Footer({ ...props }) {
  return (
    <FooterBody as="footer">
      <Grid contained style={{ gridColumn: '1/17' }}>
        <Flex flexDirection="column" style={{ gridColumn: '1/4' }}>
          <Text variant="h3" pb="3">
            About
          </Text>
          <Link variant="footer">О Компании</Link>
          <Link variant="footer">Обратная связь</Link>
          <Link variant="footer">Идеи функций</Link>
        </Flex>
        <Flex flexDirection="column" style={{ gridColumn: '5/9' }}>
          <Text variant="h3" pb="3">
            Contact us
          </Text>
          <Link variant="footer">О Компании</Link>
          <Link variant="footer">Обратная связь</Link>
          <Link variant="footer">Идеи функций</Link>
        </Flex>
        <Flex flexDirection="column" style={{ gridColumn: '10/17' }}>
          <Text variant="h3" pb="3">
            Skolkovo
          </Text>
        </Flex>
      </Grid>
    </FooterBody>
  )
}
