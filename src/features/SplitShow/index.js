import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import Container from 'components/Container'
import SplitItem from './SplitItem'

const Col = styled.div`
  flex: 1;
  & > * {
    margin: 34px 17px;
  }
`

export default function SplitShow({ left, right, ...props }) {
  return (
    <Container {...props} as="section">
      <Flex>
        <Col>
          {left?.map((i) => (
            <SplitItem {...i} column="padLeft" key={i.src} />
          ))}
        </Col>
        <Col style={{ marginTop: 'calc(var(--spacing-xxl) * 2)' }}>
          {right?.map((i) => (
            <SplitItem {...i} column="padRight" key={i.src} />
          ))}
        </Col>
      </Flex>
    </Container>
  )
}
