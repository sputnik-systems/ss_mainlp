import React from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'
import Logo from 'assets/logoInline.svg'
import { Image } from 'rebass/styled-components'

const Body = styled(Nav)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
`

export default function HomeNav({ ...props }) {
  return (
    <Body
      left={
        <>
          <Image src={Logo} ml="2" sx={{ height: '100%' }} />
        </>
      }
    ></Body>
  )
}
