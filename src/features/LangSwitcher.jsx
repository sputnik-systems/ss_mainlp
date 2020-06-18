import React from 'react'
import { Flex, Text, Link } from 'rebass/styled-components'

export default function LangSwitcher({ ...props }) {
  return (
    <Flex alignItems="center" {...props}>
      <Link p="2" fontWeight="bold">
        En
      </Link>
      <Link p="2">Ru</Link>
    </Flex>
  )
}
