import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  --footer-height: 100vh;

  position: relative;
  padding-bottom: var(--footer-height);
  padding-top: var(--spacing-m);
`

export default function AppTemplate({ children, ...props }) {
  return <App {...props}>{children}</App>
}
