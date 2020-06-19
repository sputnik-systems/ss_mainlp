import React from 'react'
import styled from 'styled-components'
import Nav from 'components/Nav'
import { ReactComponent as Logo } from 'assets/logoInline.svg'
import Image from 'components/Image'
import Link from 'components/Link'
import MotionLogo from './MotionLogo'

const Body = styled(Nav)`
  background: var(--color-blurred-background);
  backdrop-filter: blur(20px) saturate(180%);
  position: sticky;
  top: 0;
  grid-column: 1/9;
`

export default function HomeNav({ ...props }) {
  return (
    <Body
      height="64px"
      left={
        <>
          <MotionLogo
            style={{
              marginLeft: 'var(--spacing-xs)',
              height: '100%',
            }}
          />
        </>
      }
      right={
        <>
          <Link variant="nav" p="3">
            Для партнеров и бизнеса
          </Link>
          <Link variant="nav" p="3">
            Безопасность и комфорт
          </Link>
        </>
      }
    />
  )
}
