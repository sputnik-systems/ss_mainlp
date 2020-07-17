import { Image } from 'rebass/styled-components'
import styled from 'styled-components'
import gridColumns from 'utils/gridColumns'

export default styled(Image)`
  ${gridColumns};
  object-fit: ${(p) => p.fit || 'unset'};
`
