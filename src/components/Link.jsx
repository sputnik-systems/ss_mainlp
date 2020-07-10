import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { space, color, layout, variant, typography } from 'styled-system'

const inline = css`
  --bug: fix;

  color: inherit;
  border-bottom: 2px solid;
  padding-bottom: 2px;
`

const footer = css`
  --bug: fix;

  text-align: left;
  line-height: 2;
`

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
  /* justify-content: center; */

  &:hover {
    color: var(--color-primary-lighter);
  }
`

export const nav = css`
  --bug: fix;
  position: relative;
  text-decoration: none;
  padding: var(--spacing-s) var(--spacing-m);
  color: var(--color-text-secondary);
  /* font-weight: var(--font-weight-demi); */

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

  &:active {
    &::before {
      transform: scale(0.96);
    }
  }
`
const Component = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  user-select: none;

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
      footer,
      inline,
    },
  })}
`

export default ({ internal = false, ...props }) => (
  <Component as={internal ? Link : 'a'} {...props} />
)

// export default Text
