import styled, { css } from 'styled-components'

import { space, color, layout, variant } from 'styled-system'

const cta = css`
  --bug: fix;

  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 1.4px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--color-primary-lighter);
  }
`

export default styled('a')`
  color: var(--color-text-secondary);
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--color-text);
  }

  ${space};
  ${color};
  ${layout};
  ${variant({
    variants: {
      cta,
    },
  })}
`

// export default Text
