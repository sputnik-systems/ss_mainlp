import { createGlobalStyle, css } from 'styled-components'
import defaultTheme from './default'
import darkTheme from './dark'
import FuturaPTLight from 'assets/fonts/FuturaPT-Light.woff'
import FuturaPTBook from 'assets/fonts/FuturaPT-Book.woff'
import FuturaPTDemi from 'assets/fonts/FuturaPT-Demi.woff'
import FuturaPTMedium from 'assets/fonts/FuturaPT-Medium.woff'
import FuturaPTBold from 'assets/fonts/FuturaPT-Bold.woff'

const global = css`
  @font-face {
    font-family: 'Futura PT';
    font-weight: 300;
    src: url(${FuturaPTLight}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 400;
    src: url(${FuturaPTBook}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 500;
    src: url(${FuturaPTMedium}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 600;
    src: url(${FuturaPTDemi}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 700;
    src: url(${FuturaPTBold}) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #modal-root {
    position: relative;
    z-index: 1000;
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
      /* background-color: var(--color-subtle-background); */
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-text);
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
    --hover-scale: 1.07;
    --scale-active: 0.96;
    --hover-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    --default-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  body[data-theme='dark'] {
    ${darkTheme};
  }

  ${global};
`

export default GlobalStyle
