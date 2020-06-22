import { createGlobalStyle, css } from 'styled-components'
import defaultTheme from './default'
import darkTheme from './dark'

const global = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: var(--font-weight-regular);
    color: var(--color-text);
    background: var(--color-background);
    font-size: var(--font-size);
  }

  code {
    font-family: var(--font-family-mono);
  }

  @media (orientation: landscape) {
    ::-webkit-scrollbar {
      width: 8px;
      background-color: var(--color-subtle-background);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-gray-400);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 3px;
    }
  }
`

const GlobalStyle = createGlobalStyle`

  :root {
    ${defaultTheme};
    --hover-scale: 1.05;
    --scale-active: 0.96;
    --hover-transition: all 0.25s ease;
    --default-transition: all 0.25s ease;
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  ${global};
`

export default GlobalStyle
