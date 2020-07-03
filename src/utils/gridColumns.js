import { css } from 'styled-components'
import { variant } from 'styled-system'

// 2/8 10/16 text cuberto

export default css`
  ${variant({
    prop: 'column',
    variants: {
      full: {
        gridColumn: '1/17',
      },
      left: { gridColumn: '1/8' },
      bigLeft: { gridColumn: '1/9' },
      right: { gridColumn: '10/17' },
      bigRight: { gridColumn: '9/17' },
      center: { gridColumn: '2/16' },
      padLeft: { gridColumn: '2/8' },
      padRight: { gridColumn: '10/16' },
    },
  })}
`
