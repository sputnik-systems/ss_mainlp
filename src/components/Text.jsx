import { Text } from 'rebass/styled-components'
import styled, { css } from 'styled-components'
import { space, color, layout, variant, typography } from 'styled-system'
import gridColumns from 'utils/gridColumns'

const h1 = css`
  --bug: fix;
  color: var(--color-text);
  font-size: 80px;
  letter-spacing: -3px;
  line-height: 1;
  font-weight: var(--font-weight-demi);
  text-align: center;
  font-family: var(--font-family);
`

const h2 = css`
  --bug: fix;
  color: var(--color-text);
  font-size: 72px;
  letter-spacing: -2px;
  line-height: 1;
  font-weight: var(--font-weight-demi);
  text-align: left;
  font-family: var(--font-family);
`

const hero = css`
  ${h1};
  font-size: 114px;
  font-weight: var(--font-weight-light);
`

const h3 = css`
  --bug: fix;

  font-size: 3.2rem;
  line-height: 3.6rem;
`

const h4 = css`
  --bug: fix;

  font-size: 28px;
  padding-top: 24px;
  line-height: 1.4;
  color: var(--color-text-secondary);
  font-family: var(--font-family-secondary);
  font-size: 22px;
`

export default styled('p')`
  margin: 0;
  text-align: left;

  ${variant({
    variants: {
      h1,
      h2,
      h3,
      h4,
      hero,
    },
  })}

  ${space};
  ${typography};
  ${color};
  ${gridColumns};
`
