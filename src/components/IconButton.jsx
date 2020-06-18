import styled from 'styled-components'

export default styled.button`
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.15;
  text-transform: none;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  flex: 0 0 auto;
  padding: 12px;
  padding: var(--spacing-s);
  overflow: visible;
  /* font-size: 1.6071428571428572rem; */
  text-align: center;
  border-radius: 50%;
  color: inherit;

  & > svg,
  &::before {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  & > svg {
    color: var(--color-text-secondary);
  }

  &::before {
    content: ' ';
    background: var(--color-muted-background);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    border-radius: var(--br-l);
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(1.1);
    }
    & > svg {
      color: var(--color-text);
    }
  }
`
