import { Text } from 'rebass/styled-components'
import styled, { css } from 'styled-components'
import { space, color, layout, variant, typography } from 'styled-system'
import gridColumns from 'utils/gridColumns'

export const h1 = css`
  --bug: fix;
  color: var(--color-text);

  line-height: 1;
  font-weight: var(--font-weight-demi);
  text-align: center;
  font-family: var(--font-family);
  font-size: 5rem;
  letter-spacing: -0.2rem;
`

export const h2 = css`
  --bug: fix;
  color: var(--color-text);
  line-height: 1;
  font-weight: var(--font-weight-demi);
  text-align: left;
  font-family: var(--font-family);

  /* font-size: 10vh; */
  font-size: 10vh;
  letter-spacing: -0.15rem;
  /* font-size: 3.125rem;
  letter-spacing: -0.15rem; */
`

export const hero = css`
  ${h1};
  font-size: 114px;
  font-weight: var(--font-weight-light);
`

export const h3 = css`
  --bug: fix;

  font-size: 3.2rem;
  line-height: 3.6rem;
  font-weight: var(--font-weight-regular);
`

export const h4 = css`
  --bug: fix;
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  font-family: var(--font-family-secondary);
  padding-top: var(--spacing-xl);
`

export const h5 = css`
  --bug: fix;

  /* font-size: 2rem;
  line-height: 2.6rem; */
  color: var(--color-text-secondary);
  font-family: var(--font-family-secondary);
  font-size: 1.25rem;
  line-height: 1.75rem;
  /* padding-top: 16px; */
  padding-top: var(--spacing-xl);
`

export const h6 = css`
  --bug: fix;

  font-size: 1.625rem;
  line-height: 2.125rem;
  font-weight: var(--font-weight-demi);
`

export default styled('p')`
  margin: 0;
  text-align: left;
  white-space: pre-line;

  ${variant({
    variants: {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hero,
    },
  })}
  ${layout};
  ${space};
  ${typography};
  ${color};
  ${gridColumns};
`
