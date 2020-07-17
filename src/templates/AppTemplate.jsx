import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  --nav-height: 64px;
  --footer-height: 100vh;

  position: relative;
  /* padding-bottom: var(--footer-height); */
`

export default function AppTemplate({ children, ...props }) {
  return <App {...props}>{children}</App>
}
