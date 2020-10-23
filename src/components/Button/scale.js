import { css } from 'styled-components'

export const scaleOnHover = css`
  --bug: fix;

  position: relative;

  cursor: none;

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
