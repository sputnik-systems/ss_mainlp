import React from 'react'
import styled from 'styled-components'
import Image from './Image'

import success from 'assets/mascotte/success.png'
import notFound from 'assets/mascotte/404.png'
import error from 'assets/mascotte/error.png'
import draft from 'assets/mascotte/draft.svg'

const emotes = {
  default: success,
  404: notFound,
  error,
  draft,
}

const StyledImage = styled(Image)`
  max-height: 400px;
  object-fit: contain;
`

export default function Mascotte({ emote = 'default', ...props }) {
  return <StyledImage src={emotes[emote]} {...props} />
}
