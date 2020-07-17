import { css } from 'styled-components'
import { variant } from 'styled-system'
import { h1, h2, h3, h4, h5 } from 'components/Text'

export default css`
  ${variant({
    prop: 'size',
    variants: {
      h1,
      h2,
      h3,
      h4,
      h5,
    },
  })}
`
