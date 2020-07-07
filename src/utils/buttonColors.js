import { css } from 'styled-components'
import { variant } from 'styled-system'

const subtle = css`
  --bug: fix;

  --button-primary: var(--color-subtle-background);
  --button-secondary: var(--color-text);
  --button-hover: var(--color-subtle-background-darker);
`

export default css`
  ${variant({
    prop: 'color',
    variants: {
      subtle,
    },
  })}
`
