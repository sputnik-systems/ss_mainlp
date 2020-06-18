import React from 'react'
import styled, { css } from 'styled-components'
import Container from 'components/Container'
import { ReactComponent as GradientLight } from 'assets/gradientLight.svg'
import { space, layout } from 'styled-system'
import Flex from 'components/Flex'

const Body = styled.nav`
  display: flex;
  position: relative;
  z-index: 2;
  height: 48px;
  border-style: solid;
  border-color: var(--color-subtle-background);
  border-width: 0;

  align-items: center;
  grid-column: 1/9;
  z-index: 999;
  ${(p) =>
    p.border &&
    css`
      border-bottom-width: 0.5px;
    `};

  ${space};
  ${layout};
`

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Nav({
  left,
  right,
  shadow = false,
  border = false,
  ...props
}) {
  return (
    <Body border={border} {...props}>
      <StyledContainer>
        {left}
        <Flex alignItems="center">{right}</Flex>
      </StyledContainer>
      {shadow && (
        <GradientLight style={{ position: 'absolute', top: '100%' }} />
      )}
    </Body>
  )
}
