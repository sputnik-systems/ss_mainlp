import React from 'react'
import styled from 'styled-components'
import LangSwitcher from 'features/LangSwitcher'
import Nav from 'components/Nav'
import IconButton from 'components/IconButton'

import { Link, Flex } from 'rebass/styled-components'
import User from '@iconscout/react-unicons/icons/uil-user'
import Search from '@iconscout/react-unicons/icons/uil-search'

export default function Navbar({ ...props }) {
  return (
    <Nav
      as="nav"
      left={<LangSwitcher />}
      right={
        <>
          <Flex alignItems="center">
            <Link p="2" variant="nav" href="tel://88005553535">
              8 800 555 35 35
            </Link>
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <User />
            </IconButton>
          </Flex>
        </>
      }
    ></Nav>
  )
}
