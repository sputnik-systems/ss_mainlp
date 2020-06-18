import { createGlobalStyle, css } from 'styled-components'
import defaultTheme from './default'

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
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
    background: var(--color-background);
    font-size: var(--font-size);
  }

  code {
    font-family: var(--font-family-mono);
  }
`

const GlobalStyle = createGlobalStyle`

  :root {
    ${defaultTheme};
  }

  ${global};
`

export default GlobalStyle
