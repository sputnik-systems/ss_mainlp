import styled from 'styled-components'
import Text from 'components/Text'

const SplitText = styled(Text).attrs(() => ({ as: 'caption' }))`
  /* padding: 34px 0 53px 0; */
  max-width: 284px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: block;
  font-size: 24px;
`
export default SplitText
