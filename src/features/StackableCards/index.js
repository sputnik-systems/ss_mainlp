import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Card from './StackableCard'

const Wrapper = styled(Flex)`
  flex-direction: column;
`

export default function StackableCards({ cards, ...props }) {
  return (
    <Wrapper {...props}>
      {cards?.map((card, idx) => (
        <Card {...card} idx={idx} key={idx} />
      ))}
    </Wrapper>
  )
}
