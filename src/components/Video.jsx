import React from 'react'
import styled, { css } from 'styled-components'

const ifBackground = css`
  object-position: center;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  align-items: center;
`

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-position: top;
  ${(p) => p.background && ifBackground}
`

export default function Video({
  src,
  type = 'video/mp4',
  autoPlay = true,
  muted = true,
  background,
  ...props
}) {
  return (
    <StyledVideo
      autoPlay={autoPlay}
      loop
      playsInline
      muted={muted}
      background={background}
      {...props}
    >
      <source src={src} type={type} />
    </StyledVideo>
  )
}
