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

  &:active {
    transform: scale(var(--scale-active));
  }

  &:hover:not(:active):not(:focus) {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  }
`

const contained = css`
  --bug: fix;
  position: relative;
  color: var(--color-primary-contrast);
  background: transparent;
  font-weight: var(--font-weight-demi);
  /* font-size: var(--font-size); */
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: none;

  transition: all 0.25s ease;

  &::before {
    transition: var(--hover-transition);

    content: ' ';
    background: var(--color-primary);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: var(--br-l);
    left: 0;
    top: 0;
  }

  &:hover {
    color: var(--color-primary-contrast);

    &::before {
      transform: scale(var(--hover-scale));
      background: var(--color-primary-lighter);
    }
  }

  &:active {
    &::before {
      transform: scale(var(--scale-active));
    }
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
  font-family: var(--font-family);
  font-size: 15px;

  &:hover {
    color: var(--color-primary);
  }

  ${space};
  ${color};
  ${layout};
  ${typography};
  ${variant({
    variants: {
      plain,
      contained,
    },
  })}
`

// export default Text
