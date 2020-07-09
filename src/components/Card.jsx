import styled from 'styled-components'
import { space, color, layout, typography } from 'styled-system'
import gridColumns from 'utils/gridColumns'

export default styled.div`
  border-radius: var(--br-l);
  border-color: var(--color-subtle-background-darker);
  border-style: solid;
  border-width: ${(p) => (p.border ? '1px' : 0)};

  ${space};
  ${color};
  ${layout};
  ${typography};
  ${gridColumns};
`
