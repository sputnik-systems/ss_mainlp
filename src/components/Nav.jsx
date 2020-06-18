import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Container from 'components/Container'

const Body = styled(Container)`
  position: relative;
  z-index: 2;
  height: 48px;
  border-style: solid;
  border-color: var(--color-subtle-background);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0.5px;
  align-items: center;

  grid-column: 1/9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`

export default function Nav({ left, right, ...props }) {
  return (
    <Body as="nav" {...props}>
      {left}
      {right}
    </Body>
  )
}
