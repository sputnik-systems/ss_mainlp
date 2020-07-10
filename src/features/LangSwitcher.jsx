import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import Link from 'components/Link'

import Globe from '@iconscout/react-unicons/icons/uil-globe'
import IconButton from 'components/IconButton'
import Button from 'components/Button'
import Emoji from 'components/Emoji'

import Select from 'components/Select'

const shoe_list = ['Prada', 'Jimmy Choos', 'Nike', 'Adidas']
const options = [
  { value: 'ru', label: '🇷🇺 Русский' },
  { value: 'en', label: '🇬🇧 English' },
  { value: 'sp', label: '🇪🇸 Español ' },
]
export default function LangSwitcher({ ...props }) {
  return (
    <Select
      options={options}
      isMulti={false}
      isClearable={false}
      isSearchable={false}
      width="200px"
      defaultValue={{ value: 'ru', label: '🇷🇺 Русский' }}
    />
  )
}

// <Link variant="nav">
/* <Emoji emote={'🇷🇺'} /> Русский */

// {/* </Link> */}
