import styled from 'styled-components'
import device from './Device'

const ResArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`

export default ResArea
