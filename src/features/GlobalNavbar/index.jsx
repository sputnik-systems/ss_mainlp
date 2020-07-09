import React from 'react'
import LangSwitcher from 'features/LangSwitcher'
import Nav from 'components/Nav'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import Button from 'components/Button'
import Flex from 'components/Flex'

import Search from '@iconscout/react-unicons/icons/uil-search'
import User from '@iconscout/react-unicons/icons/uil-user'
import MotionLogo from 'components/MotionLogo'
import logoPath from 'features/Home/logoPath'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar({ ...props }) {
  return (
    <Nav
      // mt="6"
      style={{ zIndex: 2 }}
      height="60px"
      left={
        <>
          <RouterLink to="/" style={{ height: '100%' }}>
            <MotionLogo
              path={logoPath}
              style={{
                marginLeft: 'var(--spacing-xs)',
                height: '100%',
              }}
            />
          </RouterLink>
        </>
      }
      right={
        <>
          <Link variant="nav">Для бизнеса</Link>
          <LangSwitcher />

          <Button variant="contained" ml="3">
            Войти
          </Button>
          {/* <IconButton>
            <Search />
          </IconButton> */}
          {/* <IconButton>
            <User />
          </IconButton> */}
        </>
      }
    />
  )
}
