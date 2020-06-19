import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import Link from 'components/Link'

export default function LangSwitcher({ ...props }) {
  return (
    <Flex alignItems="center" {...props}>
      <Link p="2">En</Link>
      <Link p="2" color="text" fontWeight="bold">
        Ru
      </Link>
    </Flex>
  )
}
