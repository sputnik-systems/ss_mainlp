import styled, { css } from 'styled-components'

import { space, color, layout, variant, typography } from 'styled-system'

import buttonColors from 'utils/buttonColors'
import buttonSizes from 'utils/buttonSizes'

import gridColumns from 'utils/gridColumns'

const nav = css`
  --bug: fix;
  position: relative;
  text-decoration: none;
  padding: var(--spacing-s) var(--spacing-m);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-regular);

  &:hover {
    color: var(--color-primary);
  }

  &::before {
    content: ' ';
    background: var(--color-blurred-background);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    border-radius: var(--br-m);
    left: 0;
    top: 0;
    transition: var(--hover-transition);
  }

  &:hover {
    &::before {
      opacity: 1;
      background: var(--color-subtle-background);

      /* transform: scale(var(--hover-scale)); */
    }
    & > svg {
      color: var(--color-text);
    }
  }
`

const store = css`
  --bug: fix;
  align-items: center;
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-demi);
  font-size: 20px;
  border-radius: var(--br-m);
  border: 1px solid var(--color-subtle-background);
  padding: var(--spacing-m) var(--spacing-l);
  width: 190px;
  color: var(--color-text);
  border-color: var(--color-subtle-background-darker);
  transition: var(--default-transition);

  & > svg,
  & > img {
    margin-right: var(--spacing-l);
    width: 20px;
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
  color: var(--button-secondary);
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
    background: var(--button-primary);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: var(--br-m);
    left: 0;
    top: 0;
  }

  &:hover {
    color: var(--button-secondary);

    &::before {
      transform: scale(var(--hover-scale));
      background: var(--button-hover);
    }
  }

  &:active {
    &::before {
      transform: scale(var(--scale-active));
    }
  }
`

const text = css`
  --bug: fix;

  ${nav};
  font-weight: var(--font-weight-regular);
  background: none;
  border: none;
`

const card = css`
  --bug: fix;
  ${contained};
  padding: var(--spacing-s) var(--spacing-xl);
  flex-shrink: 0;
  border-radius: var(--br-m);
  font-size: inherit;
  font-weight: 500;
  margin-top: 2rem;

  &:hover {
    /* color: var(--color-primary-contrast); */
    color: ${(p) => p.color || 'inherit'};

    &::before {
      background: ${(p) => p.bg || 'inherit'};
    }
  }
`

const cta = css`
  --bug: fix;

  color: var(--button-primary);
  font-weight: var(--font-weight-regular);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--button-hover);
  }
`

const inline = css`
  --bug: fix;

  color: inherit;
  border-bottom: 2px solid;
  padding: 0 0 2px 0;
  border-radius: unset;

  &:hover {
    color: var(--button-primary);
  }
`

// const footer = css`
//   --bug: fix;

//   text-align: left;
//   line-height: 2;
// `

const social = css`
  padding: 0;
  border-radius: 0;
  background: var(--button-primary);
  color: var(--button-secondary);

  font-size: 22px;
  &:hover {
    background: var(--button-primary);
    color: var(--button-secondary);
    opacity: 0.7;
  }
`

export default styled.button`
  appearance: none;
  outline: none;
  background: var(--color-background);
  border-radius: var(--br-m);
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  padding: var(--spacing-s) var(--spacing-l);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight-demi);
  user-select: none;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--default-transition);

  --button-primary: var(--color-primary);
  --button-secondary: var(--color-primary-contrast);
  --button-hover: var(--color-primary-darker);

  &:hover {
    color: var(--button-hover);
  }

  ${(p) =>
    p.disabled &&
    css`
      --button-primary: var(--color-text-secondary);
      --button-secondary: var(--color-text-secondary);
      --button-hover: var(--color-text-secondary);
      cursor: not-allowed;
      opacity: 0.7;
      pointer-events: none;
    `}

  ${gridColumns};
  ${buttonSizes};
  ${color};
  ${buttonColors};
  ${typography};
  ${variant({
    variants: {
      plain,
      contained,
      store,
      card,
      text,
      cta,
      nav,
      inline,
      social,
    },
  })};
  ${layout};
  ${space};
`

// export default Text
