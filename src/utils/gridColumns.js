import { css } from 'styled-components'
import { variant } from 'styled-system'

// 2/8 10/16 text cuberto

const heroLeft = css`
  --bug: fix;
  grid-column: 2/11;

  /* @media screen and (max-width: var(--bp-mobile)) {
    grid-column: 2/17;
  } */
`

export default css`
  ${variant({
    prop: 'column',
    variants: {
      full: css`
        --bug: fix;
        grid-column: var(--column-full);
      `,
      left: css`
        --bug: fix;
        grid-column: var(--column-left);
      `,
      bigLeft: css`
        --bug: fix;
        grid-column: var(--column-bigLeft);
      `,
      right: css`
        --bug: fix;
        grid-column: var(--column-right);
      `,
      bigRight: css`
        --bug: fix;
        grid-column: var(--column-bigRight);
      `,
      center: css`
        --bug: fix;
        grid-column: var(--column-center);
      `,
      padLeft: css`
        --bug: fix;
        grid-column: var(--column-padLeft);
      `,
      padRight: css`
        --bug: fix;
        grid-column: var(--column-padRight);
      `,
      heroLeft: css`
        --bug: fix;
        grid-column: var(--column-heroLeft);
      `,
      heroRight: css`
        --bug: fix;
        grid-column: var(--column-heroRight);
      `,
      productLeft: css`
        --bug: fix;
        grid-column: var(--column-productLeft);
      `,
      productRight: css`
        --bug: fix;
        grid-column: var(--column-productRight);
      `,
    },
  })}
`
