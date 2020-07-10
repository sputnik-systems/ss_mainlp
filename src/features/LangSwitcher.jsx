import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import Link from 'components/Link'

import Globe from '@iconscout/react-unicons/icons/uil-globe'
import IconButton from 'components/IconButton'
import Button from 'components/Button'
import Emoji from 'components/Emoji'

export default function LangSwitcher({ ...props }) {
  return (
    <Link variant="nav">
      <Emoji emote={'🇷🇺'} /> Русский
    </Link>
  )
}
