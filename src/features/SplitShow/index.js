import React from 'react'
import styled from 'styled-components'

import Flex from 'components/Flex'
import Container from 'components/Container'
import SplitItem from './SplitItem'

import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import img5 from './img5.jpg'

const Col = styled.div`
  flex: 1;
  & > * {
    margin: 34px 17px;
  }
`

export default function SplitShow({ ...props }) {
  return (
    <Container {...props} as="section">
      <Flex>
        <Col>
          <SplitItem
            src={img2}
            caption="Interactive carousel of new products with links to sources."
            style={{ gridColumn: '2/9' }}
          />
          <SplitItem
            src={img3}
            caption="Color coded blocks for different categories."
            style={{ gridColumn: '2/9' }}
          />
        </Col>
        <Col style={{ marginTop: 'calc(var(--spacing-xxl) * 2)' }}>
          <SplitItem src={img5} style={{ gridColumn: '9/16' }} />
          <SplitItem
            src={img1}
            caption="Test caption."
            style={{ gridColumn: '2/9' }}
          />
        </Col>
      </Flex>
    </Container>
  )
}
