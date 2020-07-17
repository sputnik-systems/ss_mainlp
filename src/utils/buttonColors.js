import { css } from 'styled-components'
import { variant } from 'styled-system'

const subtle = css`
  --bug: fix;

  --button-primary: var(--color-subtle-background);
  --button-secondary: var(--color-text);
  --button-hover: var(--color-subtle-background-darker);
`

const background = css`
  --bug: fix;

  --button-primary: var(--color-background);
  --button-secondary: var(--color-text);
  --button-hover: var(--color-subtle-background);
`

const primary = css`
  --bug: fix;

  --button-primary: var(--color-primary);
  --button-secondary: var(--color-primary-contrast);
  --button-hover: var(--color-primary-darker);
`

export default css`
  ${variant({
    prop: 'color',
    variants: {
      subtle,
      background,
      primary,
    },
  })}
`
