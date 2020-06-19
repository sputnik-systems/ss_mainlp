import { Text } from 'rebass/styled-components'
import styled, { css } from 'styled-components'
import { space, color, layout, variant } from 'styled-system'

const ifH1 = css`
  --bug: fix;
  color: var(--color-text);
  font-size: 80px;
  letter-spacing: -3px;
  line-height: 1;
  font-weight: var(--font-weight-demi);
  text-align: center;
  font-family: var(--font-family);
`

export default styled('p')`
  ${variant({
    variants: {
      h1: ifH1,
    },
  })}

  margin:0;
  ${space};
`
