import { css } from 'styled-components'

export default css`
  /* main */
  --font-size: 18px;
  --font-weight-bold: 700;
  --font-weight-medium: 600;
  --font-weight-demi: 500;
  --font-weight-regular: 400;
  --font-weight-light: 200;
  --font-family: 'Futura PT', Futura, -apple-system, sans-serif;
  --font-family-mono: 'League Mono', 'Fira Mono', monospace;

  /* colors */
  --color-text: #0d0c22;
  --color-text-secondary: #6e6d7a;
  --color-background: hsl(0deg, 0%, 100%);
  --color-blurred-background: hsla(0deg, 0%, 100%, 0.85);
  /* --color-primary: hsl(245deg, 100%, 60%);
    --color-secondary: hsl(333deg, 100%, 45%); */
  --color-tertiary: hsl(255deg, 85%, 30%);
  --color-decorative: hsl(200deg, 75%, 65%);
  --color-muted: hsl(210deg, 55%, 92%);
  --color-muted-background: hsla(210deg, 55%, 92%, 0.85);
  --color-info: hsl(245deg, 100%, 60%);
  --color-success: hsl(160deg, 100%, 40%);
  --color-success-background: hsla(160deg, 100%, 40%, 0.1);
  --color-error: hsl(340deg, 95%, 50%);
  --color-error-background: hsla(340deg, 95%, 43%, 0.1);
  --color-alert: hsl(37deg, 100%, 50%);
  --color-alert-background: hsla(52deg, 100%, 50%, 0.25);
  --color-venn-0: hsl(190deg, 100%, 65%);
  --color-venn-1: hsl(340deg, 100%, 65%);
  --color-gray-100: hsl(225deg, 25%, 95%);
  --color-gray-200: hsl(225deg, 16%, 90%);
  --color-gray-300: hsl(225deg, 8%, 80%);
  --color-gray-400: hsl(225deg, 8%, 70%);
  --color-gray-500: hsl(225deg, 7%, 60%);
  --color-gray-600: hsl(225deg, 15%, 50%);
  --color-gray-700: hsl(225deg, 12%, 40%);
  --color-gray-900: hsl(225deg, 25%, 20%);
  --color-gray-1000: hsl(225deg, 15%, 15%);
  --color-subtle-background: #f2f2f3;
  /* --color-subtle-background: #fafafa; */
  --color-subtle-background-darker: #e2e1e8;
  --color-subtle-floating: hsl(0deg, 0%, 100%);
  --color-homepage-light: hsl(204deg, 67%, 85%);
  --color-homepage-dark: hsl(202deg, 71%, 90%);
  --color-homepage-bg: hsl(204deg, 67%, 85%);
  --syntax-bg: hsl(225deg, 25%, 97%);
  --syntax-highlight: hsl(225deg, 25%, 93%);
  --syntax-txt: #2a2a2a;
  --syntax-comment: #467790;
  --syntax-prop: #da0079;
  --syntax-bool: #bf00b8;
  --syntax-val: #78909c;
  --syntax-str: #651fff;
  --syntax-name: #aa00ff;
  --syntax-del: rgb(255, 85, 85);
  --syntax-regex: #3600d6;
  --syntax-fn: #3d5afe;

  --color-primary-lighter: #67578a;
  --color-primary: #2f195f;
  --color-primary-contrast: #ffffff;
  --color-primary-darker: #1e103d;
  --color-primary-gradient: linear-gradient(180deg, #584288 0%, #2f195f 100%);

  --color-secondary: #b1f8f2;
  --color-secondary-contrast: #2f195f;
  --color-secondary-darker: #a1e2dc;
  --color-secondary-lighter: #e2fffd;

  --color-success: #136f63;

  --color-sputnik-pink: #edd7df;
  --color-sputnik-pink-dark: #c5819a;

  --prefers-dark: false;
  --scrollbar-width: 12px;

  --spacing-xxs: 0.125rem;
  --spacing-xs: 0.325rem;
  --spacing-s: 0.625rem;
  --spacing-m: 1rem;
  --spacing-l: 1.325rem;
  --spacing-xl: 1.625rem;
  --spacing-xxl: 4rem;

  --br-s: 8px;
  --br-m: 15px;
  --br-l: 30px;

  --size-desktop: 1024px;
  --size-tablet: 768px;
  --size-mobile: 420px;

  --shadow-main: 0 0 15px rgba(0, 0, 0, 0.07);
  /* 
   main: '0 3px 15px 2px rgba(0, 0, 0, 0.05)',
  strong: 'rgba(0, 0, 0, 0.2) 0px 35px 50px -30px', */
`
