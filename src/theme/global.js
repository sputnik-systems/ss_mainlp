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
    --filter-backdrop: blur(20px) saturate(180%);

    --column-full: 1/17;
    --column-left: 1/8;
    --column-bigLeft: 1/9;
    --column-right: 10/17;
    --column-bigRight: 9/17;
    --column-center: 2/16;
    --column-padLeft: 2/8;
    --column-padRight: 10/16;
    --column-heroLeft: 2/11;
    --column-heroRight: 11/16;
    --column-productLeft: 2/9;
    --column-productRight: 9/16;

    font-size: var(--font-size);
  }



  body[data-theme='dark'] {
    ${darkTheme};
  }

  ${global};


  @media screen and (max-width: 768px) {
    :root {
      --column-full: 1/17;
      --column-left: 1/17;
      --column-bigLeft: 1/17;
      --column-right: 1/17;
      --column-bigRight: 1/17;
      --column-center: 1/17;
      --column-padLeft: 1/17;
      --column-padRight: 1/17;
      --column-heroLeft: 1/17;
      --column-heroRight: 1/17;
      --column-productLeft: 1/17;
      --column-productRight: 1/17;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 468px) {
    :root {
      --column-full: 1/17;
      --column-left: 1/17;
      --column-bigLeft: 1/17;
      --column-right: 1/17;
      --column-bigRight: 1/17;
      --column-center: 1/17;
      --column-padLeft: 1/17;
      --column-padRight: 1/17;
      --column-heroLeft: 1/17;
      --column-heroRight: 1/17;
      --column-productLeft: 1/17;
      --column-productRight: 1/17;
      font-size: 14px;
    }
  }
`

export default GlobalStyle
