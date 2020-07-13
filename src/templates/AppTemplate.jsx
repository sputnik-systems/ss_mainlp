import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  --nav-height: 64px;
  --footer-height: 300px;

  position: relative;
  padding-bottom: var(--footer-height);
  padding-top: var(--spacing-m);
`

export default function AppTemplate({ children, ...props }) {
  return <App {...props}>{children}</App>
}
