import React from 'react'
import LangSwitcher from 'features/LangSwitcher'
import Nav from 'components/Nav'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import Flex from 'components/Flex'

import Search from '@iconscout/react-unicons/icons/uil-search'
import User from '@iconscout/react-unicons/icons/uil-user'

export default function Navbar({ ...props }) {
  return (
    <Nav
      border
      left={<LangSwitcher />}
      right={
        <>
          <Link p="2" variant="nav" href="tel://88005553535">
            8 800 555 35 35
          </Link>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <User />
          </IconButton>
        </>
      }
    />
  )
}
