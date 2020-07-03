import styled, { css } from 'styled-components'

import { space, color, layout, variant, typography } from 'styled-system'

const store = css`
  --bug: fix;
  align-items: center;
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-demi);
  font-size: 20px;
  border-radius: var(--br-m);
  /* width: 172px;
  height:52px */
  padding: var(--spacing-m) var(--spacing-l);
  width: 190px;
  color: var(--color-text);
  border-color: var(--color-subtle-background-darker);
  transition: var(--default-transition);

  & > svg {
    margin-right: var(--spacing-l);
  }

  & > span {
    flex: 1;
    justify-content: center;
  }

  &:hover {
    box-shadow: var(--shadow-main);
  }
`

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
  font-weight: var(--font-weight-demi);
  /* font-size: var(--font-size); */
  display: inline-flex;
  align-items: center;
  cursor: none;

  transition: all 0.25s ease;

  background: transparent;
  border: none;
  &::before {
    transition: var(--hover-transition);
    content: ' ';
    background: var(--color-primary);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: var(--br-m);
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
  border-radius: var(--br-m);
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
      store,
    },
  })}
`

// export default Text
