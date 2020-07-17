import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { space, color, layout, variant, typography } from 'styled-system'
import Button from 'components/Button'

// const Component = styled.a`
//   color: var(--color-text-secondary);
//   text-decoration: none;
//   text-align: center;
//   cursor: pointer;
//   user-select: none;

//   &:hover {
//     color: var(--color-text);
//   }

//   ${space};
//   ${color};
//   ${layout};
//   ${typography};
//   ${variant({
//     variants: {
//       cta,
//       nav,
//       footer,
//       inline,
//     },
//   })}

// `

// export default ({ internal = false, ...props }) => (
//   <Component as={internal ? Link : 'a'} {...props} />
// )

// export default Text

export default ({ internal = false, ...props }) => (
  <Button as={internal ? Link : 'a'} {...props} />
)
