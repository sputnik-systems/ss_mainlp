import styled, { css } from 'styled-components'

import { space, color, layout, variant, typography } from 'styled-system'

const cta = css`
  --bug: fix;

  color: var(--color-primary);
  font-weight: var(--font-weight-regular);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;

  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--color-primary-lighter);
  }
`

const nav = css`
  --bug: fix;
  position: relative;

  text-decoration: none;
  color: var(--color-text-secondary);
  &:hover {
    color: var(--color-primary);
  }

  ,
  &::before {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &::before {
    content: ' ';
    background: var(--color-subtle-background);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    border-radius: var(--br-l);
    left: 0;
    top: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(var(--hover-scale));
    }
    & > svg {
      color: var(--color-text);
    }
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
  ${typography};
  ${variant({
    variants: {
      cta,
      nav,
    },
  })}
`

// export default Text
