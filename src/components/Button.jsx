import styled, { css } from 'styled-components'

import { space, color, layout, variant, typography } from 'styled-system'

const plain = css`
  --bug: fix;

  color: var(--color-primary);
  font-weight: var(--font-weight-regular);
  /* font-size: var(--font-size); */
  font-size: 16px;
  display: inline-flex;
  align-items: center;

  transition: box-shadow 0.2s ease;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-subtle-background);

  /* &:hover {
    color: var(--color-primary-lighter);
  } */

  &:hover:not(:active):not(:focus) {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  }
`

export default styled('button')`
  appearance: none;
  outline: none;
  background: var(--color-background);
  border-radius: var(--br-l);
  border: 1px solid var(--color-subtle-background);
  color: var(--color-text-secondary);
  padding: var(--spacing-s) var(--spacing-m);
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }

  &:active {
    transform: scale(0.98);
  }

  ${space};
  ${color};
  ${layout};
  ${typography};
  ${variant({
    variants: {
      plain,
    },
  })}
`

// export default Text
