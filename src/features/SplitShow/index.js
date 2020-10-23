import React from 'react'
import styled from 'styled-components'

import Grid from 'components/Grid'
import Flex from 'components/Flex'
import Text from 'components/Text'
import SplitItem from './SplitItem'
import SplitText from './SplitText'

const Col = styled.div`
  flex: 1;
  & > * {
    /* margin: 34px 17px; */

    margin-right: var(--spacing-m);
    margin-left: var(--spacing-m);

    &:not(:first-child) {
      margin-top: var(--spacing-xxl);
      margin-bottom: var(--spacing-xxl);
    }
  }
`

export default function SplitShow({ left, right, ...props }) {
  return (
    <Grid {...props}>
      {left?.map(({ caption, ...i }, idx) => (
        <Flex
          column="heroLeft"
          flexDirection={idx % 2 === 0 ? 'row-reverse' : 'row'}
          alignItems="center"
          justifyContent="flex-start"
        >
          <SplitItem {...i} width="40vw" fit="contain" />
          <Text as="caption" variant="h4" textAlign="center" p="6">
            {caption}
          </Text>
        </Flex>
      ))}
    </Grid>
  )
}
// export default function SplitShow({ left, right, ...props }) {
//   return (
//     <Flex {...props}>
//       <Col>
//         {left?.map((i) => (
//           <SplitItem {...i} column="padLeft" key={i.src} />
//         ))}
//       </Col>
//       <Col
//         style={{
//           marginTop: 'calc(var(--spacing-xxl) * 2)',
//         }}
//       >
//         {right?.map((i) => (
//           <SplitItem {...i} column="padRight" key={i.src} />
//         ))}
//       </Col>
//     </Flex>
//   )
// }
