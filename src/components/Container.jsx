import styled from 'styled-components'
import { space, color } from 'styled-system'
import gridColumns from 'utils/gridColumns'

export default styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-m);
  ${space};
  ${color};
  ${gridColumns};
`
