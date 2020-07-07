import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  font-family: apple color emoji, segoe ui emoji, noto color emoji,
    android emoji, emojisymbols, emojione mozilla, twemoji mozilla,
    segoe ui symbol, sans-serif;
  font-size: ${(p) => p.fontSize || 'var(--font-size)'};
`

export default function Emoji({ emote, fontSize, ...props }) {
  return (
    <Span fontSize={fontSize} role="img" aria-label={emote} {...props}>
      {emote}
    </Span>
  )
}
