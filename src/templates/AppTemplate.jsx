import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  --footer-height: 300px;

  position: relative;
  padding-bottom: var(--footer-height);
`

export default function AppTemplate({ children, ...props }) {
  return <App {...props}>{children}</App>
}
