import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import Link from 'components/Link'

import Globe from '@iconscout/react-unicons/icons/uil-globe'
import IconButton from 'components/IconButton'

export default function LangSwitcher({ ...props }) {
  return (
    <IconButton>
      <span
        role="img"
        aria-label="language"
        style={{
          fontSize: 24,
          width: 32,
          height: 32,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🇷🇺
      </span>
      {/* <Globe /> */}
    </IconButton>
  )
}

/*
    <Flex alignItems="center" {...props}>
      <Link p="2">En</Link>
      <Link p="2" color="text" fontWeight="bold">
        Ru
      </Link>
      <Link p="2" color="text">
        Cn
      </Link>
      <Link p="2" color="text">
        Sp
      </Link>
    </Flex>*/
